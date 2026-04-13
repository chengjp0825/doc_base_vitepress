---
title: 排版与组件
---

# 排版与组件

这一页专门讲正文怎么写得统一、易读，并符合 NoteHub 的风格。

## 基本排版要求

- 使用中文全角标点。
- 中英文和数字之间建议保留一个空格。
- 正文请从二级标题开始。
- 文件命名统一使用小写字母和连字符。

## 内容组件规范

推荐使用 VitePress 的容器来表达语气和层级。

### 源码示例

```markdown
::: tip 设计小贴士
这里可以写一些你发现的巧妙电路连接方式。
:::

::: warning 注意事项
调试时注意区分 3.3V 和 5V 电平，避免烧毁芯片。
:::

::: danger 危险操作
接错电源正负极会直接烧毁晶振与芯片本体！
:::
```

### 渲染效果示例

::: tip 设计小贴士
这里可以写一些你发现的巧妙电路连接方式。
:::

::: warning 注意事项
调试时注意区分 3.3V 和 5V 电平，避免烧毁芯片。
:::

::: danger 危险操作
接错电源正负极会直接烧毁晶振与芯片本体！
:::

## 代码块

```markdown
// 优先采用清晰的注释，描述寄存器操作的目的
RCC->IOPENR |= RCC_IOPENR_GPIOAEN; // 开启 GPIOA 端口时钟
```

## 公式

### 源码示例

```markdown

行内简式（简单变量）：$V$、$I$、$R$

块级公式（复杂表达）：

$$
f = \frac{1}{2\pi RC}
$$

$$
V_{out} = V_{in} \cdot \frac{R_2}{R_1 + R_2}
$$
```

### 渲染效果示例

行内简式（简单变量）：$V$、$I$、$R$

块级公式（复杂表达）：

$$
f = \frac{1}{2\pi RC}
$$

$$
V_{out} = V_{in} \cdot \frac{R_2}{R_1 + R_2}
$$

::: tip 公式显示建议
复杂分式、上下标较多的表达式，优先使用块级公式（`$$...$$`），不要强行放行内。
:::

## 典型表格用法（推荐）

可以作为投稿时的标准参考表样式应该是：线条清晰、信息密度高、无悬停动画干扰。

### 源码示例

```html

<div class="static-tables">
    
| 正确示例 | 错误示例 |
| :--- | :--- |
| `stm32g0.md` | `STM32G0.md` |
| `fpga-synthesis.md` | `FpgaSynthesis.md` |

</div>

<div class="static-tables">
	<div class="table-responsive">
		<table class="compact-table">
			<thead>
				<tr>
					<th>Th1</th>
					<th>Th2</th>
					<th>Th3</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Td1</td>
					<td>Td2</td>
					<td>一般传感器</td>
				</tr>
				<tr>
					<td>快速模式</td>
					<td>400 kbps</td>
					<td>显示屏、EEPROM</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
```

### 渲染效果示例

<div class="static-tables">

| 正确示例 | 错误示例 |
| :--- | :--- |
| `stm32g0.md` | `STM32G0.md` |
| `fpga-synthesis.md` | `FpgaSynthesis.md` |

</div>

<div class="static-tables">
	<div class="table-responsive">
		<table class="compact-table">
			<thead>
				<tr>
					<th>模式</th>
					<th>最大速率</th>
					<th>典型应用</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>标准模式</td>
					<td>100 kbps</td>
					<td>一般传感器</td>
				</tr>
				<tr>
					<td>快速模式</td>
					<td>400 kbps</td>
					<td>显示屏、EEPROM</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

### 使用说明

- 需要“稳定静态风格”时，请在外层包裹 `static-tables`。
- 表格统一使用 `table-responsive` + `compact-table` 组合。
- 这种写法会关闭悬停动画并保留清晰横线，适合参数页与规格页。

### 参考页面

- [I2C 通信协议](../protocols/i2c.md)
