WSL 全称为 Windows Subsystem for Linux，是一个适用于 Windows 的 Linux 子系统，可以在 Windows 系统上原生运行 Linux。

# 安装 WSL

## 启用 Windows 功能

首先，需要开启适用于 Linux 的 Windows 子系统、Virutal Machine Platform 功能。

方法是打开 Windows 控制面板，点击“程序”，然后点击“启用或关闭 Windows 功能”，勾选“适用于 Linux 的 Windows 子系统”复选框以及“Virtual Machine Platform”复选框。

![控制面板设置](assets/WSL-控制面板设置.png)

## 安装 Hyper-V

Windows 11 家庭版默认没有 Hyper-V 组件，需要手动下载。

新建一个文本文档，输入以下内容并保存为 `Hyper-V.cmd`：

```powershell
pushd "%~dp0"
dir /b %SystemRoot%\servicing\Packages\*Hyper-V*.mum >hyper-v.txt
for /f %%i in ('findstr /i . hyper-v.txt 2^>nul') do dism /online /norestart /add-package:"%SystemRoot%\servicing\Packages\%%i"
del hyper-v.txt
Dism /online /enable-feature /featurename:Microsoft-Hyper-V-All /LimitAccess /ALL
```

然后双击运行，等待安装完成。

## 下载 WSL

在 Powershell 中输入以下命令下载：

```powershell
wsl --install
```

## 下载 Linux 发行版

在 Microsoft Store 中搜索并下载需要的 Linux 发行版。