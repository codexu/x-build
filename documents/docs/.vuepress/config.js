module.exports = {
  title: 'x-build',
  base: '/x-build/',
  port: 3000,
  head: [
    ['link', { rel: 'icon', href: '/logo.jpeg' }]
  ],

  themeConfig: {
    repo: 'code-device/x-build',
    docsRepo: 'code-device/x-build',
    docsDir: 'docs',
    docsBranch: 'next',
    editLinks: true,
    lastUpdated: '上次更新',
    smoothScroll: true,

    nav: [
      { text: '基础', link: '/Guide/Overview/Features' },
      { text: '开发规范', link: '/Standard/StyleGuide' },
    ],

    sidebar: {
      '/Guide/': [
        {
          title: '介绍',
          collapsable: false,
          children: [
            '/Guide/Overview/Features',
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
    },
  },

  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top'
  ]
}
