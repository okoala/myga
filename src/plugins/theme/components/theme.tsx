import { Popover, Tooltip } from 'antd';
import { useThemeSelect } from '../hooks/use-theme-select';
import { ThemeSelectEnum } from '../interfaces/i-theme';
import { NavDay, NavNight, NavSystem } from '@lib/uilib/icon';
import { ButtonIcon } from '@lib/uilib/button';
import { MenuSelect } from '@lib/uilib/menu-select';
import { useStyles } from './theme.styles';

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
          <MenuSelect
            defaultValue={themeSelected}
            items={themeSelectItems}
            onChange={key => {
              selectTheme(key);
            }}
          />
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
