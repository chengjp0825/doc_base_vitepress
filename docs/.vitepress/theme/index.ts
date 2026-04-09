// docs/.vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import './style.css' // 引入我们自定义的 CSS 文件

export default {
  extends: DefaultTheme,
  // 如果以后需要扩展 Vue 组件或功能，也会写在这里
}