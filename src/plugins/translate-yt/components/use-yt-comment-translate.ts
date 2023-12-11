import { useEffect, useRef } from 'react';
import { insertAfter, waitForElement } from '@lib/dom';
import { youtubeCommentTranslateService } from '../services/translate-yt-comment-service';

export function useYoutubeCommentTranslate() {
  const observerRef = useRef<MutationObserver>();

  const createTranslateEntry = ($commentItemRoot: HTMLElement) => {
    const timeWrap = $commentItemRoot.querySelector('.published-time-text');
    if ($commentItemRoot.querySelector('.okrrr-translate-text') || !timeWrap)
      return;
    const span = document.createElement('span');
    span.className =
      'okrrr-translate-text published-time-text style-scope ytd-comment-renderer';
    span.setAttribute('style', 'cursor: pointer; margin-left: 5px;');
    span.textContent = '翻译';
    span.onclick = () => {
      const $content = $commentItemRoot.querySelector('#content-text');
      const content = $content?.textContent;
      const commentHerf = $commentItemRoot
        .querySelector('.published-time-text .yt-simple-endpoint')
        ?.getAttribute('href');

      if (commentHerf && content) {
        const commentId = new URLSearchParams(commentHerf).get('lc');
        if (commentId) {
          youtubeCommentTranslateService
            .translate({
              id: commentId!,
              content,
            })
            .then(text => {
              if (text) {
                const el = document.createElement('div');
                el.textContent = text;
                el.className = 'style-scope ytd-comment-renderer';
                el.setAttribute(
                  'style',
                  'color: var(--yt-spec-text-primary);font-size: 1.4rem;',
                );
                insertAfter(
                  el,
                  $commentItemRoot.querySelector('#comment-content'),
                );
              }
            });
        }
      }
    };
    insertAfter(span, timeWrap);
  };

  useEffect(() => {
    waitForElement('#page-manager #comments').then(commentRoot => {
      if (commentRoot) {
        observerRef.current = new MutationObserver((mutationList, observer) => {
          for (const mutation of mutationList) {
            // 说明是 ytd-item-section-renderer 节点添加了新的节点
            if (
              mutation.target &&
              (mutation.target as HTMLElement)?.className.includes(
                'ytd-item-section-renderer',
              ) &&
              mutation.addedNodes.length > 0
            ) {
              createTranslateEntry(mutation.target as HTMLElement);
            }
          }
        });

        observerRef.current.observe(document.querySelector('#comments')!, {
          subtree: true,
          childList: true,
        });
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return {};
}
