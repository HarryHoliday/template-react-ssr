import { createModel, ModelConfig } from '@rematch/core';
import { iRootState } from '~shared/configureStore';
import fetch from '~shared/lib/fetch';
import { AppState } from './app';

const defaultState: AppState = {
  set: false,
};

const app: ModelConfig<AppState> = createModel({
  state: { ...defaultState },
  reducers: {
    set(state: AppState, payload = true): AppState {
      return { ...state, set: payload };
    },
  },
  effects: _dispatch => ({
    async checkHealth(_payload, rootState: iRootState): Promise<void> {
      try {
        const data = await fetch({ url: '/health', method: 'get' }, rootState);
        console.log('====================================');
        console.log(data);
        console.log('====================================');
      } catch (error) {
        throw error;
      }
    },
  }),
});

export default app;
