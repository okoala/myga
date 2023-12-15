import { FloatButton } from '@lib/uilib/float-button';
import logo from '@assets/logo/okrrr-48.png';
import { sidebarService } from '../services/sidebar-service';
import { useStyles } from './sidebar-entry.styles';

export function SidebarEntry() {
  const { styles } = useStyles();
  const handleToggle = () => {
    sidebarService.openSidepanel();
  };

  return (
    <>
      <FloatButton
        onClick={handleToggle}
        icon={<img src={logo} className={styles.entry} />}
      />
    </>
  );
}
