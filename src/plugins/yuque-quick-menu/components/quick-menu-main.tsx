import React from 'react';
import { useQuickMenu } from './use-quick-menu';
import { QuickMenus } from './quick-menus';

export const QuickMenuMain: React.FC<any> = () => {
  const { showMenus, position } = useQuickMenu();
  return (
    <>
      {showMenus && (
        <div
          style={{
            position: 'absolute',
            top: position.top,
            left: position.left,
            zIndex: 1000,
          }}
        >
          <QuickMenus />
        </div>
      )}
    </>
  );
};
