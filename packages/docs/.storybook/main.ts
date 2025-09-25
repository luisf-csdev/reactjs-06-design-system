import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/pages/**/*.mdx', '../src/stories/**/*.stories.tsx'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  // viteFinal: (config, { configType }) => {
  //   if (configType === 'PRODUCTION') {
  //     config.base = '/reactjs-06-design-system'
  //   }
  //   return config
  // },
}
export default config
