import { useStorageLocal } from '@lib/use-storage';
import { sidebarTabKey } from '../constants';
import styles from './sidebar-content.less';
import { SidepanelItemRegistyOption } from '@core';

type SidebarContentProps = {
  navItems: SidepanelItemRegistyOption[];
};

export function SidebarContent(props: SidebarContentProps) {
  const [tabId, setTabId] = useStorageLocal(
    sidebarTabKey,
    props.navItems[0].id,
  );

  const RenderComponent = props.navItems.find(
    item => item.id === tabId,
  )?.RenderComponent;
  return (
    <>
      <style>{styles}</style>
      <div className="okrrr-sidebar-content">
        <div className="okrrr-sidebar-content-render">
          {RenderComponent && <RenderComponent />}
        </div>
      </div>
    </>
  );
}
