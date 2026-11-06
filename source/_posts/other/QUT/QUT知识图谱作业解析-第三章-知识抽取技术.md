---
title: QUT知识图谱作业解析：第三章 知识抽取技术
date: 2026-11-06 10:03:00
updated: 2026-11-06 10:03:00
categories:
  - 期末考试
tags:
  - 考试
cover:
reprint: false
---

## 第三章 知识抽取技术

### 自测

先做一遍，答案和解析在后面。

**1.** 知识抽取的主要目的是（　）。　A. 从文本中识别特定格式的数据　B. 从非结构化数据中提取结构化信息　C. 对数据进行简单的清洗和整理　D. 提高文本的可读性

**2.** 在知识抽取中，命名实体识别通常用于识别（　）类型的实体？　A. 人名、地名、机构名　B. 动词、形容词、名词　C. 句子、段落、篇章　D. 数字、符号、字母

**3.** 知识抽取中的事件抽取主要关注（　）。　A. 文本中的时间信息　B. 文本中的事件及其相关论元　C. 文本中的情感倾向　D. 文本中的主题分类

**4.** 依存句法分析在识别实体间复杂语义关系时，主要揭示的是文本中的　A. 词汇的拼写规则　B. 句法结构依赖　C. 段落的排版格式　D. 文档的存储路径

**5.** 在构建用于监督学习的关系抽取模型时，为确保标注的准确性和一致性，训练数据集通常需要通过　A. 人工标注　B. 随机生成　C. 机器翻译　D. 数据压缩

**6.** 相较于关系抽取面临的机遇，其在特定领域任务上泛化能力受限的主要挑战在于　A. 标注数据的不足　B. 计算资源的过剩　C. 语义理解的简单性　D. 应用范围的狭窄

**7.** 作为从文本中获取知识图谱三元组的主要技术手段，旨在识别并提取文本中两个或多个实体之间目标关系的任务称为　A. 关系抽取　B. 实体抽取　C. 事件抽取　D. 依存句法分析

**8.** 在构建管道式事件抽取系统时，若需从文本“Elon Musk is the CEO of Tesla, Inc.”中抽取出结构化事件信息，依据管道式处理的逻辑，下列操作顺序最合理的是　A. 先进行实体识别，再标注或抽取关系，最后综合提取事件要素　B. 先直接提取事件动作，再反向推导实体类型，最后分析关系　C. 仅依靠词袋模型统计词频，直接映射为事件结构化数据　D. 跳过实体和关系分析，直接对整段文本进行情感分类以确定事件

**9.** 在隐马尔可夫模型（HMM）的参数表示 $\lambda=(A,B,\Pi)$ 中，矩阵 $A$ 中的元素 $a_{ij}$ 具体代表　A. 从状态 i 转移到状态 j 的概率　B. 在状态 j 的条件下生成观测 vk 的概率　C. 初始时刻处于状态 i 的概率　D. 观测序列只依赖于当前时刻状态的独立性概率

**10.** 在自然语言处理中，用于分析句子结构并通过分析词语之间的依存关系来更好理解句子语义信息的技术是　A. 依存句法分析　B. 词袋模型　C. 隐马尔可夫模型　D. 支持向量机

**11.** 某研究团队在特定垂直领域开展关系抽取任务时，发现由于该领域专业性强，难以获得大量高质量的人工标注数据，导致训练出的模型泛化能力严重不足。这一困境主要反映了关系抽取技术面临的哪一挑战　A. 数据稀缺　B. 语义理解的复杂性　C. 计算资源需求高　D. 自然语言的多样性

**12.** BERT模型在预训练阶段通过随机掩码部分词并预测来学习通用语言表示的任务称为　A. 下一句预测（NSP）　B. 掩码语言模型（MLM）　C. 双向长短期记忆网络（BiLSTM）　D. 条件随机场解码（CRF）

**13.** 下列（　）不是知识抽取的常用方法。　A. 基于规则的方法　B. 基于模板的方法　C. 基于随机猜测的方法　D. 基于机器学习的方法

**14.** 在关系抽取中，通常使用（　）技术来识别实体之间的关系。　A. 情感分析　B. 文本分类　C. 语义角色标注　D. 文本生成

**15.** 知识抽取的效果评估通常使用（　）指标。　A. 准确率　B. 召回率　C. F1 值　D. 文本长度

**16.** 某团队需处理具有网格结构特征的图像数据以提取局部特征，且希望利用权重共享机制减少参数量，最应采用的神经网络核心组件是　A. 循环层　B. 卷积层　C. 全连接层　D. 池化层

