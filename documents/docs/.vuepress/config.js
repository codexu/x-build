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
      { text: '基础', link: '/overview/features' },
      { text: '贡献', link: '/contribution' },
    ],
    sidebar: {
      '/overview/': [
        {
          title: '介绍',
          collapsable: false,
          children: [
            '/overview/features',
            '/overview/quickstart',
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
