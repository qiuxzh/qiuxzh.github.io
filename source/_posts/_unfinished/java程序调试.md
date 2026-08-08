---
title: Java程序调试
date: 2026-02-27
tag:
  - 后端
categories:
  - 后端
cover:
article: true
star: false
---

## 快速上手

```java
public class DebugDemo {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        System.out.println(a);
        System.out.println(b);
    }
}

```

断点是Debug的起点，设置在需要观察的代码行（通常是可能出现bug的区域，或程序的关键执行点）。

打开java文件，点击IDEA行号的位置，可以设置一个断点

如图所示，我在代码的第七行设置了断点。
它有什么作用呢？
![image.png|450](https://qiuxz-blog-image.oss-cn-beijing.aliyuncs.com/blog/20260227120037642.png)


设置好断点后，启动Debug模式，让程序执行到断点处暂停。有两种开启debug的方法：
1. 找到IDEA顶部工具栏的“Debug”按钮（绿色三角形，旁边有一个“虫子”图标），点击该按钮；
2. 也可以右键点击main方法，选择“调试 'DebugDemo.main()'”，启动Debug；
![image.png](https://qiuxz-blog-image.oss-cn-beijing.aliyuncs.com/blog/20260227120246729.png)


启动后，程序会自动执行，直到遇到第一个断点，此时代码行会变成**蓝色**，表示程序已暂停在该位置。
![image.png](https://qiuxz-blog-image.oss-cn-beijing.aliyuncs.com/blog/20260227120526274.png)





**单步跳过**（Step Over，快捷键F8）：执行当前行代码，直接跳到下一行
![image.png](https://qiuxz-blog-image.oss-cn-beijing.aliyuncs.com/blog/20260227120734547.png)


![image.png](https://qiuxz-blog-image.oss-cn-beijing.aliyuncs.com/blog/20260227120945475.png)


## 涉及函数调用的调试


单步进入


单步退出