**17.** 自然语言处理中，旨在识别文本中人名、地名、机构名等特定类型实体的任务称为＿＿＿＿。

**18.** 知识抽取的后处理与评估阶段包括结果校验和＿＿＿＿两个关键环节。

**19.** 在实体抽取阶段，＿＿＿＿是实体抽取的核心部分，专注于识别特定类别的实体。

**20.** 知识抽取的数据预处理阶段主要包括数据收集和＿＿＿＿两个步骤。

**21.** 在知识抽取的结果校验环节，通过与已有知识库的对比以及利用领域专家的反馈，可以发现并纠正错误，从而提高知识抽取的＿＿＿＿。

**22.** 请简述知识抽取的基本定义及其在信息处理中的作用。

**23.** 在知识抽取中，为什么需要进行后处理与评估？请列举几种常见的评估指标。

**24.** 在构建基于BERT和BiLSTM的命名实体识别模型时，需导入PyTorch及Hugging Face相关库。请列举该流程中必须导入的四个核心模块或库，并分别说明它们在模型构建与训练中的具体作用。

**25.** 什么是命名实体识别？在知识抽取中，它有什么应用？

**26.** 简述事件抽取的主要任务及其在实现过程中的关键步骤。

**27.** 在知识抽取项目的数据预处理阶段，某团队从多源异构渠道收集了原始数据集 Draw，总记录数为 $N=10{,}000$ 条。经初步质量评估，发现数据集中存在以下三类主要问题：

1. **完全重复记录**：由于爬虫策略重叠，导致 $R_{dup}=1{,}200$ 条记录与已有记录完全一致；
2. **无效噪声数据**：包含乱码、空值或无关广告信息的记录共 $R_{inv}=800$ 条；
3. **格式不一致数据**：日期、单位等格式不统一但内容本身有效的记录共 $R_{fmt}=2{,}500$ 条。

根据数据预处理的规范流程，需依次执行去重、清洗无效数据及格式化操作。请基于上述场景完成以下计算与分析：

(1) 若定义“基础可用数据量” $N_{base}$ 为去除完全重复记录和无效噪声数据后剩余的数据条数，请计算 $N_{base}$ 的值。

(2) 若定义“数据洁净率” η 为基础可用数据量占原始数据总量的百分比，即 $\eta=N_{base}/N\times100$%，请计算该数据集的初始数据洁净率（保留两位小数）。

(3) 假设后续进行格式规范化处理时，因算法局限导致 5% 的格式不一致数据被错误标记为无效数据而剔除。请计算最终可用于特征提取和模型训练的有效数据总量 $N_{final}$，并分析若跳过“去重”步骤直接进行格式化处理，会对后续模型训练产生何种具体影响（需结合数据预处理的目标进行推导说明）。

**28.** 在基于BiLSTM-CRF的命名实体识别模型中，BiLSTM模块负责将上下文嵌入映射为标签得分。假设输入句子经过BERT编码后，序列长度为 $T=5$，BiLSTM隐藏层维度设置为 $H=128$（即单向LSTM输出维度），标签集合大小为 $N=9$。模型定义中包含一个双向LSTM层（`bidirectional=True`）和一个线性层（Linear），用于将LSTM的输出映射到标签空间。

请根据PyTorch中`nn.Linear`层的权重矩阵形状定义规则（输入特征数 × 输出特征数），计算该线性层权重矩阵 $W$ 的具体形状（行数 × 列数），并说明计算依据。

### 第1题

知识抽取的主要目的是（　）。

- A. 从文本中识别特定格式的数据
- B. 从非结构化数据中提取结构化信息
- C. 对数据进行简单的清洗和整理
- D. 提高文本的可读性

**答案：B**

知识抽取处理的是非结构化或半结构化文本，把散落的事实整理成机器能处理的结构化形式。清洗整理落在预处理那一段，提高可读性跟抽取目标离得更远。

### 第2题

在知识抽取中，命名实体识别通常用于识别（　）类型的实体？

- A. 人名、地名、机构名
- B. 动词、形容词、名词
- C. 句子、段落、篇章
- D. 数字、符号、字母

**答案：A**

命名实体识别盯的是有明确语义类别、能当知识节点用的词，人名、地名和机构名是最常见的三类。动词和形容词归词性标注，句子与段落属于篇章单位。

### 第3题

知识抽取中的事件抽取主要关注（　）。

- A. 文本中的时间信息
- B. 文本中的事件及其相关论元
- C. 文本中的情感倾向
- D. 文本中的主题分类

**答案：B**

事件抽取要拿到事件类型、触发词和参与论元，回答谁在什么时候做了什么。时间信息只是论元之一，情感倾向归情感分析，主题分类归文本分类。

