import { useEffect, useRef } from 'react';
import { insertAfter, waitForElement } from '@lib/dom';
import { youtubeCommentTranslateService } from '../services/translate-yt-comment-service';

export function useYoutubeCommentTranslate() {
  const observerRef = useRef<MutationObserver>();
  const shortRef = useRef<MutationObserver>();

  const insertTranslateResult = (
    $commentItemRoot: HTMLElement,
    text: string,
  ) => {
    if (text) {
      if ($commentItemRoot.querySelector('.okrrr-translate-result')) return;
      const el = document.createElement('div');
      el.textContent = text;
      el.className = 'okrrr-translate-result style-scope ytd-comment-renderer';
      el.setAttribute(
        'style',
        'color: var(--yt-spec-text-primary);font-size: 1.4rem;font-weight: 400;',
      );
      insertAfter(el, $commentItemRoot.querySelector('#comment-content'));
    }
  };

  const getCommentId = ($commentItemRoot: HTMLElement) => {
    const commentHerf = $commentItemRoot
      .querySelector('.published-time-text .yt-simple-endpoint')
      ?.getAttribute('href');
    if (!commentHerf) return null;
    const commentId = new URLSearchParams(commentHerf).get('lc');
    return commentId;
  };

  const createTranslateEntry = ($commentItemRoot: HTMLElement) => {
    const timeWrap = $commentItemRoot.querySelector('.published-time-text');
    if (
      $commentItemRoot.querySelector('.okrrr-translate-text') ||
      $commentItemRoot.querySelector('.okrrr-translate-result') ||
      !timeWrap
    ) {
      return;
    }
    const span = document.createElement('span');
    span.className =
      'okrrr-translate-text published-time-text style-scope ytd-comment-renderer';
    span.setAttribute('style', 'cursor: pointer; margin-left: 5px;');
    span.textContent = '翻译';
    span.onclick = () => {
      const $content = $commentItemRoot.querySelector('#content-text');
      const content = $content?.textContent;
      const commentId = getCommentId($commentItemRoot);
      if (content && commentId) {
        youtubeCommentTranslateService
          .translate({
            id: commentId!,
            content,
          })
          .then(text => {
            insertTranslateResult($commentItemRoot, text!);
          });
      }
    };
    insertAfter(span, timeWrap);
  };

  const createTranslateResult = ($commentItemRoot: HTMLElement) => {
    const commentId = getCommentId($commentItemRoot);
    if (!commentId) return;
    const cacheComment =
      youtubeCommentTranslateService.getCacheComment(commentId);
    if (!cacheComment) return;
    insertTranslateResult($commentItemRoot, cacheComment.content!);
  };

  useEffect(() => {
    waitForElement('#page-manager #comments').then(commentRoot => {
      if (commentRoot) {
        observerRef.current = new MutationObserver((mutationList, observer) => {
          for (const mutation of mutationList) {
            // 说明是 ytd-item-section-renderer 节点添加了新的节点
            if (
              mutation.target &&
              ((mutation.target as HTMLElement)?.className.includes(
                'ytd-item-section-renderer',
              ) ||
                (mutation.target as HTMLElement).localName ===
                  'ytd-comment-renderer') &&
              mutation.addedNodes.length > 0
            ) {
              createTranslateEntry(mutation.target as HTMLElement);
              createTranslateResult(mutation.target as HTMLElement);
            }
          }
        });

        observerRef.current.observe(document.querySelector('#comments')!, {
          subtree: true,
          childList: true,
        });
      }
    });

    waitForElement('#content.ytd-engagement-panel-section-list-renderer').then(
      commentRoot => {
        if (commentRoot) {
          shortRef.current = new MutationObserver((mutationList, observer) => {
            for (const mutation of mutationList) {
              // 说明是 ytd-item-section-renderer 节点添加了新的节点
              if (
                mutation.target &&
                ((mutation.target as HTMLElement).localName ===
                  'ytd-comment-thread-renderer' ||
                  (mutation.target as HTMLElement).localName ===
                    'ytd-comment-renderer') &&
                mutation.addedNodes.length > 0
              ) {
                createTranslateEntry(mutation.target as HTMLElement);
                createTranslateResult(mutation.target as HTMLElement);
              }
            }
          });

          shortRef.current.observe(
            document.querySelector(
              '#content.ytd-engagement-panel-section-list-renderer #contents.ytd-item-section-renderer',
            )!,
            {
              subtree: true,
              childList: true,
            },
          );
        }
      },
    );

    return () => {
      observerRef.current?.disconnect();
      shortRef.current?.disconnect();
    };
  }, []);

  return {};
}
