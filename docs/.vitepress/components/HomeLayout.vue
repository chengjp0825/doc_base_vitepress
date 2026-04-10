<script setup>
import { nextTick, ref } from 'vue'

const terminalInput = ref(null)
const terminalBody = ref(null)
const currentCommand = ref('')

const terminalLogs = ref([
  { type: 'info', text: 'NoteHub OS v1.0.0 (x86_64-linux-gnu)' },
  { type: 'info', text: 'Establishing secure connection to main branch... [OK]' },
  { type: 'warn', text: '警告：检测到野生 Bug。你的每一次 Commit 都在拯救同门。' },
  { type: 'success', text: '输入 `help` 查看可用命令，或输入 `join` 获取联机大厅坐标。' }
])

const focusInput = () => {
  if (terminalInput.value)
    terminalInput.value.focus()
}

const executeCommand = async () => {
  const cmd = currentCommand.value.trim()
  if (!cmd)
    return

  terminalLogs.value.push({ type: 'input', text: cmd })
  currentCommand.value = ''

  const commandLower = cmd.toLowerCase()
  switch (commandLower) {
    case 'help':
      terminalLogs.value.push(
        { type: 'success', text: 'AVAILABLE COMMANDS:' },
        { type: 'info', text: '  help   - 打印此帮助信息' },
        { type: 'info', text: '  join   - 获取 GitHub 仓库链接与交流群入口' },
        { type: 'info', text: '  buffs  - 扫描社区联机增益模块' },
        { type: 'info', text: '  clear  - 清屏 (掉 SAN 值恢复)' }
      )
      break
    case 'join':
      terminalLogs.value.push(
        { type: 'success', text: '>_ 正在生成跃迁门...' },
        { type: 'info', text: '🔗 GitHub 仓库: https://github.com/你的用户名/NoteHub' },
        { type: 'info', text: '💬 交流群入口: [在此处替换为二维码或链接]' }
      )
      break
    case 'buffs':
      terminalLogs.value.push(
        { type: 'success', text: '已挂载的服务器增益：' },
        { type: 'info', text: '- [Bug 墓地] 免疫 30% 硬件踩坑伤害' },
        { type: 'info', text: '- [反向拷打] 面试气场提升 50%' }
      )
      break
    case 'clear':
      terminalLogs.value = []
      break
    default:
      terminalLogs.value.push({ type: 'warn', text: `bash: ${cmd}: command not found. 输入 'help' 查看指令。` })
  }

  await nextTick()
  if (terminalBody.value) {
    terminalBody.value.scrollTop = terminalBody.value.scrollHeight
  }
}
</script>

