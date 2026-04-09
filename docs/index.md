---
layout: home

hero:
  name: "Notes Hub"
  text: "不止于 Datasheet 的开源社区"
  tagline: "汇集全网硬件极客的踩坑实录、底层原理解析与硬核面试指南"
  actions:
    - theme: brand
      text: 🚀 探索知识库
      link: /microcontrollers/
    - theme: alt
      text: ⚔️ 开启八股拷打
      link: /interview/
features:
  - title: 🚫 拒绝“机翻”手册
    details: 每一篇笔记都源于真实的示波器波形与深夜调板子的血泪史，专注解决 Datasheet 里语焉不详的“玄学”问题。
  - title: 🧠 实战与八股闭环
    details: 将底层协议与大厂高频面试题深度绑定，在真实场景中理解考点，助你不仅能画板子，更能吊打面试官。
  - title: 🤝 精神与共建
    details: 无论是修正一个错别字，还是提供一段独家的 I2C 死锁恢复代码，你的每一次 PR 都在拯救下一位熬夜的同门。
---

<style>
/* 基础容器样式 */
.community-section {
  max-width: 1152px;
  margin: 4rem auto 0;
  padding: 2rem 1.5rem;
  border-top: 1px solid var(--vp-c-divider);
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.section-header p {
  color: var(--vp-c-text-2);
  font-size: 1.1rem;
}

/* 优势卡片网格 */
.advantage-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.adv-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;
}

.adv-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; height: 4px;
  background: var(--vp-c-brand-1);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.adv-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.1);
}

.adv-card:hover::before {
  transform: scaleX(1);
}

.adv-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: inline-block;
}

.adv-card h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.adv-card p {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

/* 加入社区横幅 */
.join-banner {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%);
  border: 1px solid var(--vp-c-border);
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  margin-top: 4rem;
}

.join-banner h2 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.join-banner p {
  color: var(--vp-c-text-2);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 2rem;
}

.btn-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary, .btn-secondary {
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s;
}

.btn-primary {
  background-color: var(--vp-c-brand-1);
  color: white;
}

.btn-primary:hover {
  background-color: var(--vp-c-brand-2);
  color: white;
}

.btn-secondary {
  background-color: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-border);
}

.btn-secondary:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
</style>

<div class="community-section" style="border-top: none; margin-top: 2rem;">
  <div class="section-header">
    <h2>为什么选择加入我们？</h2>
    <p>告别单打独斗，这里有你最需要的硬核支持</p>
  </div>
  
  <div class="advantage-grid">
    <div class="adv-card">
      <span class="adv-icon">🛠️</span>
      <h3>避坑指南针</h3>
      <p>收录从 MCU 睡眠漏电到 I2C 死锁的真实踩坑案例，帮你省下几天几夜排查 Bug 的时间，绝不纸上谈兵。</p>
    </div>
    <div class="adv-card">
      <span class="adv-icon">🎯</span>
      <h3>面试神助攻</h3>
      <p>精心打磨的“防不胜防”式穿插八股拷打，带你在底层协议的上下文中理解考点，面试官再怎么深挖也不慌。</p>
    </div>
    <div class="adv-card">
      <span class="adv-icon">🔄</span>
      <h3>内容永远鲜活</h3>
      <p>依托 GitHub PR 机制，任何一个错误和遗漏都会被社区大牛迅速指正和补充。这是一本“活”的硬件手册。</p>
    </div>
    <div class="adv-card">
      <span class="adv-icon">☕</span>
      <h3>高质量交流圈</h3>
      <p>没有无意义的水群闲聊，只有拿着波形图和逻辑分析仪截图就事论事的纯粹探讨，遇到疑难杂症随时摇人。</p>
    </div>
  </div>
</div>

<div class="community-section" style="padding-top: 0;">
  <div class="join-banner">
    <h2>拒绝当孤狼，成为共建者</h2>
    <p>不论你是刚入门点亮 LED 的萌新，还是在芯片原厂摸爬滚打多年的老兵，这里都欢迎你的声音。</p>
    <div class="btn-group">
      <a href="https://github.com/你的用户名/你的仓库名" class="btn-primary" target="_blank">⭐ 前往 GitHub 点亮 Star</a>
      <a href="#" class="btn-secondary">💬 获取进群二维码</a>
    </div>
  </div>
</div>