import { useStorageLocal } from '@lib/use-storage';
import styles from './sidebar-nav.less';
import { sidebarTabKey } from '../constants';

export function SidebarNav(props) {
  const [tabId, setTabId] = useStorageLocal(
    sidebarTabKey,
    props.navItems[0].id,
  );

  const navItems = props.navItems || [];
  const footerItems = props.footerItems || [];
  return (
    <>
      <style>{styles}</style>
      <div className="okrrr-sidebar-container">
        <div className="okrrr-sidebar-header"></div>
        <div className="okrrr-sidebar-nav">
          <div className="okrrr-sidebar-nav-items">
            {navItems.map(item => {
              const icon =
                typeof item.icon === 'string' ? (
                  <img src={item.icon} />
                ) : (
                  item.icon
                );
              return (
                <div className="okrrr-sidebar-nav-item">
                  <div className="okrrr-sidebar-nav-item-icon">{icon}</div>
                  <span className="okrrr-sidebar-nav-item-title">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="okrrr-sidebar-footer">
          <div className="okrrr-sidebar-footer-items">
            {footerItems.map(item => {
              const { RenderComponent } = item;
              return <RenderComponent />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
