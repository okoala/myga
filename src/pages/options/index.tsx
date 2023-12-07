import React from 'react';
import { createRoot } from 'react-dom/client';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';
import { AppMain } from './main';

refreshOnUpdate('core');
refreshOnUpdate('pages/options');
refreshOnUpdate('modules/settings');

function init() {
  const appContainer = document.querySelector('#app-container');
  if (!appContainer) {
    throw new Error('Can not find #app-container');
  }
  const root = createRoot(appContainer);
  root.render(<AppMain />);
}

init();
