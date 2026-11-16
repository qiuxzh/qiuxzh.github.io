---
title: 结构化 tool_result 调优
date: 2026-11-13
updated: 2026-11-13
tag:
  - AI 
categories:
  - agent开发
cover:
reprint: false
---
本文给出两种节约token的方案（在tool_result输出结构化实体列表json时）

# 结构化 tool_result 调优

## TSV和JSON

假如某个 tool 需要返回一个实体列表。

这是json文本
```json
[{"id":1001,"name":"张三","age":18,"city":"北京","role":"engineer","active":true},
{"id":1002,"name":"李四","age":20,"city":"上海","role":"designer","active":true},
{"id":1003,"name":"王五","age":25,"city":"深圳","role":"pm","active":false},
{"id":1004,"name":"赵六","age":31,"city":"杭州","role":"engineer","active":true},
{"id":1005,"name":"孙七","age":28,"city":"成都","role":"analyst","active":true},
{"id":1006,"name":"周八","age":22,"city":"广州","role":"designer","active":false},
{"id":1007,"name":"吴九","age":35,"city":"南京","role":"manager","active":true},
{"id":1008,"name":"郑十","age":27,"city":"武汉","role":"engineer","active":true}]
```

JSON 里，`"id"`、`"name"`、`"age"`、`"city"`、`"role"`、`"active"` 这 6 个键名，每一条记录都完整重写了一遍。8 条记录意味着键名重复了 8 次。如果列表是 80 条，就是 80 次。键名本身不携带每一行独有的信息，它们的值只是在序列化阶段被一遍遍复制粘贴，然后被模型一遍遍 tokenize、一遍遍计费。

如果列表项的个数太多，字段本身会非常占据token

TSV 文本就是用制表符 `\t` 分隔字段、用换行分隔记录的纯文本。肉眼看起来像“列对齐”的表格，但列之间其实是不可见的 Tab 字符。

TSV 把键名在表头写一次，后面只出行值。

```
id	name	age	city	role	active
1001	张三	18	北京	engineer	true
1002	李四	20	上海	designer	true
1003	王五	25	深圳	pm	false
1004	赵六	31	杭州	engineer	true
1005	孙七	28	成都	analyst	true
1006	周八	22	广州	designer	false
1007	吴九	35	南京	manager	true
1008	郑十	27	武汉	engineer	true
```

tsv可以很有效的减少token消耗。


TSV 简单有效，但某些情形下还是差点意思。

`active` 那一列写着 `true`。它是布尔，还是字符串 `"true"`？TSV 没有类型，`18` 和 `"18"` 进了格子就是同一串字符，读回程序里全成了字符串。JSON 恰好相反，它靠引号的有无来表示类型。

另一处说不清的是空格子。如果张三没有城市(city字段是空的)，那一格在两个 Tab 之间空着。这到底是空字符串、null，还是这一行少写了一列？要是字段本身还带 Tab 或者换行，这层麻烦还得再加。

## JTON

JTON（JSON Tabular Object Notation，JSON表格对象表示法）是一种专为大型语言模型（LLM）设计的、对token更友好的JSON严格超集

解决的痛点同样是：JSON 在表示表格数据时，每一行都重复键名带来的 token 浪费。

2026 年 4 月有一篇专门讲这件事的论文，名字就叫 JTON，JSON Tabular Object Notation，里头的表格写法叫 Zen Grid（[arXiv:2604.05865](https://arxiv.org/abs/2604.05865)）。它把自己定义成 JSON 的严格超集：任何一份合法 JSON，都能原样交给它读取。反过来不成立。

下面这段是 JTON 独有的写法：

```JTON
[8: id, name, age, city, role, active;
1001, "张三", 18, "北京", "engineer", true;
1002, "李四", 20, "上海", "designer", true;
1003, "王五", 25, "深圳", "pm", false;
1004, "赵六", 31, "杭州", "engineer", true;
1005, "孙七", 28, "成都", "analyst", true;
1006, "周八", 22, "广州", "designer", false;
1007, "吴九", 35, "南京", "manager", true;
1008, "郑十", 27, "武汉", "engineer", true]
```

`[8:` 里的 8 是行数。后面是表头，六个列名只写一遍。再往后用分号断行，行内仍然用逗号。
类型也保留下来了。`1001` 和 `true` 都没有引号，分别是数字和布尔；`"张三"` 有引号，是字符串。格子里放的还是 JSON 那套东西，只是键挪到了表头。



论文量的是 token，用的是 o200k_base 分词器。一百行的员工表，JTON 比紧凑 JSON 少 22.6%；一千行少 22.9%；七个真实数据集上从 15% 到 60%，平均 28.5%。行数越多、键名越长，省得越多，因为省掉的那部分就是重复了 n 遍的键名。



## JSON一定会被取代吗？

在小批量的数据下，JSON是够用的

另外，遇到嵌套数据，例如
```json
[
	{
	  "id": 1001,
	  "name": "张三",
	  "age": 18,
	  "city": "北京",
	  "role": "engineer",
	  "active": true,
	  "address": {
	    "province": "北京市",
	    "city": "北京市",
	    "district": "朝阳区",
	    "street": "建国路",
	    "detail": "88号",
	    "zipCode": "100022"
	  }
	},
	...
]

```

JSON很直观，而TSV/JTON对嵌套数据处理的不太好



