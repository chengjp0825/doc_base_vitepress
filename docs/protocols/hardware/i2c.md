---
title: I2C 通信协议
---

# I2C 总线标准

I2C (Inter-Integrated Circuit) 是由飞利浦 (Philips, 现 NXP) 开发的一种多主机、两线、双向串行计算机总线。

## I2C 总线协议详解

I2C 总线的 SDA 和 SCL 接口都必须配置为开漏输出（Open-Drain），并且在总线上外部连接上拉电阻。

::: warning ❓ 那我问你：为什么 I2C 必须用开漏输出，推挽输出不行吗？
面试官冷笑一声：“大家都知道 I2C 要加上拉电阻，那我问你，如果我非要把主控的引脚配置成推挽输出（Push-Pull），强行输出高低电平，会发生什么后果？”

::: details 💡 点击查看满分回答
**绝对不能用推挽输出！会导致主控烧毁。**

1. **线与逻辑冲突**：I2C 是多主机/多从机总线。如果两个设备同时通信，一个输出高电平（VCC），一个输出低电平（GND）。如果是推挽输出，这就相当于 VCC 和 GND 直接短路，瞬间的大电流会烧毁引脚。
2. **时钟同步（Clock Stretching）失效**：从机可以通过拉低 SCL 来暂停总线（让主机等待）。如果主机是推挽输出高电平，从机强行拉低，同样会导致短路。

**总结**：开漏输出 + 外部上拉，实现了天然的“线与（Wire-AND）”功能，既保证了多设备挂载的安全，又实现了仲裁和时钟同步机制。
:::

接下来继续正文的内容...

## 硬件拓扑结构

它仅需要两根信号线：
- **SDA (Serial Data Line)**: 串行数据线。
- **SCL (Serial Clock Line)**: 串行时钟线。

总线上的所有设备都并联在 SDA 和 SCL 上，并且这两根线都必须通过上拉电阻（通常 4.7kΩ）连接到逻辑高电平。由于使用的是开漏 (Open-Drain) 驱动方式，具有线与逻辑特性，可以避免多主机同时驱动时造成的短路。

## 上拉电阻演示效果

下面这个交互演示可以直观看到上拉电阻 Rp、总线电容 Cb、VDD 和通信速率变化时，对上升时间和灌电流的影响，由 Gemini-3.1 创作并持续维护。

<div class="i2c-sim-desktop">
<iframe
  src="/IIC.html"
  title="I2C 上拉电阻交互演示"
  style="width: 100%; height: 980px; border: 1px solid var(--vp-c-divider); border-radius: 12px; background: transparent;"
  loading="lazy"
></iframe>
</div>

<div class="i2c-sim-mobile-note">

::: warning 移动端说明
为保证阅读体验，交互仿真在移动端已隐藏。请使用平板或桌面端查看完整演示效果。
:::

</div>

::: tip 使用建议
如果你后续改成图床 URL，可以把上面的 src 从 /IIC.html 改成完整的 https 地址。
:::

## 时序

通信始终由主设备 (Master) 发起。主设备产生时钟信号 (SCL)。数据 (SDA) 只能在 SCL 为低电平时改变状态，在 SCL 为高电平时保持稳定以供采样。

### START 与 STOP 信号
- **START**: 当 SCL 为高电平期间，SDA 由高变低。
- **STOP**: 当 SCL 为高电平期间，SDA 由低变高。

## I2C 地址格式

<div class="static-tables">

I2C 设备地址由 7 位或 10 位组成，后面跟一位读写位 (R/W)。

<div class="table-responsive">
<table class="compact-table">
  <thead>
    <tr>
      <th>地址类型</th>
      <th>位数</th>
      <th>格式</th>
      <th>用途</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>7位地址</td>
      <td>8位 (7+1)</td>
      <td>[6:0] 设备地址 + [7] R/W</td>
      <td>标准设备，大多数传感器</td>
    </tr>
    <tr>
      <td>10位地址</td>
      <td>16位 (10+1+特殊)</td>
      <td>11110XX + [6:0] + R/W</td>
      <td>复杂设备，需要更多地址空间</td>
    </tr>
  </tbody>
</table>
</div>

