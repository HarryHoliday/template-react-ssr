import React, { FC, EffectCallback } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { initializeStore } from '~shared/configureStore';
import App from '~shared/App';

import * as serviceWorker from './serviceWorker';

const cb: EffectCallback = (): void => {
  const preloadedStateScript = document.querySelector('#preloaded-state');
  if (preloadedStateScript && preloadedStateScript.parentNode) {
    // preloadedStateScript.innerHTML = '';
    preloadedStateScript.parentNode.removeChild(preloadedStateScript);
  }
};

const Main: FC = () => {
  React.useEffect(cb, []);
  const preloadedState = window.__PRELOADED_STATE__;
  preloadedState.app.set = true;
  return (
    <BrowserRouter>
      <Provider store={initializeStore(preloadedState)}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept();
  }
  ReactDOM.render(<Main />, document.getElementById('app'));
} else {
  ReactDOM.hydrate(<Main />, document.getElementById('app'));
}
