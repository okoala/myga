import { useStorageLocal } from '@lib/use-storage';
import { CloseOutlined } from '@ant-design/icons';
import { sidebarTabKey } from '../constants';
import { sidebarService } from '../services/sidebar-service';
import { useStyles } from './sidebar-nav.styles';

export function SidebarNav(props) {
  const { styles, cx } = useStyles();
  const [tabId, setTabId] = useStorageLocal(
    sidebarTabKey,
    props.navItems[0].id,
  );

  const navItems = props.navItems || [];
  const footerItems = props.footerItems || [];
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <span
            className={styles.close}
            onClick={() => sidebarService.closeSidepanel()}
          >
            <CloseOutlined />
          </span>
        </div>
        <div className={styles.nav}>
          <div className={styles.navItems}>
            {navItems.map(item => {
              const icon =
                typeof item.icon === 'string' ? (
                  <img src={item.icon} />
                ) : (
                  item.icon
                );
              return (
                <div
                  className={cx(styles.navItem, {
                    [styles.navItemActive]: tabId === item.id,
                  })}
                >
                  <div className={styles.navItemIcon}>{icon}</div>
                  <span className={styles.navItemTitle}>{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.navFooter}>
          <div className={styles.navFooterItems}>
            {footerItems.map(item => {
              const { RenderComponent } = item;
              return (
                <div className={styles.navFooterItem}>
                  <RenderComponent />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
