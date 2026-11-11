---
title: QUT知识图谱作业解析：第六章 图表示学习与图神经网络
date: 2026-11-06 10:01:00
updated: 2026-11-06 10:01:00
categories:
  - 期末考试
tags:
  - 考试
cover:
reprint: false
---

## 第六章 图表示学习与图神经网络

### 自测

先做一遍，答案和解析在后面。

**1.** 下面（）是图卷积神经网络模型的简称。　A. GAN　B. GNN　C. CNN　D. GCN

**2.** 下面（）不是 GraphSAGE 与 GCN 的区别。　A. 邻居聚合机制不同　B. 训练方式不同　C. 处理未见节点的能力不同　D. 处理的数据格式不同

**3.** 图嵌入表示的主要目的是（）。　A. 提高图数据的可视化质量　B. 捕捉图中节点的结构信息　C. 增加图中节点的数量　D. 减少图中的边

**4.** DeepWalk 模型的灵感来源于（ ）模型。　A. CNN　B. RNN　C. Word2vec　D. GNN

**5.** Node2vec 模型中，随机游走策略的偏置参数 p 的作用是（）。　A. 控制访问节点的频率　B. 控制重新访问上一步节点的概率　C. 控制游走的次数　D. 控制游走的步长

**6.** LINE 模型主要优化哪两个方面的相似度来学习节点的向量表示（）。　A. 一阶和二阶相似度　B. 局部和全局相似度　C. 结构和语义相似度　D. 静态和动态相似度

**7.** Metapath2vec 模型主要针对（）设计的。　A. 同构图　B. 异构图　C. 加权图　D. 全连接图

**8.** 下面（）模型使用了注意力机制。　A. GCN　B. GraphSAGE　C. Line　D. GAT

**9.** 在异构图神经网络中，HAN 模型的注意力机制是如何工作的？（）　A. 只考虑节点自身的特征　B. 平等地考虑所有邻居节点的特征　C. 没有使用注意力机制　D. 根据节点和边的类型动态调整权重

**10.** 图神经网络是（）。　A. 一种深度学习模型　B. 一种图结构数据　C. 一种推荐系统算法　D. 一种数据存储方式

**11.** 在注意力机制常用的三元组中，不包括（）符号。　A. Q　B. K　C. V　D. Z

**12.** 简述图嵌入表示技术的主要应用场景。

**13.** LINE 模型如何处理大规模图数据，并简述其优化邻域相似度的两个主要步骤。

**14.** 描述 GCN 模型的基本原理，其如何利用图的拓扑结构信息来学习节点表示？

**15.** Metapath2vec 模型中提出的 Metapath 概念是什么？

**16.** 什么是注意力机制，为什么 GAT 模型中要引入注意力机制？

**17.** 在图神经网络中，HAN 模型的工作流程是什么？请简要概括。

**18.** 解释 DeepWalk 模型的基本原理。

**19.** Node2vec 模型相对于 DeepWalk 有哪些改进，这些改进如何更好地捕捉图的结构信息？

**20.** GraphSAGE 模型的聚合方式有几种，分别有什么特点？

**21.** 异构图神经网络与同构图神经网络相比有哪些不同？

### 第1题

下面（）是图卷积神经网络模型的简称。

- A. GAN
- B. GNN
- C. CNN
- D. GCN

**答案：D**

GCN 是 Graph Convolutional Network 的缩写，指把卷积搬到图上的那类模型。GAN 属于生成模型，CNN 的卷积核在图像上滑动，名字像，做的事和图卷积没有关系。GNN 是更大的一个集合，GCN 只是其中一种。

### 第2题

下面（）不是 GraphSAGE 与 GCN 的区别。

- A. 邻居聚合机制不同
- B. 训练方式不同
- C. 处理未见节点的能力不同
- D. 处理的数据格式不同

**答案：D**

两者吃的都是节点特征加邻接关系，数据格式这一条落不到差别上。真正的分歧在聚合和训练。GCN 用对称归一化的邻接矩阵让全部邻居参与，属于直推式；GraphSAGE 每个节点固定抽 $k$ 个邻居，学的是聚合函数，新节点进来算一遍就有向量。

### 第3题

图嵌入表示的主要目的是（）。

- A. 提高图数据的可视化质量
- B. 捕捉图中节点的结构信息
- C. 增加图中节点的数量
- D. 减少图中的边

**答案：B**

图嵌入把节点压成几十到几百维的稠密向量，邻接关系由向量之间的距离和夹角承接，节点分类、链接预测和聚类才有可计算的特征输入。可视化是顺带的效果，增删节点和边跟表示学习没有关系。

### 第4题

DeepWalk 模型的灵感来源于（ ）模型。

- A. CNN
- B. RNN
- C. Word2vec
- D. GNN

**答案：C**

DeepWalk 把随机游走切出的节点序列当句子，序列里的节点当词，交给 Word2vec 的 Skip-gram 去学向量。词靠上下文定位，节点靠邻居定位，这层对应是它全部新意所在。CNN 处理图像上的局部模式，RNN 处理序列，两者都没有这层类比。

