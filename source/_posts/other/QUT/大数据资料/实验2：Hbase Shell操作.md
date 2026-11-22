---
published: false
title: 实验2：Hbase Shell 操作
date: 2026-11-21 10:30:00
categories:
  - QUT
---

## 先认识这张表

实验全程只用一张表 `people_lmd`，`lmd` 换成自己名字的拼音。表里三行数据的行键从 `rk0001` 到 `rk0003`，这是自己起的名字，不是系统分配的；想叫什么都行，HBase 只按它的字典序排。

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 200" role="img" aria-label="people_lmd 表的逻辑结构：行键、两个列族和单元格" style="max-width:100%;height:auto">
<rect x="20" y="22" width="480" height="126" rx="4" fill="#ffffff" stroke="#cfd8e0" stroke-width="1.2"/>
<rect x="20" y="22" width="480" height="24" fill="#eef3f7"/>
<rect x="20" y="46" width="480" height="24" fill="#f7fafc"/>
<rect x="230" y="96" width="100" height="26" fill="#f2f4f6"/>
<rect x="330" y="96" width="170" height="26" fill="#f2f4f6"/>
<line x1="20" y1="46" x2="500" y2="46" stroke="#cfd8e0" stroke-width="1"/>
<line x1="20" y1="70" x2="500" y2="70" stroke="#cfd8e0" stroke-width="1"/>
<line x1="20" y1="96" x2="500" y2="96" stroke="#cfd8e0" stroke-width="1"/>
<line x1="20" y1="122" x2="500" y2="122" stroke="#cfd8e0" stroke-width="1"/>
<line x1="100" y1="22" x2="100" y2="148" stroke="#cfd8e0" stroke-width="1"/>
<line x1="330" y1="22" x2="330" y2="148" stroke="#cfd8e0" stroke-width="1"/>
<line x1="230" y1="46" x2="230" y2="148" stroke="#cfd8e0" stroke-width="1"/>
<text x="60" y="38" font-size="9.5" fill="#2c3e50" text-anchor="middle" font-weight="600">行键</text>
<text x="215" y="38" font-size="10.5" fill="#256b4e" text-anchor="middle" font-weight="600">info 列族</text>
<text x="415" y="38" font-size="10.5" fill="#8a5218" text-anchor="middle" font-weight="600">data 列族</text>
<text x="60" y="62" font-size="8.4" fill="#7c93a3" text-anchor="middle">rowkey</text>
<text x="165" y="62" font-size="8.4" fill="#7c93a3" text-anchor="middle">name</text>
<text x="280" y="62" font-size="8.4" fill="#7c93a3" text-anchor="middle">gender</text>
<text x="415" y="62" font-size="8.4" fill="#7c93a3" text-anchor="middle">myurl</text>
<text x="60" y="88" font-size="8.6" fill="#2c3e50" text-anchor="middle" font-family="Consolas, Menlo, monospace">rk0001</text>
<text x="165" y="88" font-size="8.6" fill="#2c3e50" text-anchor="middle" font-family="Consolas, Menlo, monospace">MaYun</text>
<text x="280" y="88" font-size="8.6" fill="#2c3e50" text-anchor="middle" font-family="Consolas, Menlo, monospace">male</text>
<text x="415" y="88" font-size="7.6" fill="#2c3e50" text-anchor="middle" font-family="Consolas, Menlo, monospace">www.yun.alibaba.com/myURL</text>
<text x="60" y="114" font-size="8.6" fill="#2c3e50" text-anchor="middle" font-family="Consolas, Menlo, monospace">rk0002</text>
<text x="165" y="114" font-size="8.6" fill="#2c3e50" text-anchor="middle" font-family="Consolas, Menlo, monospace">LiuChangle</text>
<text x="280" y="114" font-size="8" fill="#b6c2cc" text-anchor="middle">(没有)</text>
<text x="415" y="114" font-size="8" fill="#b6c2cc" text-anchor="middle">(没有)</text>
<text x="60" y="140" font-size="8.6" fill="#2c3e50" text-anchor="middle" font-family="Consolas, Menlo, monospace">rk0003</text>
<text x="165" y="140" font-size="8.6" fill="#2c3e50" text-anchor="middle" font-family="Consolas, Menlo, monospace">ZhaoZilong</text>
<text x="280" y="140" font-size="8.6" fill="#2c3e50" text-anchor="middle" font-family="Consolas, Menlo, monospace">male</text>
<text x="415" y="140" font-size="7.6" fill="#2c3e50" text-anchor="middle" font-family="Consolas, Menlo, monospace">www.yun.alibaba.com/myURL2</text>
<text x="20" y="172" font-size="8.8" fill="#7c93a3">灰色格子表示还没有写过，这个单元格在 HBase 里不存在，也不占空间</text>
<text x="20" y="188" font-size="8.8" fill="#7c93a3">rk0003 的 info:name 原来写的是 MaYun2，后来用 put 改成 ZhaoZilong</text>
</svg>

