import styles from './sidebar-nav.less';

export function SidebarNav(props) {
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
              return (
                <div className="okrrr-sidebar-nav-item">
                  <div className="okrrr-sidebar-nav-item-icon">{item.icon}</div>
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
