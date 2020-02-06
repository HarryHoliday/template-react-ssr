import { createModel, ModelConfig } from '@rematch/core';
// import { iRootState } from '~shared/configureStore';

export type SideBarState = {
  isSideBarOpened: boolean;
};

export type UiState = {
  test: boolean;
};

const defaultState: UiState & SideBarState = {
  isSideBarOpened: true,
  test: false,
};

const ui: ModelConfig<UiState & SideBarState> = createModel({
  state: { ...defaultState },
  reducers: {
    toggleSideBarOpen(state: UiState & SideBarState): UiState & SideBarState {
      return { ...state, isSideBarOpened: !state.isSideBarOpened };
    },
  },
  effects: dispatch => ({}),
});

export default ui;