写数据时先选列族（`info` 或 `data`），再在列族下面写具体的列；中间那些灰色格子从来没写过，也就不占任何空间。

## 先对照 MySQL 看一遍

有 SQL 底子的话，这套命令主要换三个说法：建表不写字段，只写列族；`put` 一条语句同时承担 INSERT 和 UPDATE；行键相当于主键，也是唯一能直接定位的键。

| MySQL | HBase Shell | 差别 |
| --- | --- | --- |
| `CREATE TABLE t (id INT PRIMARY KEY, name VARCHAR(20))` | `create 'people_lmd', {NAME => 'info'}` | 只定列族，字段等写数据时再出现 |
| `INSERT INTO t VALUES ('rk0001','MaYun')` | `put 'people_lmd','rk0001','info:name','MaYun'` | 行键自己给，形态是字符串 |
| `UPDATE t SET name='ZhaoZilong' WHERE id='rk0003'` | `put 'people_lmd','rk0003','info:name','ZhaoZilong'` | 同一条命令，写进去就是新版本 |
| `SELECT * FROM t WHERE id='rk0001'` | `get 'people_lmd','rk0001'` | 只能按行键取 |
| `SELECT * FROM t WHERE name='MaYun'` | `scan 'people_lmd', {FILTER => "ValueFilter(=,'binary:MaYun')"}` | 全表扫一遍再过滤，慢 |
| `SELECT COUNT(*) FROM t` | `count 'people_lmd'` | 同样要扫，行多时很慢 |
| `DELETE FROM t WHERE id='rk0001'` | `deleteall 'people_lmd','rk0001'` | 删整行 |
| `ALTER TABLE t ADD COLUMN age INT` | 不用写，直接 `put` 新列 | 列族定好之后，列随时加 |
| `SHOW TABLES` | `list` | — |
| `DESC t` | `describe 'people_lmd'` | 看到的是列族参数，不是字段清单 |
| `DROP TABLE t` | `disable 'people_lmd'` 然后 `drop 'people_lmd'` | 两步，删之前必须先禁用 |

join 和跨行事务都没有。两张表要拼，只能在程序里查两次再拼；单行写入是原子的，跨行不是。

只有行键能直接定位。`WHERE age > 30` 这种条件查询要扫全表，HBase 快的是按行键取一行。

## 一、启动

| 命令 | 作用 | 说明 |
| --- | --- | --- |
| `cd /usr/local/hadoop` | 进入 Hadoop 目录 | 启动脚本在 `sbin` 下 |
| `./sbin/start-dfs.sh` | 启动 HDFS | HBase 的数据存在 HDFS 上，必须先启 Hadoop |
| `cd /usr/local/hbase-1.1.2` | 进入 HBase 目录 | — |
| `bin/start-hbase.sh` | 启动 HBase 与自带的 zookeeper | 需要 Java 和 Hadoop 已启动 |
| `jps` | 查看 Java 进程 | 出现 NameNode、DataNode、HMaster、HRegionServer 才算起来 |
| 浏览器访问 `http://localhost:16010/` | 查看 HBase 管理界面 | 在虚拟机里打开，不是本机浏览器 |
| `bin/hbase shell` | 进入 HBase 命令行 | 后续命令都在 shell 里敲 |
| `help` | 列出所有命令 | `help 'ddl'`、`help 'dml'` 分组查看 |
| `exit` | 退出 shell | `quit` 同义 |

