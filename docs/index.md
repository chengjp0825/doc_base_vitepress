---
layout: home

hero:
  name: "NoteHub"
  text: "别在手册里找答案了，这儿有活人。"
  tagline: "比 Datasheet 更懂人类。这是一个拒绝‘纸上谈兵’的极客窝点，专治各种协议死锁、MCU 漏电及面试官的无理取闹。"
  actions:
    - theme: brand
      text: 🧊 潜入知识库
      link: /microcontrollers/
    - theme: alt
      text: 🥊 接受八股拷打
      link: /under-construction/
---

<style>
/* =========================================
   Diataxis 纯 CSS 原生坐标系架构
   ========================================= */
.diataxis-wrapper {
  max-width: 900px;
  margin: 4rem auto 2rem;
  padding: 3rem 2rem 4rem;
  background: var(--vp-c-bg-soft);
  border-radius: 16px;
  border: 1px solid var(--vp-c-border);
  position: relative;
}

.diataxis-header {
  text-align: center;
  margin-bottom: 4rem;
}

.diataxis-header h2 {
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.diataxis-header p {
  color: var(--vp-c-text-2);
  font-size: 1rem;
}

/* 核心坐标网格 */
.diataxis-core {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 700px;
  margin: 0 auto;
}

/* 绘制十字轴线 */
.diataxis-core::before { /* 纵轴 */
  content: '';
  position: absolute;
  top: -30px; bottom: -30px; left: 50%;
  width: 1px;
  background: var(--vp-c-brand-1);
  transform: translateX(-50%);
  z-index: 1;
  opacity: 0.6;
}
.diataxis-core::after { /* 横轴 */
  content: '';
  position: absolute;
  top: 50%; left: -30px; right: -30px;
  height: 1px;
  background: var(--vp-c-brand-1);
  transform: translateY(-50%);
  z-index: 1;
  opacity: 0.6;
}

/* 象限基础样式 */
.quadrant {
  position: relative;
  z-index: 2;
  padding: 2.5rem;
  background: transparent;
  transition: transform 0.3s ease;
}

.quadrant:hover {
  transform: scale(1.02);
}

.quadrant h3 { 
  font-size: 1.6rem; 
  font-weight: 700; 
  margin: 0 0 0.5rem 0; 
  color: var(--vp-c-text-1);
}
.quadrant .type { 
  font-size: 1.1rem; 
  color: var(--vp-c-brand-1); 
  font-weight: 600; 
  margin-bottom: 0.5rem; 
  display: block;
}
.quadrant .desc { 
  font-size: 0.9rem; 
  color: var(--vp-c-text-2); 
  line-height: 1.5;
}

/* 象限精准对齐排版 */
.q-tl { text-align: right; padding-right: 3rem; }
.q-tr { text-align: left; padding-left: 3rem; }
.q-bl { text-align: right; padding-right: 3rem; }
.q-br { text-align: left; padding-left: 3rem; }

/* 坐标轴标签文本 */
.axis-label {
  position: absolute;
  background: var(--vp-c-bg-soft); /* 遮挡线条产生断点效果 */
  color: var(--vp-c-text-2);
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.4rem 1rem;
  z-index: 3;
  letter-spacing: 0.05em;
  border-radius: 4px;
}
.axis-y-top { top: -45px; left: 50%; transform: translateX(-50%); }
.axis-y-bottom { bottom: -45px; left: 50%; transform: translateX(-50%); }
.axis-x-left { top: 50%; left: -60px; transform: translateY(-50%); }
.axis-x-right { top: 50%; right: -60px; transform: translateY(-50%); }

/* =========================================
   其他基础板块样式
   ========================================= */
.community-section {
  max-width: 1152px;
  margin: 4rem auto 0;
  padding: 2rem 1.5rem;
}

.section-header { text-align: center; margin-bottom: 3rem; }
.section-header h2 { font-size: 1.8rem; font-weight: 700; margin-bottom: 0.5rem; }
.section-header p { color: var(--vp-c-text-2); font-size: 1.1rem; }

/* 优势卡片网格 */
.advantage-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}
.adv-card {
  background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-border);
  padding: 2rem; border-radius: 16px; text-align: center;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative; overflow: hidden;
}
.adv-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
  background: var(--vp-c-brand-1); transform: scaleX(0); transform-origin: left;
  transition: transform 0.3s ease;
}
.adv-card:hover { border-color: var(--vp-c-brand-1); transform: translateY(-5px); box-shadow: 0 10px 30px rgba(59, 130, 246, 0.1); }
.adv-card:hover::before { transform: scaleX(1); }
.adv-icon { font-size: 2.5rem; margin-bottom: 1rem; display: inline-block; }
.adv-card h3 { font-size: 1.2rem; font-weight: 600; margin-bottom: 1rem; }
.adv-card p { font-size: 0.95rem; color: var(--vp-c-text-2); line-height: 1.6; }

