
const node_BFF_sidebars = require('./siderbars/node_BFF')
const node_zhihu_sidebars = require('./siderbars/node_zhihu')

console.log( node_BFF_sidebars);


module.exports = {
   // 部署站点的基础路径
   base: '/myVuepress/',
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
  // 端口号
  port: 3000,
  markdown: {
    // 代码块行号
    lineNumbers: true
  },
  themeConfig: {
    // 导航栏logo
    logo: '/icon.png',
    // 最后更新时间
    lastUpdated: '最后更新时间',
    // 所有页面自动生成侧边栏
    sidebar: 'auto',
    // 仓库地址
    repo: 'https://github.com/wenshaofeng/myVuepress',
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
        text: 'Webpack',
        link: '/webpack/'
      },
      {
        text: 'VuePress',
        link: '/vuepress/'
      },
      {
        text: '基础配置功能',
        link: '/common/'
      }
    ],
    // 侧边栏

    sidebar: {
      '/jsbooks/es6/':  genSidebarConfig('深入理解Es6'),
      '/jsbooks/renzhe/': genSidebarConfig('javaScript忍者秘籍'),
      '/node/node_BFF/':node_BFF_sidebars,
      '/node/node_zhihu/':node_zhihu_sidebars
    },
  },

  configureWebpack: {
    resolve: {
      // 静态资源的别名
      alias: {
        '@vuepress': '../images/vuepress',
        '@vue': '../images/vue'
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
        children:[
          'test1',
          'test2'
        ]
      }]
      break;
    case 'javaScript忍者秘籍':
      return [{
        title,
        collapsable: false,
        children:[
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


