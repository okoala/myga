import { useState } from 'react';
import { Menu } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { useStyles } from './menu-select.styles';

type SelectKey = string;

type SelectItem = {
  key: SelectKey;
  label: string;
  icon: React.ReactNode;
};

export type MenuSelectProps = {
  items: SelectItem[];
  defaultValue: SelectKey;
  onChange?: (key: SelectKey) => void;
};

export function MenuSelect(props: MenuSelectProps) {
  const { styles } = useStyles();
  const [selected, setSelected] = useState(props.defaultValue);
  const items = props.items;

  return (
    <Menu
      selectedKeys={[selected]}
      onSelect={({ key }) => {
        props.onChange?.(key);
        setSelected(key);
      }}
    >
      {items.map(item => {
        return (
          <Menu.Item key={item.key} style={{ marginBottom: 2 }}>
            <span className={styles.menuItem}>
              <span className={styles.menuIcon}>{item.icon}</span>
              <span className={styles.menuItemName}>{item.label}</span>
              <span className={styles.menuItemChecked}>
                {selected === item.key && <CheckOutlined />}
              </span>
            </span>
          </Menu.Item>
        );
      })}
    </Menu>
  );
}
