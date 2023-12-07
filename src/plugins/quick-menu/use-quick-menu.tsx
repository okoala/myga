import { useEffect, useState } from 'react';

type MenuPosition = {
  top: number;
  left: number;
};

export function useQuickMenu() {
  const [showMenus, setShowMenus] = useState(false);
  const [position, setPosition] = useState<MenuPosition>({});

  useEffect(() => {
    const onContxtMenuHandle = (e: MouseEvent) => {
      // 当按下 ctrl 或 meta 键时，触发默认事件
      if (!(e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        e.stopPropagation();
      }
      setShowMenus(true);
      setPosition({
        top: e.clientY,
        left: e.clientX,
      });
    };

    const onClickHandle = (e: MouseEvent) => {
      if (e.button === 0) {
        setShowMenus(false);
      }
    };
    document.addEventListener('click', onClickHandle);
    document.addEventListener('contextmenu', onContxtMenuHandle);
    return () => {
      document.removeEventListener('click', onClickHandle);
      document.removeEventListener('contextmenu', onContxtMenuHandle);
    };
  }, []);

  return { showMenus, position };
}