`jps` 正常时列出来的进程，前面的编号每台机器都不一样：

```
2345 NameNode
2489 DataNode
2610 SecondaryNameNode
2734 HMaster
2891 HRegionServer
```

少一个都不行。HBase 起不来，多半是 HDFS 没起或者 Java 路径不对：

| 现象 | 原因 | 处理 |
| --- | --- | --- |
| `start-hbase.sh` 跑完，`jps` 里没有 HMaster | HDFS 还没起，或 `JAVA_HOME` 没配 | 先执行 `./sbin/start-dfs.sh`，再看 `echo $JAVA_HOME` |
| 进 shell 报 ZooKeeper connection refused | HBase 没起来，或刚被关掉 | 回 `/usr/local/hbase-1.1.2` 重新执行 `bin/start-hbase.sh` |
| 16010 页面打不开 | 用的是本机浏览器，或虚拟机防火墙拦了 | 在虚拟机里打开浏览器；必要时 `service iptables stop` |

## 二、库表操作

| 命令 | 作用 | 说明 |
| --- | --- | --- |
| `create 'people_lmd', {NAME => 'info', VERSIONS => 3}, {NAME => 'data', VERSIONS => 1}` | 建表并指定列族 | 至少一个列族；VERSIONS 是该列族保留的历史版本数 |
| `list` | 列出所有表 | — |
| `describe 'people_lmd'` | 查看表结构 | 显示列族、VERSIONS、压缩方式 |
| `disable 'people_lmd'` | 禁用表 | 删表前必须先禁用 |
| `drop 'people_lmd'` | 删除表 | 没 disable 会报错 |
| `version` | 查看 HBase 版本 | — |

命令里的引号和花括号不是装饰。HBase Shell 用 JRuby 写，参数按 Ruby 字符串处理，所以表名要加单引号，列族和值也一样；`{NAME => 'info', VERSIONS => 3}` 是一个哈希，`NAME` 指列族名，`VERSIONS` 指这个列族保留几份历史值。要两个列族就写两个花括号，中间用逗号隔开。

`create` 执行完屏幕上出现三行：

```
hbase(main):001:0> create 'people_lmd', {NAME => 'info', VERSIONS => 3}, {NAME => 'data', VERSIONS => 1}
0 row(s) in 1.4580 seconds
=> Hbase::Table - people_lmd
```

`0 row(s)` 是这条命令的耗时统计，不是表里有多少数据。最后一行 `=> Hbase::Table - people_lmd` 是 Ruby 的返回值，把表名回显一遍。

`describe` 一屏都是参数，只需要认三处：

```
hbase(main):002:0> describe 'people_lmd'
Table people_lmd is ENABLED
COLUMN FAMILIES DESCRIPTION
{NAME => 'data', VERSIONS => '1', COMPRESSION => 'NONE', TTL => 'FOREVER'}
{NAME => 'info', VERSIONS => '3', COMPRESSION => 'NONE', TTL => 'FOREVER'}
2 row(s) in 0.0310 seconds
```

第一行说表可用，`disable` 之后这里会变成 DISABLED。每个花括号是一个列族，`VERSIONS => '3'` 对应建表时写的 3。别把这里的 `2 row(s)` 当成数据行数，它数的是列族。

删表要先禁用，顺序反了会报 TableNotDisabledException：

```
hbase(main):003:0> disable 'people_lmd'
0 row(s) in 1.1020 seconds
hbase(main):004:0> drop 'people_lmd'
0 row(s) in 0.5140 seconds
```