### 第4题

依存句法分析在识别实体间复杂语义关系时，主要揭示的是文本中的

- A. 词汇的拼写规则
- B. 句法结构依赖
- C. 段落的排版格式
- D. 文档的存储路径

**答案：B**

依存分析给每个词标出中心词和依存关系，主谓宾这类骨架一出来，句子里的承接与转折就落到了具体成分上。拼写规则和排版格式跟句法无关。

### 第5题

在构建用于监督学习的关系抽取模型时，为确保标注的准确性和一致性，训练数据集通常需要通过

- A. 人工标注
- B. 随机生成
- C. 机器翻译
- D. 数据压缩

**答案：A**

监督学习要靠带标签的样本，实体对和关系的标签只能由人给出，标注规范统一之后模型才学得稳。随机生成拿不出语义，机器翻译和数据压缩解决的是另一类问题。

### 第6题

相较于关系抽取面临的机遇，其在特定领域任务上泛化能力受限的主要挑战在于

- A. 标注数据的不足
- B. 计算资源的过剩
- C. 语义理解的简单性
- D. 应用范围的狭窄

**答案：A**

关系抽取换到专业领域就得重新标数据，标注量跟不上，模型自然泛化不出去。计算资源过剩和语义简单都不成问题，领域覆盖面窄本身就是标注不足带来的结果。

### 第7题

作为从文本中获取知识图谱三元组的主要技术手段，旨在识别并提取文本中两个或多个实体之间目标关系的任务称为

- A. 关系抽取
- B. 实体抽取
- C. 事件抽取
- D. 依存句法分析

**答案：A**

关系抽取的输入是已经认出的实体对，输出是两者之间的目标关系，三元组的谓词位由它补上。实体抽取只给节点，事件抽取拿的是事件要素，依存分析落在句法层。

### 第8题

在构建管道式事件抽取系统时，若需从文本“Elon Musk is the CEO of Tesla, Inc.”中抽取出结构化事件信息，依据管道式处理的逻辑，下列操作顺序最合理的是

- A. 先进行实体识别，再标注或抽取关系，最后综合提取事件要素
- B. 先直接提取事件动作，再反向推导实体类型，最后分析关系
- C. 仅依靠词袋模型统计词频，直接映射为事件结构化数据
- D. 跳过实体和关系分析，直接对整段文本进行情感分类以确定事件

**答案：A**

管道式把任务拆成前后相接的几段，前一段的输出直接进后一段。实体先定下来，关系才有两端可挂，事件要素再由实体和关系组合而成。词袋统计丢掉了结构，情感分类跟事件要素无关。

<div align="center">
  <svg viewBox="0 0 720 236" width="100%" style="max-width:720px;height:auto" xmlns="http://www.w3.org/2000/svg" font-family="Segoe UI, 'Microsoft YaHei', sans-serif">
    <defs>
      <marker id="pa1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#2f6f8f"/>
      </marker>
    </defs>
    <rect x="18" y="14" width="684" height="38" rx="6" fill="#f6e7c8" stroke="#d9b982" stroke-width="1.2"/>
    <text x="360" y="38" font-size="13" fill="#1f2933" text-anchor="middle">Elon Musk is the CEO of Tesla, Inc.</text>
    <line x1="88" y1="52" x2="88" y2="88" stroke="#2f6f8f" stroke-width="1.4" marker-end="url(#pa1)"/>
    <rect x="18" y="96" width="140" height="56" rx="7" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.5"/>
    <text x="88" y="129" font-size="13" fill="#1f2933" text-anchor="middle">实体识别</text>
    <rect x="199" y="96" width="140" height="56" rx="7" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.5"/>
    <text x="269" y="129" font-size="13" fill="#1f2933" text-anchor="middle">关系抽取</text>
    <rect x="380" y="96" width="140" height="56" rx="7" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.5"/>
    <text x="450" y="129" font-size="13" fill="#1f2933" text-anchor="middle">事件要素</text>
    <rect x="561" y="96" width="140" height="56" rx="7" fill="#eef6f0" stroke="#3f7a5a" stroke-width="1.5"/>
    <text x="631" y="129" font-size="13" fill="#1f2933" text-anchor="middle">结构化事件</text>
    <line x1="166" y1="124" x2="191" y2="124" stroke="#2f6f8f" stroke-width="1.4" marker-end="url(#pa1)"/>
    <line x1="347" y1="124" x2="372" y2="124" stroke="#2f6f8f" stroke-width="1.4" marker-end="url(#pa1)"/>
    <line x1="528" y1="124" x2="553" y2="124" stroke="#2f6f8f" stroke-width="1.4" marker-end="url(#pa1)"/>
    <text x="88" y="176" font-size="11" fill="#5b6b76" text-anchor="middle">Musk / Tesla</text>
    <text x="269" y="176" font-size="11" fill="#5b6b76" text-anchor="middle">CEO of</text>
    <text x="450" y="176" font-size="11" fill="#5b6b76" text-anchor="middle">CEO 变更</text>
    <text x="631" y="176" font-size="11" fill="#5b6b76" text-anchor="middle">(Musk, CEO, Tesla)</text>
    <text x="360" y="214" font-size="12" fill="#5b6b76" text-anchor="middle">先定实体，关系才有两端可挂，事件要素再由两者组合</text>
  </svg>