/* 底部 Banner */
.join-banner {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%);
  border: 1px solid var(--vp-c-border); border-radius: 16px;
  padding: 3rem 2rem; text-align: center;
}
.join-banner h2 { font-size: 1.8rem; font-weight: 700; margin-bottom: 1rem; }
.join-banner p { color: var(--vp-c-text-2); font-size: 1.1rem; max-width: 600px; margin: 0 auto 2rem; }
.btn-group { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
.btn-primary, .btn-secondary { padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; text-decoration: none; transition: all 0.2s; }
.btn-primary { background-color: var(--vp-c-brand-1); color: white !important; }
.btn-primary:hover { background-color: var(--vp-c-brand-2); }
.btn-secondary { background-color: var(--vp-c-bg-alt); color: var(--vp-c-text-1) !important; border: 1px solid var(--vp-c-border); }
.btn-secondary:hover { border-color: var(--vp-c-brand-1); color: var(--vp-c-brand-1) !important; }

/* 移动端响应式降级 */
@media (max-width: 768px) {
  .diataxis-core { grid-template-columns: 1fr; gap: 1rem; }
  .diataxis-core::before, .diataxis-core::after, .axis-label { display: none; }
  .quadrant { text-align: center !important; padding: 1.5rem !important; border: 1px solid var(--vp-c-border); border-radius: 8px; }
}
</style>

<div class="diataxis-wrapper">
  <div class="diataxis-header">
    <h2>拒绝杂乱，以此为界</h2>
    <p>我们把知识关进四个笼子，确保你找东西时不再像大海捞针</p>
  </div>

  <div class="diataxis-core">
  <span class="axis-label axis-y-top">动手整活 Action</span>
  <span class="axis-label axis-y-bottom">脑力按摩 Theory</span>
  <span class="axis-label axis-x-left">小白通关 Learning</span>
  <span class="axis-label axis-x-right">老鸟救急 Working</span>
  <div class="quadrant q-tl">
    <h3>Tutorials</h3>
    <span class="type">新手村班车</span>
    <span class="desc">带你从 0 点亮 LED 到手搓底层闭环，不卖关子，只讲干货。</span>
  </div>
  <div class="quadrant q-tr">
    <h3>How-to Guides</h3>
    <span class="type">救火手册</span>
    <span class="desc">深夜 2 点 I2C 挂死了？别急着摔板子，先看这里的精准排错 SOP。</span>
  </div>
  <div class="quadrant q-bl">
    <h3>Explanation</h3>
    <span class="type">硬核拆解</span>
    <span class="desc">深挖底层逻辑。不仅要知其然，还要揭露那些 Datasheet 没敢写的真相。</span>
  </div>
  <div class="quadrant q-br">
    <h3>Reference</h3>
    <span class="type">极速弹药库</span>
    <span class="desc">寄存器配置模板与 API 速查。拒绝套路，CV 工程师的快乐源泉。</span>
  </div>
</div>
</div>

<div class="community-section" style="border-top: none; padding-top: 0;">
  <div class="section-header">
    <h2>为什么选择加入我们？</h2>
    <p>告别单打独斗，这里有你最需要的硬核火力支援</p>
  </div>
  
  <div class="advantage-grid">
    <div class="adv-card">
      <span class="adv-icon">🪦</span>
      <h3>Bug 墓地</h3>
      <p>这里埋葬着无数前辈踩过的坑。从睡眠漏电到 DMA 冲突，看一眼少掉两根头发，帮你省下几天几夜的排查时间。</p>
    </div>
    <div class="adv-card">
      <span class="adv-icon">🎯</span>
      <h3>反向拷打指南</h3>
      <p>别背答案，要背逻辑。把底层原理揉碎了喂给你，面试时带入上下文，让面试官觉得他才是那个外行。</p>
    </div>
    <div class="adv-card">
      <span class="adv-icon">🔄</span>
      <h3>永不离线的 Patch</h3>
      <p>依托 GitHub 自动化的 CI/CD 与 PR 机制。发现错误？直接提 PR 扇我们脸。这是一本会自我进化的技术资产。</p>
    </div>
    <div class="adv-card">
      <span class="adv-icon">📈</span>
      <h3>波形图社交</h3>
      <p>拒绝“在吗”、“大神求助”等无意义水群。在这里，逻辑分析仪的截图就是通用货币，遇到疑难杂症随时摇人。</p>
    </div>
  </div>
</div>

<div class="community-section">
  <div class="join-banner">
    <h2>别再独自修仙了，拉兄弟一把</h2>
    <p>不论你是刚点亮 LED 的萌新，还是能手撕汇编的老兵。这里没有权威，只有对技术的敬畏和对 Bug 的鄙视。每一次 PR，都在拯救下一位被折磨的同门。</p>
    <div class="btn-group">
      <a href="https://github.com/你的用户名/NoteHub" class="btn-primary" target="_blank">⭐ 前往 GitHub 提个 PR</a>
      <a href="#" class="btn-secondary">💬 获取进群二维码</a>
    </div>
  </div>
</div>