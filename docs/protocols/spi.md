---
title: SPI 通信协议
---

# SPI 总线标准

SPI (Serial Peripheral Interface) 是由摩托罗拉公司开发的一种全双工、同步、四线串行通信总线。

## 信号线定义

它通常依赖四根线通信：
- **SCLK (Serial Clock)**: 由主设备生成的时钟信号。
- **MOSI (Master Out Slave In)**: 主设备发送数据给从设备。
- **MISO (Master In Slave Out)**: 从设备发送数据给主设备。
- **CS 或 SS (Chip Select / Slave Select)**: 激活某个特定的从设备，通常低电平有效。

## 与 I2C 的对比

<div class="static-tables">

| 对比维度 | I2C | SPI |
| --- | --- | --- |
| 传输速度 | 较慢 (标准 100kbps, 高速 3.4Mbps) | 极快 (通常 10MHz - 50MHz+) |
| 引脚数量 | 仅需 2 根 | 至少 4 根（多从机会增加 CS 数量） |
| 通信方式 | 半双工 | 全双工 |
| 拓扑支持 | 支持真正多主机 | 通常是单主机，多从机菊花链或星型 |

</div>
