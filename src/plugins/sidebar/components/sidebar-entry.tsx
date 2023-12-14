import { FloatButton } from '@lib/uilib/float-button';
import logo from '@assets/logo/okrrr-48.png';
import styles from './sidebar-entry.less';
import { sidebarService } from '../services/sidebar-service';

export function SidebarEntry() {
  const handleToggle = () => {
    sidebarService.openSidepanel();
  };

  return (
    <>
      <style>{styles}</style>
      <FloatButton
        onClick={handleToggle}
        icon={<img src={logo} className="okrrr-sidebar-entry" />}
      />
    </>
  );
}