## 三、数据操作

| 命令 | 作用 | 说明 |
| --- | --- | --- |
| `put 'people_lmd','rk0001','info:name','MaYun'` | 写入一个单元格 | 参数依次是表、rowkey、列族:列、值 |
| `put 'people_lmd','rk0001','info:gender','male'` | 同一行再加一列 | 列不用预先定义 |
| `put 'people_lmd','rk0003','info:name','ZhaoZilong'` | 修改已有单元格 | put 写入即生成新版本，旧版本按 VERSIONS 保留 |
| `get 'people_lmd','rk0001'` | 查询一行 | 默认只返回最新版本 |
| `get 'people_lmd','rk0003',{COLUMN=>'info:name',VERSIONS=>3}` | 查指定列的历史版本 | 版本数不超过建表时的 VERSIONS |
| `scan 'people_lmd'` | 扫全表 | 行多时加 `LIMIT` |
| `count 'people_lmd'` | 统计行数 | — |
| `delete 'people_lmd','rk0003','info:gender'` | 删除一个单元格 | put 的反向操作 |
| `deleteall 'people_lmd','rk0001'` | 删除整行 | 带 rowkey 即整行，带列就只删该列 |

`put` 只回一行耗时，没有别的输出：

```
hbase(main):005:0> put 'people_lmd','rk0001','info:name','MaYun'
0 row(s) in 0.1120 seconds
```

它相当于 MySQL 的 `INSERT ... ON DUPLICATE KEY UPDATE`：行键不存在就插一行，已经存在就加一个版本。

`get` 查一行，左边是列名，右边是单元格内容：

```
hbase(main):006:0> get 'people_lmd','rk0001'
COLUMN                     CELL
 info:gender               timestamp=1445823011023, value=male
 info:name                 timestamp=1445823008871, value=MaYun
2 row(s) in 0.0320 seconds
```

`timestamp` 是 put 时自动打的毫秒时间戳，每台机器都不一样。同一个列出现两行说明有两个版本，最上面一行最新；这里 `2 row(s)` 数的是单元格个数。

`scan` 扫全表，一个单元格一行，行键会重复出现：

```
hbase(main):007:0> scan 'people_lmd'
ROW                        COLUMN+CELL
 rk0001                    column=info:gender, timestamp=1445823011023, value=male
 rk0001                    column=info:name, timestamp=1445823008871, value=MaYun
 rk0002                    column=info:name, timestamp=1445823020045, value=LiuChangle
2 row(s) in 0.0400 seconds
```

`scan` 的 row(s) 按行数算，不是按单元格算。数据多了以后用 `scan 'people_lmd', {LIMIT => 10}` 只看前 10 行。

改一个值不用别的命令，再 put 一次就行：

```
hbase(main):008:0> put 'people_lmd','rk0003','info:name','ZhaoZilong'
0 row(s) in 0.0980 seconds
hbase(main):009:0> get 'people_lmd','rk0003',{COLUMN=>'info:name',VERSIONS=>3}
COLUMN                     CELL
 info:name                 timestamp=1445823100778, value=ZhaoZilong
 info:name                 timestamp=1445823055431, value=MaYun2
2 row(s) in 0.0250 seconds
```

旧值没有消失，只是排到后面。要等后台合并时，超出 VERSIONS 的版本才会被清掉。

删数据两条命令，删的范围不一样：

```
hbase(main):010:0> delete 'people_lmd','rk0003','info:gender'
0 row(s) in 0.0300 seconds
hbase(main):011:0> deleteall 'people_lmd','rk0001'
0 row(s) in 0.0410 seconds
```

`delete` 只删指定单元格，`deleteall` 把整行的所有列族一起删。删完再 `get` 一次，返回 `0 row(s)`；删除本身也只是打标记，物理删除同样等后台合并。

## 四、非交互模式

```bash
hbase shell lmd_commands.txt
```

