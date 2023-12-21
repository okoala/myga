import { useEffect, useState } from 'react';

type MenuPosition = {
  top: number;
  left: number;
};

export function useQuickMenu() {
  const [showMenus, setShowMenus] = useState(false);
  // @ts-ignore
  const [position, setPosition] = useState<MenuPosition>({});
  const [recentId, setRecentId] = useState<string>();

  useEffect(() => {
    const onContxtMenuHandle = (e: MouseEvent) => {
      // 当按下 ctrl 或 meta 键时，触发默认事件
      if (!(e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        e.stopPropagation();
      }
      setShowMenus(true);
      setPosition({
        top: e.pageY,
        left: e.pageX,
      });

      const node = (e.target as HTMLElement)?.closest('tr.ant-table-row');
      if (node) {
        const docId = node.getAttribute('data-row-key');
        if (docId) {
          setRecentId(docId);
        } else {
          setRecentId(undefined);
        }
      } else {
        setRecentId(undefined);
      }
    };

    const onClickHandle = e => {
      if (e.button === 0) {
        setShowMenus(false);
      }
    };

    const onEscHandle = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowMenus(false);
      }
    };

    document.addEventListener('click', onClickHandle);
    document.addEventListener('keydown', onEscHandle);
    document.addEventListener('contextmenu', onContxtMenuHandle);
    return () => {
      document.removeEventListener('click', onClickHandle);
      document.removeEventListener('keydown', onEscHandle);
      document.removeEventListener('contextmenu', onContxtMenuHandle);
    };
  }, []);

  return { recentId, showMenus, position };
}
