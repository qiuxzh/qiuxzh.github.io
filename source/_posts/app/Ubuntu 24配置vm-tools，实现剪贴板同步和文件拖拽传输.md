---
title: Ubuntu 24配置vm-tools，实现剪贴板同步和文件拖拽传输
date: 2026-10-15
tag:
categories:
  - 软件
cover:
reprint: false
---

## 1. 虚拟机内安装 open-vm-tools（含桌面集成组件）

```bash
sudo apt update
sudo apt install -y open-vm-tools open-vm-tools-desktop
```

安装后重启。

如果还没有成功，看后面

## 2. 禁用Wayland

Ubuntu 24.04 默认 Wayland，open-vm-tools 桌面集成（剪贴板/拖拽/分辨率自适应）只支持 X11（不支持Wayland），因此不能使用Wayland：

```bash
sudo sed -i 's/^#WaylandEnable=false/WaylandEnable=false/' /etc/gdm3/custom.conf
sudo reboot
```

完成后关机再打开（不是”重启“），就成功了。


