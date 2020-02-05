import React, { Component } from 'react';

interface HTMLProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

class Html extends Component<HTMLProps> {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  render() {
    const { markup, scripts, css, state, helmet } = this.props;
    return (
      <html lang="">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {helmet.base.toComponent()}
          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          {helmet.link.toComponent()}
          {helmet.script.toComponent()}
          {css.map((href: string | undefined) => {
            return <link key={href} rel="stylesheet" href={href} />;
          })}
          <script
            id="preloaded-state"
            dangerouslySetInnerHTML={{
              __html: `window.__PRELOADED_STATE__ = ${JSON.stringify(state)}`,
            }}
          />
        </head>
        <body>
          {process.env.NODE_ENV === 'development' ? (
            <div id="app" dangerouslySetInnerHTML={{ __html: markup }} />
          ) : (
            <div id="app">{markup}</div>
          )}
          {scripts.map((src: string | undefined) => {
            return <script key={src} src={src} />;
          })}
        </body>
      </html>
    );
  }
}

export default Html;
