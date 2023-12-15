import { Popover, Tooltip } from 'antd';
import { useTheme } from '../hooks/use-theme';
import { NavDay, NavNight, NavSystem } from '@lib/uilib/icon';
import { ButtonIcon } from '@lib/uilib/button';
import { MenuSelect } from '@lib/uilib/menu-select';
import { useStyles } from './theme.styles';

export const themeItems = [
  {
    label: '默认主题',
    key: 'light',
    icon: <NavDay />,
  },
  {
    label: '暗黑主题',
    key: 'dark',
    icon: <NavNight />,
  },
  {
    label: '跟随系统',
    key: 'auto',
    icon: <NavSystem />,
  },
];

export function Theme() {
  const { styles } = useStyles();
  const { theme, selectTheme } = useTheme();
  if (!theme) return null;

  return (
    <Tooltip title="切换主题">
      <Popover
        placement="topLeft"
        trigger="click"
        content={
          <MenuSelect
            defaultValue={theme}
            items={themeItems}
            onChange={key => {
              selectTheme(key);
            }}
          />
        }
      >
        <span className={styles.themeBtn}>
          <ButtonIcon>
            {themeItems.find(item => item.key === theme)?.icon}
          </ButtonIcon>
        </span>
      </Popover>
    </Tooltip>
  );
}
