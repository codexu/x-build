const { path } = require('@vuepress/utils')

module.exports = {
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
    lastUpdated: '上次更新',
    smoothScroll: true,
    darkMode: false,
    navbar: [
      { 
        text: '指南',
        link: '/guide/overview/features.md',
      },
      { 
        text: '参考',
        children: [
          { 
            text: '样式(scss)',
            children: [
              { text: '预设变量', link: '/reference/style/variable.md' },
              { text: 'Mixins', link: '/reference/style/mixins.md' },
            ]
          },
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
              { text: '菜单管理', link: '/reference/store/menu.md'},
              { text: '日志管理', link: '/reference/store/log.md'},
            ]
          },
        ]
      },
      { 
        text: 'Hooks',
        children: [
          { 
            text: 'State',
            children: [
              '/hooks/state/useDevice.md',
              '/hooks/state/useBoolean.md',
              '/hooks/state/useToggle.md',
              '/hooks/state/useLocalStorage.md',
              '/hooks/state/useSessionStorage.md',
            ]
          },
          { 
            text: 'UI',
            children: [
              '/hooks/ui/useLoading.md',
              '/hooks/ui/useClipboard.md',
              '/hooks/ui/useFullscreen.md',
            ]
          },
          { 
            text: 'SideEffect',
            children: [
              '/hooks/sideEffect/useDebounce.md',
              '/hooks/sideEffect/useDebounceFn.md',
              '/hooks/sideEffect/useThrottle.md',
              '/hooks/sideEffect/useThrottleFn.md',
            ]
          },
        ]
      },
      { text: '贡献代码', link: '/contribution' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          collapsable: false,
          children: [
            '/guide/overview/features.md',
            '/guide/overview/quickstart.md',
            '/guide/overview/build.md',
          ]
        },
        {
          text: 'UI',
          collapsable: false,
          children: [
            '/guide/ui/style.md',
            '/guide/ui/icon.md',
            '/guide/ui/components.md',
            '/guide/ui/theme.md',
            '/guide/ui/i18n.md',
            '/guide/ui/layout.md',
          ]
        },
        {
          text: '功能',
          collapsable: false,
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
          collapsable: false,
          children: [
            '/guide/router/router.md',
            '/guide/router/keep-alive.md',
            '/guide/router/menu.md',
            '/guide/router/permissions.md',
          ]
        },
        {
          text: '规范',
          collapsable: false,
          children: [
            '/guide/standard/es-lint.md',
            '/guide/standard/style-lint.md',
            '/guide/standard/commit-lint.md',
            '/guide/standard/git-hook.md',
          ]
        },
      ],
      '/hooks/': [
        {
          text: 'State',
          collapsable: false,
          children: [
            '/hooks/state/useDevice.md',
            '/hooks/state/useBoolean.md',
            '/hooks/state/useToggle.md',
            '/hooks/state/useLocalStorage.md',
            '/hooks/state/useSessionStorage.md',
          ]
        },
        {
          text: 'UI',
          collapsable: false,
          children: [
            '/hooks/ui/useLoading.md',
            '/hooks/ui/useClipboard.md',
            '/hooks/ui/useFullscreen.md',
          ]
        },
        {
          text: 'SideEffect',
          collapsable: false,
          children: [
            '/hooks/sideEffect/useDebounce.md',
            '/hooks/sideEffect/useDebounceFn.md',
            '/hooks/sideEffect/useThrottle.md',
            '/hooks/sideEffect/useThrottleFn.md',
          ]
        },
      ],
      '/reference/': [
        {
          text: '样式(scss)',
          collapsable: false,
          children: [
            '/reference/style/variable.md',
            '/reference/style/mixins.md',
          ]
        },
        {
          text: '全局组件',
          collapsable: false,
          children: [
            '/reference/components/staticFile.md',
            '/reference/components/svgIcon.md',
          ]
        },
        {
          text: '全局状态管理',
          collapsable: false,
          children: [
            '/reference/store/user.md',
            '/reference/store/menu.md',
            '/reference/store/log.md',
          ]
        },
      ],
      '/contribution/': [
        {
          text: '介绍',
          collapsable: false,
          children: [
            '/contribution/',
          ]
        },
      ]
    },
  },
}
