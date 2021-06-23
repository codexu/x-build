module.exports = {
  title: 'X-BUILD FOR VUE3.0',
  base: '/x-build/',
  port: 3000,
  plugins: [
    '@vuepress/plugin-search'
  ],
  themeConfig: {
    repo: 'code-device/x-build',
    docsRepo: 'code-device/x-build',
    docsDir: 'docs',
    docsBranch: 'next',
    editLinks: true,
    lastUpdated: '上次更新',
    smoothScroll: true,
    navbar: [
      { 
        text: '指南',
        link: '/guide/overview/features.md',
      },
      { 
        text: '样式',
        children: [
          { text: '内置变量', link: '' },
          { 
            text: 'Mixins',
            children: [
              { text: '水平居中', link: '' },
              { text: '文字单行溢出', link: '' },
              { text: '多行文字溢出', link: '' },
              { text: '美化文本选中', link: '' },
              { text: '毛玻璃', link: '' },
              { text: '滤镜', link: '' },
              { text: '背景色', link: '' },
              { text: '三角形', link: '' },
              { text: '移动端vh', link: '' },
            ]
          },
        ]
      },
      { 
        text: '全局组件',
        children: [
          { text: '静态资源', link: ''},
          { text: 'SVG 图标', link: ''}
        ]
      },
      { 
        text: '全局状态管理',
        children: [
          { text: '用户登录', link: ''},
          { text: '菜单管理', link: ''},
          { text: '日志管理', link: ''},
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
              '/hooks/state/useLocalStorageState.md',
              '/hooks/state/useSessionStorageState.md',
            ]
          },
          { 
            text: 'UI',
            children: [
              '/hooks/ui/useLoading.md',
              '/hooks/ui/useClipboard.md'
            ]
          },
          { 
            text: 'SideEffect',
            children: [
              '/hooks/sideEffect/useDebounce.md',
              '/hooks/sideEffect/useDebounceFn.md'
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
            '/guide/ui/theme.md',
            '/guide/ui/i18n.md',
            '/guide/ui/layout.md',
          ]
        },
        {
          text: '路由',
          collapsable: false,
          children: [
            '/guide/router/router',
            '/guide/router/keep-alive',
            '/guide/router/menu',
          ]
        },
        {
          text: '功能',
          collapsable: false,
          children: [
            '/guide/core/env.md',
            '/guide/core/pinia.md',
            '/guide/core/hooks.md',
            '/guide/core/emitter.md',
            '/guide/core/permissions.md',
          ]
        },
        {
          text: 'HTTP',
          collapsable: false,
          children: [
            '/guide/http/request.md',
            '/guide/http/mock.md',
            '/guide/http/cros.md',
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
          ]
        },
        {
          text: 'UI',
          collapsable: false,
          children: [
            '/hooks/ui/useLoading.md',
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
