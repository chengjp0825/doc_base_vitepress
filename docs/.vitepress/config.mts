import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid({
  lang: 'zh-CN',
  title: 'NoteHub',
  description: '笔记与技术分享',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'alternate icon', href: '/favicon.svg' }]
  ],

  // 1. 配置 Markdown
  markdown: {
    math: true
  },

  // Mermaid 插件配置

  themeConfig: {
    logo: '/favicon.svg', 
    lastUpdated: {
      text: '最后更新于'
    },

    outline: {
      level: [2, 3],
      label: 'On this page' // 可选：自定义大纲标题
    },

    // 2. 开启本地搜索
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

    // 3. 导航栏配置
    nav: [
      { text: '首页', link: '/' },
      { text: '投稿规范', link: '/CONTRIBUTING' },
      { text: '那我问你', link: '/interview-questions/' },
      { text: '你知道吗', link: '/should-know/' },
      { text: '微控制器', link: '/microcontrollers/' },
      { text: 'FPGA', link: '/fpga/' },
      { text: '通信协议', link: '/protocols/' },
    ],

    // 4. 侧边栏配置
    sidebar: {
      '/contributing/': [
        {
          text: '投稿规范',
          collapsed: false,
          items: [
            { text: '概述', link: '/contributing/' },
            { text: '模板文件', link: '/TEMPLATE' },
            { text: '排版与组件', link: '/contributing/formatting' },
            { text: '内容结构', link: '/contributing/structure' },
            { text: 'GitHub 新手教程', link: '/contributing/github-guide' },
            { text: '常见问题', link: '/contributing/faq' },
          ],
        },
      ],
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
          text: '你知道吗',
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
            { text: '差分信号', link: '/should-know/differential-signaling-lvds' },
            { text: '预加重与去加重', link: '/should-know/pre-emphasis-de-emphasis' },
            { text: '滤波器设计', link: '/should-know/filter-design' },
          ],
        },
        {
          text: 'Git 版本控制',
          collapsed: false,
          items: [
            { text: 'Github CI/CD', link: '/should-know/github-ci-cd' },
          ],
        },
        {
          text: '云服务',
          collapsed: false,
          items: [
            { text: '个人云端极速同步方案', link: '/should-know/personal-cloud-sync' },
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
        {
          text: '网络与远程协议',
          collapsed: false,
          items: [
            { text: 'SSH 协议', link: '/protocols/ssh' },
            { text: 'HTTP 协议', link: '/protocols/http' },
            { text: 'SSL/TLS 协议', link: '/protocols/tls' },
            { text: 'HTTPS 协议', link: '/protocols/https' },
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