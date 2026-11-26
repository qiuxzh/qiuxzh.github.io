---
title: Java Web 期末复习资料
date: 2026-11-26
updated: 2026-11-26
tag:
  - Java Web
categories:
  - QUT
cover:
reprint: false
---
注：本篇资料由 AI 整理。

# Java Web 期末复习资料

## 目录

| 章 | 内容 | 预计分值 |
| --- | --- | --- |
| [第一章](#第一章-java-web-开发环境) | B/S、HTTP、Tomcat、Artifact，附作业一、作业二的单选题与简答 | 选择 3–4 分，简答 6 分 |
| [第二章](#第二章-jsp-语法) | 四种元素、声明与程序片、指令与动作 | 选择 1 分，分析 4 分 |
| [第三章](#第三章-jsp-内置对象) | 九个内置对象、四种作用域 | 不单独出题 |
| [第四章](#第四章-jsp-与-javabean) | JavaBean 规范、useBean、get/setProperty | 选择 1 分，分析 4 分 |
| [第五章](#第五章-servlet) | 部署、生命周期、转发重定向、Cookie、Session、MVC | 简答 12 分，分析 8 分，设计 40 分 |
| [第六章](#第六章-过滤器-filter) | Filter 的作用、接口、编码过滤器 | 选择 1 分 |
| [第十章](#第十章-ajax) | Ajax 概念、XMLHttpRequest、请求与响应 | 选择 1 分 |
| [程序分析题](#程序分析题) | 说输出、补代码、找错三类 | 20 分 |
| [高频简答](#高频简答) | 20 道简答的标准答法 | 30 分 |
| [数字与口诀](#数字与口诀) | 考前速记 | —— |
| [附：实验二速查](#附实验二速查) | 注册、登录、注销的 URL 与跳转 | 设计题 40 分 |

## 考试结构与范围

| 大题 | 题型 | 题量 | 分值 | 主要来源 |
| --- | --- | --- | --- | --- |
| 一 | 单选题 | 10 题 | 10 分（每题 1 分） | 第 1、2、4、5、6、10 章的基本概念 |
| 二 | 简答题 | 5 题 | 30 分 | 第 1 章环境与 HTTP、第 5 章 Servlet 与 MVC、第 2/4 章语法 |
| 三 | 程序分析题 | 4 题 | 20 分 | 给代码说结果、补全代码，集中在第 2、5 章 |
| 四 | 程序设计题 | 3 题 | 40 分 | 实验二用户模块（注册、登录、注销）的 MVC 写法 |

范围为第 1–6 章加第 10 章。第 1 章只出选择题和简答题；第 6 章、第 10 章各出 1 个选择题；第 3 章不单独出题，但会出现在分析题和设计题里；第 5 章分值最重。

---

## 第一章 Java Web 开发环境

### B/S 与 C/S

C/S（Client/Server，客户机/服务器）要装专用客户端，客户端承担一部分运算和界面显示，升级时每台机器都得换。B/S（Browser/Server，浏览器/服务器）把客户端统一成浏览器，业务逻辑和数据都放在服务器上，改一次服务器全体用户立即生效。B/S 的短板是受浏览器能力限制、界面不如桌面程序丰富。

判断题的落点：B/S 主要通过浏览器与服务器交互；不需要安装专门客户端；不限定操作系统；动态页面仍然需要服务器参与。

### 静态资源与动态资源

静态资源指 HTML、CSS、图片、音视频这类文件，服务器找到文件原样返回，内容不随请求变化。动态资源指 Servlet、JSP 这类程序，服务器要执行代码、访问数据库，把生成的结果拼成 HTML 再返回。浏览器不能直接执行 Servlet，也不能直接解析 JSP 源码。JSP 最终也是由服务器翻译、编译成 Servlet 后运行的。

### URL 的组成

以 `http://localhost:8080/demo/login.html` 为例：

| 部分 | 内容 | 含义 |
| --- | --- | --- |
| 协议 | `http` | 应用层协议，超文本传输协议 |
| 主机 | `localhost` | 主机名；localhost 就是本机，等价于 `127.0.0.1`，不是 Internet 上任意一台机器 |
| 端口 | `8080` | Tomcat 的默认端口；HTTP 协议本身的默认端口是 80，浏览器访问 80 时省略不写 |
| 资源路径 | `/demo/login.html` | `demo` 是 Web 应用名（上下文路径），`login.html` 是应用内的页面 |

### HTTP 请求消息

一次 HTTP 交互分四步：浏览器与服务器建立连接；浏览器发送请求；服务器处理并返回响应；浏览器解析响应、渲染页面，连接关闭或保持。

请求消息由请求行、消息头、空行、实体（请求体）组成：

```http
POST /demo/login HTTP/1.1
Host: localhost:8080
User-Agent: Mozilla/5.0
Content-Type: application/x-www-form-urlencoded
Content-Length: 27

username=admin&password=123
```

请求行在第一行，三部分用空格隔开：请求方式、请求资源（URI）、HTTP 版本。消息头是若干“名称: 值”，空行之后是请求体。GET 请求通常没有请求体，参数拼在 URL 后面。

### HTTP 响应消息

响应消息由状态行、消息头、空行、响应体组成：

```http
HTTP/1.1 200 OK
Content-Type: text/html;charset=UTF-8
Content-Length: 1024

<html>...</html>
```

状态行同样是三部分：HTTP 版本、状态码、状态描述。常见状态码：

| 状态码 | 含义 | 典型场景 |
| --- | --- | --- |
| 200 | 请求成功 | 页面正常返回 |
| 301 / 302 | 永久 / 临时重定向 | 资源换了地址，浏览器自动再发一次请求 |
| 404 | 资源未找到 | 路径写错、文件不存在 |
| 500 | 服务器内部错误 | Servlet 抛异常、代码报错 |

1xx 表示信息，2xx 成功，3xx 重定向，4xx 客户端错误，5xx 服务器错误。

### GET 与 POST

| 对比项 | GET | POST |
| --- | --- | --- |
| 参数位置 | 拼在 URL 后面，地址栏可见 | 放在请求体里，地址栏不可见 |
| 数据量 | 有限制（约 1KB） | 基本没有限制，可传大数据 |
| 安全性 | 明文显示，不适合传密码 | 相对隐蔽，但仍需 HTTPS 才真正安全 |
| 触发方式 | 地址栏回车、超链接、表单 method 默认值 | 表单 method 明确写成 post |
| 幂等/缓存 | 一般可缓存、可重复请求 | 一般不可缓存 |

触发 GET 的典型动作：在浏览器地址栏输入 URL 回车、点击 `<a>` 超链接、表单 method 不写或写 `get`。触发 POST 的典型动作：表单 `method="post"`。问“错误的是”的那道题选“HTTP 请求方式只有 GET 和 POST”，因为还有 PUT、DELETE、HEAD 等。

### Tomcat

Tomcat 是开源的 Web 应用服务器（Servlet 容器），负责接收 HTTP 请求、运行 Servlet 和 JSP、把响应返回浏览器。它不负责管理项目依赖（那是 Maven），也不负责存数据（那是 MySQL）。

解压版 Tomcat 解压即安装，不需要运行安装程序；启动靠 `bin` 下的 `startup.bat`。启动闪退最常见两个原因：8080 端口被占用；没有配置 `JAVA_HOME`（Tomcat 自身是 Java 程序，找不到 JDK 就起不来）。

安装目录：

| 目录 | 作用 |
| --- | --- |
| `bin` | 启动、停止脚本，如 startup.bat、shutdown.bat |
| `conf` | 配置文件，`server.xml` 改端口，`web.xml` 配全局默认 |
| `lib` | Tomcat 运行所需的 jar 包 |
| `webapps` | Web 应用的默认发布目录，项目放进来就能访问 |
| `work` | JSP 编译后生成的 Servlet 源文件和字节码（.java、.class） |
| `logs` | 运行日志 |

改端口的文件是 `conf/server.xml`，找到 `<Connector port="8080" .../>` 改 `port`。默认访问地址是 `http://localhost:8080`。

### JDK、IDEA、MySQL、Maven

| 工具 | 作用 |
| --- | --- |
| JDK | Java 开发工具包，提供 javac、java、JRE 和类库，是编译运行 Java 代码的前提 |
| Tomcat | Web 应用服务器，运行 Servlet/JSP，处理 HTTP 请求 |
| IDEA | 集成开发环境，写代码、调试、配置 Artifact 并部署到 Tomcat |
| MySQL | 关系型数据库，存业务数据 |
| Maven | 项目构建与依赖管理工具，负责下载 jar、编译、打包（war） |

IDEA 里的 Artifact 是“项目经过构建、打包后可用于部署的成品”，Web 项目通常配成 `Web Application: Exploded`，IDEA 把编译输出、`web` 目录、依赖 jar 组装到 Tomcat 的运行目录。它不是数据库表，也不是源码目录。

### 本章易错点

- 在地址栏输入地址回车，或者点一个普通超链接，发出的都是 GET。表单不写 method 也是 GET，写了 `method="post"` 才是 POST。
- 一个页面里嵌两张图片，浏览器要发 3 次请求：HTML 一次，两张图各一次。把整页当成一次请求是最常见的失分点。
- 请求行是请求消息的第一行，写的是方式、资源路径、版本号。表单参数不在这行，POST 的参数在实体内容里，GET 的跟着 URL。
- 看到 404 先查路径和部署名，看到 500 去翻 Servlet 的异常栈。404 是服务器上找不到这个资源，500 是代码跑到一半抛了异常。
- 改端口动的是 Tomcat 的 conf/server.xml，里面有 Connector 的 port 属性。web.xml 归每个 Web 应用自己管，写的是 Servlet 映射、欢迎页、会话超时。
- work 目录里是 JSP 翻译出来的 .java 和编译好的 .class，删掉会重新生成。项目源码在 webapps 下，两者不要混。
- 双击 startup.bat 窗口一闪就没，通常是没设 JAVA_HOME，或者 8080 被别的程序占了。控制台没打出 Server startup in，就是没起来。
- IDEA 部署到 Tomcat 的是 Artifact，也就是编译打包后的 war 或 exploded 目录。把 src 当部署内容，服务器上根本没有 class 文件。

### 作业一（10 道选择）

**1.** 下列关于 B/S 架构的描述正确的是（ ）。
A. 使用应用程序之前必须安装专门的客户端软件
B. 主要通过浏览器与服务器进行交互
C. 只能运行在 Windows 操作系统上
D. 动态超文本标记语言不需要服务器参与

**答案：B。** B/S 的客户端就是浏览器，不用装专用软件；与操作系统无关；动态页面必须由服务器处理。

**2.** 页面 `index.html` 中有两个 `<img>`，分别指向 `/image01.jpg` 和 `/image02.jpg`。浏览器请求该页面时，会向服务器发出（ ）次请求。
A. 1　B. 2　C. 3　D. 4

**答案：C。** HTML 文档本身 1 次，两张图片各 1 次，共 3 次。图片不会随 HTML 一起返回。

**3.** HTTP 协议默认使用的端口号是（ ）。
A. 21　B. 80　C. 443　D. 8080

**答案：B。** 80 是 HTTP 默认端口，443 是 HTTPS，21 是 FTP，8080 是 Tomcat 的默认端口，不是 HTTP 协议的默认端口。

**4.** 关于 HTTP 请求消息，下列说法正确的是（ ）。
A. 请求消息的第一行是实体内容
B. 请求行位于 HTTP 请求消息的第一行
C. 请求消息一定没有消息头
D. 请求行只包含请求方式

**答案：B。** 请求行在第一行，包含请求方式、请求资源、HTTP 版本三部分；请求体在最后，消息头通常都有。

**5.** 当服务器找不到客户端请求的资源时，通常返回的 HTTP 状态码是（ ）。
A. 200　B. 301　C. 404　D. 500

**答案：C。** 200 成功，301 永久重定向，404 资源不存在，500 服务器内部错误。

**6.** 下面选项中，（ ）头字段可以实现防盗链。
A. Location　B. Refresh　C. Referer　D. If-Modified-Since

**答案：C。** Referer 记录请求来源页面，服务器据此判断是不是本站点的链接；Location 配合重定向，Refresh 定时刷新，If-Modified-Since 用于缓存协商。

**7.** 下列关于 POST 请求的说法中，正确的是（ ）。
A. form 表单的 method 属性设置为 "POST"
B. form 表单的 method 属性没有设置，采用 POST 方式为默认值
C. 在 `<a>` 标签中的超链接
D. 在浏览器的地址栏中发出的请求

**答案：A。** 表单 method 默认是 GET，不是 POST；超链接和地址栏都是 GET。

**8.** 下面关于 HTTP 协议中 GET 与 POST 请求的说法中，错误的是（ ）。
A. GET 方式传输数据大小有限制
B. POST 方式可以传输大数据
C. GET 方式会将请求信息在地址栏上显示，POST 不会
D. HTTP 协议请求方式只有 GET 和 POST

**答案：D。** 除 GET、POST 外还有 PUT、DELETE、HEAD、OPTIONS 等。

**9.** 当用户直接在浏览器地址栏中输入 URL 并访问某个资源时，浏览器通常采用的 HTTP 请求方式是（ ）。
A. POST　B. GET　C. PUT　D. DELETE

**答案：B。** 地址栏回车、超链接、默认表单提交都是 GET。

**10.** 关于动态 Web 资源的描述，正确的是（ ）。
A. 浏览器可以直接执行 Servlet
B. 浏览器可以直接解析 JSP 源代码
C. 动态资源通常需要服务器处理后再发送给浏览器
D. 动态资源和静态资源没有区别

**答案：C。** 浏览器只认 HTML/CSS/JS，Servlet 和 JSP 都由服务器执行或翻译后输出 HTML。

### 作业二（10 道选择）

**1.** 在本地计算机上进行 Web 应用开发和测试时，localhost 通常表示（ ）。
A. 远程数据库服务器　B. 本地主机　C. Internet 上的任意一台计算机　D. Maven 中央仓库

**答案：B。** localhost 是本机回环地址，对应 127.0.0.1。

**2.** 关于 Tomcat 的安装，下列说法正确的是（ ）。
A. 只能通过修改 Java 源代码完成安装
B. 压缩包形式的 Tomcat 可以通过解压完成安装
C. 必须安装到 C 盘
D. 安装 Tomcat 后不需要 JDK

**答案：B。** 解压版解压即用；路径随意；Tomcat 依赖 JDK/JRE 运行。

**3.** 在 Java Web 开发环境中，Tomcat 的主要作用是（ ）。
A. 管理 Java 项目依赖　B. 保存应用数据　C. 运行 Web 应用　D. 编写 Java 代码

**答案：C。** 依赖管理是 Maven，存数据是 MySQL，写代码是 IDEA。

**4.** 下面关于 Tomcat 服务器描述，正确的是（ ）。
A. Tomcat 是一个开源的免费的 web 服务器，它支持 JavaEE 所有规范
B. Tomcat 安装后默认端口 80
C. Tomcat 启动时需要配置 JAVA_HOME 环境变量
D. Tomcat 启动时必须配置 CATALINA_HOME 环境变量

**答案：C。** Tomcat 只实现了 Java EE 中 Servlet、JSP 等 Web 相关规范，不是全部；默认端口 8080；CATALINA_HOME 通常由启动脚本自行推断，不是必须手工配置。

**5.** 下列选项中，修改 Tomcat 端口号的文件是（ ）。
A. conf.xml　B. context.xml　C. server.xml　D. service.xml

**答案：C。** 改 `conf/server.xml` 里 Connector 的 port。

**6.** 下面选项中，在 Tomcat 上发布 Web 应用时，默认在什么目录（ ）。
A. webapps　B. conf　C. bin　D. work

**答案：A。** conf 放配置，bin 放脚本，work 放 JSP 编译产物。

**7.** Tomcat 安装目录中的 work 目录主要用于存放（ ）。
A. 数据库文件　B. Tomcat 的配置文件　C. JSP 编译生成的 Servlet 源文件和字节码文件　D. 用户上传的图片和文档

**答案：C。** JSP 第一次被访问时翻译成 `.java`、编译成 `.class`，都放在 work 下。

**8.** 在本机启动 Tomcat 后，通过下列哪个地址可以访问默认的 8080 端口（ ）。
A. `http://localhost:8080`　B. `http://localhost:80`　C. `https://localhost:8080`　D. `http://127.0.0.1:443`

**答案：A。** 协议、主机、端口都要对。

**9.** 在 IDEA 中配置 Tomcat 并发布 Web 项目时，下列说法正确的是（ ）。
A. IDEA 运行 Web 项目时，始终直接将开发源码目录作为最终部署项目
B. Artifact 是 MySQL 数据库中的一种数据类型
C. 只要创建了 Java 项目，就不需要进行 Web 模块和部署配置
D. IDEA 可以通过配置 Artifact，将项目部署到 Tomcat 的运行目录中

**答案：D。** IDEA 先构建 Artifact，再把产物交给 Tomcat 运行。

**10.** 在 IDEA 中，Artifact 主要可以理解为（ ）。
A. 数据库表　B. 项目的源代码目录　C. 项目经过构建、打包后可用于部署的成品　D. Tomcat 的配置文件

**答案：C。** 典型配置是 `Web Application: Exploded`，输出目录里是 classes、lib 和页面资源。

### 第一章简答题

**1. 简述 JDK、Tomcat、IDEA、MySQL、Maven 在 Java Web 开发中的作用。**

JDK 是 Java 开发工具包，提供编译器 javac、运行器 java、JRE 和标准类库，Java 代码能编译、能运行全靠它。

Tomcat 是 Web 应用服务器，也是 Servlet 容器。它监听端口、接收 HTTP 请求，按 `web.xml` 或注解的映射找到对应的 Servlet，调用其方法，把响应写回浏览器；JSP 也由它翻译、编译、执行。

IDEA 是集成开发环境，负责写代码、断点调试、管理项目结构，并通过 Artifact 把项目构建成可部署的形态，配置到 Tomcat 上运行。

MySQL 是关系型数据库，持久化业务数据（用户、图书、订单等），Java 程序通过 JDBC 访问。

Maven 是项目构建与依赖管理工具。`pom.xml` 里声明依赖坐标，Maven 自动下载 jar、统一编译、打包成 war，还能管理多模块项目。

**2. 简述 Tomcat 安装目录中 bin、conf、lib、webapps 子目录的作用。**

bin 放启动和停止脚本，Windows 下是 `startup.bat`、`shutdown.bat`，Linux 下是 `.sh`。

conf 放配置文件：`server.xml` 配端口、连接器、虚拟主机；`web.xml` 是全局部署描述符；`context.xml` 配上下文；`tomcat-users.xml` 配管理账号。

lib 放 Tomcat 运行所需以及所有 Web 应用共享的 jar 包。

webapps 是默认的 Web 应用发布目录。把一个应用目录或 war 包放进去，Tomcat 启动时自动部署，应用名就是目录名或 war 包名。

补充：work 存 JSP 编译产物，logs 存日志，temp 存临时文件。

**3. 简述 HTTP 请求与 HTTP 响应的基本交互过程，并说明请求消息和响应消息的主要组成部分。**

交互过程：浏览器先与服务器建立 TCP 连接；浏览器把请求封装成 HTTP 请求消息发过去；服务器解析请求、定位资源、执行程序，生成 HTTP 响应消息；浏览器接收响应，解析 HTML 并加载其中引用的图片、CSS、JS，渲染页面；HTTP/1.0 下连接关闭，HTTP/1.1 默认保持连接，可以复用。

请求消息四部分：请求行（请求方式、请求资源、HTTP 版本，如 `GET /index.html HTTP/1.1`）；消息头（Host、User-Agent、Referer、Content-Type 等）；空行；请求体（POST 提交的表单数据）。

响应消息四部分：状态行（HTTP 版本、状态码、状态描述，如 `HTTP/1.1 200 OK`）；消息头（Content-Type、Content-Length、Set-Cookie 等）；空行；响应体（HTML、图片、JSON 等）。

**4. 用户输入 `http://localhost:8080/demo/login.html`。**

（1）各部分含义：`http` 是应用层协议；`localhost` 是主机名，表示本机，等价于 127.0.0.1；`8080` 是 Tomcat 的端口；`/demo/login.html` 是资源路径，demo 为 Web 应用名，login.html 为应用内的页面。

（2）浏览器用 HTTP 协议与服务器交互，请求方式是 GET，地址栏直接访问只可能发 GET。

（3）服务器正常返回页面时状态码是 200。若页面被移到新地址，可能返回 301；资源不存在返回 404；服务器代码异常返回 500。

---

## 第二章 JSP 语法

### JSP 页面的四种基本元素

在 HTML 静态页面文件中加入和 Java 相关的动态元素，就构成了一个 JSP 页面。一个 JSP 页面通常由以下 4 种基本元素组成：

1. 普通的 HTML 标记（模板元素），负责页面结构和静态内容；
2. JSP 注释；
3. Java 脚本元素，包括声明、Java 程序片和 Java 表达式；
4. JSP 标记，例如指令标记、动作标记和自定义标记。

答题时把“四种元素”和“各自作用”对应写出来即可，别把“脚本元素”拆成三种当成三种元素。脚本元素是第三种，里面才分声明、程序片、表达式。

### 两种注释

HTML 注释：`<!-- 注释内容 -->`。JSP 引擎照常处理它，如果注释里有 JSP 代码也会执行；处理完发给客户端，浏览器查看源代码时能看到。

JSP 注释：`<%-- 注释内容 --%>`。JSP 引擎把它当真正的注释，编译时直接忽略，浏览器里看不到，也不会出现在生成的 Servlet 源文件中。

考法：给一段含两种注释的页面，问浏览器源代码里能看到哪一条。

### Java 程序片

格式 `<% Java 代码 %>`。一个页面可以有任意多段，按顺序执行。程序片里声明的变量是局部变量，只在当前请求的线程里有效。

当多个用户请求一个 JSP 页面时，JSP 引擎为每个用户启动一个线程，不同的线程会分别执行该 JSP 页面中的 Java 程序片，程序片中的局部变量会在不同的线程中被分配不同的内存空间，因此一个用户对 JSP 页面中局部变量操作的结果不会影响到其他用户。

例 2-2 里 `int n = 0; n++;` 写在程序片里，5 个用户各自看到 `n = 1`。

### JSP 声明

格式 `<%! 变量或方法的定义 %>`。声明的变量是 JSP 页面的成员变量，声明的方法是成员方法。

成员变量在整个 JSP 页面内都有效（与书写位置无关），因为 JSP 引擎在将 JSP 页面转译成 Java 文件时将这些变量作为类的成员变量，这些变量的内存空间直到服务器关闭才释放，因此多个用户共享 JSP 页面的成员变量，任何用户对 JSP 页面成员变量操作的结果都会影响到其他用户。

这句话解释了“为什么声明能跨请求累加”：声明被翻译到 `_jspService()` 方法外面，成为 Servlet 类的成员；程序片被翻译到 `_jspService()` 方法里面，每次请求都是一个新方法的栈帧。

### 例 2-3：成员变量与局部变量的差别

```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>example2_3.jsp</title>
</head>
<%!
    int n = 0;
    int add(int x, int y) {
        return x + y;
    }
%>
<body>
<%
    int m = 0;
    n++;
    m++;
    int result = add(1, 2);
    out.print("成员变量 n 的值为:" + n + "<br>");
    out.print("局部变量 m 的值为:" + m + "<br>");
    out.print("1 + 2 = " + result + "<br>" + "<br>");
    out.print("第" + n + "个用户");
%>
</body>
</html>
```

3 个用户依次访问，浏览器里看到：

| 用户 | 成员变量 n | 局部变量 m | 1 + 2 | 末尾一句 |
| --- | --- | --- | --- | --- |
| 第 1 个 | 1 | 1 | 3 | 第 1 个用户 |
| 第 2 个 | 2 | 1 | 3 | 第 2 个用户 |
| 第 3 个 | 3 | 1 | 3 | 第 3 个用户 |

<svg width="100%" style="max-width:860px;height:auto" viewBox="0 0 860 330" role="img" aria-label="例2-3中成员变量与局部变量在三个用户之间的差别">
  <rect width="860" height="330" fill="#fdfbf6"></rect>
  <text x="30" y="40" font-size="14" fill="#1b1d21">同一个 JSP 页面，三个用户并发访问</text>
  <text x="30" y="60" font-size="11.5" fill="#6d747e">成员变量 n 在 Servlet 对象里只有一份，局部变量 m 每个线程各有一份</text>
  <rect x="30" y="84" width="240" height="196" rx="8" fill="#ffffff" stroke="#e4e0d6"></rect>
  <text x="48" y="110" font-size="12" fill="#6d747e">JSP 页面翻译出的 Servlet 对象</text>
  <rect x="48" y="126" width="204" height="56" rx="6" fill="#fbeee7" stroke="#b4552d" stroke-width="1.5"></rect>
  <text x="150" y="150" font-size="13" fill="#8f3d1c" text-anchor="middle">成员变量 n</text>
  <text x="150" y="170" font-size="11" fill="#b4552d" text-anchor="middle">三个线程共用一份，累加到 3</text>
  <text x="48" y="208" font-size="11.5" fill="#6d747e">n++ 依次执行：1 → 2 → 3</text>
  <text x="48" y="228" font-size="11.5" fill="#6d747e">释放时机：服务器关闭</text>
  <text x="48" y="250" font-size="11.5" fill="#6d747e">对应 &lt;%! %&gt; 声明</text>
  <rect x="302" y="84" width="164" height="196" rx="8" fill="#ffffff" stroke="#e4e0d6"></rect>
  <text x="384" y="110" font-size="12" fill="#6d747e" text-anchor="middle">线程 1</text>
  <rect x="318" y="126" width="132" height="56" rx="6" fill="#e9f2f6" stroke="#2f6f8f" stroke-width="1.5"></rect>
  <text x="384" y="150" font-size="13" fill="#1f4d64" text-anchor="middle">局部变量 m</text>
  <text x="384" y="170" font-size="11" fill="#2f6f8f" text-anchor="middle">m = 1</text>
  <text x="384" y="250" font-size="11.5" fill="#6d747e" text-anchor="middle">对应 &lt;% %&gt; 程序片</text>
  <rect x="486" y="84" width="164" height="196" rx="8" fill="#ffffff" stroke="#e4e0d6"></rect>
  <text x="568" y="110" font-size="12" fill="#6d747e" text-anchor="middle">线程 2</text>
  <rect x="502" y="126" width="132" height="56" rx="6" fill="#e9f2f6" stroke="#2f6f8f" stroke-width="1.5"></rect>
  <text x="568" y="150" font-size="13" fill="#1f4d64" text-anchor="middle">局部变量 m</text>
  <text x="568" y="170" font-size="11" fill="#2f6f8f" text-anchor="middle">m = 1</text>
  <text x="568" y="250" font-size="11.5" fill="#6d747e" text-anchor="middle">每次请求重新分配</text>
  <rect x="670" y="84" width="164" height="196" rx="8" fill="#ffffff" stroke="#e4e0d6"></rect>
  <text x="752" y="110" font-size="12" fill="#6d747e" text-anchor="middle">线程 3</text>
  <rect x="686" y="126" width="132" height="56" rx="6" fill="#e9f2f6" stroke="#2f6f8f" stroke-width="1.5"></rect>
  <text x="752" y="150" font-size="13" fill="#1f4d64" text-anchor="middle">局部变量 m</text>
  <text x="752" y="170" font-size="11" fill="#2f6f8f" text-anchor="middle">m = 1</text>
  <text x="752" y="250" font-size="11.5" fill="#6d747e" text-anchor="middle">请求结束即销毁</text>
  <text x="30" y="308" font-size="11.5" fill="#8a8175">答题时先分清变量声明在 &lt;%! %&gt; 还是 &lt;% %&gt; 里，再判断共享还是独占。</text>
</svg>

分析题的答法固定成三步：先指出 n 是成员变量、m 是局部变量；再说明成员变量属于 Servlet 对象、所有线程共享，局部变量属于线程、每次请求重建；最后按访问顺序列出每人的输出。只写“n 是共享的”拿不到分，要把 1、2、3 的结果写出来。

### Java 表达式

格式 `<%= 表达式 %>`。表达式必须能求值，服务器算出结果，转成字符串输出到页面。

两条限制：`<%= %>` 里不能写语句，不能以分号结尾；`<%=` 是一个整体，`<%` 和 `=` 之间不能有空格。

### page 指令

语法 `<%@ page 属性="值" %>`，可以一条写多个属性，也可以分多条写。常用属性四个：

| 属性 | 作用 |
| --- | --- |
| `contentType` | 响应给浏览器的 MIME 类型和字符集，如 `text/html;charset=UTF-8`；一个页面只能有一个值 |
| `import` | 引入包中的类，可以出现多次、指定多个值 |
| `language` | 脚本语言，只能是 java |
| `pageEncoding` | JSP 文件本身的存储编码 |

两者的分工是：`contentType` 里的 charset 是服务器发给浏览器时网页内容的编码；`pageEncoding` 是 JSP 文件存盘时用的编码。两者都存在时以 pageEncoding 决定 JSP 的编码，pageEncoding 不存在才看 charset，都没有则用 ISO-8859-1。

### include 指令：静态嵌入

语法 `<%@ include file="文件的URL" %>`。作用是把 JSP、HTML 或其他文本文件静态嵌入当前页面。

所谓静态嵌入就是“先包含后处理”：编译阶段先把两个文件合并成一个新的 JSP 页面，再整体翻译成 Java、编译、运行。所以合并后必须语法合法，例 2-4 中两个页面的 page 指令不能指定不同的 contentType，否则合并后同一个属性出现两个值，直接语法错误。

### include 动作：动态嵌入

语法 `<jsp:include page="文件的URL"/>`，可以带子标记。

所谓动态嵌入就是“先处理后包含”：翻译时并不合并两个页面，两个 JSP 各自翻译、各自编译；运行到 include 动作那一行，才去执行被包含页面的字节码，把它的输出插进来。所以两个页面的 contentType 可以不同，灵活性高，代价是执行速度稍慢。

| 对比项 | include 指令 | include 动作 |
| --- | --- | --- |
| 语法 | `<%@ include file="..." %>` | `<jsp:include page="..." />` |
| 时机 | 编译阶段，先包含后处理 | 运行阶段，先处理后包含 |
| 是否合并源文件 | 合并成一个 JSP 再翻译 | 各自翻译，运行时调用 |
| contentType | 必须一致 | 可以不同 |
| 效率 | 快 | 稍慢 |
| 适用 | 页头、导航栏等固定结构 | 内容随请求变化、需要独立执行的部分 |

### forward 与 param 动作

`<jsp:forward page="目标页面"/>`：从该标记处停止当前页面的执行，转去执行 page 指定的页面。转发发生在服务器内部，浏览器地址栏仍是第一次请求的地址，请求对象还是同一个，request 里存的数据能带过去。

`<jsp:param name="参数名" value="参数值"/>`：不能单独用，只能作为 include、forward 的子标记，以“名字-值”对的形式给目标页面传参数。目标页面用 `request.getParameter("参数名")` 接收。

例 2-7 中 `<jsp:include page="computer.jsp">` 下挂两个 param 传长和宽，computer.jsp 里 `request.getParameter("length")` 取到字符串，再 `Double.parseDouble` 转成数字算面积。

### 本章易错点

- 声明 `<%! %>` 里的变量是成员变量，不是“全局变量”；它的作用域是整个页面，生命周期到服务器关闭。
- 程序片和表达式都在 `_jspService()` 方法内，不能在其中再定义方法。
- 表达式末尾不能加分号；`<%=` 中间不能有空格。
- include 指令是编译期合并，include 动作是运行期调用，别写反。
- forward 之后当前页面剩下的代码不会执行，但之前的输出可能已经进了缓冲区。考试只问“还会不会执行”。

---

## 第三章 JSP 内置对象

本章不单独出题，但 request 和 session 会出现在程序分析题、程序设计题里，必须会用。其余对象知道名字和一句话作用即可。

### 九个内置对象与四类划分

不需要声明和实例化、可以直接在程序片和表达式里使用的对象，叫 JSP 内置对象。JSP 共有 9 个，分 4 类：

| 类别 | 对象 | 作用 |
| --- | --- | --- |
| 与输入输出有关 | request | 封装客户端发来的请求 |
| | response | 封装服务器对客户端的响应 |
| | out | 把处理结果输出到客户端 |
| 与上下文有关 | session | 浏览器与服务器一次会话的上下文 |
| | application | 整个 Web 应用的上下文 |
| | pageContext | 当前 JSP 页面的上下文 |
| 与 Servlet 有关 | page | 当前 JSP 翻译成的 Servlet 对象本身 |
| | config | 该 Servlet 的 ServletConfig 对象 |
| 与错误有关 | exception | 处理页面抛出的异常 |

### request 对象

类型 `jakarta.servlet.http.HttpServletRequest`。客户端请求一个 JSP 页面时，服务器把这次请求的所有信息封装进 request。

最常用的四个方法：

| 方法 | 作用 |
| --- | --- |
| `String getParameter(String name)` | 取一个参数的值，返回字符串 |
| `String[] getParameterValues(String name)` | 取同名参数的多个值（复选框） |
| `void setAttribute(String key, Object obj)` | 把对象存进 request 域 |
| `Object getAttribute(String key)` | 从 request 域取对象，取不到返回 null |

例 3-1：表单里 `<input type="text" name="userName"/>`，提交到 getValue.jsp，用 `request.getParameter("userName")` 取值。表单的 action 和 input 的 name 是两回事，getParameter 里的名字必须和 name 属性一致。

例 3-2：三个复选框同名 `cities`，用 `getParameterValues("cities")` 得到字符串数组，再遍历。一个都不勾时返回 null，直接 `.length` 会抛 NullPointerException，要先判空。

request 域的生命周期是一次请求。典型用法是“Servlet 处理完，把结果 setAttribute 进 request，再 forward 到 JSP 显示”，JSP 里用 getAttribute 取出来。重定向就不行，因为那是两次请求，request 已经换了。

中文乱码：POST 表单在取参数之前调用 `request.setCharacterEncoding("UTF-8")`，且每个接收参数的页面都要写。GET 方式改这个没用，要在 server.xml 的 Connector 上加 `URIEncoding="UTF-8"`。更省事的办法是写成过滤器统一处理，这正是第六章 Filter 的用途。

### session 对象

HTTP 是无状态协议：客户端请求、服务器响应，连接关闭，服务器不保留这次连接的信息。要记住“这个用户登录过”，就得靠会话技术。session 对象指客户端与服务器的一次会话，从连上这个 Web 应用开始，到断开（或超时）为止，类型 `jakarta.servlet.http.HttpSession`。

服务器为每个用户自动创建一个 session 对象，分配一个唯一的 session ID，`getId()` 可取。同一个用户在同一个 Web 应用里只有一个 session，访问其他页面不会重新分配；关掉浏览器再打开，会新建一个。同一个用户访问不同的 Web 应用，session 也不同。

存取数据三个方法：`setAttribute(String key, Object obj)` 存，`getAttribute(String key)` 取，`removeAttribute(String key)` 删。key 相同会覆盖旧对象。

超时：用户一段时间不请求，session 就“发呆”，超过时限自动失效。Tomcat 默认 30 分钟，改 `conf/web.xml` 里的 `<session-timeout>30</session-timeout>`；也可以 `session.setMaxInactiveInterval(int seconds)` 单独设，单位是秒。设成 0 或负数表示永不过期。

### 四种作用域

| 作用域 | 对应对象 | 范围 | 典型用途 |
| --- | --- | --- | --- |
| page | pageContext | 当前 JSP 页面，页面执行完即失效 | 页面内临时变量 |
| request | request | 一次请求，转发时数据可带走 | Servlet 把结果交给 JSP 显示 |
| session | session | 一次会话，跨多个请求和页面 | 保存登录用户 |
| application | application | 整个 Web 应用，服务器关闭才失效 | 全局配置、访问计数、在线人数 |

判断该用哪个：只给本次请求用就 request；要跨请求记住“谁登录了”就 session；所有用户共享就 application。

### 本章易错点

- request 是“一次请求”，forward 能带走数据，sendRedirect 带不走。
- session 的 key 是字符串，取出来是 Object，要强转。
- session 超时单位是分钟（web.xml）或秒（setMaxInactiveInterval），别混。
- 复选框取值用 getParameterValues，不是 getParameter。

---

## 第四章 JSP 与 JavaBean

### JavaBean 是什么

JavaBean 是一个可重复使用的软件组件，是遵循一定标准、用 Java 语言编写的一个类，该类的一个实例称为一个 JavaBean，简称 bean。特点：可重用、升级方便、不依赖平台。分两类：业务 bean 封装业务逻辑、数据库操作；数据 bean 封装数据。

在 JSP 里大量掺杂 Java 程序片和 HTML 会让页面难维护，JSP + JavaBean 把“数据的表示”和“数据的处理”分开，代码也能复用。

### 编写规范

编写一个 JavaBean 就是写一个 Java 类（必须带包名），并遵守以下规则：

1. 成员变量 name 必须提供 `getName()` 和 `setName()`：方法名以 get/set 为前缀，后缀是首字母大写的成员变量名。
2. boolean 类型的成员变量，允许用 is 代替 get/set，例如 `isMale()`。
3. 类中方法的访问权限必须是 public。
4. 如果有构造方法，必须提供一个无参数的构造方法。

第 4 条最容易漏。JSP 引擎用 `class` 指定的类创建 bean 时调用的是无参构造；只写了带参构造、没写无参构造，运行时报错。

例 4-1 的 Rectangle：两个私有属性 length、width，一个无参构造（默认长 20、宽 10），四个 getter/setter，外加 `computerArea()` 和 `computerLength()` 两个业务方法。注意业务方法不算属性，getProperty 取不到它，要在程序片里直接调用。

### useBean 动作标记

语法：

```jsp
<jsp:useBean id="bean的名字" class="创建bean的类" scope="有效范围"/>
<jsp:useBean id="bean的名字" type="创建bean的类" scope="有效范围"/>
```

四个属性：

| 属性 | 含义 |
| --- | --- |
| id | bean 的变量名，也是它在作用域里的 key |
| class | 要实例化的类名；需要新建时用它，调无参构造 |
| type | bean 的类型；查找已存在对象时用，不会新建。可以是准确类名、父类或接口 |
| scope | 有效范围：page（默认）、request、session、application |

执行流程：Web 容器先在 pageContext 中按 id 和 scope 查找有没有这个对象；找到就把这个 bean 交给页面用；找不到才用 class 指定的类创建一个，放进对应作用域，再交给页面。

<svg width="100%" style="max-width:860px;height:auto" viewBox="0 0 860 300" role="img" aria-label="useBean 先查找后创建的流程">
  <rect width="860" height="300" fill="#fdfbf6"></rect>
  <text x="30" y="38" font-size="14" fill="#1b1d21">容器执行 &lt;jsp:useBean id="x" scope="..."&gt; 时的判断</text>
  <rect x="30" y="66" width="196" height="62" rx="8" fill="#ffffff" stroke="#e4e0d6"></rect>
  <text x="128" y="92" font-size="12.5" fill="#1b1d21" text-anchor="middle">按 id 在 scope 中查找</text>
  <text x="128" y="112" font-size="11" fill="#6d747e" text-anchor="middle">page / request / session / application</text>
  <line x1="226" y1="97" x2="292" y2="97" stroke="#2f6f8f" stroke-width="1.6" marker-end="url(#u1)"></line>
  <rect x="296" y="58" width="150" height="78" rx="8" fill="#eaf3ee" stroke="#3f7a5a"></rect>
  <text x="371" y="84" font-size="13" fill="#2c5c42" text-anchor="middle">找到了</text>
  <text x="371" y="104" font-size="11" fill="#4b7f61" text-anchor="middle">直接用这个对象</text>
  <text x="371" y="122" font-size="11" fill="#4b7f61" text-anchor="middle">不会新建</text>
  <rect x="296" y="176" width="150" height="78" rx="8" fill="#fbeee7" stroke="#b4552d"></rect>
  <text x="371" y="202" font-size="13" fill="#8f3d1c" text-anchor="middle">没找到</text>
  <text x="371" y="222" font-size="11" fill="#b4552d" text-anchor="middle">用 class 调无参构造新建</text>
  <text x="371" y="240" font-size="11" fill="#b4552d" text-anchor="middle">放进 scope 再使用</text>
  <line x1="128" y1="128" x2="128" y2="215" stroke="#b4552d" stroke-width="1.5"></line>
  <line x1="128" y1="215" x2="292" y2="215" stroke="#b4552d" stroke-width="1.5" marker-end="url(#u2)"></line>
  <rect x="500" y="130" width="330" height="70" rx="8" fill="#ffffff" stroke="#d8e4da"></rect>
  <text x="518" y="154" font-size="11.5" fill="#3f7a5a">要点：useBean 只负责“取或建”，</text>
  <text x="518" y="174" font-size="11.5" fill="#3f7a5a">不负责把请求参数写进属性，那是 setProperty。</text>
  <text x="518" y="192" font-size="11" fill="#6d747e">scope 决定它存在哪个域，以及活多久。</text>
  <defs>
    <marker id="u1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#2f6f8f"></path></marker>
    <marker id="u2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#b4552d"></path></marker>
  </defs>
</svg>

### getProperty 动作标记

语法 `<jsp:getProperty name="bean的名字" property="属性名"/>`。name 对应 useBean 的 id，property 对应成员变量名。这条指令等价于调用 `getXxx()`。

用之前必须先 useBean 拿到 bean。取的是 getter 能取到的属性；像 Rectangle 的 computerArea() 不是 getXxx 形式，getProperty 取不到。

例 4-3 的 NewRectangle 把面积、周长也做成了 `getRectangleArea()`、`getRectangleLength()`，于是能用 getProperty 输出。这说明：想让某个值能被 getProperty 读，就得给它配一个 get 方法。

### setProperty 动作标记

三种写法：

1. 用表达式或字符串赋值：

```jsp
<jsp:setProperty name="smallCar" property="tradeMark" value="宝马X6"/>
<jsp:setProperty name="smallCar" property="number" value="<%= carNo %>"/>
```

字符串会自动转成属性的类型；转不了会抛 NumberFormatException。

2. 用表单参数批量赋值：`<jsp:setProperty name="smallCar" property="*"/>`。要求表单参数名和 bean 属性名完全相同，服务器自动匹配、自动转换类型。

3. 指定参数名赋值：`<jsp:setProperty name="bean名" property="属性名" param="参数名"/>`。参数名和属性名可以不同。

### 例 4-4：三种标记一起用

```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>car.jsp</title>
</head>
<body>
<jsp:useBean id="smallCar" class="com.bean.Car" scope="page"/>
<%
    String carNo = "京A8888";
%>
<jsp:setProperty property="tradeMark" name="smallCar" value="宝马X6"/>
<jsp:setProperty property="number" name="smallCar" value="<%= carNo %>"/>
汽车的品牌是:<jsp:getProperty property="tradeMark" name="smallCar"/>
<br>汽车的牌号是:<jsp:getProperty property="number" name="smallCar"/>
</body>
</html>
```

运行结果：品牌“宝马X6”，牌号“京A8888”。注意 value 用表达式时不能带引号包住整个表达式，`value="<%= carNo %>"` 里的引号属于属性值。

### 本章易错点

- 漏写无参构造 → 运行时实例化失败。
- getProperty 的 property 写的是属性名，不是方法名；属性名大小写要和成员变量对应（首字母小写）。
- `property="*"` 要求表单 name 与属性名完全一致，不一致就赋不上。
- useBean 的 scope 与 setAttribute 的域必须一致，否则 JSP 里取不到 Servlet 放的对象。

---

## 第五章 Servlet

这是全卷分量最重的一章：简答题、程序分析题、程序设计题都会落到这里。

### Servlet 类与 Servlet 对象

编写一个 Servlet 类，只要继承 `jakarta.servlet.http.HttpServlet`，并重写响应 HTTP 请求的方法即可。HttpServlet 实现了 Servlet 接口，它的子类习惯上称为一个 Servlet 类，子类创建的对象称为 Servlet 对象。

Servlet 类必须有包名，不能放在默认包里。一个最小的 Servlet：

```java
package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class FirstServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("第一个Servlet类");
        out.println("</body></html>");
    }
}
```

写完类还不能直接访问，必须先“部署”，把 URL 和这个类对应起来，否则服务器不知道哪个请求该交给它。

### 部署方式一：web.xml

`web.xml` 是 Web 应用的部署描述文件，放在 `web/WEB-INF/web.xml`，由 Web 服务器负责管理，内容是把用户请求的 URL 映射到 Servlet。在 `<web-app>` 根标记里加两组标记：

```xml
<servlet>
    <servlet-name>firstServlet</servlet-name>
    <servlet-class>servlet.FirstServlet</servlet-class>
</servlet>
<servlet-mapping>
    <servlet-name>firstServlet</servlet-name>
    <url-pattern>/firstServlet</url-pattern>
</servlet-mapping>
```

要点：

- `<servlet>` 里的 `<servlet-name>` 是这个 Servlet 对象的名字，同一个 web.xml 里不能重名；`<servlet-class>` 是带包名的完整类名。
- `<servlet-mapping>` 里的 `<servlet-name>` 必须和上面的一致；`<url-pattern>` 决定浏览器用什么地址访问。
- 一个 `<servlet>` 对应一个 `<servlet-mapping>`。增加 Servlet 就再加一组。

部署后访问 `http://localhost:8080/ch5/firstServlet`。地址里 `ch5` 是应用名，`/firstServlet` 是 url-pattern。

### 部署方式二：@WebServlet 注解

从 Servlet 3.0 开始可以用注解，不必再写 web.xml，开发简化了，但后期维护、调试成本会增加。所以建议把 `urlPatterns` 的值设成和类名一样，看到 URL 就知道是哪个类。

```java
@WebServlet(name = "secondServlet", urlPatterns = {"/secondServlet"})
public class SecondServlet extends HttpServlet { ... }
```

常用属性：

| 属性 | 类型 | 作用 | 等价于 |
| --- | --- | --- | --- |
| name | String | Servlet 的名字 | `<servlet-name>` |
| value | String[] | URL 匹配模式 | `urlPatterns`，二者不能同时用 |
| urlPatterns | String[] | URL 匹配模式 | `<url-pattern>` |
| loadOnStartup | int | 加载顺序 | `<load-on-startup>` |
| initParams | WebInitParam[] | 初始化参数 | `<init-param>` |

简化写法 `@WebServlet("/secondServlet")`，只给一个路径时不用写属性名。所有属性都可选，但 value 和 urlPatterns 通常必须给一个，同时给时忽略 value。

注解和 web.xml 是等价的两种写法，选一种即可；同一个 Servlet 两处都配会冲突。

### 生命周期

Servlet 对象的生命周期分三个阶段：

1. 初始化：Servlet 第一次被请求加载时，服务器创建 Servlet 对象，调用 `init()` 完成初始化。只调用一次。
2. 响应请求：客户端每次请求，服务器启动一个新线程，在该线程中由 Servlet 对象调用 `service()` 响应。每个请求调用一次，多个客户端就是多个线程各自调用。
3. 销毁：服务器关闭时，Servlet 对象调用 `destroy()`，对象消亡。只调用一次。

<svg width="100%" style="max-width:860px;height:auto" viewBox="0 0 860 300" role="img" aria-label="Servlet 生命周期与三种方法的调用次数">
  <rect width="860" height="300" fill="#fdfbf6"></rect>
  <rect x="26" y="96" width="150" height="86" rx="8" fill="#ffffff" stroke="#e4e0d6"></rect>
  <text x="101" y="124" font-size="12" fill="#6d747e" text-anchor="middle">第一次请求</text>
  <text x="101" y="150" font-size="14" fill="#1b1d21" text-anchor="middle">创建对象</text>
  <text x="101" y="170" font-size="11" fill="#6d747e" text-anchor="middle">只发生一次</text>
  <line x1="176" y1="139" x2="222" y2="139" stroke="#2f6f8f" stroke-width="1.6" marker-end="url(#l1)"></line>
  <rect x="226" y="84" width="150" height="110" rx="8" fill="#fbeee7" stroke="#b4552d" stroke-width="1.6"></rect>
  <text x="301" y="112" font-size="15" fill="#8f3d1c" text-anchor="middle">init()</text>
  <text x="301" y="136" font-size="11.5" fill="#b4552d" text-anchor="middle">初始化，读初始化参数</text>
  <text x="301" y="158" font-size="11.5" fill="#b4552d" text-anchor="middle">调用 1 次</text>
  <text x="301" y="180" font-size="11" fill="#8f3d1c" text-anchor="middle">对象从此常驻内存</text>
  <line x1="376" y1="139" x2="424" y2="139" stroke="#2f6f8f" stroke-width="1.6" marker-end="url(#l1)"></line>
  <rect x="428" y="72" width="174" height="134" rx="8" fill="#e9f2f6" stroke="#2f6f8f" stroke-width="1.6"></rect>
  <text x="515" y="100" font-size="15" fill="#1f4d64" text-anchor="middle">service()</text>
  <text x="515" y="124" font-size="11.5" fill="#2f6f8f" text-anchor="middle">每次请求调用 1 次</text>
  <text x="515" y="146" font-size="11.5" fill="#2f6f8f" text-anchor="middle">每个客户端一个新线程</text>
  <text x="515" y="168" font-size="11.5" fill="#2f6f8f" text-anchor="middle">按请求方式转给</text>
  <text x="515" y="188" font-size="11.5" fill="#2f6f8f" text-anchor="middle">doGet() / doPost()</text>
  <line x1="602" y1="139" x2="650" y2="139" stroke="#2f6f8f" stroke-width="1.6" marker-end="url(#l1)"></line>
  <rect x="654" y="84" width="160" height="110" rx="8" fill="#ffffff" stroke="#e4e0d6"></rect>
  <text x="734" y="112" font-size="15" fill="#1b1d21" text-anchor="middle">destroy()</text>
  <text x="734" y="136" font-size="11.5" fill="#6d747e" text-anchor="middle">服务器关闭时调用</text>
  <text x="734" y="158" font-size="11.5" fill="#6d747e" text-anchor="middle">调用 1 次</text>
  <text x="734" y="180" font-size="11" fill="#8a8175" text-anchor="middle">之后对象不再可用</text>
  <text x="26" y="250" font-size="11.5" fill="#8a8175">结论：init 一次，service 每次请求一次，destroy 一次。三者都在 Servlet 对象里，service 跑在各自的线程里。</text>
  <text x="26" y="272" font-size="11.5" fill="#8a8175">分析题就让数这三行的打印次数，别把“次数”和“线程数”混了。</text>
  <defs>
    <marker id="l1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#2f6f8f"></path></marker>
  </defs>
</svg>

例 5-3 用 `@WebInitParam` 传两个参数，init 里读出来打印；service 里 `count++` 并打印“您是第几个客户端”。连续请求 3 次，控制台是：

```
第一个参数值：one
第二个参数值：two
您是第1个客户端请求该Servlet！
您是第2个客户端请求该Servlet！
您是第3个客户端请求该Servlet！
```

前两行只在第一次出现，因为 init 只执行一次；后面三行每次请求都出现。count 是 static 成员变量，属于类、被所有线程共享，所以能累加。

注意：如果只写 `public void init(ServletConfig config)` 而漏了 `super.init(config)`，后续调用 `getServletConfig()` 会拿不到配置。重写 init 时保留父类调用，或者干脆重写无参的 `init()`。

### 通过 JSP 页面访问 Servlet

两种入口：表单和超链接。

```html
<form action="loginServlet" method="post">
    用户名：<input type="text" name="user"/>
    密码：<input type="password" name="pwd"/>
    <input type="submit" value="提交"/>
</form>

<a href="loginServlet?user=taipingle&pwd=zhenzuile">查看用户名和密码</a>
```

表单的 action、超链接的 href 都要和 `<url-pattern>` 或 `@WebServlet` 的值对上。表单 method 决定服务端收到的是 GET 还是 POST；超链接一定发 GET，参数直接拼在 URL 里。

例 5-4 的 LoginServlet 用 `request.getParameter("user")` 和 `getParameter("pwd")` 取值，判断用户名密码是否为空、是否正确，再用 `response.getWriter()` 输出结果。这段结构就是设计题里登录逻辑的雏形。

### doGet 与 doPost

服务器收到 Servlet 请求时产生一个新线程，让 Servlet 对象调用 `service()`。service 先检查 HTTP 请求类型：是 get 就调用 `doGet()`，是 post 就调用 `doPost()`。所以 Servlet 里没必要重写 service，直接继承即可。

实际开发中重写 doGet 或 doPost，响应更灵活。如果两种请求处理过程完全相同，可以只写一个，在另一个里调用它：

```java
protected void doGet(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
    doPost(request, response);
}
```

例 5-5 用同一个 Servlet 处理两个表单：get 表单算周长，post 表单算面积。doGet 里读 length、width，`Double.parseDouble` 转换后算 `(m + n) * 2`；doPost 里同样读参数，算 `m * n`。两段代码结构一样，只是公式不同。

考点：给一个只重写了 doGet 的 Servlet，用 post 表单提交会怎样？HttpServlet 默认的 doPost 返回 405（方法不允许），页面报错。反过来只写 doPost、用 GET 访问，也一样。

### 重定向与转发

两者都是“从一个页面跳到另一个页面”，但机制完全不同。

重定向：`response.sendRedirect(String location)`。服务器返回 302 状态码和新的 Location 地址，浏览器收到后自动再发一次请求。于是浏览器做了至少两次访问：地址栏变成新地址；两次请求是两个 request 对象，原来 request 里存的数据全部失效；location 可以是任意 URL，甚至别的网站。

转发：`request.getRequestDispatcher(String url).forward(request, response)`。服务器内部把同一个请求交给另一个资源处理，浏览器只发了一次请求。地址栏仍是第一次的地址；用的还是同一个 request，数据能带过去；目标只能是同一个 Web 应用内的资源。

<svg width="100%" style="max-width:860px;height:auto" viewBox="0 0 860 340" role="img" aria-label="重定向与转发的请求次数和地址栏差别">
  <rect width="860" height="340" fill="#fdfbf6"></rect>
  <text x="30" y="36" font-size="14" fill="#1b1d21">重定向：两次请求，地址栏会变</text>
  <rect x="30" y="52" width="120" height="54" rx="8" fill="#ffffff" stroke="#e4e0d6"></rect>
  <text x="90" y="84" font-size="12.5" fill="#1b1d21" text-anchor="middle">浏览器</text>
  <line x1="150" y1="72" x2="214" y2="72" stroke="#2f6f8f" stroke-width="1.6" marker-end="url(#r1)"></line>
  <text x="182" y="64" font-size="10.5" fill="#6d747e" text-anchor="middle">① 请求 A</text>
  <rect x="218" y="44" width="150" height="70" rx="8" fill="#e9f2f6" stroke="#2f6f8f"></rect>
  <text x="293" y="70" font-size="12" fill="#1f4d64" text-anchor="middle">服务器 A</text>
  <text x="293" y="92" font-size="10.5" fill="#2f6f8f" text-anchor="middle">返回 302 + Location</text>
  <line x1="218" y1="96" x2="154" y2="96" stroke="#b4552d" stroke-width="1.6" marker-end="url(#r2)"></line>
  <text x="186" y="112" font-size="10.5" fill="#b4552d" text-anchor="middle">② 302</text>
  <line x1="150" y1="122" x2="214" y2="122" stroke="#b4552d" stroke-width="1.6" marker-end="url(#r2)"></line>
  <text x="182" y="138" font-size="10.5" fill="#b4552d" text-anchor="middle">③ 新请求 B</text>
  <rect x="360" y="44" width="150" height="70" rx="8" fill="#e9f2f6" stroke="#2f6f8f"></rect>
  <text x="435" y="70" font-size="12" fill="#1f4d64" text-anchor="middle">服务器 B</text>
  <text x="435" y="92" font-size="10.5" fill="#2f6f8f" text-anchor="middle">处理并返回 B 页面</text>
  <line x1="360" y1="79" x2="214" y2="79" stroke="#2f6f8f" stroke-width="1.6" marker-end="url(#r1)"></line>
  <text x="286" y="66" font-size="10.5" fill="#2f6f8f" text-anchor="middle">④ 响应 B</text>
  <text x="560" y="62" font-size="11.5" fill="#b4552d">地址栏显示 B 的地址</text>
  <text x="560" y="82" font-size="11.5" fill="#6d747e">request 已换新，A 存的数据丢失</text>
  <text x="560" y="102" font-size="11.5" fill="#6d747e">location 可以跳到别的网站</text>
  <line x1="30" y1="160" x2="830" y2="160" stroke="#e4e0d6"></line>
  <text x="30" y="192" font-size="14" fill="#1b1d21">转发：一次请求，地址栏不变</text>
  <rect x="30" y="210" width="120" height="54" rx="8" fill="#ffffff" stroke="#e4e0d6"></rect>
  <text x="90" y="242" font-size="12.5" fill="#1b1d21" text-anchor="middle">浏览器</text>
  <line x1="150" y1="230" x2="214" y2="230" stroke="#2f6f8f" stroke-width="1.6" marker-end="url(#r1)"></line>
  <text x="182" y="222" font-size="10.5" fill="#6d747e" text-anchor="middle">① 仅此一次请求</text>
  <rect x="218" y="200" width="240" height="82" rx="8" fill="#eaf3ee" stroke="#3f7a5a"></rect>
  <text x="338" y="226" font-size="12" fill="#2c5c42" text-anchor="middle">服务器内部</text>
  <text x="338" y="248" font-size="11" fill="#4b7f61" text-anchor="middle">Servlet A → forward → Servlet B</text>
  <text x="338" y="268" font-size="11" fill="#4b7f61" text-anchor="middle">同一个 request 对象往下传</text>
  <line x1="218" y1="242" x2="154" y2="242" stroke="#3f7a5a" stroke-width="1.6" marker-end="url(#r3)"></line>
  <text x="186" y="258" font-size="10.5" fill="#3f7a5a" text-anchor="middle">② B 的输出</text>
  <text x="500" y="226" font-size="11.5" fill="#3f7a5a">地址栏仍显示 A 的地址</text>
  <text x="500" y="246" font-size="11.5" fill="#6d747e">request.setAttribute 的数据能取到</text>
  <text x="500" y="266" font-size="11.5" fill="#6d747e">只能转到本应用内的资源</text>
  <defs>
    <marker id="r1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#2f6f8f"></path></marker>
    <marker id="r2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#b4552d"></path></marker>
    <marker id="r3" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#3f7a5a"></path></marker>
  </defs>
</svg>

| 对比项 | 重定向 sendRedirect | 转发 forward |
| --- | --- | --- |
| 请求次数 | 2 次 | 1 次 |
| 谁在跳 | 浏览器（客户端行为） | 服务器（服务器行为） |
| 地址栏 | 变成新地址 | 不变 |
| request 数据 | 丢失 | 保留 |
| 目标范围 | 任意 URL | 本 Web 应用内 |
| 写法 | `response.sendRedirect(...)` | `request.getRequestDispatcher(...).forward(...)` |
| 速度 | 慢（多一次往返） | 快 |

例 5-6 把两者放在一个 Servlet 里：用户名或密码为空，`response.sendRedirect("redirectForward.jsp")` 回登录页；数据完整，`RequestDispatcher dis = request.getRequestDispatcher("showServlet"); dis.forward(request, response);` 转给 ShowServlet 显示。

选哪个：要跳转到别的站点、或者希望地址栏变化、或者要避免表单重复提交，用重定向；要把处理结果带着走、要让 URL 保持不变，用转发。MVC 里 Servlet 处理完给 JSP 显示，用转发。

### Cookie

HTTP 是无状态协议，服务器不记得上一次请求是谁发的。要“记住用户”，只能让浏览器每次请求都主动带上一段身份信息。这段信息就是 Cookie。

Cookie 是服务器发给浏览器、由浏览器保存在客户端的一小段文本，以“名=值”的形式存在。流程：

1. 浏览器第一次请求，服务器在响应头里加 `Set-Cookie: name=value`；
2. 浏览器把这条 Cookie 按域名、路径存下来；
3. 之后每次访问同一域名、路径匹配的请求，浏览器自动在请求头里加 `Cookie: name=value`；
4. 服务器用 `request.getCookies()` 取出来，按名字找到想要的值。

<svg width="100%" style="max-width:860px;height:auto" viewBox="0 0 860 360" role="img" aria-label="Cookie 的保存与回传流程">
  <rect width="860" height="360" fill="#fdfbf6"></rect>
  <text x="30" y="34" font-size="14" fill="#1b1d21">Cookie 存在浏览器里，每次请求自动带上</text>
  <rect x="34" y="66" width="150" height="120" rx="8" fill="#ffffff" stroke="#e4e0d6"></rect>
  <text x="109" y="92" font-size="13" fill="#1b1d21" text-anchor="middle">浏览器</text>
  <rect x="50" y="106" width="118" height="62" rx="6" fill="#fdf6e8" stroke="#c9a227"></rect>
  <text x="109" y="128" font-size="10.5" fill="#8a6d1a" text-anchor="middle">Cookie 存储区</text>
  <text x="109" y="148" font-size="10.5" fill="#8a6d1a" text-anchor="middle">rememberUser=qiuxz</text>
  <text x="109" y="162" font-size="9.5" fill="#a08434" text-anchor="middle">按域名 + 路径保存</text>
  <rect x="560" y="66" width="160" height="120" rx="8" fill="#e9f2f6" stroke="#2f6f8f"></rect>
  <text x="640" y="92" font-size="13" fill="#1f4d64" text-anchor="middle">服务器</text>
  <text x="640" y="118" font-size="10.5" fill="#2f6f8f" text-anchor="middle">new Cookie(name, value)</text>
  <text x="640" y="138" font-size="10.5" fill="#2f6f8f" text-anchor="middle">response.addCookie(c)</text>
  <text x="640" y="164" font-size="10.5" fill="#2f6f8f" text-anchor="middle">request.getCookies()</text>
  <line x1="184" y1="100" x2="556" y2="100" stroke="#b4552d" stroke-width="1.7" marker-end="url(#c1)"></line>
  <text x="370" y="90" font-size="11" fill="#b4552d" text-anchor="middle">① 第一次请求</text>
  <line x1="556" y1="128" x2="184" y2="128" stroke="#3f7a5a" stroke-width="1.7" marker-end="url(#c2)"></line>
  <text x="370" y="144" font-size="11" fill="#3f7a5a" text-anchor="middle">② 响应头 Set-Cookie: rememberUser=qiuxz</text>
  <line x1="184" y1="166" x2="556" y2="166" stroke="#2f6f8f" stroke-width="1.7" marker-end="url(#c3)"></line>
  <text x="370" y="182" font-size="11" fill="#2f6f8f" text-anchor="middle">③ 之后的请求，请求头自动带 Cookie</text>
  <text x="34" y="228" font-size="11.5" fill="#6d747e">服务器只负责“发”和“读”，存由浏览器完成；关掉浏览器 Cookie 是否还在，取决于 MaxAge。</text>
  <text x="34" y="250" font-size="11.5" fill="#6d747e">Cookie 里不要放密码等敏感信息，它是明文存在客户端的。</text>
  <text x="34" y="286" font-size="11.5" fill="#8a8175">生命周期三档：MaxAge &gt; 0 存硬盘，到时间才失效；MaxAge &lt; 0 只存内存，关浏览器就没；MaxAge = 0 立即删除。</text>
  <defs>
    <marker id="c1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#b4552d"></path></marker>
    <marker id="c2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#3f7a5a"></path></marker>
    <marker id="c3" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#2f6f8f"></path></marker>
  </defs>
</svg>

Java 端的用法：

```java
// 写：创建 Cookie，加到响应里
Cookie cookie = new Cookie("rememberUser", URLEncoder.encode(username, "utf-8"));
cookie.setMaxAge(7 * 24 * 60 * 60);   // 7 天，单位是秒
cookie.setPath(request.getContextPath());
response.addCookie(cookie);

// 删：同名 Cookie，MaxAge 设 0
Cookie del = new Cookie("rememberUser", "");
del.setMaxAge(0);
del.setPath(request.getContextPath());
response.addCookie(del);

// 读：请求里拿数组，按名字找
Cookie[] cookies = request.getCookies();
if (cookies != null) {
    for (Cookie c : cookies) {
        if ("rememberUser".equals(c.getName())) {
            String name = URLDecoder.decode(c.getValue(), "utf-8");
        }
    }
}
```

`setMaxAge(int expiry)` 是 Cookie 的核心考点：正数表示多少秒后失效，存硬盘，关浏览器还在；负数表示只在浏览器内存里，关浏览器就没了（默认就是 -1）；0 表示立刻删除，通常用来清 Cookie。`setPath` 限定 Cookie 在哪个路径下生效，不设则默认是当前路径及其子路径。中文值要 `URLEncoder` 编码，否则可能乱码或抛异常。

浏览器端看到的响应头长这样：

```http
HTTP/1.1 200 OK
Set-Cookie: rememberUser=qiuxz; Max-Age=604800; Path=/exp2
```

### Session

Cookie 存的是“小纸条”，Session 存的是“服务器那边的档案”。用户第一次访问时，服务器创建 session 对象，分配一个唯一 ID；服务器通过 Cookie 把 `JSESSIONID` 发给浏览器；之后浏览器每次请求都带着这个 ID，服务器凭 ID 找回对应的 session 对象。

session 对象指客户端与服务器端的一次会话，从客户端连到服务器端的一个 Web 应用程序开始，直到客户端与服务器端断开为止。类型 `jakarta.servlet.http.HttpSession`。

<svg width="100%" style="max-width:860px;height:auto" viewBox="0 0 860 330" role="img" aria-label="Session 用 JSESSIONID 找回服务器端对象">
  <rect width="860" height="330" fill="#fdfbf6"></rect>
  <rect x="30" y="60" width="170" height="190" rx="8" fill="#ffffff" stroke="#e4e0d6"></rect>
  <text x="115" y="86" font-size="13" fill="#1b1d21" text-anchor="middle">浏览器</text>
  <rect x="46" y="102" width="138" height="56" rx="6" fill="#fdf6e8" stroke="#c9a227"></rect>
  <text x="115" y="124" font-size="10.5" fill="#8a6d1a" text-anchor="middle">只存一个编号</text>
  <text x="115" y="144" font-size="10.5" fill="#8a6d1a" text-anchor="middle">JSESSIONID=EF92…</text>
  <text x="115" y="190" font-size="11" fill="#6d747e" text-anchor="middle">真正的数据不在浏览器</text>
  <rect x="560" y="60" width="270" height="190" rx="8" fill="#e9f2f6" stroke="#2f6f8f"></rect>
  <text x="695" y="86" font-size="13" fill="#1f4d64" text-anchor="middle">服务器内存中的会话表</text>
  <rect x="578" y="102" width="234" height="54" rx="6" fill="#ffffff" stroke="#2f6f8f"></rect>
  <text x="695" y="122" font-size="10.5" fill="#1f4d64" text-anchor="middle">EF92… → session 对象</text>
  <text x="695" y="142" font-size="10.5" fill="#2f6f8f" text-anchor="middle">user = 邱宪政；创建时间；最后访问时间</text>
  <rect x="578" y="166" width="234" height="54" rx="6" fill="#ffffff" stroke="#c8d6dd"></rect>
  <text x="695" y="186" font-size="10.5" fill="#1f4d64" text-anchor="middle">A1B2… → 另一个用户的 session</text>
  <text x="695" y="206" font-size="10.5" fill="#6d747e" text-anchor="middle">每个浏览器一个，互不干扰</text>
  <line x1="200" y1="130" x2="556" y2="130" stroke="#2f6f8f" stroke-width="1.7" marker-end="url(#s1)"></line>
  <text x="378" y="120" font-size="11" fill="#2f6f8f" text-anchor="middle">① 请求带 Cookie: JSESSIONID=EF92…</text>
  <line x1="556" y1="158" x2="200" y2="158" stroke="#3f7a5a" stroke-width="1.7" marker-end="url(#s2)"></line>
  <text x="378" y="176" font-size="11" fill="#3f7a5a" text-anchor="middle">② 服务器按编号找到对象，读写其中的属性</text>
  <text x="30" y="286" font-size="11.5" fill="#6d747e">Session 依赖 Cookie 传编号，但数据本身留在服务器，所以比 Cookie 安全，能存对象。</text>
  <defs>
    <marker id="s1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#2f6f8f"></path></marker>
    <marker id="s2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#3f7a5a"></path></marker>
  </defs>
</svg>

Servlet 里拿 session 的两种写法：

```java
HttpSession session = request.getSession(true);  // 有就返回，没有就新建
HttpSession session = request.getSession(false); // 有就返回，没有返回 null
```

`true` 是默认值，`request.getSession()` 等同于 `getSession(true)`。判断用户是否登录，要用 `getSession(false)`，否则每个访客都会被建一个空会话。

常用方法：

| 方法 | 作用 |
| --- | --- |
| `setAttribute(String key, Object obj)` | 存对象，key 相同则覆盖 |
| `getAttribute(String key)` | 取对象，没有返回 null |
| `removeAttribute(String key)` | 删除 |
| `getId()` | 取会话 ID |
| `invalidate()` | 让当前会话立即失效（注销） |
| `isNew()` | 是否刚创建、客户端还没确认 |
| `setMaxInactiveInterval(int seconds)` | 最大空闲时间，单位秒；0 或负数表示永不过期 |

例 5-7 用两个 Servlet 演示：UseSessionServlet 取用户名，`request.getSession(true)` 拿到会话，`session.setAttribute("myName", name)` 存进去，页面显示 `session.getId()`；ShowNameServlet 里再 `getSession(true)`，`(String) session.getAttribute("myName")` 取出来显示。两个 Servlet 的会话 ID 相同，说明拿到的是同一个 session 对象。

会话失效的三种情况：调用 `invalidate()`；超过最大空闲时间；浏览器关闭（更准确地说，浏览器不再携带原来的 JSESSIONID，服务器端的对象要等到超时才回收，但用户看到的效果就是重新登录）。

### Cookie 与 Session 对比

| 对比项 | Cookie | Session |
| --- | --- | --- |
| 存储位置 | 客户端浏览器 | 服务器内存（或持久化容器） |
| 存什么 | 字符串，名值对 | 任意 Object |
| 大小 | 单个约 4KB，数量有限 | 受服务器内存限制 |
| 安全性 | 明文可见，可被篡改 | 只暴露 ID，相对安全 |
| 生命周期 | 由 MaxAge 决定 | 一次会话，超时或 invalidate 结束 |
| 跨应用 | 同域名下可共享 | 每个 Web 应用独立 |
| 典型用途 | 记住用户名、购物车标识、免登录令牌 | 保存登录用户、权限、购物车 |

Cookie 是“客户端的小纸条”，Session 是“服务器端的档案柜”，Session 靠 Cookie 里的编号找柜子。

### MVC 模式

MVC 是 Model、View、Controller 的缩写，分别代表 Web 应用中的三种职责：

- 模型（Model）：存储数据，以及处理用户请求的业务逻辑。
- 视图（View）：向控制器提交数据，显示模型中的数据。
- 控制器（Controller）：根据视图提出的请求，判断把请求和数据交给哪个模型处理，以及把处理后的结果交给哪个视图更新显示。

在基于 Servlet 的 MVC 里，三种职责分别落到具体技术上：

| 角色 | 实现 | 职责 |
| --- | --- | --- |
| 视图 View | 一个或多个 JSP 页面（也可以是 HTML） | 用表单收集数据提交给控制器；用 HTML 标记和 JavaBean 标记显示模型中的数据 |
| 控制器 Controller | 一个或多个 Servlet | 接收请求、取参数、调用业务模型、把结果放进实体模型、转发给视图 |
| 模型 Model | 实体模型：JavaBean；业务模型：普通 Java 类 | 实体模型存数据；业务模型做校验、计算、查库等业务逻辑 |

<svg width="100%" style="max-width:860px;height:auto" viewBox="0 0 860 400" role="img" aria-label="JSP、Servlet、JavaBean 组成的 MVC 流程">
  <rect width="860" height="400" fill="#fdfbf6"></rect>
  <text x="30" y="36" font-size="14" fill="#1b1d21">一次登录请求在 MVC 三部分之间的走向</text>
  <rect x="30" y="70" width="200" height="110" rx="8" fill="#e9f2f6" stroke="#2f6f8f" stroke-width="1.6"></rect>
  <text x="130" y="98" font-size="14" fill="#1f4d64" text-anchor="middle">View 视图</text>
  <text x="130" y="122" font-size="11.5" fill="#2f6f8f" text-anchor="middle">loginCheck.jsp</text>
  <text x="130" y="144" font-size="11" fill="#6d747e" text-anchor="middle">表单收集用户名、密码</text>
  <text x="130" y="164" font-size="11" fill="#6d747e" text-anchor="middle">登录成功页显示欢迎语</text>
  <rect x="330" y="70" width="200" height="110" rx="8" fill="#fbeee7" stroke="#b4552d" stroke-width="1.6"></rect>
  <text x="430" y="98" font-size="14" fill="#8f3d1c" text-anchor="middle">Controller 控制器</text>
  <text x="430" y="122" font-size="11.5" fill="#b4552d" text-anchor="middle">LoginCheckServlet</text>
  <text x="430" y="144" font-size="11" fill="#6d747e" text-anchor="middle">getParameter 取参数</text>
  <text x="430" y="164" font-size="11" fill="#6d747e" text-anchor="middle">决定 forward 还是 redirect</text>
  <rect x="630" y="70" width="200" height="110" rx="8" fill="#eaf3ee" stroke="#3f7a5a" stroke-width="1.6"></rect>
  <text x="730" y="98" font-size="14" fill="#2c5c42" text-anchor="middle">Model 模型</text>
  <text x="730" y="122" font-size="11.5" fill="#4b7f61" text-anchor="middle">User（实体）UserCheck（业务）</text>
  <text x="730" y="144" font-size="11" fill="#6d747e" text-anchor="middle">User 存 name、pwd</text>
  <text x="730" y="164" font-size="11" fill="#6d747e" text-anchor="middle">UserCheck 校验账号密码</text>
  <line x1="230" y1="110" x2="326" y2="110" stroke="#2f6f8f" stroke-width="1.7" marker-end="url(#m1)"></line>
  <text x="278" y="100" font-size="10.5" fill="#2f6f8f" text-anchor="middle">① 提交表单</text>
  <line x1="530" y1="110" x2="626" y2="110" stroke="#3f7a5a" stroke-width="1.7" marker-end="url(#m2)"></line>
  <text x="578" y="100" font-size="10.5" fill="#3f7a5a" text-anchor="middle">② 封装 + 调用</text>
  <line x1="626" y1="140" x2="534" y2="140" stroke="#3f7a5a" stroke-width="1.7" stroke-dasharray="5 3" marker-end="url(#m3)"></line>
  <text x="578" y="156" font-size="10.5" fill="#3f7a5a" text-anchor="middle">③ 返回校验结果</text>
  <path d="M430 180 L430 250 L130 250 L130 184" fill="none" stroke="#b4552d" stroke-width="1.7" marker-end="url(#m4)"></path>
  <text x="280" y="242" font-size="10.5" fill="#b4552d" text-anchor="middle">④ 成功：request.setAttribute("user") + forward 到成功页</text>
  <path d="M340 250 L250 250" fill="none" stroke="#8a8175" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#m5)"></path>
  <text x="292" y="286" font-size="10.5" fill="#8a8175" text-anchor="middle">失败：sendRedirect 回登录页</text>
  <rect x="30" y="310" width="800" height="64" rx="8" fill="#ffffff" stroke="#e4e0d6"></rect>
  <text x="48" y="334" font-size="11.5" fill="#6d747e">判断口诀：用户能看见、负责输入和展示的是 View；接收请求、决定下一步的是 Controller；</text>
  <text x="48" y="356" font-size="11.5" fill="#6d747e">存数据、查数据库、做校验的是 Model。题目问“某段代码属于哪一部分”，照这三句对号入座。</text>
  <defs>
    <marker id="m1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#2f6f8f"></path></marker>
    <marker id="m2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#3f7a5a"></path></marker>
    <marker id="m3" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#3f7a5a"></path></marker>
    <marker id="m4" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#b4552d"></path></marker>
    <marker id="m5" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#8a8175"></path></marker>
  </defs>
</svg>

#### 例 5-8 的完整实现

实体模型 User，放在 dto 包，只有属性和 getter/setter：

```java
package dto;

public class User {
    private String name;
    private String pwd;

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getPwd() { return pwd; }
    public void setPwd(String pwd) { this.pwd = pwd; }
}
```

业务模型 UserCheck，放在 service 包，只负责判断：

```java
package service;

import dto.User;

public class UserCheck {
    public boolean validate(User user) {
        if (user != null && user.getName().equals("JSPMVC")) {
            return user.getPwd().equals("MVC");
        }
        return false;
    }
}
```

控制器 LoginCheckServlet：

```java
package servlet;

import java.io.IOException;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import service.UserCheck;
import dto.User;

@WebServlet(name = "loginCheckServlet", urlPatterns = {"/loginCheckServlet"})
public class LoginCheckServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        doPost(request, response);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String name = request.getParameter("name");
        String pwd = request.getParameter("pwd");

        User user = new User();          // 实例化实体模型
        user.setName(name);              // 把数据存进模型
        user.setPwd(pwd);

        UserCheck uc = new UserCheck();  // 实例化业务模型
        if (uc.validate(user)) {
            request.setAttribute("user", user);   // 模型放进 request 域
            RequestDispatcher dis = request.getRequestDispatcher("loginSuccess.jsp");
            dis.forward(request, response);       // 转发给视图
        } else {
            response.sendRedirect("loginCheck.jsp");  // 失败回登录页
        }
    }
}
```

视图 loginCheck.jsp 只负责表单，loginSuccess.jsp 只负责显示：

```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>loginSuccess.jsp</title></head>
<body>
    <jsp:useBean id="user" type="dto.User" scope="request"/>
    恭喜<jsp:getProperty property="name" name="user"/>登录成功！
</body>
</html>
```

这段代码把 MVC 的三条线都走了一遍：视图提交 → 控制器取参数、封装模型、调用业务 → 业务返回结果 → 控制器把模型放进域并转发 → 视图用 useBean 取出模型显示。设计题就是把这个骨架换成具体业务。

#### 模型的生命周期

控制器创建的实体模型可以放在三个域里，对应三种生命周期。

request 周期：

```java
User user = new User();
user.setName(name);
user.setPwd(pwd);
request.setAttribute("user", user);
RequestDispatcher dis = request.getRequestDispatcher("loginSuccess.jsp");
dis.forward(request, response);
```

视图：

```jsp
<jsp:useBean id="user" type="dto.User" scope="request"/>
<jsp:getProperty property="name" name="user"/>
```

session 周期：把 `request.setAttribute` 换成 `session.setAttribute("user", user)`，视图的 scope 改成 `session`。因为数据在会话里，转发和重定向都能取到，重定向后是新的 request，但 session 还是同一个。

application 周期：换成 `application.setAttribute("user", user)`，视图 scope 用 `application`，所有用户共享。

三个要点：

1. `setAttribute` 的 key 必须和 useBean 的 id 一致，否则视图找不到对象。
2. 视图里的 scope 必须和存放的域一致。存在 request 里却写 scope="session"，容器会去 session 找，找不到就按 type 处理，取不到值或直接报错。
3. 视图用 `type` 而不是 `class`。因为对象是 Servlet 创建好放进去的，视图只负责取，不应该再 new 一个；用 class 会在找不到时新建，掩盖问题。用 type 时如果对象不存在，会抛异常，反而容易发现错误。

#### MVC 与三层架构

MVC 是“表现层”内部的划分：View 管页面，Controller 管请求调度，Model 管数据和业务。三层架构是更大的划分：controller 层接请求，service 层写业务，dao 层访问数据库，entity 层放实体。两者可以叠在一起：Servlet 既是 MVC 的 Controller，也是三层里的 controller；JavaBean 实体是 Model，也是 entity；业务模型 UserCheck 就是 service；再往下访问数据库的类就是 dao。

实验二的目录结构就是这么分的：

```
cn.edu.qut.web.exp2
├── entity    User          实体，和表字段对应
├── dao       UserDao       只写 SQL 和结果集封装
├── servlet   RegisterServlet / LoginServlet / LogoutServlet / UserCenterServlet
├── filter    EncodingFilter 统一编码
└── util      DBUtil        拿连接、关连接
```

考试画图或写代码时，不要求把 service 层单独拆出来，但 Controller、Model、View 三者的职责必须能说清楚。

---

### 本章易错点

- 重定向后 request 数据没了，别在重定向后用 getAttribute 取值。
- forward 之后不能再写响应体，否则可能报“响应已提交”。
- `getSession()` 默认会新建会话，判断登录状态要用 `getSession(false)`。
- Cookie 的 `setMaxAge` 单位是秒，不是毫秒，也不是天。
- 删除 Cookie 要同名、同路径、MaxAge 为 0，三者缺一不可。
- Servlet 对象只有一个，成员变量被所有请求的线程共享。存“当前登录用户”这种每人一份的数据，放 request 或 session，不能放成员变量。

---

## 第六章 过滤器 Filter

本章只考 1 个选择题，但编码过滤器在设计题里很好用，顺手写上能加分。

### Filter 是什么

开发网站时经常有这类需求：某些页面只允许特定用户访问；所有请求统一设成 UTF-8；记录每个请求的耗时。这些事写在每个 Servlet 里重复，写在公共类里又没人调用。过滤器就是为此存在的。

过滤器位于服务器处理请求之前或服务器响应请求之前。也就是说，它可以过滤浏览器对服务器的请求，也可以过滤服务器对浏览器的响应。

正常流程是“请求 → Servlet → 响应”。加了过滤器变成“请求 → 过滤器 → Servlet → 过滤器 → 响应”。过滤器可以在请求到达 Servlet 之前改参数、做校验，也可以拦住请求不让它继续；还可以在响应发出之前改内容、加响应头。

典型用途：权限校验（没登录就跳登录页）、统一字符编码、记录访问日志、过滤敏感词、压缩响应、跨域头设置。

### Filter 接口

编写一个过滤器类，只要实现 `jakarta.servlet` 包中的 Filter 接口。三个方法：

| 方法 | 何时调用 | 作用 |
| --- | --- | --- |
| `init(FilterConfig fConfig)` | 过滤器初始化时，一次 | 读初始化参数，做准备工作 |
| `doFilter(ServletRequest request, ServletResponse response, FilterChain chain)` | 每次请求匹配时 | 写过滤逻辑，决定放行还是拦截 |
| `destroy()` | 服务器终止服务时，一次 | 释放资源 |

`doFilter` 里有一句关键代码：

```java
chain.doFilter(request, response);
```

执行它，请求才会继续交给下一个过滤器；没有下一个过滤器，就交给目标 Servlet/JSP。不执行它，请求就停在这里，后面的 Servlet 收不到。这就是“拦截”。所以“放行”和“拦截”的区别，只在于有没有调用 `chain.doFilter`。

`FilterConfig` 的 `getInitParameter(String name)` 可以读 web.xml 或注解里配的初始化参数，和 ServletConfig 的用法一样。

### 部署

web.xml 方式：

```xml
<filter>
    <filter-name>encodingFilter</filter-name>
    <filter-class>filter.EncodingFilter</filter-class>
    <init-param>
        <param-name>encoding</param-name>
        <param-value>UTF-8</param-value>
    </init-param>
</filter>
<filter-mapping>
    <filter-name>encodingFilter</filter-name>
    <url-pattern>/*</url-pattern>
</filter-mapping>
```

注解方式：

```java
@WebFilter(filterName = "encodingFilter", urlPatterns = "/*")
public class EncodingFilter implements Filter { ... }
```

`/*` 表示匹配所有请求。也可以只写 `/user/*`、`*.jsp` 这样的模式，只过滤一部分。

多个过滤器会组成过滤器链，按 web.xml 中 `<filter-mapping>` 出现的顺序执行；用注解时顺序由容器决定，不可控。所以有先后要求时（比如先编码再鉴权），用 web.xml 配。

### 例 6-1：最简单的过滤器

```java
package filter;

import java.io.IOException;
import java.io.PrintWriter;
import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.FilterConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;

public class FirstFilter implements Filter {
    public void init(FilterConfig fConfig) throws ServletException { }

    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.print("首先执行过滤器<br>");
        chain.doFilter(request, response);
    }

    public void destroy() { }
}
```

配成 `/*` 后，访问这个应用下任何页面或 Servlet，浏览器都会先看到“首先执行过滤器”，再看到目标页面的内容。因为 `doFilter` 里先输出，再 `chain.doFilter` 放行。

### 编码过滤器

```java
package filter;

import java.io.IOException;
import jakarta.servlet.*;
import jakarta.servlet.annotation.WebFilter;

@WebFilter(filterName = "encodingFilter", urlPatterns = "/*")
public class EncodingFilter implements Filter {

    private String encoding = "UTF-8";

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        String value = filterConfig.getInitParameter("encoding");
        if (value != null && !value.trim().isEmpty()) {
            encoding = value;
        }
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        request.setCharacterEncoding(encoding);
        response.setCharacterEncoding(encoding);
        response.setContentType("text/html;charset=" + encoding);
        chain.doFilter(request, response);
    }

    @Override
    public void destroy() { }
}
```

这段代码解决的是“每个 Servlet 都要写一遍 setCharacterEncoding”的问题。放在 `/*` 上，所有请求进 Servlet 之前编码已经设好。设计题里加上它，说明你知道“横切逻辑交给过滤器”，比只写业务多一个得分点。

### 选择题会怎么问

- 过滤器的作用位置：在 Servlet 处理请求之前、响应之前。
- Filter 接口的三个方法：init、doFilter、destroy。
- 放行与拦截的区别：有没有调用 `chain.doFilter`。
- 部署方式：web.xml 的 `<filter>` + `<filter-mapping>`，或 `@WebFilter`。
- 监听器 Listeners 不考，看到相关选项不用纠结。

---

### 本章易错点

- doFilter 里不调用 `chain.doFilter`，请求就停在过滤器，后面的 Servlet 一个字节也收不到。页面空白又不报错，先看这一行。
- setCharacterEncoding 必须排在所有 getParameter 之前。取过参数再设，等于没设。
- `@WebFilter("/*")` 拦这个应用下的全部请求，写成 `"/"` 只匹配根路径。范围写错时，过滤器看着配好了，实际只有首页生效。
- destroy 在服务器正常关闭或应用卸载时调一次，不是每个请求结束都调。要统计请求数，写在 doFilter 里。

---

## 第十章 Ajax

本章也只考 1 个选择题，记住“是什么、干什么、核心是谁”三句话即可，但选择题可能问得比较细，下面把常用 API 也写全。

### 为什么要有 Ajax

传统 Web 的交互模式是“发送请求—等待—服务器返回一个新页面或刷新整个当前页面”。注册邮箱时最典型：填完一长串信息点“注册”，服务器才告诉你这个邮箱已被占用，页面一刷新，前面填的全没了。

Ajax 要解决的就是这种体验问题：只把需要的数据发给服务器，服务器只返回数据，页面局部更新，其余部分不动。

2005 年 Google Suggest 让 Ajax 流行起来：在搜索框输入关键字，JavaScript 把字符发给服务器，服务器返回搜索建议列表，页面不刷新。后来的 Google Maps 也是典型应用：拖动地图加载新区域，页面本身不重新加载，效果接近桌面程序。

### Ajax 是什么

Ajax（Asynchronous JavaScript and XML，异步 JavaScript 和 XML）是一种创建交互式网页应用的网页开发技术，使得“不刷新页面向服务器发起请求”成为可能。

拆开看是三个词。异步，指请求发出去后页面不用等着，用户可以继续操作；JavaScript，指发起请求、处理响应都靠它；XML，是早期的传输格式，现在更多用 JSON 或纯文本，但名字没改。

<svg width="100%" style="max-width:860px;height:auto" viewBox="0 0 860 340" role="img" aria-label="传统整页刷新与 Ajax 局部更新的流程对比">
  <rect width="860" height="340" fill="#fdfbf6"></rect>
  <text x="30" y="34" font-size="14" fill="#1b1d21">同样一次“查用户名是否被占用”，两条路</text>
  <text x="30" y="66" font-size="12.5" fill="#8a8175">传统方式：整页提交，整页返回</text>
  <rect x="30" y="80" width="120" height="46" rx="8" fill="#ffffff" stroke="#e4e0d6"></rect>
  <text x="90" y="108" font-size="11.5" fill="#1b1d21" text-anchor="middle">填写表单</text>
  <line x1="150" y1="103" x2="196" y2="103" stroke="#8a8175" stroke-width="1.5" marker-end="url(#a1)"></line>
  <rect x="200" y="80" width="150" height="46" rx="8" fill="#ffffff" stroke="#e4e0d6"></rect>
  <text x="275" y="102" font-size="11" fill="#1b1d21" text-anchor="middle">提交整个页面</text>
  <text x="275" y="118" font-size="10" fill="#6d747e" text-anchor="middle">浏览器白屏等待</text>
  <line x1="350" y1="103" x2="396" y2="103" stroke="#8a8175" stroke-width="1.5" marker-end="url(#a1)"></line>
  <rect x="400" y="80" width="150" height="46" rx="8" fill="#ffffff" stroke="#e4e0d6"></rect>
  <text x="475" y="102" font-size="11" fill="#1b1d21" text-anchor="middle">服务器生成新页面</text>
  <text x="475" y="118" font-size="10" fill="#6d747e" text-anchor="middle">整页 HTML 传回</text>
  <line x1="550" y1="103" x2="596" y2="103" stroke="#8a8175" stroke-width="1.5" marker-end="url(#a1)"></line>
  <rect x="600" y="80" width="220" height="46" rx="8" fill="#f6f2ea" stroke="#d8d0c0"></rect>
  <text x="710" y="102" font-size="11" fill="#5c5346" text-anchor="middle">整页重绘，已填内容丢失</text>
  <text x="710" y="118" font-size="10" fill="#8a8175" text-anchor="middle">地址栏可能变化</text>
  <text x="30" y="176" font-size="12.5" fill="#3f7a5a">Ajax 方式：只传数据，局部更新</text>
  <rect x="30" y="190" width="120" height="46" rx="8" fill="#ffffff" stroke="#e4e0d6"></rect>
  <text x="90" y="218" font-size="11.5" fill="#1b1d21" text-anchor="middle">输入框失焦</text>
  <line x1="150" y1="213" x2="196" y2="213" stroke="#3f7a5a" stroke-width="1.5" marker-end="url(#a2)"></line>
  <rect x="200" y="190" width="150" height="46" rx="8" fill="#eaf3ee" stroke="#3f7a5a"></rect>
  <text x="275" y="212" font-size="11" fill="#2c5c42" text-anchor="middle">JS 创建 XMLHttpRequest</text>
  <text x="275" y="228" font-size="10" fill="#4b7f61" text-anchor="middle">页面照常可用</text>
  <line x1="350" y1="213" x2="396" y2="213" stroke="#3f7a5a" stroke-width="1.5" marker-end="url(#a2)"></line>
  <rect x="400" y="190" width="150" height="46" rx="8" fill="#eaf3ee" stroke="#3f7a5a"></rect>
  <text x="475" y="212" font-size="11" fill="#2c5c42" text-anchor="middle">服务器只返回结果</text>
  <text x="475" y="228" font-size="10" fill="#4b7f61" text-anchor="middle">文本 / JSON / XML</text>
  <line x1="550" y1="213" x2="596" y2="213" stroke="#3f7a5a" stroke-width="1.5" marker-end="url(#a2)"></line>
  <rect x="600" y="190" width="220" height="46" rx="8" fill="#ffffff" stroke="#3f7a5a"></rect>
  <text x="710" y="212" font-size="11" fill="#2c5c42" text-anchor="middle">JS 改 DOM，只更新提示文字</text>
  <text x="710" y="228" font-size="10" fill="#6d747e" text-anchor="middle">地址栏不变，其余内容还在</text>
  <text x="30" y="286" font-size="11.5" fill="#6d747e">关键差别不在“有没有服务器”，而在“页面整体是否重新加载”：传统方式换整页，Ajax 只换一小块。</text>
  <text x="30" y="308" font-size="11.5" fill="#6d747e">Ajax 不是新语言，是 JavaScript + XMLHttpRequest + 服务器接口的组合用法。</text>
  <defs>
    <marker id="a1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#8a8175"></path></marker>
    <marker id="a2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#3f7a5a"></path></marker>
  </defs>
</svg>

### XMLHttpRequest：Ajax 的核心

XMLHttpRequest 是 Ajax 的核心，Ajax 引擎用它和服务器进行异步通信，是 Ajax 得以实现的重要 JavaScript 对象。

所有现代浏览器（IE7+、Firefox、Chrome、Safari、Opera）都支持 `new XMLHttpRequest()`；IE5、IE6 用 `new ActiveXObject("Microsoft.XMLHTTP")`。兼容写法：

```javascript
function createXHR() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlhttp;
}
```

### 发请求：open 与 send

```javascript
xmlhttp.open(method, url, async);
xmlhttp.send(content);
```

`open` 三个参数：method 是请求方式（GET/POST）；url 是请求地址；async 是否异步，true 表示异步（默认值），发完立即返回，不阻塞页面。

`send(content)` 把请求发出去。异步时立即返回；同步时等到响应回来才继续。content 只在 POST 时用，是请求体的内容。

GET 请求：

```javascript
xmlhttp.open("GET", "AjaxTestServlet?uname=chenheng&upwd=123456", true);
xmlhttp.send();
```

参数拼在 URL 后面。为了避免浏览器缓存，可以加一个随机数：`"AjaxTestServlet?t=" + Math.random()`。

POST 请求：

```javascript
xmlhttp.open("POST", "AjaxTestServlet", true);
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send("uname=chenheng&upwd=123456");
```

POST 要模拟表单提交，必须先 `setRequestHeader` 设 `Content-type`，否则服务器按默认类型解析，取不到参数。参数放在 `send` 里。

什么时候必须用 POST：无法使用缓存（要更新服务器文件或数据库）；要发送大量数据（POST 没有大小限制）；发送含未知字符的用户输入（POST 比 GET 更稳定）。

### 收响应：readyState、status、responseText

请求发出去后，要监听 `onreadystatechange` 事件。`readyState` 表示请求的当前状态：

| readyState | 含义 |
| --- | --- |
| 0 | 未初始化，对象已创建，还没调用 open |
| 1 | 已调用 open，还没调用 send |
| 2 | 已调用 send，还没收到响应 |
| 3 | 正在接收响应数据 |
| 4 | 响应接收完毕 |

只有 `readyState === 4` 时响应才完整。再看 HTTP 状态码 `status`：200 表示成功，404 资源不存在，500 服务器错误。两个条件都满足才处理数据。

```javascript
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        document.getElementById("tip").innerHTML = xmlhttp.responseText;
    }
};
```

取响应内容：`responseText` 得到字符串；`responseXML` 得到 XML DOM（响应类型是 text/xml 时）。现在多数接口返回 JSON，拿到 `responseText` 后用 `JSON.parse` 转对象。

### 一个完整例子

```javascript
function checkUsername() {
    var name = document.getElementById("username").value;
    var xhr = createXHR();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("tip").innerHTML = xhr.responseText;
        }
    };
    xhr.open("GET", "checkUser?username=" + encodeURIComponent(name), true);
    xhr.send();
}
```

服务端是一个普通 Servlet，取参数、查库，直接 `out.print("该用户名已被占用")` 或 `out.print("可以使用")`。浏览器只把这一句话塞进提示区，页面其余部分不动。

### 选择题会怎么问

- Ajax 的含义：Asynchronous JavaScript and XML，异步 JavaScript 和 XML。
- Ajax 的核心：XMLHttpRequest 对象。
- Ajax 的特点：不刷新页面、局部更新、异步通信。
- 发请求的方法：open、send。
- 接收响应的属性：responseText、responseXML；状态属性 readyState、status。
- GET 和 POST 的选择：更新数据、传大量数据、含未知字符时用 POST。

JSON 不在考试范围，但看到 `JSON.parse` 不要慌，它只是把字符串转成对象。

---

### 本章易错点

- Ajax 的核心是 XMLHttpRequest。jQuery 只是把它包了一层，JSON 只是传输用的数据格式，两者都不是核心。
- readyState 变成 4 只说明响应收完了。服务器返回 500 时它同样是 4，所以还得看 status 是不是 200。
- POST 发 Ajax，要设 `Content-Type: application/x-www-form-urlencoded`，send 里传 `name=value&name=value` 形式的字符串，否则后端 getParameter 拿到 null。
- open 的第三个参数是是否异步，省略默认 true。写成 false 会等响应回来才继续，页面卡死，异步就没了。
- responseText 拿到的是字符串，要当对象用还得 JSON.parse 一次。

---

## 程序设计题：用户模块的完整写法

设计题 3 道共 40 分，基本都从实验二的用户模块变形而来：注册、登录、注销、个人中心，或者把它们套到图书、留言、成绩上。判分看的是“结构对不对、关键 API 用没用对”，不是界面好不好看。

### 题目长什么样

常见问法：给出 user 表结构，要求实现注册功能，写出实体类、DAO、Servlet 和 JSP 的关键代码；或者要求实现登录，登录成功进个人中心，失败回登录页并提示；或者要求实现注销，注销后不能再用后退键回到个人中心。

答题时按“表 → 实体 → DAO → Servlet → JSP → 配置”的顺序写，每一层只做自己该做的事。下面这套代码就是标准答案的骨架。

### 表结构

```sql
CREATE TABLE `user` (
  `id`        INT AUTO_INCREMENT PRIMARY KEY,
  `username`  VARCHAR(32)  NOT NULL UNIQUE,
  `password`  VARCHAR(64)  NOT NULL,
  `real_name` VARCHAR(32),
  `gender`    VARCHAR(4),
  `phone`     VARCHAR(20),
  `email`     VARCHAR(64),
  `address`   VARCHAR(128),
  `role`      VARCHAR(16)  DEFAULT 'user',
  `reg_time`  DATETIME
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

`username` 加 UNIQUE，是注册查重的最后一道防线：即使两个请求同时通过了“查重”，数据库也会拒绝第二条。

### 工程结构与依赖

```
exp2-user
├── pom.xml
└── src/main
    ├── java/cn/edu/qut/web/exp2
    │   ├── entity/User.java
    │   ├── dao/UserDao.java
    │   ├── util/DBUtil.java
    │   ├── filter/EncodingFilter.java
    │   └── servlet/RegisterServlet.java
    │               LoginServlet.java
    │               LogoutServlet.java
    │               UserCenterServlet.java
    ├── resources/db.properties
    └── webapp
        ├── WEB-INF/web.xml
        ├── index.jsp
        ├── login.jsp
        ├── register.jsp
        ├── registerSuccess.jsp
        ├── userCenter.jsp
        └── error.jsp
```

Maven 依赖三个：`jakarta.servlet-api`（scope 为 provided）、`jakarta.servlet.jsp-api`（provided）、`mysql-connector-j`。打包方式 `war`，Tomcat 10 以上用 jakarta 命名空间，不要混用 javax。

### 实体类

```java
package cn.edu.qut.web.exp2.entity;

import java.util.Date;

public class User {
    private Integer id;
    private String username;
    private String password;
    private String realName;
    private String gender;
    private String phone;
    private String email;
    private String address;
    private Date regTime;

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public String getRealName() { return realName; }
    public void setRealName(String realName) { this.realName = realName; }
    public String getGender() { return gender; }
    public void setGender(String gender) { this.gender = gender; }
    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }
    public Date getRegTime() { return regTime; }
    public void setRegTime(Date regTime) { this.regTime = regTime; }
}
```

实体类只做数据载体，不写业务逻辑。字段名用驼峰，和表里的下划线列名靠 DAO 里的 `rs.getString("real_name")` 对应。

### 数据库工具类

```java
package cn.edu.qut.web.exp2.util;

import java.io.InputStream;
import java.sql.*;
import java.util.Properties;

public class DBUtil {
    private static String url;
    private static String user;
    private static String password;

    static {
        try (InputStream in = DBUtil.class.getClassLoader().getResourceAsStream("db.properties")) {
            Properties p = new Properties();
            p.load(in);
            Class.forName(p.getProperty("jdbc.driver"));
            url = p.getProperty("jdbc.url");
            user = p.getProperty("jdbc.username");
            password = p.getProperty("jdbc.password");
        } catch (Exception e) {
            throw new ExceptionInInitializerError(e);
        }
    }

    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(url, user, password);
    }

    public static void close(ResultSet rs, Statement st, Connection conn) {
        try { if (rs != null) rs.close(); } catch (SQLException ignored) { }
        try { if (st != null) st.close(); } catch (SQLException ignored) { }
        try { if (conn != null) conn.close(); } catch (SQLException ignored) { }
    }

    public static void close(Statement st, Connection conn) {
        close(null, st, conn);
    }
}
```

`db.properties`：

```properties
jdbc.driver=com.mysql.cj.jdbc.Driver
jdbc.url=jdbc:mysql://localhost:3306/tmp2026_bookstore?useUnicode=true&characterEncoding=utf8&serverTimezone=Asia/Shanghai
jdbc.username=root
jdbc.password=123456
```

静态代码块只执行一次，驱动只注册一次。连接用完必须在 finally 里关，否则连接池很快耗尽。

### DAO

DAO 只干三件事：拼 SQL、设参数、把结果集转成对象。

```java
package cn.edu.qut.web.exp2.dao;

import cn.edu.qut.web.exp2.entity.User;
import cn.edu.qut.web.exp2.util.DBUtil;
import java.sql.*;
import java.util.Date;

public class UserDao {

    public User findByUsername(String username) {
        String sql = "SELECT * FROM `user` WHERE username = ?";
        try (Connection conn = DBUtil.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, username);
            try (ResultSet rs = ps.executeQuery()) {
                return rs.next() ? toUser(rs) : null;
            }
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }
    }

    public int insert(User u) {
        String sql = "INSERT INTO `user`(username, password, real_name, gender, phone, email, address, reg_time) "
                   + "VALUES(?, ?, ?, ?, ?, ?, ?, ?)";
        try (Connection conn = DBUtil.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {
            ps.setString(1, u.getUsername());
            ps.setString(2, u.getPassword());
            ps.setString(3, u.getRealName());
            ps.setString(4, u.getGender());
            ps.setString(5, u.getPhone());
            ps.setString(6, u.getEmail());
            ps.setString(7, u.getAddress());
            ps.setTimestamp(8, new Timestamp(u.getRegTime() == null
                    ? System.currentTimeMillis() : u.getRegTime().getTime()));
            ps.executeUpdate();
            try (ResultSet rs = ps.getGeneratedKeys()) {
                return rs.next() ? rs.getInt(1) : 0;
            }
        } catch (SQLException e) {
            e.printStackTrace();
            return 0;
        }
    }

    public int update(User u) {
        String sql = "UPDATE `user` SET real_name=?, gender=?, phone=?, email=?, address=? WHERE id=?";
        try (Connection conn = DBUtil.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, u.getRealName());
            ps.setString(2, u.getGender());
            ps.setString(3, u.getPhone());
            ps.setString(4, u.getEmail());
            ps.setString(5, u.getAddress());
            ps.setInt(6, u.getId());
            return ps.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
            return 0;
        }
    }

    private User toUser(ResultSet rs) throws SQLException {
        User u = new User();
        u.setId(rs.getInt("id"));
        u.setUsername(rs.getString("username"));
        u.setPassword(rs.getString("password"));
        u.setRealName(rs.getString("real_name"));
        u.setGender(rs.getString("gender"));
        u.setPhone(rs.getString("phone"));
        u.setEmail(rs.getString("email"));
        u.setAddress(rs.getString("address"));
        u.setRegTime(rs.getTimestamp("reg_time"));
        return u;
    }
}
```

为什么用 PreparedStatement 而不是 Statement 拼字符串：参数用 `?` 占位，驱动负责转义，用户输入 `' or '1'='1` 不会变成 SQL 片段；预编译语句还能被数据库缓存、重复执行更快。这一点在简答题里也常问。

### 注册 Servlet

```java
@WebServlet("/register")
public class RegisterServlet extends HttpServlet {

    private final UserDao userDao = new UserDao();

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String username = trim(request.getParameter("username"));
        String password = trim(request.getParameter("password"));
        String confirm  = trim(request.getParameter("confirm"));
        String realName = trim(request.getParameter("realName"));

        if (username.isEmpty() || password.isEmpty()) {
            forwardError(request, response, "登录名和密码不能为空");
            return;
        }
        if (username.length() < 3 || username.length() > 16) {
            forwardError(request, response, "登录名长度要在3到16个字符之间");
            return;
        }
        if (password.length() < 6) {
            forwardError(request, response, "密码不能少于6位");
            return;
        }
        if (!password.equals(confirm)) {
            forwardError(request, response, "两次输入的密码不一致");
            return;
        }
        if (userDao.findByUsername(username) != null) {
            forwardError(request, response, "登录名 " + username + " 已经被注册");
            return;
        }

        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        user.setRealName(realName.isEmpty() ? username : realName);
        user.setGender(trim(request.getParameter("gender")));
        user.setPhone(trim(request.getParameter("phone")));
        user.setEmail(trim(request.getParameter("email")));
        user.setAddress(trim(request.getParameter("address")));
        user.setRegTime(new Date());

        int id = userDao.insert(user);
        if (id > 0) {
            user.setId(id);
            request.setAttribute("user", user);
            request.getRequestDispatcher("/registerSuccess.jsp").forward(request, response);
        } else {
            forwardError(request, response, "注册失败，请稍后再试");
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.sendRedirect(request.getContextPath() + "/register.jsp");
    }

    private void forwardError(HttpServletRequest request, HttpServletResponse response, String msg)
            throws ServletException, IOException {
        request.setAttribute("message", msg);
        request.getRequestDispatcher("/error.jsp").forward(request, response);
    }

    private String trim(String s) { return s == null ? "" : s.trim(); }
}
```

四个细节决定了这道题能不能拿满分：

1. 服务端必须重新校验。前端 JS 校验可以被绕过（禁用 JS、直接发请求），服务端不校验等于没校验。
2. 先 `trim` 再判空，避免用户输入一串空格通过校验。
3. 查重必须在 insert 之前，靠 `findByUsername` 返回 null 判断；数据库的 UNIQUE 约束是兜底。
4. 注册成功用 forward 到成功页，并把 user 放进 request，成功页才能显示“欢迎 xxx”。用重定向就传不过去。

### 登录 Servlet

```java
@WebServlet("/login")
public class LoginServlet extends HttpServlet {

    public static final String SESSION_USER = "user";
    public static final String COOKIE_USERNAME = "rememberUser";

    private final UserDao userDao = new UserDao();

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String username = request.getParameter("username");
        String password = request.getParameter("password");
        username = username == null ? "" : username.trim();

        if (username.isEmpty() || password == null || password.isEmpty()) {
            forwardError(request, response, "请填写登录名和密码");
            return;
        }

        User user = userDao.findByUsername(username);
        if (user == null || !user.getPassword().equals(password)) {
            request.setAttribute("username", username);
            forwardError(request, response, "登录名或密码不正确");
            return;
        }

        // 登录成功后换一个新会话，防止会话固定攻击
        HttpSession old = request.getSession(false);
        if (old != null) {
            old.invalidate();
        }
        HttpSession session = request.getSession(true);
        session.setAttribute(SESSION_USER, user);
        session.setMaxInactiveInterval(30 * 60);

        // 记住用户名
        if ("on".equals(request.getParameter("remember"))) {
            Cookie c = new Cookie(COOKIE_USERNAME, URLEncoder.encode(username, "utf-8"));
            c.setMaxAge(7 * 24 * 60 * 60);
            c.setPath(request.getContextPath());
            response.addCookie(c);
        } else {
            Cookie c = new Cookie(COOKIE_USERNAME, "");
            c.setMaxAge(0);
            c.setPath(request.getContextPath());
            response.addCookie(c);
        }

        response.sendRedirect(request.getContextPath() + "/userCenter");
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.sendRedirect(request.getContextPath() + "/login.jsp");
    }

    private void forwardError(HttpServletRequest request, HttpServletResponse response, String msg)
            throws ServletException, IOException {
        request.setAttribute("message", msg);
        request.getRequestDispatcher("/error.jsp").forward(request, response);
    }
}
```

几处考点：

- 失败时提示“登录名或密码不正确”，不区分“用户不存在”和“密码错误”，避免别人试探哪些账号已注册。
- 失败要把 username 放回 request，登录页才能回填，用户不用重打。
- 登录成功必须 `sendRedirect`，不能 forward。因为要跳到受保护的页面、要让地址栏变化，而且重定向后刷新页面不会重复提交表单。这里数据在 session 里，重定向也丢不了。
- 防会话固定：先 `invalidate` 旧会话，再 `getSession(true)` 新建。否则攻击者可以先拿到一个 JSESSIONID 诱导受害者登录，之后用同一个 ID 冒充。
- Cookie 存的是用户名，不是密码；中文要 URLEncoder，路径要设成应用的 contextPath，否则别的应用也带、或者本应用带不上。

### 注销 Servlet

```java
@WebServlet("/logout")
public class LogoutServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate();
        }
        response.sendRedirect(request.getContextPath() + "/login.jsp?logout=1");
    }
}
```

注销的核心是 `invalidate()`，把服务器端的会话对象作废。只删掉某个属性不够，攻击者拿到旧 JSESSIONID 仍然能用。注销后必须重定向到登录页，不能 forward 到个人中心，那样地址栏还停在 /logout。

### 个人中心 Servlet：登录拦截

```java
@WebServlet("/userCenter")
public class UserCenterServlet extends HttpServlet {
    private final UserDao userDao = new UserDao();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        HttpSession session = request.getSession(false);
        User user = session == null ? null : (User) session.getAttribute(LoginServlet.SESSION_USER);

        if (user == null) {
            response.sendRedirect(request.getContextPath() + "/login.jsp?timeout=1");
            return;
        }

        // 重新查一次库，保证页面显示的是最新资料
        User fresh = userDao.findById(user.getId());
        if (fresh != null) {
            session.setAttribute(LoginServlet.SESSION_USER, fresh);
        }

        request.setAttribute("user", fresh == null ? user : fresh);
        request.getRequestDispatcher("/userCenter.jsp").forward(request, response);
    }
}
```

`getSession(false)` 是关键：没登录就返回 null，直接跳登录页；用 `getSession()` 会给每个访客新建会话，既浪费内存，又让“是否登录”永远判断不出来。

### 编码过滤器

```java
@WebFilter("/*")
public class EncodingFilter implements Filter {
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");
        response.setContentType("text/html;charset=UTF-8");
        chain.doFilter(request, response);
    }
}
```

有了它，所有 Servlet 都不用再写 `setCharacterEncoding`，中文参数也不会乱码。

### 登录页：Cookie 回填

```jsp
<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.net.URLDecoder" %>
<%
    String rememberName = "";
    Cookie[] cookies = request.getCookies();
    if (cookies != null) {
        for (Cookie c : cookies) {
            if ("rememberUser".equals(c.getName()) && c.getValue() != null && !c.getValue().isEmpty()) {
                rememberName = URLDecoder.decode(c.getValue(), "utf-8");
            }
        }
    }
    String username = (String) request.getAttribute("username");
    if (username == null) {
        username = rememberName;
    }
%>
<form action="<%=request.getContextPath()%>/login" method="post">
    登录名：<input type="text" name="username" value="<%=username%>">
    密码：<input type="password" name="password">
    <input type="checkbox" name="remember" <%=rememberName.isEmpty() ? "" : "checked"%>>记住用户名
    <input type="submit" value="登录">
</form>
```

注意 `request.getCookies()` 可能返回 null（浏览器一条 Cookie 都没有），必须先判空再遍历，这是最常见的空指针来源。

### 设计题的答题框架

不管题目换成图书、留言还是成绩，都按这六步写：

1. 建表：主键自增，登录名或编号加 UNIQUE，时间字段用 DATETIME。
2. 实体类：字段与表对应，私有属性 + 无参构造 + getter/setter。
3. DAO：一个方法一条 SQL，全部用 PreparedStatement，写 `toXxx(ResultSet)` 做封装。
4. Servlet：取参数 → 校验 → 调 DAO → 成功放数据并转发/重定向 → 失败带提示回原页。
5. JSP：表单 action 指向 Servlet 的 url-pattern，字段 name 与 getParameter 一致，显示用 request/session 里的数据。
6. 配置：`@WebServlet` 或 web.xml 二选一；编码过滤器挂 `/*`；`web.xml` 里设 welcome-file 和 session-timeout。

<svg width="100%" style="max-width:860px;height:auto" viewBox="0 0 860 250" role="img" aria-label="注册登录注销三条链路的跳转关系">
  <rect width="860" height="250" fill="#fdfbf6"></rect>
  <rect x="30" y="90" width="140" height="60" rx="8" fill="#ffffff" stroke="#e4e0d6"></rect>
  <text x="100" y="116" font-size="12.5" fill="#1b1d21" text-anchor="middle">register.jsp</text>
  <text x="100" y="136" font-size="10.5" fill="#6d747e" text-anchor="middle">填表提交</text>
  <line x1="170" y1="120" x2="222" y2="120" stroke="#2f6f8f" stroke-width="1.6" marker-end="url(#f1)"></line>
  <rect x="226" y="88" width="150" height="64" rx="8" fill="#fbeee7" stroke="#b4552d"></rect>
  <text x="301" y="112" font-size="12" fill="#8f3d1c" text-anchor="middle">/register</text>
  <text x="301" y="132" font-size="10.5" fill="#b4552d" text-anchor="middle">校验、查重、insert</text>
  <line x1="376" y1="120" x2="428" y2="120" stroke="#b4552d" stroke-width="1.6" marker-end="url(#f2)"></line>
  <rect x="432" y="88" width="170" height="64" rx="8" fill="#eaf3ee" stroke="#3f7a5a"></rect>
  <text x="517" y="112" font-size="12" fill="#2c5c42" text-anchor="middle">registerSuccess.jsp</text>
  <text x="517" y="132" font-size="10.5" fill="#4b7f61" text-anchor="middle">forward，显示欢迎语</text>
  <rect x="30" y="176" width="140" height="54" rx="8" fill="#ffffff" stroke="#e4e0d6"></rect>
  <text x="100" y="207" font-size="12.5" fill="#1b1d21" text-anchor="middle">login.jsp</text>
  <line x1="170" y1="200" x2="222" y2="200" stroke="#2f6f8f" stroke-width="1.6" marker-end="url(#f1)"></line>
  <rect x="226" y="172" width="150" height="62" rx="8" fill="#fbeee7" stroke="#b4552d"></rect>
  <text x="301" y="196" font-size="12" fill="#8f3d1c" text-anchor="middle">/login</text>
  <text x="301" y="216" font-size="10.5" fill="#b4552d" text-anchor="middle">查库、建 session、写 Cookie</text>
  <line x1="376" y1="200" x2="428" y2="200" stroke="#2f6f8f" stroke-width="1.6" marker-end="url(#f1)"></line>
  <rect x="432" y="172" width="170" height="62" rx="8" fill="#e9f2f6" stroke="#2f6f8f"></rect>
  <text x="517" y="196" font-size="12" fill="#1f4d64" text-anchor="middle">sendRedirect /userCenter</text>
  <text x="517" y="216" font-size="10.5" fill="#2f6f8f" text-anchor="middle">地址栏变化，刷新不重复提交</text>
  <line x1="602" y1="203" x2="654" y2="203" stroke="#2f6f8f" stroke-width="1.6" marker-end="url(#f1)"></line>
  <rect x="658" y="172" width="172" height="62" rx="8" fill="#ffffff" stroke="#3f7a5a"></rect>
  <text x="744" y="194" font-size="12" fill="#2b5c42" text-anchor="middle">/userCenter → /logout</text>
  <text x="744" y="214" font-size="10.5" fill="#6d747e" text-anchor="middle">invalidate 后回 login.jsp</text>
  <defs>
    <marker id="f1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#2f6f8f"></path></marker>
    <marker id="f2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#b4552d"></path></marker>
  </defs>
</svg>

### 换成别的模块怎么改

图书管理：表 `book(id, name, author, price, stock, cover)`；实体 Book；BookDao 的 `findAll`、`findById`、`insert`、`update`、`delete`；Servlet 分成 `/book/list`、`/book/add`、`/book/delete`；列表页用 `request.setAttribute("books", list)` 加 forward。

留言板：表 `message(id, user_id, content, create_time)`；登录后才能发，Servlet 里 `getSession(false)` 判空；列表按时间倒序。

成绩管理：表 `score(id, student_no, course, score)`；录入用 POST，查询用 GET，删除要二次确认。

换的只是表名、字段和 SQL，六步框架不动。写代码时把类名、变量名改掉，结构照抄，分数就稳。

### 评分点自查

- 有没有实体类，字段是否与表对应；
- DAO 是否用 PreparedStatement，是否关闭资源；
- Servlet 是否校验参数、是否处理失败分支；
- 成功/失败分别用 forward 还是 sendRedirect，理由对不对；
- session 的 key 是否统一，取出来是否强转；
- JSP 表单的 action、name 是否与 Servlet 对应；
- 有没有配 url-pattern，编码过滤器是否挂上。

---

## 程序分析题

4 道题 20 分，考法就三种：给代码说输出、给场景补代码、给代码找错。下面按类型各给几道，做完能覆盖大部分变化。

### 类型一：说输出

**题 1**

```jsp
<%! int count = 0; %>
<%
    int temp = 0;
    count++;
    temp++;
    out.print("count=" + count + ", temp=" + temp);
%>
```

三个用户依次访问，各自看到什么？

答：三人都是 `count=1, temp=1`？不对。count 是成员变量，三个用户共享，依次是 1、2、3；temp 是局部变量，每人都是 1。所以输出分别是 `count=1, temp=1`、`count=2, temp=1`、`count=3, temp=1`。

**题 2**

```java
public class LifeServlet extends HttpServlet {
    public void init() { System.out.println("init"); }
    public void doGet(HttpServletRequest req, HttpServletResponse resp) {
        System.out.println("service");
    }
    public void destroy() { System.out.println("destroy"); }
}
```

启动服务器后访问 2 次，再关闭服务器，控制台输出什么？

答：

```
init
service
service
destroy
```

init 在第一次请求时调用一次，两次请求各调一次 doGet，关闭时调一次 destroy。若配置了 `loadOnStartup=1`，init 会提前到服务器启动时，但次数仍是一次。

**题 3**

```java
// FirstServlet
request.setAttribute("msg", "hello");
response.sendRedirect("second.jsp");
```

```jsp
<%-- second.jsp --%>
<%= request.getAttribute("msg") %>
```

页面显示什么？

答：显示 `null`。sendRedirect 让浏览器重新发一次请求，第一次请求的 request 已经结束，setAttribute 存的值随之消失。要显示 hello，必须改成 `request.getRequestDispatcher("second.jsp").forward(request, response);`。

**题 4**

```java
Cookie c = new Cookie("city", "北京");
c.setMaxAge(60 * 60 * 24 * 7);
response.addCookie(c);
```

问：这条 Cookie 存在哪？什么时候失效？关掉浏览器还在吗？

答：MaxAge 是正数，存硬盘，7 天后失效；关浏览器仍在。若 `setMaxAge(-1)`，只存内存，关浏览器就没；若 `setMaxAge(0)`，立即删除。中文没有编码，部分容器会抛 `IllegalArgumentException`，应先 `URLEncoder.encode`。

**题 5**

```java
HttpSession session = request.getSession();
String name = (String) session.getAttribute("userName");
if (name.equals("admin")) { ... }
```

这段代码有什么问题？

答：两个。第一，`getSession()` 默认新建会话，未登录用户也会拿到一个空 session，判断登录应该用 `getSession(false)`。第二，`getAttribute` 可能返回 null，直接 `name.equals(...)` 会抛 NullPointerException，应写成 `"admin".equals(name)` 或先判空。

### 类型二：补代码

**题 6** 补全 web.xml，把 `servlet.LoginServlet` 映射到 `/login`。

```xml
<servlet>
    <servlet-name>loginServlet</servlet-name>
    <servlet-class>servlet.LoginServlet</servlet-class>
</servlet>
<servlet-mapping>
    <servlet-name>loginServlet</servlet-name>
    <url-pattern>/login</url-pattern>
</servlet-mapping>
```

两处的 servlet-name 必须一模一样，这是最容易丢分的地方。

**题 7** 用注解完成同样的映射。

```java
@WebServlet(name = "loginServlet", urlPatterns = "/login")
public class LoginServlet extends HttpServlet { ... }
```

**题 8** 补全“登录成功跳个人中心、失败回登录页”的代码。

```java
if (user != null && user.getPassword().equals(password)) {
    HttpSession session = request.getSession(true);
    session.setAttribute("user", user);
    response.sendRedirect(request.getContextPath() + "/userCenter");
} else {
    request.setAttribute("message", "登录名或密码不正确");
    request.getRequestDispatcher("/login.jsp").forward(request, response);
}
```

成功用重定向：进新页面、刷新不重复提交；失败用转发：要把 message 带回登录页显示。写反了就丢分。

### 类型三：找错

**题 9**

```java
protected void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
    String name = request.getParameter("name");
    request.setCharacterEncoding("UTF-8");
    ...
}
```

错在哪？`setCharacterEncoding` 必须在 `getParameter` 之前调用，参数一旦解析过，再设编码无效。正确顺序是先设编码再取参数。

**题 10**

```java
PrintWriter out = response.getWriter();
response.sendRedirect("success.jsp");
out.print("ok");
```

错在哪？已经 sendRedirect 就不能再写响应体，重定向会抛 `IllegalStateException`（响应已提交）。要么重定向，要么输出，不能都做。

---

## 高频简答

简答 5 题 30 分，平均 6 分一题，答 3 到 5 个要点就够。下面按考点分组，括号里是必须出现的关键词。

**1. B/S 与 C/S 的区别。**

B/S 用浏览器当客户端，不用装专用软件；应用升级只改服务器，所有用户立即生效；跨平台，有浏览器就能用。C/S 要装客户端，界面和运算能力强，但升级要逐台更新，受操作系统限制。B/S 的缺点是受浏览器能力限制、交互不如桌面程序。

**2. GET 与 POST 的区别。**

参数位置（URL 可见 / 请求体不可见）、数据量（约 1KB 限制 / 基本无限制）、安全性（明文 / 相对隐蔽）、用途（查询 / 提交）、缓存与幂等（GET 可缓存可重复 / POST 一般不）。触发方式：地址栏、超链接、默认表单是 GET；`method="post"` 才是 POST。

**3. HTTP 请求消息和响应消息的组成。**

请求：请求行（方式、资源、版本）、消息头、空行、请求体。响应：状态行（版本、状态码、描述）、消息头、空行、响应体。一次交互：建连接、发请求、服务器处理、返回响应、浏览器渲染、关闭或保持连接。

**4. 常见状态码。**

200 成功；301 永久重定向；302 临时重定向；404 资源不存在；500 服务器内部错误。1xx 信息、2xx 成功、3xx 重定向、4xx 客户端错误、5xx 服务器错误。

**5. Tomcat 目录的作用。**

bin 脚本、conf 配置（server.xml 改端口）、lib 依赖 jar、webapps 部署目录、work 存 JSP 编译产物、logs 日志。

**6. Servlet 的生命周期。**

第一次请求时创建对象并调 `init()`，只一次；每次请求开一个新线程调 `service()`，由它分派到 doGet/doPost；服务器关闭时调 `destroy()`，只一次。对象常驻内存，成员变量被多线程共享，所以 Servlet 不是线程安全的。

**7. web.xml 与 @WebServlet 的区别。**

功能等价，都是把 URL 映射到 Servlet。web.xml 集中管理、改配置不用重编译、能看清全貌，但文件会变长；注解写在类上、开发快、就近维护，但分散、改完要重新编译。同一个 Servlet 不能两处都配。

**8. 转发与重定向的区别。**

请求次数（1 / 2）、行为方（服务器 / 浏览器）、地址栏（不变 / 变）、request 数据（保留 / 丢失）、目标范围（本应用 / 任意 URL）、效率（快 / 慢）。要带数据走用转发，要换地址或跳外部用重定向。

**9. Cookie 与 Session 的区别。**

存储位置（客户端 / 服务器）、内容（字符串 / 任意对象）、大小（约 4KB / 受内存限制）、安全（明文可改 / 只暴露 ID）、生命周期（MaxAge 决定 / 会话超时或 invalidate）、跨应用（同域可共享 / 每应用独立）。Session 靠 Cookie 里的 JSESSIONID 找到服务器端对象。

**10. Cookie 的创建、读取、删除。**

创建 `new Cookie(name, value)` 后 `response.addCookie`；读取 `request.getCookies()` 得数组，按 `getName()` 找；删除要同名同路径、`setMaxAge(0)` 再 addCookie。MaxAge 正数存硬盘、负数存内存、0 删除。

**11. Session 什么时候失效。**

调 `invalidate()`；空闲超过 `setMaxInactiveInterval` 或 web.xml 的 session-timeout；浏览器关闭后不再携带原 JSESSIONID（服务器端对象要等超时才回收）。

**12. JSP 的四种基本元素。**

HTML 标记、JSP 注释、Java 脚本元素（声明、程序片、表达式）、JSP 标记（指令、动作、自定义）。

**13. 声明与程序片的区别。**

声明 `<%! %>` 翻译成 Servlet 类的成员变量/方法，所有用户共享，服务器关闭才释放；程序片 `<% %>` 翻译进 `_jspService()` 方法，是局部变量，每个请求的线程各一份。

**14. include 指令与 include 动作的区别。**

指令是编译期静态嵌入，先包含后处理，两个文件合成一个再翻译，contentType 必须一致；动作是运行期动态调用，先处理后包含，各自编译，contentType 可不同。指令快，动作用在内容随请求变化的地方。

**15. JavaBean 的规范。**

有包名；属性私有；每个属性提供 public 的 getXxx/setXxx（boolean 可用 isXxx）；方法 public；有构造方法时必须提供无参构造。

**16. MVC 三角色。**

Model 存数据、做业务（JavaBean + 业务类）；View 提交数据、显示数据（JSP）；Controller 接收请求、决定调用哪个模型、把结果交给哪个视图（Servlet）。Servlet 处理完把实体放进 request，forward 给 JSP，JSP 用 useBean 取。

**17. Filter 的作用与接口方法。**

在请求到达 Servlet 之前、响应发出之前做统一处理：编码、权限、日志、敏感词。实现 Filter 接口，`init` 初始化一次，`doFilter` 每次请求调用、调 `chain.doFilter` 放行，`destroy` 销毁一次。

**18. Ajax 是什么，核心是什么。**

Ajax 是异步 JavaScript 和 XML，一种不刷新页面就能与服务器通信、局部更新页面的技术。Ajax 靠 `XMLHttpRequest` 对象工作。`open` 准备请求，`send` 发送，`onreadystatechange` 监听，`readyState=4` 且 `status=200` 时用 `responseText` 取数据。

**19. PreparedStatement 与 Statement 的区别。**

PreparedStatement 用 `?` 占位、预编译，参数由驱动转义，能防 SQL 注入；可重复执行、效率更高；代码里不用拼接引号，可读性好。Statement 拼字符串，有注入风险。

**20. 中文乱码怎么解决。**

POST：取参数前 `request.setCharacterEncoding("UTF-8")`，或统一用过滤器。GET：在 server.xml 的 Connector 上加 `URIEncoding="UTF-8"`。响应：`response.setContentType("text/html;charset=UTF-8")`。JSP 文件本身：`pageEncoding="UTF-8"`。

---

## 数字与口诀

| 项目 | 数值 |
| --- | --- |
| HTTP 默认端口 | 80 |
| HTTPS 默认端口 | 443 |
| Tomcat 默认端口 | 8080 |
| Tomcat 默认会话超时 | 30 分钟 |
| Cookie 单个大小 | 约 4KB |
| GET 传输上限 | 约 1KB |
| JSP 内置对象 | 9 个 |
| 作用域 | 4 个：page、request、session、application |
| Servlet 生命周期方法 | 3 个：init、service、destroy |
| Filter 接口方法 | 3 个：init、doFilter、destroy |
| AJAX readyState 完成值 | 4 |
| HTTP 成功状态码 | 200 |

口诀：

- 端口：八十网页，四四三加密，八零八零找 Tomcat。
- 生命周期：一次 init，次次 service，最后一次 destroy。
- 转发重定向：一转一请求，一重两请求；转发地址不变，重定向地址变。
- 域的大小：page < request < session < application。
- Cookie 三档：正数硬盘、负数内存、零删除。
- MVC：JSP 看，Servlet 管，JavaBean 算。

---

## 附：实验二速查

| 功能 | URL | 处理的 Servlet | 成功去向 | 失败去向 |
| --- | --- | --- | --- | --- |
| 注册 | /register | RegisterServlet | forward registerSuccess.jsp | forward error.jsp |
| 登录 | /login | LoginServlet | redirect /userCenter | forward error.jsp |
| 个人中心 | /userCenter | UserCenterServlet | forward userCenter.jsp | redirect /login |
| 更新资料 | /updateUser | UpdateUserServlet | redirect /userCenter | forward error.jsp |
| 注销 | /logout | LogoutServlet | redirect login.jsp?logout=1 | 无 |
| 静态页面 | login.jsp、register.jsp、index.jsp | 无 | 无 | 无 |

三个固定值：session 里存用户的 key 是 `user`，记住用户名的 Cookie 名是 `rememberUser`（7 天），web.xml 里的 `session-timeout` 是 30 分钟。
