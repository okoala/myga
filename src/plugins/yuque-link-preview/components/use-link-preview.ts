import { useEffect, useRef, useState } from 'react';
import type { ILink } from '../interfaces/i-link-preview';
import { waitForElement } from '@lib/dom';

export function useLinkPreview() {
  const observerRef = useRef<MutationObserver>();
  const [showLink, setShowLink] = useState();
  const [position, setPosition] = useState<{ x: number; y: number }>();
  const [link, setLink] = useState<ILink>();

  useEffect(() => {
    waitForElement('.ne-viewer-body').then(viewerRoot => {
      if (viewerRoot) {
        observerRef.current = new MutationObserver((mutationList, observer) => {
          for (const mutation of mutationList) {
            // 说明是 ytd-item-section-renderer 节点添加了新的节点
            if (mutation.target && mutation.addedNodes.length > 0) {
            }
          }
        });

        observerRef.current.observe(
          document.querySelector('.ne-viewer-body')!,
          {
            subtree: true,
            childList: true,
          },
        );

        const links = document.querySelectorAll('.ne-link');
        for (const link of links) {
          link.addEventListener('mouseenter', e => {
            if (e.metaKey) {
            }
          });
        }
      }
    });
  }, []);

  return {
    showLink,
    link,
  };
}
