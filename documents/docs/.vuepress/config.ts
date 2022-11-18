import { defaultTheme, defineUserConfig } from 'vuepress'
const { nprogressPlugin } = require('@vuepress/plugin-nprogress')
const { searchPlugin } = require('@vuepress/plugin-search')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')

const { path } = require('@vuepress/utils')

export default defineUserConfig({
  title: 'X-BUILD',
  base: '/x-build/',
  port: 3000,
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    nprogressPlugin(),
    searchPlugin(),
  ],
  theme: defaultTheme({
    repo: 'code-device/x-build',
    docsRepo: 'code-device/x-build',
    docsDir: 'docs',
    docsBranch: 'next',
    editLinks: true,
    lastUpdated: true,
    smoothScroll: true,
    darkMode: false,
    navbar: [
      {
        text: '指南',
        link: '/README.md',
      },
      {
        text: 'v6.x',
        children: [
          {
            text: 'v6.x',
            link: '/',
          },
          {
            text: 'v5.x',
            link: 'https://codexu.github.io/',
          },
        ],
      },
    ],
    sidebar: {
      '/': [
        {
          text: '指南',
          children: ['/', '/guide/overview/quickstart.md', '/guide/overview/deploy.md'],
        },
        {
          text: '核心',
          children: [
            '/guide/core/speedy.md',
            '/guide/core/router.md',
            '/guide/core/style.md',
            '/guide/core/hooks.md',
            '/guide/core/emitter.md',
            '/guide/core/pinia.md',
            '/guide/core/request.md',
            '/guide/core/env.md',
            '/guide/core/standard.md',
            '/guide/core/i18n.md',
          ],
        },
        {
          text: '相关',
          children: [
            '/guide/depth/plugin.md',
            '/guide/depth/history.md',
            '/guide/depth/contribution.md',
          ],
        },
      ],
    },
  }),
});
