---
title: STM32G0 系列微控制器
---

# STM32G0 系列：超高清性价比入门选型 🛠️

> STM32G0 系列是基于 ARM Cortex-M0+ 内核的入门级 MCU，特别适合对 PCB 空间、功耗和成本有严苛要求的共享硬件项目。

## 1. 核心特性快速参考 ⚡

| 特性 | 参数值 | 备注 |
| :--- | :--- | :--- |
| **内核** | ARM Cortex-M0+ | 64 MHz |
| **工作电压** | 1.7V - 3.6V | 宽压支持 |
| **Flash** | 16KB - 512KB | |
| **RAM** | 8KB - 144KB | |
| **封装优势** | TSOP8, LQFP32/48/64 | 易于焊接与布线 |

## 2. 硬件连线与布线建议 📟

::: tip 极简电源设计
G0 系列大大减少了去耦电容的需求。在许多封装中，仅需单对 VDD/VSS 即可工作。在 PCB 设计时，请确保 `VDD` 近端有一个 `100nF` 的陶瓷电容。
:::

- **调试接口**：仅需两根线（SWDIO/SWCLK）。建议在 SWCLK 上串接一个 `100Ω` 电阻以减少震铃。
- **Boot 配置**：支持灵活的 Boot Pin 复用，默认从 Flash 启动。

## 3. 避坑指南/踩坑记录 🚧

⚠️ **必看：I/O 复用冲突**

- **现象**：在使用 `STM32G030` 时，发现 PA0 引脚无法正常拉高。
- **根由**：查阅数据手册第 46 页发现，该引脚默认复用了 `WKUP` 功能且内部下拉。
- **对策**：在 CubeMX 或代码中明确禁用 `PWR_WAKEUP_PIN1` 或确保初始化配置覆盖了默认模式。

## 4. 示例代码片段 (HAL库) 💻

```c
/* PA5 引脚输出初始化示例 */
void MX_GPIO_Init(void) {
    GPIO_InitTypeDef GPIO_InitStruct = {0};

    __HAL_RCC_GPIOA_CLK_ENABLE();

    /* 配置 PA5 为推挽输出 */
    GPIO_InitStruct.Pin = GPIO_PIN_5;
    GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP;
    GPIO_InitStruct.Pull = GPIO_NOPULL;
    GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
    HAL_GPIO_Init(GPIOA, &GPIO_InitStruct);
}
```

---

## 5. 相关参考链接

- [STM32G0 官方中文产品详情](https://www.st.com/zh/microcontrollers-microprocessors/stm32g0-series.html)
- [STM32CubeG0 固件包 (GitHub)](https://github.com/STMicroelectronics/STM32CubeG0)

---

> 社区共建者 @Admin 分享于 2024-04-08
