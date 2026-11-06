---
title: QUT知识图谱作业解析：第四章 知识融合
date: 2026-11-06 10:02:00
updated: 2026-11-06 10:02:00
categories:
  - 期末考试
tags:
  - 考试
cover:
reprint: false
---

## 第四章 知识融合

### 自测

先做一遍，答案和解析在后面。

**1.** 本体对齐过程中，以下（　）步骤不是必要的。　A. 本体选择　B. 本体预处理　C. 解析本体并进行特征提取　D. 数据正规化

**2.** 实体对齐可以通过以下（　）实现。　A. 基于 TFIDF 的实体对齐方法　B. 基于概率函数的实体对齐方法　C. 基于图神经网络的实体嵌入对齐方法　D. 所有上述选项

**3.** 知识对齐在知识图谱中主要涉及到以下（　）任务。　A. 实体识别　B. 属性匹配　C. 关系对齐　D. 所有上述选项

**4.** 属性对齐的主要目的是（　）。　A. 将不同来源或名字不同但是表征相同的属性进行信息融合　B. 将所有属性统一为一个标准格式　C. 增加属性的多样性　D. 减少属性的数量

**5.** 在合并外部知识库时，以下（　）步骤是不必要的。　A. 获取知识　B. 概念匹配　C. 实体匹配　D. 数据去重

**6.** 实体链接的三个主要模块不包括以下哪项（　）。　A. 产生候选实体　B. 排序候选实体　C. 实体消歧　D. 无法链接预测

**7.** 在实体链接过程中，以下（　）不是解决一词多义问题的方法。　A. 利用知识库中实体信息进行实体消歧　B. 利用多个知识库中的实体信息进行实体消歧　C. 忽略上下文信息直接链接　D. 使用链接概率识别指称

**8.** 知识合并过程中，解决数据层和模式层的合并问题不包括以下（　）技术。　A. 实体链接　B. 冲突检测与消解　C. 真值发现　D. RDF 转换

**9.** 简述知识对齐在知识图谱中的作用。

**10.** 在知识合并过程中，如何处理知识冲突问题？

**11.** 知识融合的主要目的是什么？

**12.** 简述知识融合的流程及核心阶段。

**13.** 什么是实体链接，它在知识融合中扮演什么角色？

**14.** 实体链接过程中的消歧是如何帮助区分不同实体的？

**15.** 实体链接的三个主要模块包括哪些？

**16.** 简述基于聚合的实体相似度计算方法。

**17.** 属性对齐的常用方法有哪些？

**18.** 简述本体对齐与实例对齐的区别与联系。

**19.** 知识合并的概念是什么，它与知识融合有何不同？

**20.** 知识合并的常用方法主要有哪些？

### 第1题

本体对齐过程中，以下（　）步骤不是必要的。

- A. 本体选择
- B. 本体预处理
- C. 解析本体并进行特征提取
- D. 数据正规化

**答案：D**

本体对齐动的是模式层。先挑出要对的本体，做预处理，再解析结构并抽出概念特征去比，这几步都在概念之间建立对应关系。数据正规化处理的是实例值的写法，属于数据层的清洗工作，对本体之间的匹配不起作用。

### 第2题

实体对齐可以通过以下（　）实现。

- A. 基于 TFIDF 的实体对齐方法
- B. 基于概率函数的实体对齐方法
- C. 基于图神经网络的实体嵌入对齐方法
- D. 所有上述选项

**答案：D**

基于 TF-IDF 的做法拿实体描述算文本相似度，概率方法把实体对齐概率与关系匹配概率放在一起迭代，图神经网络把两个图谱嵌入同一个向量空间后找最近邻。三条路线都能单独完成实体对齐，选其中一个都会漏掉另外两条。

### 第3题

知识对齐在知识图谱中主要涉及到以下（　）任务。

- A. 实体识别
- B. 属性匹配
- C. 关系对齐
- D. 所有上述选项

**答案：D**

对齐要在两个图谱之间建立等价对应。实体识别先把待比对的实体认出来，属性匹配处理字段这一层，关系对齐处理边这一层。三项都落在对齐链路上，只做其中一项，对应关系就建不全。

