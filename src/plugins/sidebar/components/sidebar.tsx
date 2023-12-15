import { SidebarNav } from './sidebar-nav';
import type {
  SidepanelFooterItemRegistyOption,
  SidepanelItemRegistyOption,
} from '@core/interfaces/i-plugin';
import { SidebarContent } from './sidebar-content';
import { useStyles } from './sidebar.styles';

type SidebarProps = {
  navItems: SidepanelItemRegistyOption[];
  footerItems: SidepanelFooterItemRegistyOption[];
};

export function Sidebar(props: SidebarProps) {
  const { styles } = useStyles();
  return (
    <>
      <div className={styles.sidebar}>
        <SidebarContent {...props} />
        <SidebarNav {...props} />
      </div>
    </>
  );
}
