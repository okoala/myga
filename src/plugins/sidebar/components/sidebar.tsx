import { SidebarNav } from './sidebar-nav';
import styles from './sidebar.less';
import type {
  SidepanelFooterItemRegistyOption,
  SidepanelItemRegistyOption,
} from '@core/interfaces/i-plugin';
import { SidebarContent } from './sidebar-content';

type SidebarProps = {
  navItems: SidepanelItemRegistyOption[];
  footerItems: SidepanelFooterItemRegistyOption[];
};

export function Sidebar(props: SidebarProps) {
  return (
    <>
      <style>{styles}</style>
      <div className="okrrr-sidebar">
        <SidebarContent {...props} />
        <SidebarNav {...props} />
      </div>
    </>
  );
}