### 第4题

属性对齐的主要目的是（　）。

- A. 将不同来源或名字不同但是表征相同的属性进行信息融合
- B. 将所有属性统一为一个标准格式
- C. 增加属性的多样性
- D. 减少属性的数量

**答案：A**

属性名短，歧义也大。中文名称和中文名说的是同一件事，创建时间和更新时间说的不是一回事，光看字面容易看错。属性对齐把不同来源、写法不同但表征相同的属性收到一处，合并之后才不会一条记录挂两个字段。

### 第5题

在合并外部知识库时，以下（　）步骤是不必要的。

- A. 获取知识
- B. 概念匹配
- C. 实体匹配
- D. 数据去重

**答案：D**

合并外部知识库先抓取外部数据，再做概念匹配和实体匹配，等价的实体在这一步就合到一起，重复项随之消掉。单独的数据去重不在流程里，它是匹配合并之后的结果，不是一道独立工序。

### 第6题

实体链接的三个主要模块不包括以下哪项（　）。

- A. 产生候选实体
- B. 排序候选实体
- C. 实体消歧
- D. 无法链接预测

**答案：C**

流水线只有三段，先产生候选实体，再排序候选实体，最后判断要不要放弃链接。消歧落在排序环节，靠上下文给候选打分，没有单独的一段。

### 第7题

在实体链接过程中，以下（　）不是解决一词多义问题的方法。

- A. 利用知识库中实体信息进行实体消歧
- B. 利用多个知识库中的实体信息进行实体消歧
- C. 忽略上下文信息直接链接
- D. 使用链接概率识别指称

**答案：C**

一词多义要靠上下文判断指称落在哪个实体上。忽略上下文直接链接，等于放弃唯一的判别依据，另外几种做法都是拿知识库信息和链接概率来补这个判断。

### 第8题

知识合并过程中，解决数据层和模式层的合并问题不包括以下（　）技术。

- A. 实体链接
- B. 冲突检测与消解
- C. 真值发现
- D. RDF 转换

**答案：D**

数据层和模式层的矛盾要在合并前处理掉。实体链接把不同来源的指称归到库里同一个实体，冲突检测与真值发现在互相矛盾的取值里定一个。RDF 转换解决的是关系数据库怎么变成图数据，属于格式通道，不参与矛盾的判定。

### 第9题

简述知识对齐在知识图谱中的作用。

**答案：**

知识对齐把不同图谱里的实体、属性和关系对应起来，形成一套统一的知识表示。两边的命名习惯、概念划分和数据格式往往不一致，对齐先把这些差异找出来，再建立等价映射。

对齐之后，原本互不相通的知识库可以互相引用，信息孤岛被打通，同一份知识不必在每个库里各存一遍。查询和推理面对的是一致的概念体系，跨库取数与答案的准确性都跟着提高，后续的实体链接与合并也有了可以依赖的对应关系。

### 第10题

在知识合并过程中，如何处理知识冲突问题？

**答案：**

冲突处理分两步。检测阶段把多个来源的同一属性值摆在一起比，取值不一致或相互矛盾的挑出来。格式差异先正规化再比，1991/3/8 和 1991-03-08 是同一天，不能算冲突。

消解阶段决定留哪个值。常用多数投票，票数相同时看来源可信度做加权平均，拿不准的请专家评估。真值发现按数据源的历史准确率给证据加权，判不出真值时也可以并列保留多个值，各自标注来源和时间，下游按场景取用。

