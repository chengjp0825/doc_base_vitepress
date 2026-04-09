import { defineConfig } from 'vitepress'
import markdownItKatex from 'markdown-it-katex'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Notes Hub',
  description: '电子工程师的芯片笔记与技术分享',

  // 1. 引入 KaTeX 的 CSS
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css' }]
  ],

  // 2. 配置 Markdown 插件 (替换 extendsMarkdown)
  markdown: {
    config: (md) => {
      md.use(markdownItKatex)
    }
  },

  themeConfig: {
    logo: '/logo.svg', // <-- 在这里添加这一行，指向 docs/public/ 下的文件
    // VitePress 默认不显示贡献者，开启最后更新时间需要在配置和 Markdown 文件中调整
    lastUpdated: {
      text: '最后更新于'
    },

    // 3. 开启本地搜索 (替换 searchPlugin)
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },

    // 4. 导航栏配置 (navbar 改为 nav)
    nav: [
      { text: '首页', link: '/' },
      { text: '模拟电路', link: '/analog/' },
      { text: '微控制器', link: '/microcontrollers/' },
      { text: 'FPGA', link: '/fpga/' },
      { text: '传感器', link: '/sensors/' },
      { text: '电源管理', link: '/power/' },
      { text: '通信协议', link: '/protocols/' }, // VitePress 推荐省略 .html 或 .md 后缀
    ],

    // 5. 侧边栏配置
    sidebar: {
      '/analog/': [
        {
          text: '模拟电路',
          collapsed: false,
          items: [
            { text: '概述', link: '/analog/' },
            { text: 'AC 耦合', link: '/analog/ac-coupling' },
          ],
        },
      ],
      '/microcontrollers/': [
        {
          text: '微控制器 (MCU)',
          collapsed: false, // collapsible 改为 collapsed
          items: [          // children 改为 items
            { text: '概述', link: '/microcontrollers/' }, // 指向 README.md
            { text: 'STM32G0', link: '/microcontrollers/stm32g0' },
            { text: 'ESP32', link: '/microcontrollers/esp32' },
          ],
        },
      ],
      '/sensors/': [
        {
          text: '常用传感器',
          collapsed: false,
          items: [
            { text: '概述', link: '/sensors/' },
            { text: 'BME280', link: '/sensors/bme280' },
          ],
        },
      ],
      '/power/': [
        {
          text: '电源管理',
          collapsed: false,
          items: [
            { text: '概述', link: '/power/' },
            { text: 'LDO 线性稳压器', link: '/power/ldo' },
          ],
        },
      ],
      '/protocols/': [
        {
          text: '硬件通信协议',
          collapsed: false,
          items: [
            { text: 'I2C 总线', link: '/protocols/i2c' },
            { text: 'SPI 总线', link: '/protocols/spi' },
          ],
        },
      ],
      '/fpga/': [
        {
          text: 'FPGA 开发',
          collapsed: false,
          items: [
            { text: '概述', link: '/fpga/' },
            { text: 'XC7K325T', link: '/fpga/xc7k325t' },
          ],
        },
      ],
    },
  },
})