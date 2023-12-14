import { createRoot } from 'react-dom/client';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';
import { AppMain } from './main';

refreshOnUpdate('core');
refreshOnUpdate('plugins');
refreshOnUpdate('pages/sidepanel');

function init() {
  const appContainer = document.querySelector('#app-sidepanel-container');
  if (!appContainer) {
    throw new Error('Can not find #app-sidepanel-container');
  }
  const root = createRoot(appContainer);
  root.render(<AppMain />);
}

init();
