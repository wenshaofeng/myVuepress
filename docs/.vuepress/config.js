
const node_BFF_sidebars = require('./siderbars/node_BFF')
const node_zhihu_sidebars = require('./siderbars/node_zhihu')
const typescript_learn_sidebars = require('./siderbars/typescript_learn')
const webpack_demo_sidebars = require('./siderbars/webpack_demo')
const git_note_sidebars = require('./siderbars/git_note')
const javaScript_sidebars = require('./siderbars/javaScript')

module.exports = {
  // 部署站点的基础路径
  base: '/',
  // 页面标题
  title: 'Person Blog',
  // 网页描述
  description: '废柴阿蔚的个人站点',
  head: [
    // 页面icon
    ['link', {
      rel: 'icon',
      href: '/icon.png'
    }]
  ],
  plugins: ['@vuepress/back-to-top'],   //  配置回到顶部的插件  
  chainWebpack: (config, isServer) => {
    const inlineLimit = 10000
    config.module.rule('images')
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: inlineLimit,
        name: `assets/img/[name].[hash:8].[ext]`
      })
  },
  // 端口号
  port: 3000,
  markdown: {
    // 代码块行号
    lineNumbers: true,
    // ......
    extendMarkdown: md => {
      md.use(require("markdown-it-disable-url-encode"))
    }
  },
  themeConfig: {
    // 导航栏logo
    logo: '/icon.png',
    // 最后更新时间
    lastUpdated: '最后更新时间',
    // 所有页面自动生成侧边栏
    sidebar: 'auto',
    // 仓库地址
    repo: '#',
    // 仓库链接label
    repoLabel: 'Github',
    // 编辑链接
    editLinks: true,
    // 编辑链接label
    editLinkText: '编辑此页',
    // 导航
    nav: [{
      text: '前端面试之道',
      link: '/interview/'
    },
    {
      text: 'JavaScript书籍',
      items: [{
        text: '深入理解ES6',
        link: '/jsbooks/es6/'
      },
      {
        text: 'javaScript忍者秘籍',
        link: '/jsbooks/renzhe/'
      },
      {
        text: '你不知道的JavaScript',
        link: '/jsbooks/you_Dont_Know_JavaScript/'
      },

      ]
    },
    {
      text: 'TS',
      items: [
        {
          text: 'TypeScript初学',
          link: '/jsbooks/typescript_learn/'
        },
      ]
    },
    {
      text: 'node',
      items: [
        {
          text: 'node_BFF',
          link: '/node/node_BFF/'
        },
        {
          text: 'node_RESTful',
          link: '/node/node_zhihu/'
        },
      ]
    },
    {
      text: '数据结构和算法',
      link: '/algorithm/'
    },
    {
      text: 'Vue.js',
      link: '/vue/'
    },
    {
      text: '工程化相关',
      items: [
        {
          text: 'Webpack基础',
          link: '/webpack/'
        },
        {
          text: 'git 相关',
          link: '/git_note/'
        }
      ]
    },

    {
      text: '基础配置功能',
      link: '/common/'
    },

    ],
    // 侧边栏

    sidebar: {
      '/jsbooks/es6/': genSidebarConfig('深入理解Es6'),
      '/jsbooks/renzhe/': genSidebarConfig('javaScript忍者秘籍'),
      '/jsbooks/you_Dont_Know_JavaScript/': javaScript_sidebars,
      '/node/node_BFF/': node_BFF_sidebars,
      '/node/node_zhihu/': node_zhihu_sidebars,
      '/jsbooks/typescript_learn/': typescript_learn_sidebars,
      '/webpack/': webpack_demo_sidebars,
      '/git_note/': git_note_sidebars
    },
  },

  configureWebpack: {
    resolve: {
      // 静态资源的别名
      alias: {
        '@vuepress': '../images/vuepress',
        '@vue': '../images/vue',
      }
    }
  }
}


function genSidebarConfig(title) {
  switch (title) {
    case '深入理解Es6':
      return [{
        title,
        collapsable: false,
        children: [
          'test1',
          'test2'
        ]
      }]
      break;
    case 'javaScript忍者秘籍':
      return [{
        title,
        collapsable: false,
        children: [
          'hushuobadao',
          'test1',
          'test2'
        ]
      }]
      break;
    default:
      break;
  }

}


