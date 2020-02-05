import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { initializeStore } from '~shared/configureStore';
import { Welcome } from '@storybook/react/demo';
import App from '../src/shared/App.tsx';

export default {
  title: 'Welcome',
  component: Welcome,
};

const preloadedState = {};

export const ToStorybook = () => (
  <BrowserRouter>
    <Provider store={initializeStore(preloadedState)}>
      <App />
    </Provider>
  </BrowserRouter>
);

ToStorybook.story = {
  name: 'to Storybook',
};