### 第5题

Node2vec 模型中，随机游走策略的偏置参数 p 的作用是（）。

- A. 控制访问节点的频率
- B. 控制重新访问上一步节点的概率
- C. 控制游走的次数
- D. 控制游走的步长

**答案：B**

站在节点 $v$ 上，刚才从 $t$ 走过来，下一步回到 $t$ 的权重是 $1/p$，留在两跳圈内是 $1$，往外走是 $1/q$。$p$ 越小越容易原路返回，游走贴着起点打转，行为接近广度优先，抓到的多是同质性。游走次数和步长由另两个超参数决定，不归 $p$ 管；$q$ 管的是往外探索的倾向。

### 第6题

LINE 模型主要优化哪两个方面的相似度来学习节点的向量表示（）。

- A. 一阶和二阶相似度
- B. 局部和全局相似度
- C. 结构和语义相似度
- D. 静态和动态相似度

**答案：A**

一阶看直接相连的边，相似度就是边权。二阶看共享邻居，两个节点不直连也能算出结构位置上的接近；真实图里直连太稀疏，光靠一阶，绝大多数节点对的相似度都是 0。两套向量训练完拼接起来，作为节点的最终表示。

### 第7题

Metapath2vec 模型主要针对（）设计的。

- A. 同构图
- B. 异构图
- C. 加权图
- D. 全连接图

**答案：B**

学术网络里作者和论文之间是撰写，论文和会议之间是发表，几种边混在一张图里。随机游走一视同仁地走，序列里的语义就串了。Metapath2vec 按元路径规定每一步该落在什么类型的节点上，走出来的路径才有确定的语义；同构图里只有一种类型的节点和边，元路径无从谈起。

### 第8题

下面（）模型使用了注意力机制。

- A. GCN
- B. GraphSAGE
- C. Line
- D. GAT

**答案：D**

GAT 给每条边学一个权重，先算邻居对中心节点的重要性分数，再在邻居范围内做 softmax 归一化，最后加权求和。GCN 的权重由度数决定，是固定的；GraphSAGE 的聚合器对邻居大体一视同仁。两者都没有这套打分。

### 第9题

在异构图神经网络中，HAN 模型的注意力机制是如何工作的？（）

- A. 只考虑节点自身的特征
- B. 平等地考虑所有邻居节点的特征
- C. 没有使用注意力机制
- D. 根据节点和边的类型动态调整权重

**答案：D**

HAN 先把异构图按元路径拆成几张同质子图。每张子图内部做节点级注意力，给同一条元路径下的邻居分权重；所有元路径之间再做语义级注意力，判断哪条路径更能说明问题。两层权重都随节点与边的类型变化，路径语义不同，分到的权重就不同。

### 第10题

图神经网络是（）。

- A. 一种深度学习模型
- B. 一种图结构数据
- C. 一种推荐系统算法
- D. 一种数据存储方式

**答案：A**

图神经网络在图结构上做消息传递，每一层把邻居的特征收过来合成，再和自己原来的向量一起过线性变换和激活，参数靠反向传播学出来。数据是它的输入，存储方式更谈不上。

### 第11题

在注意力机制常用的三元组中，不包括（）符号。

- A. Q
- B. K
- C. V
- D. Z

**答案：D**

注意力用 Query、Key、Value 三样东西，查询和键算出相关性分数，归一化成权重后对值加权求和。Z 不在其中。

### 第12题

简述图嵌入表示技术的主要应用场景。

**答案：**

节点分类是最直接的一类用途，用户画像和论文的主题判定都靠节点向量接一个分类器。链接预测把嵌入空间里的距离当作亲近程度，社交关系推荐和知识图谱补全都建在这上面。社区发现与图聚类在向量空间里跑，兴趣圈层和网络群体因此能自动浮出来。

推荐系统把用户和物品放进同一张图，嵌入之后按距离排序。异常检测看的是偏离，金融欺诈和网络入侵这类样本在嵌入空间里往往落在主流区域之外。生物信息学拿蛋白质相互作用网络做分析，也用它预测药物靶点。交通与物流网络用嵌入做路径优化和流量预测。复杂网络摊到二维平面上做降维可视化，同样是嵌入的顺带用途。

### 第13题

LINE 模型如何处理大规模图数据，并简述其优化邻域相似度的两个主要步骤。

**答案：**

大规模图上先要解决边权。真实网络的权重差异可能跨好几个数量级，直接拿原始权重做梯度更新会炸，内存也扛不住。LINE 按边权大小当概率做边采样，权重高的边被抽中的机会大，抽出来的边按权重为 1 的二值边参与训练。这样既避免了梯度爆炸，也不用把一条高权重边拆成许多条。配合负采样和异步随机梯度下降，每条边只算常数次。

一阶相似度针对直接相连的节点，让嵌入空间里的联合概率分布去拟合原始图上的经验分布，最小化两者的 KL 散度，直连的节点就在向量空间里靠得近。二阶相似度针对邻居上下文，让一个节点的向量去预测它的邻居出现的条件概率，同样用 KL 散度收口，负采样负责把开销压下来。两部分向量拼接，作为节点的最终表示。

