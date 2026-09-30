import type { StorybookConfig } from '@storybook/react-vite';
import DynamicUtilsPlugin from '../../../packages/tokens/dynamic-utils-plugin';

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
  ],
  framework: { name: '@storybook/react-vite', options: {} },
  async viteFinal(config) {
    config.plugins = config.plugins || [];
    config.plugins.push(DynamicUtilsPlugin());
    return config;
  },
};

export default config;
