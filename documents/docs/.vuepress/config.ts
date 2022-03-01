import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

const { path } = require('@vuepress/utils')

export default defineUserConfig<DefaultThemeOptions>({
  title: 'X-BUILD',
  base: '/x-build/',
  port: 3000,
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
    [
      '@vuepress/plugin-nprogress'
    ],
    [
      '@vuepress/plugin-search'
    ],
  ],
  themeConfig: {
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
      { text: '包管理（试验性）', link: '/packages/README.md' },
      {
        text: '相关说明',
        children: [
          { 
            text: '贡献',
            link: '/contribution/README.md'
          },
          { 
            text: '版本回顾',
            link: '/contribution/history.md'
          },
        ]
      },
      {
        text: 'v6.x',
        children: [
          { 
            text: 'v6.x',
            link: '/'
          },
          { 
            text: 'v5.x',
            link: 'https://codexu.github.io/'
          },
        ]
      },
    ],
    sidebar: {
      '/': [
        {
          text: '指南',
          children: [
            '/',
            '/guide/overview/quickstart.md',
            '/guide/overview/deploy.md',
          ]
        },
        {
          text: '核心',
          children: [
            '/guide/core/router.md',
            '/guide/core/style.md',
            '/guide/core/hooks.md',
            '/guide/core/emitter.md',
            '/guide/core/pinia.md',
            '/guide/core/request.md',
            '/guide/core/env.md',
            '/guide/core/standard.md',
          ]
        },
      ],
      '/packages/': [
        {
          text: '拓展',
          children: [
            '/packages/',
          ]
        },
      ],
      '/contribution/': [
        {
          text: '相关说明',
          children: [
            '/contribution/',
            '/contribution/history.md',
          ]
        },
      ]
    },
  },
})
