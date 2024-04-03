import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'JJ-UI',
  description: 'this is a vue component libary',
  rewrites: {
    'docs/(.*)': '(.*)',
    'packages/jj-ui/src/:comp/(.*)': 'components/:comp/(.*)',
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '介绍', link: '/introduce' },
      { text: '组件', link: '/components/' },
      { text: '工具', link: '/utils' },
    ],

    sidebar: [
      {
        text: '组件',
        items: [
          { text: '按钮', link: '/components/button/index.md' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})
