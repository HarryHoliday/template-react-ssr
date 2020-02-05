import { init, RematchRootState, RematchStore } from '@rematch/core';
import models from './models';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const middlewares: any[] = [];

if (process.env.NODE_ENV === 'development' && process.env.__IS_CLIENT) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { createLogger } = require('redux-logger');
  const actionList = [''];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const logger: any = createLogger({
    predicate: (getState: Store, action: { type: string }) => !actionList.includes(action.type),
  });
  middlewares.push(logger);
}

export let store: RematchStore;

export let dispatch: Dispatch;

export const initializeStore = (initialState = {}): RematchStore => {
  store = init({
    models,
    redux: {
      initialState,
      middlewares,
    },
  });
  dispatch = store.dispatch;
  return store;
};

// Hot reloading
// if (module.hot) {
//   // Reload rematch models
//   module.hot.accept(() => {
//     const nextModels = require('./models').default;
//     Object.keys(nextModels).forEach(modelKey => {
//       console.log(`Reloading model ${modelKey}`);
//       store.model({
//         name: modelKey,
//         // @ts-ignore
//         ...models[modelKey],
//       });
//     });
//   });
// }

export type Store = typeof store;
export type Dispatch = typeof store.dispatch;
export type iRootState = RematchRootState<typeof models>;