命令文件每行写一条命令，执行时不用进 shell：

```
create 'people_lmd','info'
put 'people_lmd','rk0001','info:name','MaYun'
exit
```

文件要放在执行 `hbase shell` 时的当前目录下，路径不对会报找不到文件。

## 五、HBase 是什么

HBase 建在 HDFS 之上，用的是 BigTable 的模型：数据按列族存，按行键定位。HDFS 只保证「放得下、不丢」，不提供按主键找的能力。要在整张表里取一行，它只能从头一路扫过去。HBase 在它前面加了一层按行键排好的索引，数据本身仍然躺在 HDFS 的块里。按 NoSQL 的分类，它算宽列数据库，同一类的还有 Cassandra。

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 250" role="img" aria-label="HBase 在 Hadoop 体系里的位置" style="max-width:100%;height:auto">
<defs><marker id="hb1" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 z" fill="#8fb2c4"/></marker></defs>
<text x="20" y="16" font-size="9.5" fill="#95a1ad">计算层：整批扫全表</text>
<rect x="20" y="24" width="108" height="30" rx="6" fill="#f8f9fa" stroke="#dbe4ec" stroke-width="1.2"/>
<text x="74" y="43" font-size="10.5" fill="#2c3e50" text-anchor="middle" font-weight="600">MapReduce</text>
<rect x="136" y="24" width="108" height="30" rx="6" fill="#f8f9fa" stroke="#dbe4ec" stroke-width="1.2"/>
<text x="190" y="43" font-size="10.5" fill="#2c3e50" text-anchor="middle" font-weight="600">Spark</text>
<rect x="252" y="24" width="108" height="30" rx="6" fill="#f8f9fa" stroke="#dbe4ec" stroke-width="1.2"/>
<text x="306" y="43" font-size="10.5" fill="#2c3e50" text-anchor="middle" font-weight="600">Hive</text>
<line x1="190" y1="58" x2="190" y2="84" stroke="#8fb2c4" stroke-width="1.3" marker-end="url(#hb1)"/>
<rect x="20" y="86" width="340" height="62" rx="6" fill="#e8f7f0" stroke="#42b983" stroke-width="1.5"/>
<text x="34" y="110" font-size="14" fill="#256b4e" font-weight="600">HBase</text>
<text x="34" y="131" font-size="9.8" fill="#3d7a62">按行键定位一行，毫秒级随机读写；数据本身存在下面的 HDFS 里</text>
<line x1="190" y1="150" x2="190" y2="176" stroke="#8fb2c4" stroke-width="1.3" marker-end="url(#hb1)"/>
<rect x="20" y="180" width="340" height="56" rx="6" fill="#eff6f9" stroke="#5b8499" stroke-width="1.3"/>
<text x="34" y="202" font-size="12.5" fill="#2d5468" font-weight="600">HDFS</text>
<text x="84" y="202" font-size="9.8" fill="#41697e">存块与副本，只保证放得下、不丢</text>
<text x="34" y="222" font-size="9.5" fill="#7c93a3">HBase 的表最终就是 HDFS 上的一批文件</text>
<line x1="362" y1="117" x2="392" y2="117" stroke="#c9d5df" stroke-width="1.2" stroke-dasharray="3 3"/>
<rect x="394" y="86" width="150" height="62" rx="6" fill="#fdf5e9" stroke="#d98c3f" stroke-width="1.2"/>
<text x="408" y="108" font-size="11" fill="#8a5218" font-weight="600">ZooKeeper</text>
<text x="408" y="124" font-size="9" fill="#9a6427">不存数据，只记状态</text>
<text x="408" y="139" font-size="9" fill="#9a6427">谁是 HMaster、谁还活着</text>
</svg>

HDFS 管存，HBase 管找，MapReduce 与 Spark 管算。ZooKeeper 不存数据，只记集群状态。

### 表长什么样

和关系库最大的差别在建表这一步：关系库要求先把所有字段定死，HBase 只定表名和列族，列（限定符）等到写数据时才出现。

