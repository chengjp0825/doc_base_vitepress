---
title: 微控制器 (MCU) 概览
icon: microchip
---

# 微控制器基础架构

微控制器（Microcontroller Unit, MCU）是将计算机的 CPU、RAM、ROM、定时器和多种 I/O 接口集成在一块芯片上的微型计算机。

## 典型架构

现代 MCUUUUU 大多采用哈佛架构或冯·诺依曼架构。在嵌入式领域，基于 ARM Cortex-M 核心的 MCU 占据了主导地位。

### 核心参数评估
在为项目选型时，通常需要考虑以下关键指标：
- **主频 (Clock Speed)**: 决定处理能力，从几 MHz 到几百 MHz 不等。
- **内存容量 (Flash & SRAM)**: 固件和运行时变量的最大可用空间。
- **外设接口**: I2C, SPI, UART, CAN, USB 等协议支持。
- **功耗**: 待机功耗和运行功耗（在电池供电项目中尤为重要）。

## 本章节涵盖的芯片
- [STM32G0 系列](./stm32g0.md) (ARM Cortex-M0+)
- [ESP32](./esp32.md) (Xtensa Dual-Core 32-bit LX6)