</div>

*实体、关系与事件串成一条链路，前一段的输出进入后一段。*

### 第9题

在隐马尔可夫模型（HMM）的参数表示 $\lambda=(A,B,\Pi)$ 中，矩阵 $A$ 中的元素 $a_{ij}$ 具体代表

- A. 从状态 i 转移到状态 j 的概率
- B. 在状态 j 的条件下生成观测 vk 的概率
- C. 初始时刻处于状态 i 的概率
- D. 观测序列只依赖于当前时刻状态的独立性概率

**答案：A**

$\lambda=(A,B,\Pi)$ 里 $A$ 管状态之间的跳转，$a_{ij}$ 就是从状态 $i$ 走到状态 $j$ 的概率。$B$ 管某个状态吐出哪个观测，$\Pi$ 管序列开头落在哪个状态。

<div align="center">
  <svg viewBox="0 0 720 284" width="100%" style="max-width:720px;height:auto" xmlns="http://www.w3.org/2000/svg" font-family="Segoe UI, 'Microsoft YaHei', sans-serif">
    <defs>
      <marker id="pa2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#2f6f8f"/>
      </marker>
      <marker id="pa3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#b4552d"/>
      </marker>
    </defs>
    <text x="18" y="36" font-size="12" fill="#5b6b76">标签生成词</text>
    <text x="700" y="36" font-size="14" fill="#2f6f8f" text-anchor="end">λ = (A, B, Π)</text>
    <line x1="104" y1="112" x2="138" y2="112" stroke="#b4552d" stroke-width="1.4" marker-end="url(#pa3)"/>
    <text x="110" y="102" font-size="12" fill="#b4552d">Π</text>
    <circle cx="170" cy="112" r="26" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.5"/>
    <text x="170" y="117" font-size="13" fill="#1f2933" text-anchor="middle">q1</text>
    <circle cx="360" cy="112" r="26" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.5"/>
    <text x="360" y="117" font-size="13" fill="#1f2933" text-anchor="middle">q2</text>
    <circle cx="550" cy="112" r="26" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.5"/>
    <text x="550" y="117" font-size="13" fill="#1f2933" text-anchor="middle">q3</text>
    <line x1="204" y1="112" x2="326" y2="112" stroke="#2f6f8f" stroke-width="1.5" marker-end="url(#pa2)"/>
    <text x="265" y="102" font-size="12" fill="#2f6f8f" text-anchor="middle">A</text>
    <line x1="394" y1="112" x2="516" y2="112" stroke="#2f6f8f" stroke-width="1.5" marker-end="url(#pa2)"/>
    <text x="455" y="102" font-size="12" fill="#2f6f8f" text-anchor="middle">A</text>
    <line x1="170" y1="138" x2="170" y2="180" stroke="#b4552d" stroke-width="1.4" marker-end="url(#pa3)"/>
    <text x="180" y="164" font-size="12" fill="#b4552d">B</text>
    <line x1="360" y1="138" x2="360" y2="180" stroke="#b4552d" stroke-width="1.4" marker-end="url(#pa3)"/>
    <text x="370" y="164" font-size="12" fill="#b4552d">B</text>
    <line x1="550" y1="138" x2="550" y2="180" stroke="#b4552d" stroke-width="1.4" marker-end="url(#pa3)"/>
    <text x="560" y="164" font-size="12" fill="#b4552d">B</text>
    <rect x="122" y="188" width="96" height="40" rx="6" fill="#fdf6ec" stroke="#b4552d" stroke-width="1.2"/>
    <text x="170" y="213" font-size="13" fill="#1f2933" text-anchor="middle">张</text>
    <rect x="312" y="188" width="96" height="40" rx="6" fill="#fdf6ec" stroke="#b4552d" stroke-width="1.2"/>
    <text x="360" y="213" font-size="13" fill="#1f2933" text-anchor="middle">三</text>
    <rect x="502" y="188" width="96" height="40" rx="6" fill="#fdf6ec" stroke="#b4552d" stroke-width="1.2"/>
    <text x="550" y="213" font-size="13" fill="#1f2933" text-anchor="middle">在</text>
    <text x="360" y="262" font-size="12" fill="#5b6b76" text-anchor="middle">A 是转移概率，B 是发射概率，Π 是初始状态概率，三者合成 λ</text>
  </svg>