<template>
  <div class="geek-home-container">
    <div class="geek-section">
      <h2 class="section-title">知识收容协议 (Diátaxis)</h2>
      <div class="section-subtitle">> SYSTEM INFO: 结构化挂载中，确保排障时不再像无头苍蝇乱撞</div>

      <div class="bento-grid">
        <div class="bento-card card-tutorials">
          <span class="bento-bg-code">01</span>
          <span class="bento-badge">Learning / Action</span>
          <h3>主线通关 (Tutorials)</h3>
          <p>带你从点亮第一颗 LED 到手搓 Linux 驱动底层架构的完整闭环。绝不卖关子，全是经过示波器验证的干货。</p>
        </div>

        <div class="bento-card card-howto">
          <span class="bento-bg-code">02</span>
          <span class="bento-badge">Working / Action</span>
          <h3>救火手册 (How-to)</h3>
          <p>深夜排查 GT 收发器死锁？I2C 挂载无响应？<br><br>别急着摔板子，这里提供针对真实翻车现场的精准排错 SOP，直接抄作业。</p>
        </div>

        <div class="bento-card card-explain">
          <span class="bento-bg-code">03</span>
          <span class="bento-badge">Learning / Theory</span>
          <h3>设定集 (Explanation)</h3>
          <p>深挖底层逻辑与彩蛋。不仅要知其然，还要扒开 8b/10b 编解码背后那些隐秘的真相。</p>
        </div>

        <div class="bento-card card-reference">
          <span class="bento-bg-code">04</span>
          <span class="bento-badge">Working / Theory</span>
          <h3>物理外挂 (Reference)</h3>
          <p>高频寄存器配置模板、引脚复用字典与 API 源码速查。拒绝繁文缛节，CV 工程师的快乐源泉。</p>
        </div>
      </div>
    </div>

    <div class="geek-section">
      <h2 class="section-title">服务器联机增益</h2>
      <div class="section-subtitle">> STATUS: 告别单机闭门造车，已为你接通硬核火力支援</div>

      <div class="buff-grid">
        <div class="buff-item">
          <span class="buff-icon">🪦</span>
          <h4>Bug 墓地 (掉 SAN 预警)</h4>
          <p>埋葬着无数前辈的血泪史。从 FPGA 综合报错到 CML 串扰，看一眼少掉两根头发。</p>
        </div>
        <div class="buff-item">
          <span class="buff-icon">🎯</span>
          <h4>反向拷打指南</h4>
          <p>重构你的底层逻辑。带入 C++ 架构的工程视角，面试时气场全开，让面试官怀疑人生。</p>
        </div>
        <div class="buff-item">
          <span class="buff-icon">🔄</span>
          <h4>永不宕机的 Patch</h4>
          <p>发现文档有错或触及盲区？别忍着，直接提 PR 糊我脸上。一本由玩家共同进化的活文档。</p>
        </div>
        <div class="buff-item">
          <span class="buff-icon">📈</span>
          <h4>波形图社交</h4>
          <p>屏蔽闲聊水群。逻辑分析仪截图和 PCB 走线就是这里的唯一货币，疑难杂症随时摇人。</p>
        </div>
      </div>

      <div class="mobile-cta">
        <p>移动端已优化：隐藏终端展示，直接触达 PR 与群聊入口。</p>
        <div class="mobile-cta-buttons">
          <a href="https://github.com/你的用户名/NoteHub" class="term-btn btn-git" target="_blank">发起 PR</a>
          <a href="#" class="term-btn btn-chat">加入群聊</a>
        </div>
      </div>
    </div>

    <div class="geek-section">
      <div class="action-console">
        <div class="console-head">
          <div class="dots"><i></i><i></i><i></i></div>
          <span>bash - notehub_join_raid.sh</span>
        </div>

        <div class="console-body" ref="terminalBody" @click="focusInput">
          <div v-for="(log, index) in terminalLogs" :key="index" class="log-line">
            <template v-if="log.type === 'input'">
              <span class="prompt">root@notehub:~#</span> <span class="cmd-text">{{ log.text }}</span>
            </template>
            <template v-else-if="log.type === 'info'">
              <span class="sys-msg">{{ log.text }}</span>
            </template>
            <template v-else-if="log.type === 'warn'">
              <span class="sys-warn">{{ log.text }}</span>
            </template>
            <template v-else-if="log.type === 'success'">
              <span class="sys-success">{{ log.text }}</span>
            </template>
          </div>

          <div class="input-line">
            <span class="prompt">root@notehub:~#</span>
            <input 
              ref="terminalInput"
              type="text" 
              v-model="currentCommand" 
              @keydown.enter="executeCommand"
              spellcheck="false"
              autocomplete="off"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* =========================================
   全局极客风变量与动画
   ========================================= */
.geek-home-container {
  --bento-gap: 1.5rem;
  --radius-lg: 20px;
  --transition-fast: 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
  padding-bottom: 4rem;
  font-family: Inter, 'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif;
}

.geek-section {
  max-width: 1000px;
  margin: 5rem auto;
  padding: 0 2rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
  letter-spacing: 0.08em;
  font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif;
}
.section-subtitle {
  text-align: center;
  color: var(--vp-c-text-2);
  margin-bottom: 3rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
}

/* =========================================
   Bento Box (便当盒) 布局 - Diataxis
   ========================================= */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--bento-gap);
  grid-auto-rows: minmax(180px, auto);
}

.bento-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: var(--radius-lg);
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: transform var(--transition-fast), border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.bento-card:hover {
  transform: translateY(-4px);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 12px 32px rgba(var(--vp-button-brand-bg), 0.1);
}

/* 非对称网格划分 */
.card-tutorials { grid-column: span 2; grid-row: span 1; }
.card-howto     { grid-column: span 1; grid-row: span 2; }
.card-explain   { grid-column: span 1; grid-row: span 1; }
.card-reference { grid-column: span 2; grid-row: span 1; }

.bento-badge {
  display: inline-block;
  padding: 0.2rem 0.8rem;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 20px;
  background: var(--vp-c-default-soft);
  color: var(--vp-c-brand-1);
  margin-bottom: 1rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
}

.bento-card h3 { font-size: 1.5rem; font-weight: 700; margin-bottom: 0.8rem; font-family: inherit; }
.bento-card p { color: var(--vp-c-text-2); font-size: 0.98rem; line-height: 1.75; margin: 0; font-family: inherit; }

/* 装饰性底层代码水印 */
.bento-bg-code {
  position: absolute;
  right: -10px;
  bottom: -20px;
  font-size: 6rem;
  opacity: 0.03;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
  pointer-events: none;
  font-weight: 900;
  line-height: 1;
}

