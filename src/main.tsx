import { createRoot } from 'react-dom/client';

const render = () => {
  const container = document.querySelector('#app');

  if (!container) {
    throw new Error(`Unable to find the application's root element.`);
  }

  const root = createRoot(container);

  root.render(<p>Application</p>);
};

render();