</div>

*状态之间走转移，状态往下吐观测，序列开头由初始概率决定。*

### 第10题

在自然语言处理中，用于分析句子结构并通过分析词语之间的依存关系来更好理解句子语义信息的技术是

- A. 依存句法分析
- B. 词袋模型
- C. 隐马尔可夫模型
- D. 支持向量机

**答案：A**

词袋模型只统计词频，语序被丢掉了；HMM 用于序列标注，SVM 是分类器。词与词之间谁管谁，只有依存分析给得出来。

### 第11题

某研究团队在特定垂直领域开展关系抽取任务时，发现由于该领域专业性强，难以获得大量高质量的人工标注数据，导致训练出的模型泛化能力严重不足。这一困境主要反映了关系抽取技术面临的哪一挑战

- A. 数据稀缺
- B. 语义理解的复杂性
- C. 计算资源需求高
- D. 自然语言的多样性

**答案：A**

题干把困难落在拿不到高质量标注上，对应的就是数据稀缺。语义理解的复杂性和语言多样性讲的是语言本身的歧义，计算资源需求高讲的是算力开销。

### 第12题

BERT模型在预训练阶段通过随机掩码部分词并预测来学习通用语言表示的任务称为

- A. 下一句预测（NSP）
- B. 掩码语言模型（MLM）
- C. 双向长短期记忆网络（BiLSTM）
- D. 条件随机场解码（CRF）

**答案：B**

BERT 预训练有两个任务，MLM 挖掉一部分词让模型填回去，NSP 判断两个句子是否相邻。BiLSTM 和 CRF 是序列标注模型的组件，跟预训练任务无关。

### 第13题

下列（　）不是知识抽取的常用方法。

- A. 基于规则的方法
- B. 基于模板的方法
- C. 基于随机猜测的方法
- D. 基于机器学习的方法

**答案：C**

规则、模板和机器学习都能从文本里稳定地拿到结构，随机猜测没有任何可利用的证据。前两类靠人工写模式，后一类从标注数据里学参数。

### 第14题

在关系抽取中，通常使用（　）技术来识别实体之间的关系。

- A. 情感分析
- B. 文本分类
- C. 语义角色标注
- D. 文本生成

**答案：C**

语义角色标注给谓词配上施事、受事这类角色，实体之间的关系由此推得出来。情感分析判断倾向，文本分类给文档贴标签，文本生成产出新文本。

### 第15题

知识抽取的效果评估通常使用（　）指标。

- A. 准确率
- B. 召回率
- C. F1 值
- D. 文本长度

**答案：C**

标注样本往往类别不均，准确率和召回率单独看都会失真，F1 是两者的调和平均。文本长度跟抽取质量没有关系。

### 第16题

某团队需处理具有网格结构特征的图像数据以提取局部特征，且希望利用权重共享机制减少参数量，最应采用的神经网络核心组件是

- A. 循环层
- B. 卷积层
- C. 全连接层
- D. 池化层

**答案：B**

网格结构和权重共享都是卷积层的特征，同一个滤波器扫过整张输入，参数不随位置增长。循环层处理序列，池化层做降采样，全连接层不共享参数。

### 第17题

自然语言处理中，旨在识别文本中人名、地名、机构名等特定类型实体的任务称为＿＿＿＿。

**答案：命名实体识别**

题干列的类别正是命名实体识别的目标，它的输出是带类别的实体边界。关系抽取拿这些实体对做输入。

### 第18题

知识抽取的后处理与评估阶段包括结果校验和＿＿＿＿两个关键环节。

**答案：效果评估**

后处理与评估这一段做两件事，先校验抽出的结果对不对，再评估整体效果好不好。校验面向单条结果的修正，评估面向方法层面的判断。

### 第19题

在实体抽取阶段，＿＿＿＿是实体抽取的核心部分，专注于识别特定类别的实体。

**答案：命名实体识别**

实体抽取的范围比命名实体识别宽，识别特定类别实体那一块由命名实体识别承担，也是整个环节里最核心的部分。

### 第20题

知识抽取的数据预处理阶段主要包括数据收集和＿＿＿＿两个步骤。

**答案：数据清洗**

数据收集把原始材料拿进来，接下来去掉重复项、补上缺失值，再清掉噪声，这一步统称数据清洗。清洗过的数据才适合做实体识别和关系抽取。

