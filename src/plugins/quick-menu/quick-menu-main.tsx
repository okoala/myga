import React from 'react';
import { useQuickMenu } from './use-quick-menu';
import { QuickMenus } from './quick-menus';

import styles from './quick-menu-main.less';

export const QuickMenuMain: React.FC<any> = () => {
  const { showMenus, position } = useQuickMenu();
  return (
    <>
      <style>{styles}</style>
      {showMenus && (
        <div
          style={{
            position: 'absolute',
            top: position.top,
            left: position.left,
          }}
        >
          <QuickMenus />
        </div>
      )}
    </>
  );
};
