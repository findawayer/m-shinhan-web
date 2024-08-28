import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';
import { isDevelopmentEnv } from './shared/utilities/env';

const render = () => {
  const container = document.querySelector('#app');

  if (!container) {
    throw new Error(`Unable to find the application's root element.`);
  }

  const root = createRoot(container);

  if (isDevelopmentEnv()) {
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  } else {
    root.render(<App />);
  }
};

render();
