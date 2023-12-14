import { SidebarNav } from './sidebar-nav';
import styles from './sidebar.less';

export function Sidebar(props) {
  return (
    <>
      <style>{styles}</style>
      <div className="okrrr-sidebar">
        <SidebarNav {...props} />
      </div>
    </>
  );
}
