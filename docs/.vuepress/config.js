module.exports = {
  title: '工作笔记',
  // description: '沉于当下，面向未来，内容杂道九宗，望之issue',
  description: '汇聚百川，终成江河',
  port: 65533,
  themeConfig: {
    repo: 'https://github.com/wsmjz',
    // 自定义仓库链接文字。
    repoLabel: 'GitHub',
    nav: [
    {
      text: 'UI组件生态',
      items: [{
        text: '结构组件',
        link: '/components/jg/button.md'
      }, {
        text: '业务组件',
        link: '/components/yw/note.md'
      }, {
        text: '流程图组件',
        link: '/components/lc/note.md'
      }, {
        text: '地图组件',
        link: '/components/button.md'
      }]
    },
    {
      text: '生态系统',
      items: [{
        text: '项目',
        items: [{
          text: 'ping-vue(简版vue)',
          link: '/ecology/admin/vue'
        }, {
          text: 'ping-react(简版react)',
          link: '/ecology/admin/vue'
        }, {
          text: 'ping-offical-vue(响应式)',
          link: '/ecology/inst'
        }, {
          text: 'ping-xcx',
          link: '/ecology/inst'
        }, {
          text: 'H5商城',
          link: '/ecology/inst'
        }]
      }, {
        text: '资源',
        items: [{
          text: 'UI库-vue',
          link: '/components/jg/button.md'
        }, {
          text: '基础资源ping-base-lib',
          link: '/ecology/dev/devtools'
        }, {
          text: 'pi(核心，自动化配置)',
          link: '/ecology/cli/cli'
        }, {
          text: '脚手架ping-cli',
          link: '/ecology/cli/cli'
        }, {
          text: '打包工具ping-webpack',
          link: '/ecology/webpack'
        }, {
          text: '校验库',
          link: '/ecology/schema'
        }, {
          text: '状态管理',
          link: '/ecology/schema'
        }, {
          text: '路由',
          link: '/ecology/schema'
        }, {
          text: '日期',
          link: '/ecology/schema'
        }, {
          text: '图表',
          link: '/ecology/schema'
        }, {
          text: '地图',
          link: '/ecology/schema'
        }, {
          text: '关系流程图',
          link: '/ecology/schema'
        }]
      }]
    },
    {
      text: '核心',
      items: [{
        text: '基础',
        link: '/Core/Api/base'
      }, {
        text: 'js(v8)引擎',
        link: '/Core/V8/base'
      }, {
        text: '原理实现',
        link: '/Core/Achieve/base'
      }, {
        text: 'Vue概记',
        link: '/Core/Vue/base'
      }, {
        text: 'React概记',
        link: '/Core/React/base'
      }, {
        text: 'webpack',
        link: '/Core/MyWebpack/base'
      }]
    },
    {
      text: '工程化',
      link: '/project/intr'
    },
    {
      text: '性能优化',
      link: '/xingneng/base.md'
    },
    {
      text: '可视化',
      items: [{
        text: 'three.js',
        link: '/Cansee/three'
      }, {
        text: 'D3',
        link: '/Cansee/D3'
      }]
    },
    {
      text: '杂记',
      link: '/zaji/js/base.md'
    },
    {
      text: '进阶',
      items: [{
        text: '数据结构',
        link: '/jingjie/sjjg'
      }, {
        text: '算法',
        link: '/jingjie/suanfa/base'
      }, {
        text: 'node',
        link: '/jingjie/base'
      }, {
        text: 'Linux',
        link: ''
      }, {
        text: 'python',
        link: ''
      }]
    }],
    sidebar: {
      // ================================================核心
      '/project/': [{
        title: '工程化',
        collapsable: false,
        children: [
          'intr',
          'webpack',
          'rollup',
          'vite',
          'gulp'
        ]
      }],
      '/Core/Achieve/': [{
        title: '原理实现',
        collapsable: true,
        sidebarDepth: 2,
        children: [
          'api',
          'base',
          'promise'
        ]
      }],
      '/Core/Api/': [{
        title: '基础',
        collapsable: true,
        children: [
          'obj',
          'base'
        ]
      }],
      '/Core/Vue/': [{
        title: 'vue概记',
        collapsable: false,
        children: [
          'base',
          'yuanli'
        ]
      }, {
        title: '常见问题',
        collapsable: true,
        children: [
          'vue-review/note'
        ]
      }],
      '/Core/React/': [{
        title: 'react概记',
        collapsable: true,
        children: [
          'base',
          'wenti'
        ]
      }, {
        title: '源码认识',
        collapsable: true,
        children: [
          'yuanli'
        ]
      }, {
        title: '生态',
        collapsable: true,
        children: [
          'ecology'
        ]
      }],
      '/Core/V8/': [{
        title: 'js(v8)引擎',
        collapsable: false,
        children: [
          'base',
          'ts'
        ]
      }],
      '/Core/MyWebpack/': [{
        title: 'webpack总结',
        collapsable: true,
        children: [
          'base'
        ]
      }],
      // ================================================生态系统
      '/ecology/dev/': [{
        title: '基础工具',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          'devtools'
        ]
      }],
      '/ecology/admin/': [{
        title: '项目说明',
        collapsable: true,
        children: [
          'vue'
        ]
      }],
      '/ecology/': [{
        title: '项目模板',
        collapsable: true,
        children: [
          'inst'
        ]
      }],
      '/ecology/cli/': [{
        title: '脚手架',
        collapsable: true,
        children: [
          'cli'
        ]
      }],
      '/ecology/': [{
        title: '资源列表预览',
        collapsable: true,
        children: [
          'schema'
        ]
      }],
      // 组件库
      '/components/jg/': [{
        title: '指南',
        sidebarDepth: 0,
        collapsable: false,
        children: [
          'zhinan'
        ]
      }, {
				title: 'Base',
        sidebarDepth: 0,
        collapsable: false,
        children: [
          'button',
          'Layout'
        ]
      }, {
				title: 'Form表单',
        sidebarDepth: 0,
        collapsable: false,
        children: [
          'select'
        ]
      }],
      // ================================================性能优化
      '/xingneng/': [{
        title: '性能优化',
        sidebarDepth: 2,
        children: [
          'base'
        ]
      }],
      // ================================================可视化
      '/Cansee/': [{
        title: '可视化',
        collapsable: false,
        children: [
          'three',
        ]
      }],
      // ================================================杂记
      '/zaji/': [{
        title: '杂记',
        sidebarDepth: 2,
        collapsable: false,
        children: [
          'js/base'
        ]
      }, {
        title: 'css note',
        collapsable: true,
        children: [
          'css/base'
        ]
      }, {
        title: '工具',
        collapsable: true,
        children: [
          'gj/base'
        ]
      }],
      // =================================================== 进阶
      '/jingjie/suanfa/': [{
        title: '算法',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          'base'
        ]
      }],
      '/jingjie/': [{
        title: '设计模式',
        collapsable: true,
        sidebarDepth: 2,
        children: [
          'sheji'
        ]
      }, {
        title: '向上',
        collapsable: true,
        children: [
          'base'
        ]
      }, {
        title: 'node',
        collapsable: true,
        children: [
          'node'
        ]
      }, {
        title: 'python',
        collapsable: true,
        children: [
          'python'
        ]
      }]
    },
    displayAllHeaders: true,
    lastUpdated: 'Last Updated',
  },
}