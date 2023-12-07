/// <reference types="vite-plugin-svgr/client" />

import { Menu } from 'antd';
import DocIcon from '@assets/icons/doc.svg?react';
import SheetIcon from '@assets/icons/sheet.svg?react';
import BoardIcon from '@assets/icons/board.svg?react';
import TableIcon from '@assets/icons/table.svg?react';

import styles from './quick-menus.less';

export function QuickMenus(props) {
  const menus = [
    {
      name: '文档',
      type: 'doc',
      icon: DocIcon,
    },
    {
      name: '表格',
      type: 'sheet',
      icon: SheetIcon,
    },
    {
      name: '画板',
      type: 'board',
      icon: BoardIcon,
    },
    {
      name: '数据表',
      type: 'table',
      icon: TableIcon,
    },
  ];

  return (
    <>
      <style>{styles}</style>
      <Menu className="myga-quick-menus" selectable={false}>
        {menus.map((item, index) => {
          if (item.name === 'divide') {
            return <Menu.Divider key={index} />;
          }

          const Icon = item.icon;
          return (
            <Menu.Item key={item.type}>
              {Icon && <Icon className="myga-quick-menus-icon" />}
              新建{item.name}
            </Menu.Item>
          );
        })}
      </Menu>
    </>
  );
}
