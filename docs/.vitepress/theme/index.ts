// docs/.vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    if (!import.meta.env.SSR) {
      import('medium-zoom').then((mediumZoom) => {
        mediumZoom.default('img', {
          margin: 24,
          background: 'rgba(0,0,0,0.85)'
        })
      })
    }
  }
}