/* =========================================
   联机增益 (社区优势) - 悬浮词条
   ========================================= */
.buff-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.buff-item {
  padding: 1.5rem;
  border-left: 4px solid var(--vp-c-brand-1);
  background: linear-gradient(90deg, var(--vp-c-bg-soft) 0%, transparent 100%);
  border-radius: 0 12px 12px 0;
}
.buff-icon { font-size: 2rem; margin-bottom: 0.5rem; display: block; }
.buff-item h4 { font-size: 1.15rem; font-weight: 700; margin-bottom: 0.5rem; font-family: inherit; }
.buff-item p { font-size: 0.95rem; color: var(--vp-c-text-2); line-height: 1.75; margin: 0; font-family: inherit; }

/* =========================================
   Terminal 控制台 - CTA
   ========================================= */
.action-console { background: #0d1117; border-radius: 12px; border: 1px solid #30363d; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.3); display: flex; flex-direction: column; margin-top: 2rem; }
.console-head { background: #161b22; padding: 1rem 1.5rem; display: flex; align-items: center; gap: 1rem; border-bottom: 1px solid #30363d; }
.dots { display: flex; gap: 8px; }
.dots i { width: 12px; height: 12px; border-radius: 50%; background: #ff5f56; }
.dots i:nth-child(2) { background: #ffbd2e; }
.dots i:nth-child(3) { background: #27c93f; }
.console-head span { color: #8b949e; font-family: 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Fira Code', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace; font-size: 0.92rem; font-weight: 600; letter-spacing: 0.01em; }
.console-body { padding: 1.5rem 2rem; font-family: 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Fira Code', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace; font-size: 0.97rem; line-height: 1.75; min-height: 250px; max-height: 400px; overflow-y: auto; cursor: text; background: #0d1117; color: #f0f6fc; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
.log-line { margin-bottom: 0.7rem; }
.input-line { display: flex; align-items: center; margin-top: 0.75rem; }
.prompt { color: #7ee787; margin-right: 0.75rem; font-weight: 700; white-space: nowrap; }
.cmd-text { color: #f0f6fc; }
.sys-msg { color: #8b949e; }
.sys-warn { color: #ffbd2e; font-weight: 600; }
.sys-success { color: #00f0ff; }
.input-line input { background: transparent; border: none; outline: none; color: #f0f6fc; font-family: 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Fira Code', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace; font-size: 0.97rem; line-height: 1.75; flex: 1; caret-color: #7ee787; }
.console-body::-webkit-scrollbar { width: 8px; }
.console-body::-webkit-scrollbar-track { background: transparent; }
.console-body::-webkit-scrollbar-thumb { background: #30363d; border-radius: 4px; }

.terminal-line { margin-bottom: 0.75rem; z-index: 1; display: flex; flex-wrap: wrap; align-items: center; }
.terminal-line span { color: #c9d1d9; }
.terminal-line--info span { color: #a8b0c5; }
.terminal-line--warn span { color: #ffbd2e; }
.terminal-line--success span { color: #7ee787; }
.terminal-line--input span { color: #ffffff; }

.terminal-input-bar {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-top: auto;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255,255,255,0.08);
  z-index: 1;
}
.terminal-input {
  flex: 1;
  background: transparent;
  border: none;
  color: #eaf0ff;
  font: inherit;
  outline: none;
  min-width: 0;
}
.terminal-input::placeholder {
  color: rgba(234, 240, 255, 0.45);
}

.term-actions { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: flex-start; margin-top: auto; z-index: 1; }
.term-btn {
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-family: -apple-system, sans-serif;
  text-decoration: none;
  transition: 0.2s;
}
.btn-git { background: #ea4aaa; color: white !important; }
.btn-git:hover { background: #d03d96; }
.btn-chat { background: transparent; border: 1px solid #8b949e; color: #c9d1d9 !important; }
.btn-chat:hover { border-color: #c9d1d9; background: rgba(255,255,255,0.05); }

.mobile-cta {
  display: none;
  max-width: 720px;
  margin: 2rem auto 0;
  padding: 1.5rem 1.75rem;
  border: 1px solid var(--vp-c-border);
  border-radius: var(--radius-lg);
  background: var(--vp-c-bg-soft);
  text-align: center;
}
.mobile-cta p {
  margin: 0 0 1rem;
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
}
.mobile-cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

/* 移动端降级 */
@media (max-width: 768px) {
  .bento-grid { grid-template-columns: 1fr; }
  .card-tutorials, .card-howto, .card-explain, .card-reference { grid-column: span 1; grid-row: auto; }
  .terminal-wrapper { display: none; }
  .mobile-cta { display: block; }
}
</style>