<div align="center">
  <svg viewBox="0 0 720 320" width="100%" style="max-width:720px;height:auto" xmlns="http://www.w3.org/2000/svg" font-family="Segoe UI, 'Microsoft YaHei', sans-serif">
    <defs>
      <marker id="c4a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#b4552d"/>
      </marker>
      <marker id="c4b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#3f7a5a"/>
      </marker>
    </defs>
    <rect x="20" y="22" width="180" height="52" rx="7" fill="#fdf6ec" stroke="#b4552d" stroke-width="1.5"/>
    <text x="110" y="44" font-size="13" fill="#1f2933" text-anchor="middle">客户自填</text>
    <text x="110" y="64" font-size="11" fill="#5b6b76" text-anchor="middle">生日 1991-03-08</text>
    <rect x="270" y="22" width="180" height="52" rx="7" fill="#fdf6ec" stroke="#b4552d" stroke-width="1.5"/>
    <text x="360" y="44" font-size="13" fill="#1f2933" text-anchor="middle">柜台录入</text>
    <text x="360" y="64" font-size="11" fill="#5b6b76" text-anchor="middle">生日 1992-03-08</text>
    <rect x="520" y="22" width="180" height="52" rx="7" fill="#fdf6ec" stroke="#b4552d" stroke-width="1.5"/>
    <text x="610" y="44" font-size="13" fill="#1f2933" text-anchor="middle">征信报告</text>
    <text x="610" y="64" font-size="11" fill="#5b6b76" text-anchor="middle">生日 1991-03-08</text>
    <line x1="110" y1="80" x2="110" y2="96" stroke="#b4552d" stroke-width="1.5" marker-end="url(#c4a)"/>
    <line x1="360" y1="80" x2="360" y2="96" stroke="#b4552d" stroke-width="1.5" marker-end="url(#c4a)"/>
    <line x1="610" y1="80" x2="610" y2="96" stroke="#b4552d" stroke-width="1.5" marker-end="url(#c4a)"/>
    <rect x="60" y="104" width="600" height="48" rx="7" fill="#fdf6ec" stroke="#b4552d" stroke-width="1.5"/>
    <text x="360" y="133" font-size="13" fill="#1f2933" text-anchor="middle">同名属性取值不一致，检测到冲突</text>
    <line x1="360" y1="152" x2="360" y2="166" stroke="#3f7a5a" stroke-width="1.5"/>
    <line x1="200" y1="166" x2="515" y2="166" stroke="#3f7a5a" stroke-width="1.5"/>
    <line x1="200" y1="166" x2="200" y2="176" stroke="#3f7a5a" stroke-width="1.5" marker-end="url(#c4b)"/>
    <line x1="515" y1="166" x2="515" y2="176" stroke="#3f7a5a" stroke-width="1.5" marker-end="url(#c4b)"/>
    <rect x="60" y="182" width="280" height="54" rx="7" fill="#eef6f0" stroke="#3f7a5a" stroke-width="1.5"/>
    <text x="200" y="204" font-size="13" fill="#1f2933" text-anchor="middle">多数投票与可信度加权</text>
    <text x="200" y="224" font-size="11" fill="#5b6b76" text-anchor="middle">按来源历史准确率赋权</text>
    <rect x="370" y="182" width="290" height="54" rx="7" fill="#eef6f0" stroke="#3f7a5a" stroke-width="1.5"/>
    <text x="515" y="204" font-size="13" fill="#1f2933" text-anchor="middle">证据不足就留多值</text>
    <text x="515" y="224" font-size="11" fill="#5b6b76" text-anchor="middle">各自标注来源与取值</text>
    <line x1="200" y1="236" x2="200" y2="250" stroke="#3f7a5a" stroke-width="1.5"/>
    <line x1="515" y1="236" x2="515" y2="250" stroke="#3f7a5a" stroke-width="1.5"/>
    <line x1="200" y1="250" x2="515" y2="250" stroke="#3f7a5a" stroke-width="1.5"/>
    <line x1="360" y1="250" x2="360" y2="258" stroke="#3f7a5a" stroke-width="1.5" marker-end="url(#c4b)"/>
    <rect x="60" y="264" width="600" height="42" rx="7" fill="#eef6f0" stroke="#3f7a5a" stroke-width="1.5"/>
    <text x="360" y="290" font-size="13" fill="#1f2933" text-anchor="middle">采信 1991-03-08，其余取值留档可查</text>
  </svg>
</div>

*冲突检测先找出取值矛盾，消解再决定采信哪一个，证据不足时保留多值。*

### 第11题

知识融合的主要目的是什么？

**答案：**

