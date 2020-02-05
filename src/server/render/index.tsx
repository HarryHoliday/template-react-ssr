import { Request, Response } from 'express';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { initializeStore } from '~shared/configureStore';
import App from '~shared/App';
import Html from './Html';

export default (req: Request, res: Response): void => {
  //
  const init = {
    app: {
      set: false,
      csrfToken: req.csrfToken(),
    },
  };
  //
  const context: { url?: string } = {};
  const store = initializeStore(init);
  const markup = renderToString(
    <StaticRouter context={context} location={req.url}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>,
  );
  //
  const helmet = Helmet.renderStatic();
  //
  if (context.url) {
    res.redirect(context.url);
  } else {
    res.send(
      `<!doctype html>
      ${renderToString(
        <Html
          css={res.locals.getStylesheets()}
          scripts={res.locals.getJavascripts()}
          state={store.getState()}
          markup={markup}
          helmet={helmet}
        />,
      )}`,
    );
  }
};
