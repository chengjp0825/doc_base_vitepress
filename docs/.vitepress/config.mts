import { defineConfig } from 'vitepress'
import markdownItKatex from 'markdown-it-katex'
import { withMermaid } from 'vitepress-plugin-mermaid'

// 注意：这里直接 export withMermaid，不再在内部嵌套 defineConfig
export default withMermaid({
  lang: 'zh-CN',
  title: 'Note Hub',
  description: '电子工程师的芯片笔记与技术分享',

  // 1. 引入 KaTeX 的 CSS
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css' }]
  ],

  // 2. 配置 Markdown 插件
  markdown: {
    config: (md) => {
      md.use(markdownItKatex)
    }
  },

  // Mermaid 插件配置 (可选自定义)
  mermaid: {
    // 这里可以根据需要配置主题，例如 'dark' 或 'default'
  },

  themeConfig: {
    logo: '/logo.svg', 
    lastUpdated: {
      text: '最后更新于'
    },

    outline: {
      level: [2, 3],
      label: 'On this page' // 可选：自定义大纲标题
    },

    // 3. 开启本地搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
              }
            }
          }
        }
      }
    },

    // 4. 导航栏配置
    nav: [
      { text: '首页', link: '/' },
      { text: '那我问你', link: '/interview-questions/' },
      { text: '你知道的', link: '/should-know/' },
      { text: '微控制器', link: '/microcontrollers/' },
      { text: 'FPGA', link: '/fpga/' },
      { text: '通信协议', link: '/protocols/' },
    ],

    // 5. 侧边栏配置
    sidebar: {
      '/interview-questions/': [
        {
          text: '那我问你',
          link: '/interview-questions/'
        },
        {
          text: 'LINUX 开发',
          collapsed: false,
          base: '/interview-questions/',
          items: [
            { text: 'Linux驱动开发', link: 'linux-driver' },
            { text: 'Linux应用开发', link: 'linux-app' }
          ],
        },
        {
          text: 'FPGA 开发',
          collapsed: true,
          base: '/interview-questions/',
          items: [
            { text: 'FPGA开发', link: 'fpga' },
          ],
        },
        {
          text: '其它',
          collapsed: true,
          base: '/interview-questions/',
          items: [
            { text: 'C/C++编程', link: 'cpp' },
            { text: '通信协议', link: 'protocols' },
            { text: '硬件设计', link: 'hardware' },
          ],
        },
      ],
      '/should-know/': [
        {
          text: '你应该知道',
          collapsed: false,
          items: [
            { text: '概述', link: '/should-know/' },
            
          ],
        },
        {
          text: 'SI/PI 信号与电源完整性',
          collapsed: false,
          items: [
            { text: 'AC 耦合', link: '/should-know/ac-coupling' },
            { text: '滤波器设计', link: '/should-know/filter-design' },
          ],
        },
        {
          text: 'Git 版本控制',
          collapsed: false,
          items: [
            { text: 'Github CI/CD', link: '/should-know/github-ci-cd' },
          ],
        }
      ],
      '/microcontrollers/': [
        {
          text: '微控制器 (MCU)',
          collapsed: false,
          items: [
            { text: '概述', link: '/microcontrollers/' },
            { text: 'STM32G0', link: '/microcontrollers/stm32g0' },
            { text: 'ESP32', link: '/microcontrollers/esp32' },
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