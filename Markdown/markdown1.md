# 一级标题使用1个#

## 二级标题使用2个#

### 三级标题使用3个#

#### 四级标题使用4个#

##### 五级标题使用5个#

###### #最多支持六级标题#

## 文字

### 删除线

```markdown
这就是 ~~删除线~~ (使用波浪号)
```

这就是~~删除线~~(使用波浪号

### 斜体

```markdown
这是用来*斜体*的_文本_
```

这是用来 *斜体* 的 _文本_

### 加粗

```markdown
这是用来**加粗**的__文本__
```

这是用来**加粗**的__文本__

###斜体+加粗

```markdown
这是用来***斜体+加粗***的___文本___
```

这是用来***斜体+加粗***的 ___文本___

### 下划线

下划线是HTML语法

`下划线`<u>下划线（快捷键command+u）</u>

<u>hhh</u>

### 亮亮（需勾选扩展语法）

```markdown
这是用来==斜体+加粗== 的文本
```

这是用来==斜体+加粗== 的文本

###下标（需勾选扩展语法）

```markdown
面积：m^2^
体积：m^3^
```

面积：m^2^
体积：m^3^

### 表情符号

Emoji 支持表情符号，你可以用系统默认的Emoji 符号(无法支持 Windows 用户）。也可以用图片的表情，
输入`：`将会出现智能提示。

```markdown
:smile: :laughing: :dizzy_face: :sob: :cold_sweat: :sweat_smile: :cry: :triumph:
:heart_eyes: :relaxed: :sunglasses: :weary:
:+1: :-1: :100: :clap: :bell: :gift: :question: :bomb: :heart: :coffee: :cyclone: :bow:
:kiss: :pray: :sweat_drops: :hankey: :exclamation: :anger:
```

:smile: :laughing: :dizzy_face: :sob: :cold_sweat: :sweat_smile: :cry: :triumph::heart_eyes: :relaxed: :sunglasses: :weary::+1: :-1: :100: :clap: :bell: :gift: :question: :bomb: :heart: :coffee: :cyclone: :bow::kiss: :pray: :sweat_drops: :hankey: :exclamation::anger:

### 表格

使用`!` 来分隔不同的单元格，使用`-`来分隔表头和其他行：

```markdown
name | price
--- |---
fried chicken | 19
cola|5
```

> 为了使Markdown 更清晰，`|`和`-`两佛需要至少有一个空格（最左侧和最右侧的 `|` 外就不需要了）

| name    | price |
| ------- | ----- |
| chicken | 19    |
| cola    | 5     |

为了美观，可以使用空格对齐不同行的单元格，井在左右两侧都使用 1 来标记单元格边界，在表头下方的分隔线标记中加入`：`，即可标记下方单元格内容的对齐方式：

```markdown
|name         |price|
|:----------- |:---:|
|fried chicken|19   |
|cola         |32   |

```

| name          | price |
| :------------ | :---: |
| fried chicken |  19   |
| cola          |  32   |

使用快捷键 `comumand ` + `opt `+`T`更方便引用

## 引用

```markdown
>"后悔创业"
```

> "后悔创业"

```markdown
>也可以在引用中
>>使用嵌套的使用
```

 >也可以在引用中
 >>使用嵌套的使用

## 列表

###无序列表——符合 空格

```markdown
* 可以使用`*` 
+ 也可以使用`*`
- 或者`-`
```

* 可以使用`*` 
+ 也可以使用`*`

- 或者`-`

### 有序列表——数子`.` 空格

```markdown
1. 有序列装以数宇和`•`开始：
2. 数宇的序列井不会影响生成的列表序列；
4. 但仍然推荐按照自然顺序（1.2.3...）编写。
```

1. 有序列装以数宇和`•`开始：
2. 数宇的序列井不会影响生成的列表序列；
4. 但仍然推荐按照自然顺序（1.2.3...）编写。

```markdown
可以使用：数宇\. 来取消显示为列表（用反斜杠进行转义）
```

## 代码

### 代码块

```markdown
```语言名称
```

```java
public static void main(String[ ] args) {
}
```

### 行内代码

```markdown
也可以通过```,插入行内代码（`是`Tab`键上边、数字`1`键左侧的那个按健）:
例如`Markdown`
```

`Markdown`



###转换规则

代码块中的文本（包括 Markdown 语法）都会显示为原始内容

## 分格线

可以在一行中使用三个或更多的`•`、`-`或口 来添加分隔线（``）：

```markdown
***
------
___
```

## 跳转

### 外部跳转--超链接

格式为`[ link text](link)。`

```markdown
[帮助文挡](https://8upport.typora.io/Links/#fag)
```

[帮助文挡](https://8upport.typora.io/Links/#fag)

### 内部跳转-本文件内跳(Typora支持）

格式为` [link text]（#要去的目的地--标題）`

```markdown
[我想跳转](#饼圈 (Pie）)
```

> Open Links in Typora
>
> >
> >
> >You can use `command+click` (macos), or `ctrlt+click `(Linux/Windows) on links in Typora to jump to
> >target headings, or open them in Typora, or open in related apps

[我想跳转](#饼圈 (Pie）))

### 自动链接

使用`<>`包括的 URL 或邮箱地址会被自动转换为超链接：

```markdown
<https://www.baidu.com>
<123@email.com>
```

## 利用Markdown画图（需勾选扩展语法）

markdown是轻文本编镇器，井不像word那么强大，所以画图也是轻量级的，功能井不全。

### 流程图(graph)

#### 概述

```markdown
graph 方向描述
        图表中的其他语句···
```

关键宇graph表示一个流程图的开始，同时需要指定该图的方向。
其中"方向描述“为：