### 第14题

描述 GCN 模型的基本原理，其如何利用图的拓扑结构信息来学习节点表示？

**答案：**

一层的更新分三步。归一化邻接矩阵先把邻居特征加权求和，乘上可学习的权重矩阵做线性变换，最后过一层非线性激活。这张权重表由邻接矩阵加自环之后按度数做对称归一化得到。

拓扑结构在这里起的是路由作用。邻接矩阵决定哪些节点之间有边，消息就沿哪些边传播。加自环是为了聚合时保住节点自己的特征，否则新向量只剩邻居的平均。按度归一化，一个连了五百个邻居的节点分给每个邻居的份额自然就小，度数高不会把结果整体拉偏。

一层只看直接邻居，两层看到两跳，感受野跟着层数扩大。堆到四五层，每个节点收上来的几乎是同一批邻居的平均，表示趋于相同，这个毛病叫过平滑。

<div align="center">
  <svg viewBox="0 0 720 300" width="100%" style="max-width:720px;height:auto" xmlns="http://www.w3.org/2000/svg" font-family="Segoe UI, 'Microsoft YaHei', sans-serif">
    <defs>
      <marker id="g6a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#2f6f8f"/>
      </marker>
      <marker id="g6a2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#b4552d"/>
      </marker>
      <marker id="g6a3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#3f7a5a"/>
      </marker>
    </defs>
    <rect x="18" y="20" width="310" height="260" rx="8" fill="#fbfdfe" stroke="#cfdde5" stroke-width="1.2"/>
    <text x="173" y="48" font-size="13" fill="#2f6f8f" text-anchor="middle">一个节点和它的邻居</text>
    <line x1="132" y1="101" x2="207" y2="136" stroke="#2f6f8f" stroke-width="1.6" marker-end="url(#g6a)"/>
    <line x1="132" y1="199" x2="207" y2="164" stroke="#2f6f8f" stroke-width="1.6" marker-end="url(#g6a)"/>
    <path d="M 214 128 C 198 86 266 86 250 128" fill="none" stroke="#b4552d" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#g6a2)"/>
    <circle cx="232" cy="150" r="24" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.6"/>
    <text x="232" y="156" font-size="15" fill="#1f2933" text-anchor="middle">u</text>
    <circle cx="110" cy="88" r="20" fill="#eef6f0" stroke="#3f7a5a" stroke-width="1.5"/>
    <text x="110" y="94" font-size="14" fill="#1f2933" text-anchor="middle">a</text>
    <circle cx="110" cy="212" r="20" fill="#eef6f0" stroke="#3f7a5a" stroke-width="1.5"/>
    <text x="110" y="218" font-size="14" fill="#1f2933" text-anchor="middle">b</text>
    <text x="232" y="84" font-size="11" fill="#b4552d" text-anchor="middle">自环</text>
    <text x="173" y="262" font-size="11" fill="#5b6b76" text-anchor="middle">自环权重 0.33，每个邻居 0.41</text>
    <rect x="348" y="20" width="354" height="260" rx="8" fill="#fbfdfe" stroke="#cfdde5" stroke-width="1.2"/>
    <text x="525" y="48" font-size="13" fill="#2f6f8f" text-anchor="middle">一层的更新</text>
    <rect x="368" y="62" width="314" height="50" rx="7" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.5"/>
    <text x="525" y="92" font-size="13" fill="#1f2933" text-anchor="middle">归一化邻接矩阵加权求和</text>
    <line x1="525" y1="114" x2="525" y2="134" stroke="#2f6f8f" stroke-width="1.5" marker-end="url(#g6a)"/>
    <rect x="368" y="138" width="314" height="50" rx="7" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.5"/>
    <text x="525" y="168" font-size="13" fill="#1f2933" text-anchor="middle">乘权重矩阵做线性变换</text>
    <line x1="525" y1="190" x2="525" y2="210" stroke="#2f6f8f" stroke-width="1.5" marker-end="url(#g6a)"/>
    <rect x="368" y="214" width="314" height="50" rx="7" fill="#eef6f0" stroke="#3f7a5a" stroke-width="1.5"/>
    <text x="525" y="244" font-size="13" fill="#1f2933" text-anchor="middle">过激活函数，得到新向量</text>
  </svg>
</div>

*邻居的份额由度数定死，聚合结果再乘权重矩阵，最后过激活函数。*

### 第15题

Metapath2vec 模型中提出的 Metapath 概念是什么？

**答案：**

元路径是异构图上的一条类型序列，形如 作者 → 论文 → 作者，每一段都规定了节点类型和关系类型。它描述的是怎样走才算一条合法路径，落到具体节点上才是实例。

学术网络里的合著路径和同会发表路径都连着两个作者，语义完全不同。元路径把这两种亲近分开，同一条路径下的连接各自成串，喂给模型时不再互相掺。