| 概念 | 含义 | 本实验里的例子 |
| --- | --- | --- |
| 表 Table | 一张表，建表时定名 | `people_lmd` |
| 行键 Row Key | 唯一标识一行，全表按字节序排，访问都走它 | `rk0001`、`rk0002`、`rk0003` |
| 列族 Column Family | 建表时必须给，一张表通常一到三个 | `info`、`data` |
| 限定符 Qualifier | 列族下面的列，写数据时才出现 | `info:name`、`info:gender`、`data:myurl` |
| 单元格 Cell | 行键与列的交叉点，存值加时间戳 | `rk0001` / `info:name` / `MaYun` |
| 版本 Version | 同一单元格保留几份历史值，由 VERSIONS 定 | `info` 留 3 份，`data` 留 1 份 |

列的完整写法是 `族:限定符`，中间一个冒号。回看建表那条命令 `create 'people_lmd', {NAME => 'info', VERSIONS => 3}, {NAME => 'data', VERSIONS => 1}`，它只做了两件事：定两个列族，定每个列族保留几个版本。

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 210" role="img" aria-label="一条 put 语句拆成五个字段，以及同一单元格的版本链" style="max-width:100%;height:auto">
<defs><marker id="hb2" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 z" fill="#c9d5df"/></marker></defs>
<rect x="14" y="12" width="322" height="26" rx="4" fill="#2c3e50"/>
<text x="23" y="29" font-size="8.6" fill="#ffffff" font-family="Consolas, Menlo, monospace">put 'people_lmd','rk0001','info:name','MaYun'</text>
<text x="16" y="54" font-size="8.5" fill="#95a1ad">表名</text>
<text x="96" y="54" font-size="8.5" fill="#95a1ad">行键</text>
<text x="164" y="54" font-size="8.5" fill="#95a1ad">列族</text>
<text x="218" y="54" font-size="8.5" fill="#95a1ad">限定符</text>
<text x="278" y="54" font-size="8.5" fill="#95a1ad">值</text>
<rect x="14" y="58" width="76" height="28" rx="4" fill="#f8f9fa" stroke="#dbe4ec" stroke-width="1.2"/>
<text x="52" y="76" font-size="8.4" fill="#2c3e50" text-anchor="middle" font-family="Consolas, Menlo, monospace">people_lmd</text>
<rect x="94" y="58" width="64" height="28" rx="4" fill="#eff6f9" stroke="#5b8499" stroke-width="1.2"/>
<text x="126" y="76" font-size="8.4" fill="#2d5468" text-anchor="middle" font-family="Consolas, Menlo, monospace">rk0001</text>
<rect x="162" y="58" width="48" height="28" rx="4" fill="#e8f7f0" stroke="#42b983" stroke-width="1.2"/>
<text x="186" y="76" font-size="8.4" fill="#256b4e" text-anchor="middle" font-family="Consolas, Menlo, monospace">info</text>
<rect x="214" y="58" width="56" height="28" rx="4" fill="#fdf5e9" stroke="#d98c3f" stroke-width="1.2"/>
<text x="242" y="76" font-size="8.4" fill="#8a5218" text-anchor="middle" font-family="Consolas, Menlo, monospace">name</text>
<rect x="274" y="58" width="62" height="28" rx="4" fill="#f4f0f9" stroke="#8a6fb0" stroke-width="1.2"/>
<text x="305" y="76" font-size="8.4" fill="#5c4580" text-anchor="middle" font-family="Consolas, Menlo, monospace">MaYun</text>
<text x="14" y="108" font-size="9" fill="#7c93a3">服务器再补一个时间戳，合成「行键 + 列族:限定符 + 时间戳 + 值」</text>
<text x="356" y="20" font-size="9.5" fill="#95a1ad">同一个单元格的版本链</text>
<rect x="356" y="28" width="190" height="34" rx="5" fill="#e8f7f0" stroke="#42b983" stroke-width="1.3"/>
<text x="368" y="44" font-size="8.8" fill="#256b4e" font-family="Consolas, Menlo, monospace">ZhaoZilong</text>
<text x="368" y="57" font-size="8.2" fill="#3d7a62">新值 · 读的时候默认取这条</text>
<text x="518" y="45" font-size="8.2" fill="#7c93a3">t3</text>
<line x1="451" y1="64" x2="451" y2="74" stroke="#c9d5df" stroke-width="1.2" marker-end="url(#hb2)"/>
<rect x="356" y="76" width="190" height="30" rx="5" fill="#f8f9fa" stroke="#dbe4ec" stroke-width="1.2"/>
<text x="368" y="95" font-size="8.8" fill="#5c6b7a" font-family="Consolas, Menlo, monospace">MaYun</text>
<text x="518" y="96" font-size="8.2" fill="#7c93a3">t2</text>
<line x1="451" y1="108" x2="451" y2="118" stroke="#c9d5df" stroke-width="1.2" marker-end="url(#hb2)"/>
<rect x="356" y="120" width="190" height="30" rx="5" fill="#f8f9fa" stroke="#dbe4ec" stroke-width="1.2"/>
<text x="368" y="139" font-size="8.8" fill="#5c6b7a" font-family="Consolas, Menlo, monospace">MaYun</text>
<text x="518" y="140" font-size="8.2" fill="#7c93a3">t1</text>
<text x="356" y="170" font-size="8.6" fill="#95a1ad">旧值不立刻删，后台合并时按 VERSIONS 丢弃</text>
<text x="356" y="190" font-size="8.4" fill="#95a1ad">单元格 rk0001 / info:name 的三次写入</text>
</svg>

