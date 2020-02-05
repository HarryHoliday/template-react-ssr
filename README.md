# from cra to ssr

## init project

```bash
npx create-react-app [project-name] --template typescript
cd [project-name]
npm run eject
```

## install lib for ssr

```bash
# dev
npm install --save-dev webpack-node-externals
npm install --save-dev nodemon-webpack-plugin
npm install --save-dev redux-logger
npm install --save-dev @types/react-redux
npm install --save-dev @types/react-router-dom
npm install --save-dev @types/webpack-env
npm install --save-dev null-loader
npm install --save-dev husky lint-staged
npm install --save-dev @types/express
npm install --save-dev @types/helmet @types/compression
npm install --save-dev @types/cookie-parser @types/csurf
#
npm install --save express
npm install --save express-manifest-helpers
npm install --save helmet compression
npm install --save cookie-parser csurf
npm install --save react-router-dom
npm install --save redux react-redux
npm install --save @rematch/core
npm install --save yup
npm install --save node-sass
# ... some more
```

## redux

- use @rematch/core

## add storybook
