import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

const { path } = require('@vuepress/utils')

export default defineUserConfig<DefaultThemeOptions>({
  title: 'X-BUILD FOR VUE3.0',
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
      { 
        text: '参考',
        children: [
          { 
            text: '全局组件',
            children: [
              { text: '静态资源', link: '/reference/components/staticFile.md'},
              { text: 'SVG 图标', link: '/reference/components/svgIcon.md'}
            ]
          },
          { 
            text: '全局状态管理',
            children: [
              { text: '用户登录', link: '/reference/store/user.md'},
            ]
          },
          { 
            text: 'Hooks',
            children: [
              { text: 'useLoading', link: '/reference/hooks/useLoading.md'},
              { text: 'useClipboard', link: '/reference/hooks/useClipboard.md'},
              { text: 'useFullscreen', link: '/reference/hooks/useFullscreen.md'},
            ]
          },
        ]
      },
      { text: '包管理', link: '/packages/README.md' },
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
          ]
        },
        {
          text: 'UI',
          children: [
            '/guide/ui/style.md',
            '/guide/ui/icon.md',
            '/guide/ui/components.md',
            // '/guide/ui/theme.md',
            // '/guide/ui/i18n.md',
            '/guide/ui/layout.md',
          ]
        },
        {
          text: '功能',
          children: [
            '/guide/core/hooks.md',
            '/guide/core/emitter.md',
            '/guide/core/pinia.md',
            '/guide/core/request.md',
            '/guide/core/env.md',
          ]
        },
        {
          text: '路由',
          children: [
            '/guide/router/router.md',
            '/guide/router/keep-alive.md',
            '/guide/router/menu.md',
            '/guide/router/permissions.md',
          ]
        },
        {
          text: '规范',
          children: [
            '/guide/standard/es-lint.md',
            '/guide/standard/style-lint.md',
            '/guide/standard/commit-lint.md',
            '/guide/standard/git-hook.md',
          ]
        },
      ],
      '/reference/': [
        {
          text: '全局组件',
          children: [
            '/reference/components/staticFile.md',
            '/reference/components/svgIcon.md',
          ]
        },
        {
          text: '全局状态管理',
          children: [
            '/reference/store/user.md',
          ]
        },
        {
          text: 'Hooks',
          children: [
            '/reference/hooks/useLoading.md',
            '/reference/hooks/useClipboard.md',
            '/reference/hooks/useFullscreen.md',
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
