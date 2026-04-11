// docs/.vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import mediumZoom from 'medium-zoom'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    mediumZoom('img', {
      margin: 24,
      background: 'rgba(0,0,0,0.85)'
    })
  }
}