有了元路径，随机游走的转移概率跟着改。下一步只能落在元路径指定类型的节点上，邻居里没有这种类型这一步就走不通，同类型有多个候选时平分概率。走出来的序列每一步类型都是设计好的，再交给异构图上的 skip-gram 学表示。

### 第16题

什么是注意力机制，为什么 GAT 模型中要引入注意力机制？

**答案：**

注意力机制让模型自己决定该看哪里。拿当前的查询去和各个键算相关性，分数归一化成一组权重，再对这些位置的值加权求和。输入不再被平等对待，和当前任务更相关的部分拿到更大的份额。

图上一个节点的邻居重要性差别很大。一篇综述引用八十篇文献，其中三五篇是核心依据。GCN 的聚合权重由度数决定，GraphSAGE 的聚合器对邻居基本一视同仁，两者都没法按特征判断谁更重要。

GAT 给每条边学一个权重。邻居特征各乘一个可学习矩阵做投影，拼接后和一个可学习的向量做内积，过 LeakyReLU 得到分数，再在邻居范围内做 softmax 归一化，最后按权重加权求和。不相邻的位置用掩码填一个极大的负数，softmax 之后自然是 0。权重由数据学出来，邻居数量变化不影响，配多头注意力训练也更稳。

### 第17题

在图神经网络中，HAN 模型的工作流程是什么？请简要概括。

**答案：**

先定元路径。异构图里节点和边的类型不止一种，模型按任务给出几条元路径，每条代表一种语义，比如合著关系或者同会发表关系。

每条元路径下的连接抽出来，各自构成一张同质子图。子图内部做节点级注意力，给中心节点的元路径邻居分权重，加权聚合得到它在这条元路径下的表示。经常合作的作者权重高，只合作过一次的低，这一步在每个子图里各做一遍。

所有元路径的表示汇总之后做语义级注意力。每条路径的向量过一次非线性变换，和一个可学习的向量求相似度，softmax 得到路径权重，再加权求和成节点的最终嵌入。语义级要比的是每条路径的完整嵌入，顺序只能在节点级之后。

最后把嵌入接上分类器，用交叉熵训练，可以加正则项和辅助任务。

<div align="center">
  <svg viewBox="0 0 720 310" width="100%" style="max-width:720px;height:auto" xmlns="http://www.w3.org/2000/svg" font-family="Segoe UI, 'Microsoft YaHei', sans-serif">
    <defs>
      <marker id="g6b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#2f6f8f"/>
      </marker>
      <marker id="g6b2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#3f7a5a"/>
      </marker>
    </defs>
    <rect x="18" y="110" width="104" height="64" rx="7" fill="#f6e7c8" stroke="#d9b982" stroke-width="1.3"/>
    <text x="70" y="138" font-size="13" fill="#6b5322" text-anchor="middle">异构图</text>
    <text x="70" y="158" font-size="11" fill="#6b5322" text-anchor="middle">多类型节点</text>
    <text x="70" y="200" font-size="11" fill="#5b6b76" text-anchor="middle">按元路径拆开</text>
    <line x1="126" y1="132" x2="156" y2="82" stroke="#2f6f8f" stroke-width="1.4" marker-end="url(#g6b)"/>
    <line x1="126" y1="142" x2="156" y2="140" stroke="#2f6f8f" stroke-width="1.4" marker-end="url(#g6b)"/>
    <line x1="126" y1="152" x2="156" y2="198" stroke="#2f6f8f" stroke-width="1.4" marker-end="url(#g6b)"/>
    <rect x="160" y="48" width="118" height="46" rx="7" fill="#eef6f0" stroke="#3f7a5a" stroke-width="1.4"/>
    <text x="219" y="76" font-size="12" fill="#1f2933" text-anchor="middle">APA 子图</text>
    <rect x="160" y="116" width="118" height="46" rx="7" fill="#eef6f0" stroke="#3f7a5a" stroke-width="1.4"/>
    <text x="219" y="144" font-size="12" fill="#1f2933" text-anchor="middle">APVPA 子图</text>
    <rect x="160" y="184" width="118" height="46" rx="7" fill="#eef6f0" stroke="#3f7a5a" stroke-width="1.4"/>
    <text x="219" y="212" font-size="12" fill="#1f2933" text-anchor="middle">APV 子图</text>
    <line x1="280" y1="71" x2="302" y2="71" stroke="#2f6f8f" stroke-width="1.4" marker-end="url(#g6b)"/>
    <line x1="280" y1="139" x2="302" y2="139" stroke="#2f6f8f" stroke-width="1.4" marker-end="url(#g6b)"/>
    <line x1="280" y1="207" x2="302" y2="207" stroke="#2f6f8f" stroke-width="1.4" marker-end="url(#g6b)"/>
    <rect x="306" y="48" width="126" height="46" rx="7" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.4"/>
    <text x="369" y="76" font-size="12" fill="#1f2933" text-anchor="middle">节点级注意力</text>
    <rect x="306" y="116" width="126" height="46" rx="7" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.4"/>
    <text x="369" y="144" font-size="12" fill="#1f2933" text-anchor="middle">节点级注意力</text>
    <rect x="306" y="184" width="126" height="46" rx="7" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.4"/>
    <text x="369" y="212" font-size="12" fill="#1f2933" text-anchor="middle">节点级注意力</text>
    <line x1="434" y1="71" x2="456" y2="71" stroke="#2f6f8f" stroke-width="1.4" marker-end="url(#g6b)"/>
    <line x1="434" y1="139" x2="456" y2="139" stroke="#2f6f8f" stroke-width="1.4" marker-end="url(#g6b)"/>
    <line x1="434" y1="207" x2="456" y2="207" stroke="#2f6f8f" stroke-width="1.4" marker-end="url(#g6b)"/>
    <rect x="458" y="48" width="86" height="46" rx="7" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.4"/>
    <text x="501" y="76" font-size="13" fill="#1f2933" text-anchor="middle">h1</text>
    <rect x="458" y="116" width="86" height="46" rx="7" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.4"/>
    <text x="501" y="144" font-size="13" fill="#1f2933" text-anchor="middle">h2</text>
    <rect x="458" y="184" width="86" height="46" rx="7" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.4"/>
    <text x="501" y="212" font-size="13" fill="#1f2933" text-anchor="middle">h3</text>
    <line x1="546" y1="71" x2="574" y2="128" stroke="#3f7a5a" stroke-width="1.5" marker-end="url(#g6b2)"/>
    <line x1="546" y1="139" x2="574" y2="139" stroke="#3f7a5a" stroke-width="1.5" marker-end="url(#g6b2)"/>
    <line x1="546" y1="207" x2="574" y2="150" stroke="#3f7a5a" stroke-width="1.5" marker-end="url(#g6b2)"/>
    <rect x="578" y="113" width="124" height="52" rx="7" fill="#eef6f0" stroke="#3f7a5a" stroke-width="1.5"/>
    <text x="640" y="144" font-size="12" fill="#1f2933" text-anchor="middle">语义级注意力</text>
    <line x1="640" y1="167" x2="640" y2="188" stroke="#3f7a5a" stroke-width="1.5" marker-end="url(#g6b2)"/>
    <rect x="578" y="190" width="124" height="48" rx="7" fill="#eef6f0" stroke="#3f7a5a" stroke-width="1.5"/>
    <text x="640" y="219" font-size="12" fill="#1f2933" text-anchor="middle">节点嵌入 z</text>
    <text x="360" y="274" font-size="11" fill="#5b6b76" text-anchor="middle">节点级注意力在每条元路径的子图内给邻居分权重</text>
    <text x="360" y="296" font-size="11" fill="#5b6b76" text-anchor="middle">语义级注意力在所有元路径之间分配权重</text>
  </svg>