## I2C 传输速度模式

<div class="table-responsive">
<table class="compact-table">
  <thead>
    <tr>
      <th>模式</th>
      <th>最大速率</th>
      <th>典型应用</th>
      <th>上拉电阻</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>标准模式 (SM)</td>
      <td>100 kbps</td>
      <td>一般传感器</td>
      <td>4.7kΩ</td>
    </tr>
    <tr>
      <td>快速模式 (FM)</td>
      <td>400 kbps</td>
      <td>显示屏、EEPROM</td>
      <td>1kΩ</td>
    </tr>
    <tr>
      <td>快速模式 Plus (FM+)</td>
      <td>1 Mbps</td>
      <td>高速传感器</td>
      <td>470Ω</td>
    </tr>
    <tr>
      <td>高速模式 (HS)</td>
      <td>3.4 Mbps</td>
      <td>视频设备</td>
      <td>特殊电路</td>
    </tr>
    <tr>
      <td>超高速模式 (UFm)</td>
      <td>5 Mbps</td>
      <td>未来应用</td>
      <td>待定</td>
    </tr>
  </tbody>
</table>
</div>

## I2C 信号时序参数

<div class="table-responsive">
  <table class="compact-table">
    <thead>
      <tr>
        <th>参数</th>
        <th>标准模式 (SM)</th>
        <th>快速模式 (FM)</th>
        <th>快速模式+ (FM+)</th>
        <th>单位</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>SCL 时钟频率 (f_SCL)</td>
        <td>0 - 100</td>
        <td>0 - 400</td>
        <td>0 - 1000</td>
        <td>kHz</td>
      </tr>
      <tr>
        <td>保持时间 (t_HD;STA)</td>
        <td>4.0</td>
        <td>0.6</td>
        <td>0.26</td>
        <td>μs</td>
      </tr>
      <tr>
        <td>设置时间 (t_SU;STA)</td>
        <td>4.7</td>
        <td>0.6</td>
        <td>0.26</td>
        <td>μs</td>
      </tr>
      <tr>
        <td>数据保持时间 (t_HD;DAT)</td>
        <td>0 (min)</td>
        <td>0 (min)</td>
        <td>0 (min)</td>
        <td>μs</td>
      </tr>
      <tr>
        <td>数据设置时间 (t_SU;DAT)</td>
        <td>250</td>
        <td>100</td>
        <td>50</td>
        <td>ns</td>
      </tr>
      <tr>
        <td>时钟低电平时间 (t_LOW)</td>
        <td>4.7</td>
        <td>1.3</td>
        <td>0.5</td>
        <td>μs</td>
      </tr>
      <tr>
        <td>时钟高电平时间 (t_HIGH)</td>
        <td>4.0</td>
        <td>0.6</td>
        <td>0.26</td>
        <td>μs</td>
      </tr>
    </tbody>
  </table>
</div>

## 常见 I2C 设备类型

<div class="card-table">
  <div class="card-table-item">
    <h4>📊 传感器</h4>
    <p>温度、湿度、压力、加速度计等。典型地址：0x40-0x4F 范围。</p>
  </div>
  <div class="card-table-item">
    <h4>💾 存储器</h4>
    <p>EEPROM、FRAM。支持页写入和随机读取。</p>
  </div>
  <div class="card-table-item">
    <h4>🖥️ 显示器</h4>
    <p>OLED、LCD 控制器。支持高速数据传输。</p>
  </div>
  <div class="card-table-item">
    <h4>🔌 扩展器</h4>
    <p>IO 扩展、ADC/DAC。增加系统 IO 能力。</p>
  </div>
  <div class="card-table-item">
    <h4>⚡ 电源管理</h4>
    <p>电压调节器、电池监控。系统电源控制。</p>
  </div>
  <div class="card-table-item">
    <h4>🎛️ 音频设备</h4>
    <p>CODEC、音量控制器。音频信号处理。</p>
  </div>
</div>

</div>

---

## 相关文章

- [STM32G0 系列：入门级 MCU 选型与实践](../../microcontrollers/stm32g0.md)
- [AC 耦合：高速链路中的基础技巧](../../should-know/si-pi/ac-coupling.md)