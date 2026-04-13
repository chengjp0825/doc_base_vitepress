// docs/.vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import KnowledgeGraph from '../components/KnowledgeGraph.vue'
import './style.css'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('KnowledgeGraph', KnowledgeGraph)

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