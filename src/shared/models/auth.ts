import { createModel, ModelConfig } from '@rematch/core';
import { iRootState } from '~shared/configureStore';

export type UserInfo = {
  name: string | null;
  email: string | null;
};

export type AuthState = {
  isAuthenticated: boolean;
  userInfo: UserInfo;
};

const defaultState: AuthState = {
  isAuthenticated: false,
  userInfo: {
    name: null,
    email: null,
  },
};

const auth: ModelConfig<AuthState> = createModel({
  state: { ...defaultState },
  reducers: {
    signIn(state: AuthState) {
      return { isAuthenticated: true, userInfo: { name: 'harry holiday', email: 'example.com' } };
    },
    signOut(state: AuthState) {
      return { ...defaultState };
    },
  },
  effects: dispatch => ({
    async request(payload: boolean, rootState: iRootState) {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (error) {
        throw error;
      }
    },
  }),
});

export default auth;