知识融合要解决多源知识对不上的问题。不同系统对同一个实体用不同名字，对同一个概念给不同定义，同一条事实还可能给出互相矛盾的取值。融合把这些知识收进一套表示里，消掉概念上的混淆，清掉重复与错误。

结果是得到一个准确、覆盖面完整的知识体系。同一件事在图上只有一条记录，取数不必再人工比对，推理也不会沿着两条路径得出两个结论。

### 第12题

简述知识融合的流程及核心阶段。

**答案：**

工程流程分五步。预处理先做正规化和清洗，分块把两两比较的候选压下来，记录链接在块内算相似度并判定是否为同一对象，负载均衡把计算分发出去，最后用查准率、召回率和 F1 评估结果。

从概念层面看，核心阶段有三个。实体链接把文本里的指称接到库里的实体，知识对齐在两个图谱之间建立本体、实体和属性的等价关系，知识合并把对齐后的知识写进同一个库，写之前先处理冲突。

<div align="center">
  <svg viewBox="0 0 720 232" width="100%" style="max-width:720px;height:auto" xmlns="http://www.w3.org/2000/svg" font-family="Segoe UI, 'Microsoft YaHei', sans-serif">
    <defs>
      <marker id="c4c" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#2f6f8f"/>
      </marker>
      <marker id="c4g" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#3f7a5a"/>
      </marker>
    </defs>
    <text x="20" y="26" font-size="11" fill="#5b6b76">工程流程</text>
    <rect x="20" y="38" width="112" height="58" rx="7" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.5"/>
    <text x="76" y="62" font-size="13" fill="#1f2933" text-anchor="middle">预处理</text>
    <text x="76" y="82" font-size="11" fill="#5b6b76" text-anchor="middle">正规化与清洗</text>
    <rect x="160" y="38" width="112" height="58" rx="7" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.5"/>
    <text x="216" y="62" font-size="13" fill="#1f2933" text-anchor="middle">分块</text>
    <text x="216" y="82" font-size="11" fill="#5b6b76" text-anchor="middle">压缩候选</text>
    <rect x="300" y="38" width="112" height="58" rx="7" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.5"/>
    <text x="356" y="62" font-size="13" fill="#1f2933" text-anchor="middle">记录链接</text>
    <text x="356" y="82" font-size="11" fill="#5b6b76" text-anchor="middle">相似度判定</text>
    <rect x="440" y="38" width="112" height="58" rx="7" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.5"/>
    <text x="496" y="62" font-size="13" fill="#1f2933" text-anchor="middle">负载均衡</text>
    <text x="496" y="82" font-size="11" fill="#5b6b76" text-anchor="middle">分发计算</text>
    <rect x="580" y="38" width="112" height="58" rx="7" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.5"/>
    <text x="636" y="62" font-size="13" fill="#1f2933" text-anchor="middle">结果评估</text>
    <text x="636" y="82" font-size="11" fill="#5b6b76" text-anchor="middle">P / R / F1</text>
    <line x1="140" y1="67" x2="152" y2="67" stroke="#2f6f8f" stroke-width="1.4" marker-end="url(#c4c)"/>
    <line x1="280" y1="67" x2="292" y2="67" stroke="#2f6f8f" stroke-width="1.4" marker-end="url(#c4c)"/>
    <line x1="420" y1="67" x2="432" y2="67" stroke="#2f6f8f" stroke-width="1.4" marker-end="url(#c4c)"/>
    <line x1="560" y1="67" x2="572" y2="67" stroke="#2f6f8f" stroke-width="1.4" marker-end="url(#c4c)"/>
    <text x="20" y="136" font-size="11" fill="#5b6b76">概念阶段</text>
    <rect x="20" y="150" width="190" height="62" rx="7" fill="#eef6f0" stroke="#3f7a5a" stroke-width="1.5"/>
    <text x="115" y="175" font-size="13" fill="#1f2933" text-anchor="middle">实体链接</text>
    <text x="115" y="196" font-size="11" fill="#5b6b76" text-anchor="middle">文本指称接到实体</text>
    <rect x="265" y="150" width="190" height="62" rx="7" fill="#eef6f0" stroke="#3f7a5a" stroke-width="1.5"/>
    <text x="360" y="175" font-size="13" fill="#1f2933" text-anchor="middle">知识对齐</text>
    <text x="360" y="196" font-size="11" fill="#5b6b76" text-anchor="middle">两个图谱建等价</text>
    <rect x="510" y="150" width="190" height="62" rx="7" fill="#eef6f0" stroke="#3f7a5a" stroke-width="1.5"/>
    <text x="605" y="175" font-size="13" fill="#1f2933" text-anchor="middle">知识合并</text>
    <text x="605" y="196" font-size="11" fill="#5b6b76" text-anchor="middle">对齐后写进同一个库</text>
    <line x1="218" y1="181" x2="257" y2="181" stroke="#3f7a5a" stroke-width="1.4" marker-end="url(#c4g)"/>
    <line x1="463" y1="181" x2="502" y2="181" stroke="#3f7a5a" stroke-width="1.4" marker-end="url(#c4g)"/>
  </svg>
