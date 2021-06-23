module.exports = {
  title: 'X-BUILD FOR VUE3.0',
  base: '/x-build/',
  port: 3000,
  themeConfig: {
    repo: 'code-device/x-build',
    docsRepo: 'code-device/x-build',
    docsDir: 'docs',
    docsBranch: 'next',
    editLinks: true,
    lastUpdated: '上次更新',
    smoothScroll: true,
    nav: [
      { 
        text: '指南',
        link: '/guide/overview/features',
      },
      { 
        text: '样式',
        items: [
          { text: '内置变量', link: '' },
          { 
            text: 'Mixins',
            items: [
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
        items: [
          { text: '静态资源', link: ''},
          { text: 'SVG 图标', link: ''}
        ]
      },
      { 
        text: '全局状态管理',
        items: [
          { text: '用户登录', link: ''},
          { text: '菜单管理', link: ''},
          { text: '日志管理', link: ''},
        ]
      },
      { 
        text: 'Hooks',
        items: [
          { 
            text: 'State',
            items: [
              { text: 'useDevice', link: '' },
              { text: 'useBoolean', link: '' },
              { text: 'useToggle', link: '' },
              { text: 'useLocalStorageState', link: '' },
              { text: 'useSessionStorageState', link: '' },
            ]
          },
          { 
            text: 'UI',
            items: [
              { text: 'useLoading', link: '' },
              { text: 'useClipboard', link: '' },
              { text: 'useFullscreen', link: '' },
            ]
          },
          { 
            text: 'SideEffect',
            items: [
              { text: 'useDebounce', link: '' },
              { text: 'useDebounceFn', link: '' },
            ]
          },
        ]
      },
      { text: '贡献代码', link: '/contribution' },
    ],
    sidebar: {
      '/guide/': [
        {
          title: '指南',
          collapsable: false,
          children: [
            '/guide/overview/features',
            '/guide/overview/quickstart',
            '/guide/overview/build',
          ]
        },
        {
          title: 'UI',
          collapsable: false,
          children: [
            '/guide/ui/style',
            '/guide/ui/icon',
            '/guide/ui/theme',
            '/guide/ui/i18n',
            '/guide/ui/layout',
          ]
        },
        {
          title: '路由',
          collapsable: false,
          children: [
            '/guide/router/router',
            '/guide/router/keep-alive',
            '/guide/router/menu',
          ]
        },
        {
          title: '功能',
          collapsable: false,
          children: [
            '/guide/core/env',
            '/guide/core/pinia',
            '/guide/core/hooks',
            '/guide/core/emitter',
            '/guide/core/permissions',
          ]
        },
        {
          title: 'HTTP',
          collapsable: false,
          children: [
            '/guide/http/request',
            '/guide/http/mock',
            '/guide/http/cros',
          ]
        },
        {
          title: '规范',
          collapsable: false,
          children: [
            '/guide/standard/es-lint',
            '/guide/standard/style-lint',
            '/guide/standard/commit-lint',
            '/guide/standard/git-hook',
          ]
        },
      ],
      '/contribution/': [
        {
          title: '介绍',
          collapsable: false,
          children: [
            '/contribution/',
          ]
        },
      ]
    },
  },
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top'
  ]
}
