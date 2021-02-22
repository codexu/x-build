module.exports = {
  title: 'x-build',
  base: '/x-build/',
  port: 8980,
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    repo: 'http://192.168.0.109:8000/root/x-build',
    lastUpdated: '上次更新',
    smoothScroll: true,
    nav: [
      { text: '基础', link: '/Guide/Overview/Features' },
      { text: '组件库', link: '/Components/' },
      { text: '状态管理', link: '/Vuex/' },
      {
        text: '工具集',
        items: [
          {
            text: 'Vue',
            items: [
              { text: '过滤器 (Filters)', link: '/Filters/' },
              { text: '指令 (Directive)', link: '/Directive/' },
            ]
          },
          {
            text: 'CSS',
            items: [
              { text: '内置变量', link: '/Css/Variable' },
              { text: 'Mixins', link: '/Css/Mixins' },
            ]
          },
          {
            text: 'Javascript',
            items: [
              { text: '表单验证', link: '/Libs/Validator' },
              { text: '工具函数', link: '/Libs/Utils' },
            ]
          }
        ]
      },
      { text: '开发规范', link: '/Standard/StyleGuide' },
    ],
    // 为以下路由添加侧边栏
    sidebar: {
      '/Guide/': [
        {
          title: '介绍',
          collapsable: false,
          children: [
            '/Guide/Overview/Features',
            '/Guide/Overview/NPM',
            '/Guide/Overview/Install',
            '/Guide/Overview/Create',
            '/Guide/Overview/Folder',
          ]
        },
        {
          title: '核心功能',
          collapsable: false,
          children: [
            '/Guide/Basics/Style',
            '/Guide/Basics/SvgIcon',
            '/Guide/Basics/Theme',
            '/Guide/Basics/Server',
            '/Guide/Basics/Mock',
            '/Guide/Basics/Cors',
            '/Guide/Basics/Routes',
            '/Guide/Basics/Permission',
            '/Guide/Basics/Environment',
            '/Guide/Basics/DB',
            '/Guide/Basics/Chart',
            '/Guide/Basics/BuildOptimization',
            '/Guide/Basics/Test',
          ]
        },
      ],
      '/Components/': [
        {
          title: '说明',
          collapsable: false,
          children: [
            '/Components/',
          ]
        },
        {
          title: '组件库',
          collapsable: false,
          children: [
            '/Components/AntD',
            '/Components/Static',
            '/Components/Svg',
            '/Components/Count',
            '/Components/Highlight',
            '/Components/Uploader',
            '/Components/Fullview',
            '/Components/Excel',
            '/Components/Editor',
            // '/Components/Markdown',
            '/Components/Code',
          ],
        }
      ],
      '/Vuex/': [
        {
          title: '说明',
          collapsable: false,
          children: [
            '/Vuex/',
          ]
        },
        {
          title: 'Vuex',
          collapsable: false,
          children: [
            '/Vuex/User',
            '/Vuex/Account',
            '/Vuex/Menu',
            '/Vuex/Ua',
            '/Vuex/Fullscreen',
            '/Vuex/Loading',
            '/Vuex/Logs',
            '/Vuex/Device',
            '/Vuex/Theme',
          ]
        }
      ],
      '/Filters/': [
        {
          title: '说明',
          collapsable: false,
          children: [
            '/Filters/',
          ]
        },
        {
          title: '过滤器',
          collapsable: false,
          children: [
            '/Filters/Date',
            '/Filters/Remainin',
            '/Filters/Url',
            '/Filters/FileSize',
            '/Filters/Number',
            '/Filters/Float',
          ]
        }
      ],
      '/Directive/': [
        {
          title: '说明',
          collapsable: false,
          children: [
            '/Directive/',
          ]
        },
        {
          title: '指令集',
          collapsable: false,
          children: [
            '/Directive/Permission',
            '/Directive/Copy',
            '/Directive/Hotkey',
            '/Directive/ScrollTo',
            '/Directive/Lazyload',
            '/Directive/Focus',
          ]
        }
      ],
      '/Standard/': [{
        title: '规范',
        collapsable: false,
        children: [
          '/Standard/StyleGuide',
          '/Standard/ESLint',
          '/Standard/CSS',
          '/Standard/Vue',
          '/Standard/Static',
          '/Standard/Image',
          '/Standard/Test',
        ]
      }],
      '/Css/': [{
        title: 'CSS',
        collapsable: false,
        children: [
          '/Css/Variable',
          '/Css/Mixins',
        ]
      }],
      '/Libs/': [{
        title: 'Javascript',
        collapsable: false,
        children: [
          '/Libs/Validator',
          '/Libs/Utils',
        ]
      }],
    },
  },
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
  ]
}