import { useCallback, useEffect, useRef } from 'react';
import { Lunar, HolidayUtil } from 'lunar-typescript';
import { waitForElement } from '@lib/dom';

export function useLunar() {
  const rootRef = useRef<MutationObserver>();

  const renderLunar = useCallback(() => {
    const dayCells = document.querySelectorAll(
      '.lakex-view-calendar-content-box-row-cell[data-unix]',
    );
    for (const dayCell of dayCells) {
      const unix = Number((dayCell as HTMLElement).dataset?.unix + '000');
      const date = new Date(unix);
      const d = Lunar.fromDate(date);
      const lunar = d.getDayInChinese();
      const solarTerm = d.getJieQi();
      const h = HolidayUtil.getHoliday(
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate(),
      );
      const displayHoliday = h?.getName();
      const isHolidayTarget = h?.getTarget() === h?.getDay();
      const lunarText =
        (isHolidayTarget && displayHoliday) || solarTerm || lunar;
      if (!lunarText) continue;
      if (dayCell.querySelector('.okrrr-yuque-table-lunar')) continue;
      dayCell.classList.add('okrrr-yuque-table');

      const lunarEl = document.createElement('span');
      lunarEl.className = 'okrrr-yuque-table-lunar';
      lunarEl.textContent = lunarText;
      dayCell.appendChild(lunarEl);

      if (displayHoliday) {
        if (h.isWork()) {
          dayCell.classList.add('okrrr-yuque-table-holiday-weeky-work');
          const span = document.createElement('span');
          span.className = 'okrrr-yuque-table-holiday-weeky-work-text';
          span.textContent = '班';
          lunarEl.appendChild(span);
        } else {
          dayCell.classList.add('okrrr-yuque-table-holiday');
          const span = document.createElement('span');
          span.className = 'okrrr-yuque-table-holiday-text';
          span.textContent = '休';
          lunarEl.appendChild(span);
        }
      }
    }
  }, []);

  useEffect(() => {
    waitForElement('.lark .main-wrapper').then(root => {
      if (root) {
        rootRef.current = new MutationObserver((mutationList, observer) => {
          for (const mutation of mutationList) {
            // 说明是 lakex-viewer-calendar 节点添加了新的节点
            if (
              mutation.target &&
              ((mutation.target as HTMLElement)?.closest(
                '.lakex-viewer-calendar',
              ) ||
                (
                  (mutation.target as HTMLElement)?.firstChild as HTMLElement
                )?.className?.includes?.('lakex-viewer-calendar')) &&
              mutation.addedNodes.length > 0
            ) {
              renderLunar();
              return;
            }
          }
        });

        rootRef.current.observe(
          document.querySelector('.lark .main-wrapper')!,
          {
            subtree: true,
            childList: true,
          },
        );
      }
    });
  }, []);
}
