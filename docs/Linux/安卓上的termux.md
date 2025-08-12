[【高级终端Termux】在安卓手机/平板上使用Termux 搭建 Debian 环境并运行 PC 级 Linux 应用教程（含安装WPS,VS Code）](https://blog.csdn.net/2301_81229576/article/details/145148000)

涉及到可以使用电脑操控手机终端的方法：[文章](https://blog.csdn.net/qdhugo/article/details/120721535)

# termux 安装

浏览器搜索 termux，在 github 页面的 releases 处下载安装包。

# 部署 code-server

## 为 termux 申请手机系统权限

```bash
termux-setup-storage
```

## 换源

```bash
termux-change-repo
```

选择 china mainland 镜像源组。

## 更新 apt

```bash
apt upgrade
apt update
```

## 安装 ubuntu 并进入环境

安装所需 proot 组件：

```bash
apt install proot-distro
```

在 proot-distro 中查看可用 Linux 发行版：

```bash
proot-distro list
```

选择下载 ubuntu：

```bash
proot-distro install ubuntu
```

下载完成后，进入 ubuntu 环境：

```bash
proot-distro login ubuntu
```

---

> 以下均在 ubuntu 环境下执行。

## 安装 code-server

下载 wget 工具

```bash
apt install wget
```

下载 code-server 安装程序

```bash
wget https://code-server.dev/install.sh | sh
```

安装完成后运行安装程序

```bash
sh install.sh
```

## 修改配置文件

先启动一遍来生成配置文件。

```bash
code-server
```

按 `Ctrl+C` 退出。

使用 nano 编辑 code-server 配置文件：

```bash
nano ~/.config/code-server/config.yaml
```

- 将 `bind-addr` 改为 `0.0.0.0:8080`。
- `auth` 项若改为 `none` 则不需要密码登录。
- `password` 改为自己的密码。

使用 nano 修改 code-server 插件商店的配置：

```bash
nano /usr/lib/code-server/lib/vscode/product.json
```

添加以下内容：

```json
"extensionsGallery": {
   "serviceUrl": "https://marketplace.visualstudio.com/_apis/public/gallery",
   "cacheUrl": "https://vscode.blob.core.windows.net/gallery/index",
   "itemUrl": "https://marketplace.visualstudio.com/items",
   "controlUrl": "",
   "recommendationsUrl": ""
},
```

## 启动 code-server

```bash
code-server
```

接下来就可以在同设备浏览器中访问 `http://127.0.0.1:8080` 来打开 code-server 了。

可以选择安装 c++ 编译环境：

```bash
apt install gcc g++ gdb
```