import { CheckOutlined } from '@ant-design/icons';
import { getRootContaner } from '@lib/dom';
import { Button, Menu, Popover, Tooltip } from 'antd';
import { useThemeSelect } from '../hooks/use-theme-select';
import { ThemeSelectEnum } from '../interfaces/i-theme';
import { NavDay, NavNight, NavSystem } from '@lib/uilib/icon';
import { useStyles } from './theme.styles';
import { ButtonIcon } from '@lib/uilib/button';

export const themeSelectItems = [
  {
    label: '默认主题',
    key: ThemeSelectEnum.default,
    icon: <NavDay />,
  },
  {
    label: '暗黑主题',
    key: ThemeSelectEnum.dark,
    icon: <NavNight />,
  },
  {
    label: '跟随系统',
    key: ThemeSelectEnum.system,
    icon: <NavSystem />,
  },
];

export function Theme() {
  const { styles } = useStyles();
  const { themeSelected, selectTheme } = useThemeSelect();
  if (!themeSelected) return null;

  return (
    <Tooltip title="切换主题">
      <Popover
        placement="topLeft"
        trigger="click"
        content={
          <Menu
            selectedKeys={[themeSelected]}
            onSelect={({ key }) => selectTheme(key)}
          >
            {themeSelectItems.map(item => {
              return (
                <Menu.Item key={item.key} style={{ marginBottom: 2 }}>
                  <span className={styles.themeMenuItem}>
                    <span className={styles.themeMenuIcon}>{item.icon}</span>
                    <span className={styles.themeMenuItemName}>
                      {item.label}
                    </span>
                    <span className={styles.themeMenuItemChecked}>
                      {themeSelected === item.key && <CheckOutlined />}
                    </span>
                  </span>
                </Menu.Item>
              );
            })}
          </Menu>
        }
      >
        <span className={styles.themeBtn}>
          <ButtonIcon>
            {themeSelectItems.find(item => item.key === themeSelected)?.icon}
          </ButtonIcon>
        </span>
      </Popover>
    </Tooltip>
  );
}