</div>

*五步工程流程压缩候选与计算量，三个概念阶段各自解决一类对应关系。*

### 第13题

什么是实体链接，它在知识融合中扮演什么角色？

**答案：**

实体链接是把文本里提到的指称映射到知识库中对应实体的过程。一篇文章写到郑雯，库里有三个郑雯，链接要判断指的是哪一个，库里没有对应实体时返回空标记，不硬配。

它在融合里承担从文本进入图谱的那一段。抽取出来的实体名往往只是字符串，链接给每个指称一个确定的实体编号，文本知识才能与库内知识接上。后续的对齐与合并都建立在实体已经指认清楚的前提上，图谱的覆盖面和准确度也随之提高。

### 第14题

实体链接过程中的消歧是如何帮助区分不同实体的？

**答案：**

消歧处理同名不同实体的情况。苹果既可以指水果，也可以指一家公司，光看指称本身分不出来，要靠它所在的句子、上下文和候选实体的描述来判断。

做法是给每个候选实体打分。把上下文特征与知识库里实体的属性信息放在一起算相似度，分数最高的候选被选中。知识库里的实体信息越完整，分数越能反映真实指向，链接结果也越可靠。

### 第15题

实体链接的三个主要模块包括哪些？

**答案：**

第一个模块产生候选实体。按指称从知识库里召回一组可能的目标，同名词条、别名和缩写都算进来，这一步宁可多召回，先保证不漏。

第二个模块排序候选实体。用上下文与实体描述算相似度，把候选按可能性从高到低排，取排在最前的一个作为链接结果。

第三个模块是无法链接预测。判断该指称在库里是否根本没有对应实体，没有就返回空标记。强行链到最像的实体，比承认链接不上危害更大。

<div align="center">
  <svg viewBox="0 0 720 250" width="100%" style="max-width:720px;height:auto" xmlns="http://www.w3.org/2000/svg" font-family="Segoe UI, 'Microsoft YaHei', sans-serif">
    <defs>
      <marker id="c4d" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#2f6f8f"/>
      </marker>
      <marker id="c4h" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#3f7a5a"/>
      </marker>
    </defs>
    <rect x="20" y="56" width="145" height="56" rx="7" fill="#f6e7c8" stroke="#d9b982" stroke-width="1.4"/>
    <text x="92" y="78" font-size="13" fill="#1f2933" text-anchor="middle">文本</text>
    <text x="92" y="98" font-size="11" fill="#5b6b76" text-anchor="middle">郑雯毕业于复旦大学</text>
    <rect x="205" y="56" width="150" height="56" rx="7" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.5"/>
    <text x="280" y="78" font-size="13" fill="#1f2933" text-anchor="middle">① 产生候选实体</text>
    <text x="280" y="98" font-size="11" fill="#5b6b76" text-anchor="middle">从库中召回同名</text>
    <rect x="395" y="56" width="150" height="56" rx="7" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.5"/>
    <text x="470" y="78" font-size="13" fill="#1f2933" text-anchor="middle">② 排序候选实体</text>
    <text x="470" y="98" font-size="11" fill="#5b6b76" text-anchor="middle">上下文与描述打分</text>
    <rect x="575" y="56" width="125" height="56" rx="7" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.5"/>
    <text x="637" y="78" font-size="13" fill="#1f2933" text-anchor="middle">③ 无法链接预测</text>
    <text x="637" y="98" font-size="11" fill="#5b6b76" text-anchor="middle">判断该不该放弃</text>
    <line x1="173" y1="84" x2="197" y2="84" stroke="#2f6f8f" stroke-width="1.5" marker-end="url(#c4d)"/>
    <line x1="363" y1="84" x2="387" y2="84" stroke="#2f6f8f" stroke-width="1.5" marker-end="url(#c4d)"/>
    <line x1="553" y1="84" x2="567" y2="84" stroke="#2f6f8f" stroke-width="1.5" marker-end="url(#c4d)"/>
    <line x1="637" y1="112" x2="637" y2="164" stroke="#3f7a5a" stroke-width="1.5" marker-end="url(#c4h)"/>
    <rect x="480" y="170" width="220" height="56" rx="7" fill="#eef6f0" stroke="#3f7a5a" stroke-width="1.5"/>
    <text x="590" y="194" font-size="13" fill="#1f2933" text-anchor="middle">输出实体 e₁</text>
    <text x="590" y="214" font-size="11" fill="#5b6b76" text-anchor="middle">没有对应实体则返回 NIL</text>
    <text x="20" y="200" font-size="12" fill="#5b6b76">先找全，再找准，最后承认找不到</text>
  </svg>