### 逻辑一张表，物理按列族拆

逻辑上看，`people_lmd` 就是「行键 + info + data」一张普通表；物理上，同一行会按列族拆成两段分别存，各走各的 Store。所以列族不能建太多，每多一个列族，读一行就多跳一处、多拼一次结果。

### 集群里有哪些进程

| 组件 | 职责 |
| --- | --- |
| HMaster | 主节点，管 Region 的分配与负载，不接读写 |
| HRegionServer | 从节点，真正处理读写请求 |
| Region | 表按行键切成的一段，一段落在一台 RegionServer 上 |
| Store | 一个列族对应一个 Store，里面是 MemStore 加若干 HFile |
| ZooKeeper | 记录谁是 HMaster、哪些 RegionServer 活着、表被切成了哪些 Region |
| HLog | 预写日志，写数据先记它，机器挂了重启能补回来 |

`jps` 里要能看到 HMaster 和 HRegionServer，缺一个 `hbase shell` 就敲不动。

### 一条数据怎么写进去、怎么读出来

| 阶段 | 步骤 |
| --- | --- |
| 写 | ① 按行键问 ZooKeeper 定位到 Region；② 顺序追加到 HLog；③ 写进内存的 MemStore，命令返回 |
| 读 | ① 先查 BlockCache（读过的块留在内存）；② 再查 MemStore（还没落盘的新数据）；③ 最后读 HFile，三处合并后返回最新版本 |

写只追加不覆盖，这是 put 延迟能到毫秒级的原因。也正因为如此，改数据不需要 update：再 put 一次就是往版本链头插一条新值，读的时候取链头，旧值等后台合并时按 VERSIONS 丢掉。

### 和关系库比

| 维度 | 关系库 | HBase |
| --- | --- | --- |
| 数据模型 | 行与列，schema 先定死 | 行键加列族，列随写随加 |
| 存储方式 | 按行存 | 按列族存，物理上拆成多张表 |
| 空值 | 占一列位置 | 稀疏存储，null 不占空间 |
| 扩展 | 纵向换更强的机器 | 横向加 RegionServer |
| 事务 | 支持多行事务与 join | 只有单行原子性，没有 join |
| 访问方式 | SQL | 按行键 get、按区间 scan |
| 适合 | 事务型业务 | 海量数据、按主键随机读写 |