### 第21题

在知识抽取的结果校验环节，通过与已有知识库的对比以及利用领域专家的反馈，可以发现并纠正错误，从而提高知识抽取的＿＿＿＿。

**答案：质量和可信度**

对照知识库能发现与既有事实冲突的条目，专家反馈能补上机器判不了的对错，两类检查都作用在结果的可信程度上。

### 第22题

请简述知识抽取的基本定义及其在信息处理中的作用。

**答案：**

知识抽取从非结构化或半结构化的文本里自动识别并提取出结构化信息，输出实体、关系和事件这类要素。它的目的是把人类语言转成机器能直接处理的知识形式。

在信息处理中它处在供给端。抽出的三元组和事件结构是知识图谱的原料，问答系统靠它拿到可检索的事实，信息检索和推荐系统用它补上语义标签。数据规模越大，这一步对理解与利用效率的影响越明显。

### 第23题

在知识抽取中，为什么需要进行后处理与评估？请列举几种常见的评估指标。

**答案：**

后处理面向抽取结果本身。实体和关系要做标准化，同义写法归到一个名字下；重复条目去掉；与知识库冲突或明显错误的地方逐条修正。处理完的结果才谈得上可用和一致。

评估面向方法本身。准确率、召回率和 F1 值三个指标能分别量出模型错在哪、漏了什么，改进才有方向。评估结果还可以回退到预处理、实体抽取或关系抽取的任意一环，定位问题出在哪一步。

### 第24题

在构建基于BERT和BiLSTM的命名实体识别模型时，需导入PyTorch及Hugging Face相关库。请列举该流程中必须导入的四个核心模块或库，并分别说明它们在模型构建与训练中的具体作用。

**答案：**

torch 是 PyTorch 的核心库，张量运算、自动求导和训练循环都建在它上面，模型参数与计算图也归它管。

torch.nn 用来定义网络结构。嵌入层、BiLSTM 层和输出线性层都由这里的模块拼出来，前向传播写在 nn.Module 的子类里。

torch.optim 负责参数更新，把反向传播算出的梯度按 Adam 这类优化器的规则写回权重。

transformers 提供预训练 BERT 的权重和分词器，原始文本先经它转成带上下文语义的向量，再送进 BiLSTM。

### 第25题

什么是命名实体识别？在知识抽取中，它有什么应用？

**答案：**

命名实体识别从自然语言文本里找出具有特定语义类别的词或短语，常见类别是人名、地名和机构名，时间也算一类。输出是带类型标注的实体片段，起止位置和类别一起给出。

在知识抽取里它是最前置的一环。三元组的头尾实体来自它，事件结构里的参与者和地点也由它圈定；关系抽取拿它给出的实体对做输入，事件抽取靠它确定论元边界。实体没认全，后面的关系和事件都会跟着出错。

### 第26题

简述事件抽取的主要任务及其在实现过程中的关键步骤。

**答案：**

事件抽取要识别文本中发生了什么事件，给出事件类型和触发词，再把参与实体按论元角色归位。

实现分成几步。先做文本预处理，切句分词并清掉噪声；命名实体识别圈出人物、机构这类实体；接着识别触发词，由触发词给事件定类型；最后抽取论元，把时间、地点和参与者填进对应角色。

输出是结构化的事件记录，说明谁在什么时间、什么地点做了什么，供下游的检索和分析使用。

### 第27题

在知识抽取项目的数据预处理阶段，某团队从多源异构渠道收集了原始数据集 Draw，总记录数为 $N=10{,}000$ 条。经初步质量评估，发现数据集中存在以下三类主要问题：

1. **完全重复记录**：由于爬虫策略重叠，导致 $R_{dup}=1{,}200$ 条记录与已有记录完全一致；
2. **无效噪声数据**：包含乱码、空值或无关广告信息的记录共 $R_{inv}=800$ 条；
3. **格式不一致数据**：日期、单位等格式不统一但内容本身有效的记录共 $R_{fmt}=2{,}500$ 条。

根据数据预处理的规范流程，需依次执行去重、清洗无效数据及格式化操作。请基于上述场景完成以下计算与分析：

(1) 若定义“基础可用数据量” $N_{base}$ 为去除完全重复记录和无效噪声数据后剩余的数据条数，请计算 $N_{base}$ 的值。

(2) 若定义“数据洁净率” η 为基础可用数据量占原始数据总量的百分比，即 $\eta=N_{base}/N\times100$%，请计算该数据集的初始数据洁净率（保留两位小数）。