</div>

*异构图先按元路径拆成子图，子图内挑邻居，元路径之间再挑语义。*

### 第18题

解释 DeepWalk 模型的基本原理。

**答案：**

DeepWalk 借的是词向量的思路。自然语言里一个词的意思由它周围的词决定，图上与它对应的是邻居，把节点排成一条路径，路径上挨着的节点就相当于句子里挨着的词。

路径靠随机游走生成。从每个节点出发，每一步在当前节点的邻居里随便挑一个走过去，走固定步数，同一个节点可以被重复走到。常用的设置是每个节点走 10 条、每条 20 步，向量 50 维。

序列当句子，节点当词，喂给 Word2vec 的 Skip-gram。训练目标是用中心节点预测窗口内的上下文节点，要的结果在训练之后，经常出现在同一窗口里的节点向量被拉近。负采样和层次 softmax 用来压低开销。

学到的向量能反映局部邻域。直接相连的节点容易靠近，多步游走经常可达的节点也会靠近。两个节点离得远、在各自那片区域里角色相同的那种相似，均匀游走碰不到。

<div align="center">
  <svg viewBox="0 0 720 250" width="100%" style="max-width:720px;height:auto" xmlns="http://www.w3.org/2000/svg" font-family="Segoe UI, 'Microsoft YaHei', sans-serif">
    <defs>
      <marker id="g6c" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#3f7a5a"/>
      </marker>
      <marker id="g6c2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#2f6f8f"/>
      </marker>
    </defs>
    <line x1="140" y1="58" x2="210" y2="80" stroke="#cfdde5" stroke-width="1.3"/>
    <line x1="70" y1="80" x2="70" y2="142" stroke="#cfdde5" stroke-width="1.3"/>
    <line x1="70" y1="142" x2="140" y2="164" stroke="#cfdde5" stroke-width="1.3"/>
    <line x1="88" y1="74" x2="122" y2="64" stroke="#3f7a5a" stroke-width="2" marker-end="url(#g6c)"/>
    <line x1="140" y1="77" x2="140" y2="145" stroke="#3f7a5a" stroke-width="2" marker-end="url(#g6c)"/>
    <line x1="158" y1="159" x2="192" y2="148" stroke="#3f7a5a" stroke-width="2" marker-end="url(#g6c)"/>
    <line x1="210" y1="123" x2="210" y2="99" stroke="#3f7a5a" stroke-width="2" marker-end="url(#g6c)"/>
    <circle cx="70" cy="80" r="17" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.5"/>
    <text x="70" y="85" font-size="13" fill="#1f2933" text-anchor="middle">A</text>
    <circle cx="140" cy="58" r="17" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.5"/>
    <text x="140" y="63" font-size="13" fill="#1f2933" text-anchor="middle">B</text>
    <circle cx="210" cy="80" r="17" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.5"/>
    <text x="210" y="85" font-size="13" fill="#1f2933" text-anchor="middle">C</text>
    <circle cx="70" cy="142" r="17" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.5"/>
    <text x="70" y="147" font-size="13" fill="#1f2933" text-anchor="middle">D</text>
    <circle cx="140" cy="164" r="17" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.5"/>
    <text x="140" y="169" font-size="13" fill="#1f2933" text-anchor="middle">E</text>
    <circle cx="210" cy="142" r="17" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.5"/>
    <text x="210" y="147" font-size="13" fill="#1f2933" text-anchor="middle">F</text>
    <circle cx="48" cy="58" r="8" fill="#3f7a5a"/>
    <text x="48" y="62" font-size="10" fill="#ffffff" text-anchor="middle">1</text>
    <circle cx="118" cy="36" r="8" fill="#3f7a5a"/>
    <text x="118" y="40" font-size="10" fill="#ffffff" text-anchor="middle">2</text>
    <circle cx="118" cy="142" r="8" fill="#3f7a5a"/>
    <text x="118" y="146" font-size="10" fill="#ffffff" text-anchor="middle">3</text>
    <circle cx="232" cy="120" r="8" fill="#3f7a5a"/>
    <text x="232" y="124" font-size="10" fill="#ffffff" text-anchor="middle">4</text>
    <circle cx="232" cy="58" r="8" fill="#3f7a5a"/>
    <text x="232" y="62" font-size="10" fill="#ffffff" text-anchor="middle">5</text>
    <text x="140" y="208" font-size="11" fill="#5b6b76" text-anchor="middle">从起点出发，每步挑一个邻居</text>
    <line x1="248" y1="75" x2="290" y2="75" stroke="#2f6f8f" stroke-width="1.5" marker-end="url(#g6c2)"/>
    <text x="300" y="44" font-size="11" fill="#5b6b76">随机游走序列</text>
    <rect x="300" y="56" width="50" height="38" rx="6" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.4"/>
    <text x="325" y="80" font-size="13" fill="#1f2933" text-anchor="middle">A</text>
    <rect x="358" y="56" width="50" height="38" rx="6" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.4"/>
    <text x="383" y="80" font-size="13" fill="#1f2933" text-anchor="middle">B</text>
    <rect x="416" y="56" width="50" height="38" rx="6" fill="#fdf6ec" stroke="#b4552d" stroke-width="1.8"/>
    <text x="441" y="80" font-size="13" fill="#1f2933" text-anchor="middle">E</text>
    <rect x="474" y="56" width="50" height="38" rx="6" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.4"/>
    <text x="499" y="80" font-size="13" fill="#1f2933" text-anchor="middle">F</text>
    <rect x="532" y="56" width="50" height="38" rx="6" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.4"/>
    <text x="557" y="80" font-size="13" fill="#1f2933" text-anchor="middle">C</text>
    <text x="300" y="132" font-size="11" fill="#5b6b76">共现的节点在向量空间里靠拢</text>
    <rect x="300" y="140" width="282" height="86" rx="8" fill="#fbfdfe" stroke="#cfdde5" stroke-width="1.2"/>
    <ellipse cx="441" cy="180" rx="88" ry="37" fill="none" stroke="#cfdde5" stroke-width="1.2" stroke-dasharray="5 4"/>
    <circle cx="400" cy="168" r="3.5" fill="#3f7a5a"/>
    <text x="407" y="172" font-size="10" fill="#1f2933">A</text>
    <circle cx="438" cy="158" r="3.5" fill="#3f7a5a"/>
    <text x="445" y="162" font-size="10" fill="#1f2933">B</text>
    <circle cx="420" cy="196" r="3.5" fill="#3f7a5a"/>
    <text x="427" y="200" font-size="10" fill="#1f2933">E</text>
    <circle cx="462" cy="190" r="3.5" fill="#3f7a5a"/>
    <text x="469" y="194" font-size="10" fill="#1f2933">F</text>
    <circle cx="486" cy="166" r="3.5" fill="#3f7a5a"/>
    <text x="493" y="170" font-size="10" fill="#1f2933">C</text>
  </svg>