要 join、要事务，HBase 不是合适的地方。它的长处是行键一定位就能取一行，数据再多也能靠加机器摊开。

## 六、新手常卡的地方

| 报错 | 原因 | 处理 |
| --- | --- | --- |
| `TableAlreadyExistsException: people_lmd` | 表还在，重名了 | `list` 看一眼，或者 `disable` + `drop` 之后重建 |
| `TableNotFoundException` | 表名打错，或前面已经删掉 | `list` 核对，单引号要成对 |
| `TableNotDisabledException` | 没 `disable` 就 `drop` | 先 `disable 'people_lmd'` 再删 |
| `NoSuchColumnFamilyException` | `put` 用了建表时没定义的列族 | `describe` 看列族名，`info` 和 `data` 别混 |
| `ZooKeeper connection refused` | HBase 没起来，或进程刚挂 | 回 `/usr/local/hbase-1.1.2` 执行 `bin/start-hbase.sh` |
| 敲完回车没有反应 | 单引号没配对，shell 在等续行 | 补上引号再回车 |

## 七、术语对照

| English | 中文 | MySQL 里的对应 |
| --- | --- | --- |
| row key | 行键 | 主键，一行一个，全表按它排序 |
| column family | 列族 | 没有直接对应，可以当成把列分成几组存放 |
| qualifier | 限定符（列键） | 列名 |
| cell | 单元格 | 一个格子的值，带时间戳 |
| version | 版本 | 没有，要历史得自己建表 |
| timestamp | 时间戳 | 没有，每次 put 自动打 |
| Region | 分区 | 分区表的一个分区 |
| RegionServer | 分区服务器 | 一台数据库实例 |
| MemStore | 内存存储 | 内存里还没刷盘的脏页 |
| HFile | 存储文件 | 数据文件 |
| compaction | 合并 | 类似 OPTIMIZE TABLE，顺带回收旧版本 |
| sparse | 稀疏 | 允许 NULL，空单元格不占空间 |

## 八、完整代码

先起 HDFS 和 HBase，jps 里能看到 HMaster 和 HRegionServer 再往下走：

```bash
cd /usr/local/hadoop && ./sbin/start-dfs.sh
cd /usr/local/hbase-1.1.2 && bin/start-hbase.sh
jps
```

进 shell 之后，从建表到删数据按顺序敲一遍，就是实验的全部内容：

```
create 'people_lmd', {NAME => 'info', VERSIONS => 3}, {NAME => 'data', VERSIONS => 1}
list
describe 'people_lmd'

put 'people_lmd', 'rk0001', 'info:name', 'MaYun'
put 'people_lmd', 'rk0001', 'info:gender', 'male'
put 'people_lmd', 'rk0001', 'data:myurl', 'www.yun.alibaba.com/myURL'
put 'people_lmd', 'rk0002', 'info:name', 'LiuChangle'
put 'people_lmd', 'rk0003', 'info:name', 'MaYun2'
put 'people_lmd', 'rk0003', 'info:gender', 'male'
put 'people_lmd', 'rk0003', 'data:myurl', 'www.yun.alibaba.com/myURL2'

get 'people_lmd', 'rk0001'
scan 'people_lmd'
count 'people_lmd'

put 'people_lmd', 'rk0003', 'info:name', 'ZhaoZilong'
get 'people_lmd', 'rk0003', {COLUMN => 'info:name', VERSIONS => 3}

delete 'people_lmd', 'rk0003', 'info:gender'
deleteall 'people_lmd', 'rk0001'

scan 'people_lmd'
count 'people_lmd'
```

做完把表清掉，不然后面再建同名的会报 TableAlreadyExistsException：

```
disable 'people_lmd'
drop 'people_lmd'
exit
```

把上面这段存成 lmd_commands.txt，一条命令就能跑完，不用一屏一屏敲：

```bash
bin/hbase shell lmd_commands.txt
```