(3) 假设后续进行格式规范化处理时，因算法局限导致 5% 的格式不一致数据被错误标记为无效数据而剔除。请计算最终可用于特征提取和模型训练的有效数据总量 $N_{final}$，并分析若跳过“去重”步骤直接进行格式化处理，会对后续模型训练产生何种具体影响（需结合数据预处理的目标进行推导说明）。

**答案：**

(1) $N_{base}=N-R_{dup}-R_{inv}=10{,}000-1{,}200-800=8{,}000$ 条。格式不一致的 2,500 条内容本身有效，仍计入基础可用数据，不在这一步剔除。

(2) $\eta=8{,}000/10{,}000\times100=80.00$%。

(3) 误剔除量为 $2{,}500\times5$%，即 125 条，$N_{final}=8{,}000-125=7{,}875$ 条。

若跳过去重，1,200 条重复记录会原样进入训练集，同一内容被反复学习，样本分布失真，模型偏向重复出现的模式，泛化能力下降。重复样本若同时落进训练集和测试集，还会造成数据泄漏，测试指标虚高，调参与选型都被误导。格式化只统一写法，解决不了冗余，重复内容还会让词频和共现这类统计特征偏移。预处理的去冗余与提质量两个目标，缺了哪一步都落不了地。

<div align="center">
  <svg viewBox="0 0 720 250" width="100%" style="max-width:720px;height:auto" xmlns="http://www.w3.org/2000/svg" font-family="Segoe UI, 'Microsoft YaHei', sans-serif">
    <defs>
      <marker id="pa4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#2f6f8f"/>
      </marker>
      <marker id="pa5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#3f7a5a"/>
      </marker>
    </defs>
    <text x="360" y="26" font-size="12" fill="#5b6b76" text-anchor="middle">重复 1,200 条 · 噪声 800 条 · 格式不一致 2,500 条</text>
    <rect x="18" y="56" width="140" height="54" rx="7" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.5"/>
    <text x="88" y="80" font-size="13" fill="#1f2933" text-anchor="middle">原始数据</text>
    <text x="88" y="100" font-size="11" fill="#5b6b76" text-anchor="middle">N = 10,000 条</text>
    <rect x="199" y="56" width="140" height="54" rx="7" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.5"/>
    <text x="269" y="80" font-size="13" fill="#1f2933" text-anchor="middle">去重</text>
    <text x="269" y="100" font-size="11" fill="#5b6b76" text-anchor="middle">−1,200 条</text>
    <rect x="380" y="56" width="140" height="54" rx="7" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.5"/>
    <text x="450" y="80" font-size="13" fill="#1f2933" text-anchor="middle">清洗</text>
    <text x="450" y="100" font-size="11" fill="#5b6b76" text-anchor="middle">−800 条</text>
    <rect x="561" y="56" width="140" height="54" rx="7" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.5"/>
    <text x="631" y="80" font-size="13" fill="#1f2933" text-anchor="middle">基础可用</text>
    <text x="631" y="100" font-size="11" fill="#5b6b76" text-anchor="middle">8,000 条 · 80.00%</text>
    <line x1="166" y1="83" x2="191" y2="83" stroke="#2f6f8f" stroke-width="1.4" marker-end="url(#pa4)"/>
    <line x1="347" y1="83" x2="372" y2="83" stroke="#2f6f8f" stroke-width="1.4" marker-end="url(#pa4)"/>
    <line x1="528" y1="83" x2="553" y2="83" stroke="#2f6f8f" stroke-width="1.4" marker-end="url(#pa4)"/>
    <polyline points="631,110 631,128 450,128 450,140" fill="none" stroke="#2f6f8f" stroke-width="1.4" marker-end="url(#pa4)"/>
    <rect x="380" y="148" width="140" height="54" rx="7" fill="#fdf6ec" stroke="#b4552d" stroke-width="1.4"/>
    <text x="450" y="172" font-size="13" fill="#1f2933" text-anchor="middle">格式化</text>
    <text x="450" y="192" font-size="11" fill="#5b6b76" text-anchor="middle">误剔 125 条</text>
    <rect x="561" y="148" width="140" height="54" rx="7" fill="#eef6f0" stroke="#3f7a5a" stroke-width="1.5"/>
    <text x="631" y="172" font-size="13" fill="#1f2933" text-anchor="middle">有效数据</text>
    <text x="631" y="192" font-size="11" fill="#5b6b76" text-anchor="middle">7,875 条</text>
    <line x1="520" y1="175" x2="553" y2="175" stroke="#3f7a5a" stroke-width="1.4" marker-end="url(#pa5)"/>
    <text x="360" y="232" font-size="12" fill="#5b6b76" text-anchor="middle">格式化只统一写法，重复条目还得靠前面去掉</text>
  </svg>
