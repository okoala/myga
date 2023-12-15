import { useStorageLocal } from '@lib/use-storage';
import { sidebarTabKey } from '../constants';
import { SidepanelItemRegistyOption } from '@core';
import { useStyles } from './sidebar-content.styles';

type SidebarContentProps = {
  navItems: SidepanelItemRegistyOption[];
};

export function SidebarContent(props: SidebarContentProps) {
  const { styles } = useStyles();
  const [tabId, setTabId] = useStorageLocal(
    sidebarTabKey,
    props.navItems[0].id,
  );

  const RenderComponent = props.navItems.find(
    item => item.id === tabId,
  )?.RenderComponent;
  return (
    <>
      <div className={styles.content}>
        <div className={styles.render}>
          {RenderComponent && <RenderComponent />}
        </div>
      </div>
    </>
  );
}