</div>

*随机游走把图变成序列，同一窗口里常出现的节点在向量空间中挨在一起。*

### 第19题

Node2vec 模型相对于 DeepWalk 有哪些改进，这些改进如何更好地捕捉图的结构信息？

**答案：**

DeepWalk 的游走是无偏的，下一步在邻居里均匀挑一个。$p$ 和 $q$ 都取 $1$ 时，Node2vec 就退回这个样子。

参数 $p$ 管回头。站在节点 $v$ 上，刚才从 $t$ 走过来，下一步回到 $t$ 的权重是 $1/p$，留在两跳圈内是 $1$，往外走是 $1/q$。$p$ 越小越容易原路返回，游走贴着起点打转，行为接近广度优先，序列里装的多是同一伙人，同质性重。

参数 $q$ 管往外，它越小越愿意走向和 $t$ 没有直接连接的节点。游走往深处跑，接近深度优先，远处但结构位置相同的节点会被带进同一条序列，同构性重。

这里还多了一层依赖。要知道上一步是谁，转移概率就不能只看当前节点，游走从一阶变成二阶。调这两个数，就调出了同质性与结构角色的不同配比。

### 第20题

GraphSAGE 模型的聚合方式有几种，分别有什么特点？

**答案：**

均值聚合把邻居向量逐元素取平均。它不带参数，算得最快，对输入顺序不敏感，天然对称。流程上只把聚合结果过一层线性变换，不再把节点自身的向量拼回去，所以它和 GCN 的传播规则非常接近，可以看作 GCN 的归纳式版本。代价是表达能力有限。

