# 在 deepin 系统上安装 MATLAB

## 安装

### 下载安装包

在官网使用高校邮箱注册 MathWorks，并在下载页面选择 Linux 版本下载安装包。

### 解压安装包

在下载好的安装包所在目录，使用以下命令解压安装包：

```bash
unzip -X -K matlab_R2025a_glnxa64.zip
```

**不要使用右键解压！！！可能会遇到无法安装的问题。**

### 运行安装程序

解压过后，执行安装命令：

```bash
./install
```

默认安装目录为 `/usr/local/MATLAB/R2025a`，但是**可能会提示无权限安装**。建议安装到 `~/MATLAB/R2025a` 即 `/home/用户名/MATLAB/R2025a` 目录下。

之后选择需要的组件进行安装。

### 启动 MATLAB

按 `Ctrl+Alt+T` 打开终端，输入以下命令启动 MATLAB：

```bash
~/MATLAB/R2025a/bin/matlab
```

## 常见问题

### 创建 MATLAB 桌面入口

在桌面新建文本文档，改名为 `matlab.desktop`，并将以下内容复制进去：

```
#!/usr/bin/env xdg-open
[Desktop Entry]
Version=R2025a
Type=Application
Terminal=false
MimeType=text/x-matlab
Exec=/home/<用户名>/MATLAB/R2025a/bin/matlab -desktop
Name=MATLAB
Icon=matlab
Categories=Development;Math;Science
Comment=Scientific computing environment
StartupNotify=true
```

记得将 `<用户名>` 替换为你的用户名。

### 在高分辨率屏幕上，文字显示太小

打开MATLAB后，在MATLAB的命令行窗口，执行如下命令：

```
s = settings;s.matlab.desktop.DisplayScaleFactor
s.matlab.desktop.DisplayScaleFactor.PersonalValue = 2
```

然后重启MATLAB即可解决。

### 字体渲染不正常

在终端执行下面命令安装openjdk：

```bash
sudo apt install openjdk-8-jre
```

然后执行下面命令，切换到Root用户：

```bash
sudo -i
```

修改全局环境变量：

```bash
echo export MATLAB_JAVA=/usr/lib/jvm/java-8-openjdk-amd64/jre >> /etc/profile
```

然后重启电脑。