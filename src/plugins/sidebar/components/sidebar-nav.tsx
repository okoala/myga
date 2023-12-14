import { useStorageLocal } from '@lib/use-storage';
import { CloseOutlined } from '@ant-design/icons';
import styles from './sidebar-nav.less';
import classnames from 'classnames';
import { sidebarTabKey } from '../constants';
import { sidebarService } from '../services/sidebar-service';

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
      <div className="okrrr-sidebar-nav-container">
        <div className="okrrr-sidebar-nav-header">
          <span
            className="okrrr-sidebar-nav-header-close"
            onClick={() => sidebarService.closeSidepanel()}
          >
            <CloseOutlined />
          </span>
        </div>
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
                <div
                  className={classnames(`okrrr-sidebar-nav-item`, {
                    'okrrr-sidebar-nav-item-active': tabId === item.id,
                  })}
                >
                  <div className="okrrr-sidebar-nav-item-icon">{icon}</div>
                  <span className="okrrr-sidebar-nav-item-title">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="okrrr-sidebar-nav-footer">
          <div className="okrrr-sidebar-nav-footer-items">
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