LSTM 聚合把邻居排成序列送进 LSTM。它能学到比简单平均更复杂的模式，表达能力强。麻烦在 LSTM 本身对顺序敏感，而邻居集合没有顺序，用之前要对邻居做多次随机打乱。计算开销大，训练比池化慢。

池化聚合让每个邻居先过一次全连接做非线性变换，再对所有变换后的向量逐元素取最大。它既对称又可训练，效果通常比均值聚合好，代价是多了一层变换和池化。

原论文的实验里 LSTM 和池化在多数数据集上优于均值，开销也更大。求和、取平均和取最大都满足对称性，直接拼接做不到这一点。

<div align="center">
  <svg viewBox="0 0 720 280" width="100%" style="max-width:720px;height:auto" xmlns="http://www.w3.org/2000/svg" font-family="Segoe UI, 'Microsoft YaHei', sans-serif">
    <defs>
      <marker id="g6d" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#2f6f8f"/>
      </marker>
    </defs>
    <rect x="18" y="20" width="220" height="240" rx="8" fill="#fbfdfe" stroke="#cfdde5" stroke-width="1.2"/>
    <text x="128" y="48" font-size="13" fill="#2f6f8f" text-anchor="middle">均值聚合</text>
    <rect x="40" y="68" width="38" height="20" rx="4" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.2"/>
    <text x="59" y="82" font-size="10" fill="#1f2933" text-anchor="middle">x1</text>
    <rect x="40" y="98" width="38" height="20" rx="4" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.2"/>
    <text x="59" y="112" font-size="10" fill="#1f2933" text-anchor="middle">x2</text>
    <rect x="40" y="128" width="38" height="20" rx="4" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.2"/>
    <text x="59" y="142" font-size="10" fill="#1f2933" text-anchor="middle">x3</text>
    <line x1="80" y1="78" x2="94" y2="102" stroke="#2f6f8f" stroke-width="1.2" marker-end="url(#g6d)"/>
    <line x1="80" y1="108" x2="94" y2="108" stroke="#2f6f8f" stroke-width="1.2" marker-end="url(#g6d)"/>
    <line x1="80" y1="138" x2="94" y2="114" stroke="#2f6f8f" stroke-width="1.2" marker-end="url(#g6d)"/>
    <rect x="94" y="94" width="48" height="28" rx="5" fill="#fdf6ec" stroke="#b4552d" stroke-width="1.2"/>
    <text x="118" y="113" font-size="10" fill="#1f2933" text-anchor="middle">平均</text>
    <line x1="144" y1="108" x2="166" y2="108" stroke="#2f6f8f" stroke-width="1.2" marker-end="url(#g6d)"/>
    <rect x="166" y="92" width="58" height="32" rx="5" fill="#eef6f0" stroke="#3f7a5a" stroke-width="1.3"/>
    <text x="195" y="112" font-size="10" fill="#1f2933" text-anchor="middle">聚合结果</text>
    <text x="128" y="180" font-size="11" fill="#1f2933" text-anchor="middle">邻居逐元素取平均</text>
    <text x="128" y="204" font-size="11" fill="#5b6b76" text-anchor="middle">无参数，速度最快</text>
    <text x="128" y="228" font-size="11" fill="#5b6b76" text-anchor="middle">对顺序不敏感</text>
    <rect x="250" y="20" width="220" height="240" rx="8" fill="#fbfdfe" stroke="#cfdde5" stroke-width="1.2"/>
    <text x="360" y="48" font-size="13" fill="#2f6f8f" text-anchor="middle">LSTM 聚合</text>
    <rect x="272" y="68" width="38" height="20" rx="4" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.2"/>
    <text x="291" y="82" font-size="10" fill="#1f2933" text-anchor="middle">x1</text>
    <rect x="272" y="98" width="38" height="20" rx="4" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.2"/>
    <text x="291" y="112" font-size="10" fill="#1f2933" text-anchor="middle">x2</text>
    <rect x="272" y="128" width="38" height="20" rx="4" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.2"/>
    <text x="291" y="142" font-size="10" fill="#1f2933" text-anchor="middle">x3</text>
    <line x1="312" y1="78" x2="326" y2="102" stroke="#2f6f8f" stroke-width="1.2" marker-end="url(#g6d)"/>
    <line x1="312" y1="108" x2="326" y2="108" stroke="#2f6f8f" stroke-width="1.2" marker-end="url(#g6d)"/>
    <line x1="312" y1="138" x2="326" y2="114" stroke="#2f6f8f" stroke-width="1.2" marker-end="url(#g6d)"/>
    <rect x="326" y="94" width="48" height="28" rx="5" fill="#fdf6ec" stroke="#b4552d" stroke-width="1.2"/>
    <text x="350" y="113" font-size="10" fill="#1f2933" text-anchor="middle">LSTM</text>
    <line x1="376" y1="108" x2="398" y2="108" stroke="#2f6f8f" stroke-width="1.2" marker-end="url(#g6d)"/>
    <rect x="398" y="92" width="58" height="32" rx="5" fill="#eef6f0" stroke="#3f7a5a" stroke-width="1.3"/>
    <text x="427" y="112" font-size="10" fill="#1f2933" text-anchor="middle">聚合结果</text>
    <text x="360" y="180" font-size="11" fill="#1f2933" text-anchor="middle">邻居排成序列输入</text>
    <text x="360" y="204" font-size="11" fill="#5b6b76" text-anchor="middle">表达强，开销大</text>
    <text x="360" y="228" font-size="11" fill="#5b6b76" text-anchor="middle">需随机打乱顺序</text>
    <rect x="482" y="20" width="220" height="240" rx="8" fill="#fbfdfe" stroke="#cfdde5" stroke-width="1.2"/>
    <text x="592" y="48" font-size="13" fill="#2f6f8f" text-anchor="middle">池化聚合</text>
    <rect x="504" y="68" width="38" height="20" rx="4" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.2"/>
    <text x="523" y="82" font-size="10" fill="#1f2933" text-anchor="middle">x1</text>
    <rect x="504" y="98" width="38" height="20" rx="4" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.2"/>
    <text x="523" y="112" font-size="10" fill="#1f2933" text-anchor="middle">x2</text>
    <rect x="504" y="128" width="38" height="20" rx="4" fill="#eaf3f7" stroke="#2f6f8f" stroke-width="1.2"/>
    <text x="523" y="142" font-size="10" fill="#1f2933" text-anchor="middle">x3</text>
    <line x1="544" y1="78" x2="558" y2="102" stroke="#2f6f8f" stroke-width="1.2" marker-end="url(#g6d)"/>
    <line x1="544" y1="108" x2="558" y2="108" stroke="#2f6f8f" stroke-width="1.2" marker-end="url(#g6d)"/>
    <line x1="544" y1="138" x2="558" y2="114" stroke="#2f6f8f" stroke-width="1.2" marker-end="url(#g6d)"/>
    <rect x="558" y="94" width="48" height="28" rx="5" fill="#fdf6ec" stroke="#b4552d" stroke-width="1.2"/>
    <text x="582" y="113" font-size="10" fill="#1f2933" text-anchor="middle">max</text>
    <line x1="608" y1="108" x2="630" y2="108" stroke="#2f6f8f" stroke-width="1.2" marker-end="url(#g6d)"/>
    <rect x="630" y="92" width="58" height="32" rx="5" fill="#eef6f0" stroke="#3f7a5a" stroke-width="1.3"/>
    <text x="659" y="112" font-size="10" fill="#1f2933" text-anchor="middle">聚合结果</text>
    <text x="592" y="180" font-size="11" fill="#1f2933" text-anchor="middle">邻居各自过全连接</text>
    <text x="592" y="204" font-size="11" fill="#5b6b76" text-anchor="middle">再逐元素取最大</text>
    <text x="592" y="228" font-size="11" fill="#5b6b76" text-anchor="middle">对称且可训练</text>
  </svg>
</div>

*三种聚合器面对的都是无序的邻居集合，差别落在参数和开销上。*

### 第21题

异构图神经网络与同构图神经网络相比有哪些不同？

**答案：**

图数据本身就不同。同构图只有一种节点和一种边，社交网络里的用户加好友勉强够用。异构图有多种节点和多种边，学术网络里作者和论文之间是撰写，论文和会议之间是发表，各类型的特征空间和语义都不一样。

消息传递跟着变。同构的那几个模型对所有邻居用一套聚合规则，异构模型要做类型感知的传递，RGCN 给每种关系配一套变换矩阵，HGT 按元关系三元组组织参数。

同构图只看邻域结构，异构图还要处理多种语义关系，常见做法是定义元路径。Metapath2vec 用它引导游走，HAN 用节点级注意力聚合邻居，再用语义级注意力融合路径。

参数规模是这套设计的代价。异构模型要为关系或类型单独设参数，模型更大，稀疏类型容易过拟合。同构图多做节点分类和链接预测，异构图更适合推荐和学术网络分析。