</div>

*三个模块串成一条流水线，链接不上就返回空标记，不强行匹配。*

### 第16题

简述基于聚合的实体相似度计算方法。

**答案：**

这类方法先算出若干相似性指标，再把它们合成一个总分。属性值可以比编辑距离，名称可以比集合重合度，结构可以比邻居的重合情况，各指标从不同侧面反映两个实体像不像。

聚合方式有三种。加权平均按指标的重要程度赋权，输出加权后的综合相似度；手动制定规则靠经验设阈值，比如要求姓名相似度高于某个值才判为同一实体；分类器把各指标分数当特征，用逻辑回归、决策树或 SVM 训练一个判别模型。规则法透明好查，分类器能拟合指标之间的交互，代价是需要标注数据。

### 第17题

属性对齐的常用方法有哪些？

**答案：**

基于相似距离的方法直接比属性值。字符串用编辑距离，集合用 Jaccard 或 Dice，数值比差值，距离越小越可能指同一个属性。

基于词典匹配的方法借助外部词典和语义资源，把同义写法归到一起，中文名与中文名称这类差异靠词表就能消掉。

基于语义相似度的方法把属性名和样例值编码成向量，算余弦相似度。字面完全不同但语义接近的属性靠这一路才能发现，代价是结果不如前两种好解释。

### 第18题

简述本体对齐与实例对齐的区别与联系。

**答案：**

本体对齐作用在模式层，判断两个本体里的概念、类和关系是不是一个意思，输出等价的模式对应。实例对齐作用在数据层，判断两条记录是否指向现实世界的同一个对象，输出等价实例的对应。

区别在对象和粒度。本体对齐比的是定义和结构，元素数量少但层次清楚，结构信息很值钱；实例对齐比的是具体实体，数据量大，工程压力也大。

两者有先后。本体先对齐，实体的类型才有统一的归属，属性也才有可比的字段；实例对齐在本体给出的框架里进行，把等价关系落到具体数据上。

