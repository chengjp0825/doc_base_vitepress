<script setup>
import { ref } from 'vue'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'

defineProps({
  items: {
    type: Array,
    required: true,
  }
})

// First item open by default
const openIndex = ref(0)

const toggle = (index) => {
  openIndex.value = openIndex.value === index ? -1 : index
}

// Markdown-it instance with highlight.js integration
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs-code"><code class="hljs language-${lang}">${hljs.highlight(str, { language: lang, ignoreIllegals: true }).value}</code></pre>`
      } catch {}
    }
    return `<pre class="hljs-code"><code class="hljs">${md.utils.escapeHtml(str)}</code></pre>`
  },
})

const renderMd = (content) => {
  if (!content) return ''
  return md.render(content)
}
</script>

<template>
  <div class="faq-card">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="faq-item"
      :class="{ 'is-open': openIndex === index }"
    >
      <button
        class="faq-question"
        :aria-expanded="openIndex === index"
        @click="toggle(index)"
      >
        <span class="faq-q-text">{{ item.question }}</span>
        <span
          class="faq-icon"
          :class="{ rotated: openIndex === index }"
          aria-hidden="true"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </button>

      <div class="faq-answer-wrap">
        <div class="faq-answer">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="markdown-body" v-html="renderMd(item.answer)"></div>
        </div>
      </div>

      <div v-if="index < items.length - 1" class="faq-sep"></div>
    </div>
  </div>
</template>

<style scoped>
.faq-card {
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
}

.faq-item {
  position: relative;
}

.faq-sep {
  height: 1px;
  background: var(--vp-c-border);
  margin: 0 1.25rem;
}

.faq-question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  padding: 1rem 1.25rem;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  font-size: 0.93rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  transition: color 0.15s ease, background 0.15s ease;
}

.faq-question:hover {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-mute);
}

.faq-q-text {
  flex: 1;
  line-height: 1.5;
}

.faq-icon {
  flex-shrink: 0;
  color: var(--vp-c-text-3);
  transition: transform 0.25s ease, color 0.15s ease;
}

.faq-icon.rotated {
  transform: rotate(180deg);
  color: var(--vp-c-brand-1);
}

/* Accordion animation via grid-template-rows */
.faq-answer-wrap {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.32s cubic-bezier(0.16, 1, 0.3, 1);
}

.faq-item.is-open .faq-answer-wrap {
  grid-template-rows: 1fr;
}

.faq-answer {
  min-height: 0;
  overflow: hidden;
  padding: 0 1.25rem 0;
}

.faq-item.is-open .faq-answer {
  padding-bottom: 1.25rem;
}

/* Markdown content styles */
.markdown-body {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  line-height: 1.75;
}

.markdown-body :deep(p) {
  margin: 0 0 0.65em;
}

.markdown-body :deep(p:last-child) {
  margin-bottom: 0;
}

.markdown-body :deep(code) {
  font-family: var(--vp-font-family-mono), ui-monospace, monospace;
  font-size: 0.85em;
  background: var(--vp-c-bg-mute);
  padding: 0.15em 0.4em;
  border-radius: 4px;
  color: var(--vp-c-brand-1);
}

.markdown-body :deep(pre) {
  background: var(--vp-c-bg-mute) !important;
  border-radius: 8px;
  overflow-x: auto;
  margin: 0.75em 0;
  padding: 1rem 1.25rem;
}

.markdown-body :deep(pre code) {
  background: none !important;
  padding: 0;
  font-size: 0.82rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

.markdown-body :deep(a) {
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.markdown-body :deep(a:hover) {
  text-decoration: underline;
}

.markdown-body :deep(strong) {
  color: var(--vp-c-text-1);
  font-weight: 600;
}

.markdown-body :deep(ul),
.markdown-body :deep(ol) {
  margin: 0.5em 0;
  padding-left: 1.5em;
}

.markdown-body :deep(li) {
  margin: 0.25em 0;
}

.markdown-body :deep(blockquote) {
  margin: 0.75em 0;
  padding: 0.5em 1em;
  border-left: 3px solid var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  border-radius: 0 6px 6px 0;
  color: var(--vp-c-text-2);
}

.markdown-body :deep(table) {
  border-collapse: collapse;
  width: 100%;
  margin: 0.75em 0;
  font-size: 0.88em;
}

.markdown-body :deep(th),
.markdown-body :deep(td) {
  border: 1px solid var(--vp-c-border);
  padding: 0.5em 0.75em;
  text-align: left;
}

.markdown-body :deep(th) {
  background: var(--vp-c-bg-mute);
  font-weight: 600;
  color: var(--vp-c-text-1);
}
</style>
