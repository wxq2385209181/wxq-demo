import { defineConfig } from 'vitepress'
import { name, sayHello } from './person'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home1111', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { 
            text: 'javaScript',
            collapsed: true,
           items: [
             {
               text: '变量',
               link: 'javaScript/js-es6',
             }
           ]
          },
          { 
            text: 'react',
            collapsed: true,
           items: [
             {
               text: 'react创建',
               link: 'react/test',
             },
             {
               text: 'react源码解析',
               link: 'react/react-源码',
             }
           ]
          },
          {
            text: '工程化',
            collapsed: true,
            items: [
              {
                text: 'CommonJs学习',
                link: 'engineer/commonjs/index',
              },
              {
                text: 'button按钮',
                link: 'engineer/button/index',
              },
             
            ]
          },
          {
            text: '函数式编程',
            collapsed: true,
            items: [
              {
                text: '柯里化',
                link: 'function/curry -function',
              },
            ]
          },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