<div align="center">
  <svg viewBox="0 0 720 320" width="100%" style="max-width:720px;height:auto" xmlns="http://www.w3.org/2000/svg" font-family="Segoe UI, 'Microsoft YaHei', sans-serif">
    <defs>
      <marker id="c4e" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#2f6f8f"/>
      </marker>
      <marker id="c4f" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#3f7a5a"/>
      </marker>
    </defs>
    <rect x="20" y="30" width="680" height="110" rx="8" fill="#fbfdfe" stroke="#cfdde5" stroke-width="1.2"/>
    <text x="40" y="62" font-size="14" fill="#2f6f8f">本体对齐</text>
    <text x="40" y="86" font-size="11" fill="#5b6b76">比概念、类与关系</text>
    <text x="40" y="106" font-size="11" fill="#5b6b76">输出等价模式</text>
    <rect x="200" y="50" width="200" height="62" rx="7" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.5"/>
    <text x="300" y="76" font-size="13" fill="#1f2933" text-anchor="middle">本体 A</text>
    <text x="300" y="96" font-size="11" fill="#5b6b76" text-anchor="middle">类 人物 / 机构</text>
    <rect x="480" y="50" width="200" height="62" rx="7" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.5"/>
    <text x="580" y="76" font-size="13" fill="#1f2933" text-anchor="middle">本体 B</text>
    <text x="580" y="96" font-size="11" fill="#5b6b76" text-anchor="middle">类 Person / Org</text>
    <line x1="410" y1="81" x2="472" y2="81" stroke="#3f7a5a" stroke-width="1.5" marker-end="url(#c4f)"/>
    <text x="441" y="71" font-size="11" fill="#3f7a5a" text-anchor="middle">等价</text>
    <rect x="20" y="176" width="680" height="120" rx="8" fill="#fbfdfe" stroke="#cfdde5" stroke-width="1.2"/>
    <text x="40" y="208" font-size="14" fill="#2f6f8f">实例对齐</text>
    <text x="40" y="232" font-size="11" fill="#5b6b76">比具体实体</text>
    <text x="40" y="252" font-size="11" fill="#5b6b76">输出等价实例</text>
    <rect x="200" y="190" width="200" height="62" rx="7" fill="#eef6f0" stroke="#3f7a5a" stroke-width="1.5"/>
    <text x="300" y="216" font-size="13" fill="#1f2933" text-anchor="middle">实体 e₁</text>
    <text x="300" y="236" font-size="11" fill="#5b6b76" text-anchor="middle">复旦大学</text>
    <rect x="480" y="190" width="200" height="62" rx="7" fill="#eef6f0" stroke="#3f7a5a" stroke-width="1.5"/>
    <text x="580" y="216" font-size="13" fill="#1f2933" text-anchor="middle">实体 e₂</text>
    <text x="580" y="236" font-size="11" fill="#5b6b76" text-anchor="middle">Fudan University</text>
    <line x1="410" y1="221" x2="472" y2="221" stroke="#3f7a5a" stroke-width="1.5" marker-end="url(#c4f)"/>
    <text x="441" y="211" font-size="11" fill="#3f7a5a" text-anchor="middle">同一对象</text>
    <text x="40" y="278" font-size="11" fill="#5b6b76">实体比对本体的类型归属</text>
    <line x1="300" y1="140" x2="300" y2="170" stroke="#2f6f8f" stroke-width="1.5" marker-end="url(#c4e)"/>
    <text x="312" y="162" font-size="11" fill="#5b6b76">先定骨架</text>
  </svg>
</div>

*本体对齐定骨架，实例对齐填内容，两层的对象和粒度不同。*

### 第19题

知识合并的概念是什么，它与知识融合有何不同？

**答案：**

知识合并在对齐完成之后进行，把已有数据作为输入做整合，处理实体之间的相似与差异，将实体、关系和属性写进同一个知识库，建立知识库与实体的直接映射。写之前要先发现冲突，同名属性取值不一致的要先消解。

知识融合的范围更宽。它从不同来源获取知识开始，涵盖概念混淆的消除、冗余与错误的清理，知识合并只是其中的一个环节。融合偏重判断与对齐，合并偏重决策与落库，两者在同一条链路上前后相接。

### 第20题

知识合并的常用方法主要有哪些？

**答案：**

常见的一条路是合并外部知识库。把外部数据抓进来，先做概念匹配把本体对齐，再做实体匹配把等价实体合到一起，最后评估合并质量。难点在数据层与模式层的矛盾，属性值冲突、类型定义不一致都要在处理范围内。

另一条路是合并关系数据库。结构化数据走 RDB2RDF 通道，直接映射把表映射成类，主键映射成实体标识，列映射成属性，外键映射成关系。需要控制命名和词表时改用 R2RML 写映射规则。半结构化数据先转成 RDF，再走同一套流程。