</div>

*先把基础可用量扣出来，格式化的误剔再扣一次，两步的结果不同。*

### 第28题

在基于BiLSTM-CRF的命名实体识别模型中，BiLSTM模块负责将上下文嵌入映射为标签得分。假设输入句子经过BERT编码后，序列长度为 $T=5$，BiLSTM隐藏层维度设置为 $H=128$（即单向LSTM输出维度），标签集合大小为 $N=9$。模型定义中包含一个双向LSTM层（`bidirectional=True`）和一个线性层（Linear），用于将LSTM的输出映射到标签空间。

请根据PyTorch中`nn.Linear`层的权重矩阵形状定义规则（输入特征数 × 输出特征数），计算该线性层权重矩阵 $W$ 的具体形状（行数 × 列数），并说明计算依据。

**答案：**

BiLSTM 设成双向，每个时间步的输出是前向和后向隐状态的拼接，维度为 $2H=2\times128=256$，这就是线性层的输入特征数。

线性层把 256 维特征映射到 $N=9$ 个标签上，输入 256、输出 9。按题面给出的（输入特征数 × 输出特征数）规则，$W$ 的形状是 $256\times9$。

序列长度 $T=5$ 不参与权重形状，只影响输出。一个句子会得到 $5\times9$ 的标签矩阵，五个时间步共用同一组权重。

用 PyTorch 写的时候要注意，`nn.Linear` 里 weight 张量存的是这个矩阵的转置，形状为 $(9,256)$，前向计算按 $x\cdot W^{\top}$ 走。两种写法指同一组参数，答题按题面规则写 $256\times9$。

<div align="center">
  <svg viewBox="0 0 720 336" width="100%" style="max-width:720px;height:auto" xmlns="http://www.w3.org/2000/svg" font-family="Segoe UI, 'Microsoft YaHei', sans-serif">
    <defs>
      <marker id="pa6" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#2f6f8f"/>
      </marker>
    </defs>
    <rect x="18" y="16" width="684" height="38" rx="6" fill="#f6e7c8" stroke="#d9b982" stroke-width="1.2"/>
    <text x="360" y="40" font-size="13" fill="#1f2933" text-anchor="middle">输入表示 t1 t2 t3 t4 t5（T = 5）</text>
    <line x1="360" y1="54" x2="360" y2="66" stroke="#2f6f8f" stroke-width="1.4" marker-end="url(#pa6)"/>
    <line x1="230" y1="66" x2="490" y2="66" stroke="#2f6f8f" stroke-width="1.4"/>
    <line x1="230" y1="66" x2="230" y2="80" stroke="#2f6f8f" stroke-width="1.4" marker-end="url(#pa6)"/>
    <line x1="490" y1="66" x2="490" y2="80" stroke="#2f6f8f" stroke-width="1.4" marker-end="url(#pa6)"/>
    <rect x="120" y="88" width="220" height="48" rx="7" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.5"/>
    <text x="230" y="117" font-size="13" fill="#1f2933" text-anchor="middle">前向 LSTM · 128 维</text>
    <rect x="380" y="88" width="220" height="48" rx="7" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.5"/>
    <text x="490" y="117" font-size="13" fill="#1f2933" text-anchor="middle">后向 LSTM · 128 维</text>
    <line x1="250" y1="148" x2="330" y2="172" stroke="#2f6f8f" stroke-width="1.4" marker-end="url(#pa6)"/>
    <line x1="470" y1="148" x2="390" y2="172" stroke="#2f6f8f" stroke-width="1.4" marker-end="url(#pa6)"/>
    <rect x="196" y="180" width="328" height="44" rx="7" fill="#eef6f0" stroke="#3f7a5a" stroke-width="1.5"/>
    <text x="360" y="208" font-size="13" fill="#1f2933" text-anchor="middle">拼接 2 × 128 = 256 维</text>
    <line x1="360" y1="224" x2="360" y2="248" stroke="#2f6f8f" stroke-width="1.4" marker-end="url(#pa6)"/>
    <rect x="196" y="256" width="328" height="44" rx="7" fill="#fdf6ec" stroke="#b4552d" stroke-width="1.4"/>
    <text x="360" y="284" font-size="13" fill="#1f2933" text-anchor="middle">Linear 权重 W 为 256 × 9</text>
    <text x="360" y="322" font-size="12" fill="#5b6b76" text-anchor="middle">T 只决定输出的行数，权重形状由 256 和 9 定下来</text>
  </svg>
</div>

*两个方向的隐状态拼成 256 维，线性层把它压到 9 个标签上。*
