import { useLayoutEffect, useMemo } from 'react';
import './setting-page.less';
import { Anchor } from 'antd';
import { IPluginProps } from '@core';

export const SettingPage = (props: IPluginProps) => {
  useLayoutEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const a = document.createElement('a');
      a.href = hash;
      a.click();
    }
  }, []);

  const settingMenus = useMemo(() => {
    const schema = props.configuration.getSchema();
    const properties = schema.properties;
    return Object.values(properties).map(property => {
      return {
        title: property.title,
        key: property.id,
        href: `#${property.id}`,
      };
    });
  }, [props.configuration]);

  const settingForms = useMemo(() => {
    const schema = props.configuration.getSchema();
    const properties = schema.properties;
    return Object.values(properties).map(property => {
      return [
        <div id={property.id} className="myga-setting-page-item">
          <div className="myga-setting-page-title">{property.title}</div>
        </div>,
      ];
    });
  }, [props.configuration]);

  return (
    <div className="myga-setting-page-wrapper">
      <div className="myga-setting-page-left">
        <div className="myga-setting-main-title">okrrr 插件设置</div>
        <Anchor items={settingMenus} />
      </div>
      <div className="myga-setting-page-right">{settingForms}</div>
    </div>
  );
};
