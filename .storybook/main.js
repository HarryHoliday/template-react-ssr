const path = require('path');
const paths = require('../config/paths');

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  presets: ['@storybook/preset-scss'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async config => {
    // do mutation to the config
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    });
    config.resolve.alias = {
      '~src': paths.appSrc,
      '~server': path.resolve(paths.appSrc, 'server'),
      '~shared': path.resolve(paths.appSrc, 'shared'),
      '~styles': path.resolve(paths.appSrc, 'styles'),
      '~components': path.resolve(paths.appSrc, 'shared/components'),
      '~pages': path.resolve(paths.appSrc, 'shared/pages'),
    };
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
