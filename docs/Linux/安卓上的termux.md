[【高级终端Termux】在安卓手机/平板上使用Termux 搭建 Debian 环境并运行 PC 级 Linux 应用教程（含安装WPS,VS Code）](https://blog.csdn.net/2301_81229576/article/details/145148000)

安装 ubuntu 的教程：[文章](https://blog.csdn.net/qdhugo/article/details/120721535)

# termux 安装

浏览器搜索 termux，在 github 页面的 releases 处下载安装包。

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

# 使用 ssh 远程连接

## 安装 openssh

```bash
apt install openssh
```

## 设置密码

```bash
passwd
```

## 查询用户名以及 ip 地址

用户名：

```bash
whoami
```

ip 地址：

需要下载 `net-tools`：

```bash
apt install net-tools
```

输入 `ifconfig` 查看 ip 地址

```bash
ifconfig
```

## 启动 ssh 服务器

```bash
sshd
```

## 连接 ssh 服务器

```bash
ssh -p 8022 user@ip
```

# 使用 `proot-distro` 部署 Linux 环境

建议使用 Debian 而不是 Ubuntu，因为 Ubuntu 的 `snap` 商店在 `proot` 中无法使用，而一些应用会强制要求使用 `snap` 商店，导致无法安装。因此不如直接使用 Debian。

## 安装 Debian 并进入环境

安装所需 `proot-distro` 组件：

```bash
apt install proot-distro
```

在 `proot-distro` 中查看可用 Linux 发行版：

```bash
proot-distro list
```

选择下载 Debian：

```bash
proot-distro install debian
```
下载完成后，进入 Debian 环境：

```bash
proot-distro login debian
```

# 部署 code-server

> 以下均在 `proot-distro` 环境下执行。

## 安装 code-server

下载 code-server 安装程序

```bash
curl -fsSL https://code-server.dev/install.sh | sh
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
    "itemUrl": "https://marketplace.visualstudio.com/items"
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

# 使用 zsh 代替 bash

## 安装 zsh

```bash
apt install zsh
```

## 自动化配置工具 oh-my-zsh

安装 oh-my-zsh 的前置需要安装 git

```bash
apt install git
```

安装 oh-my-zsh

```bash
# 通过curl下载
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

```bash
# 通过weget下载
sh -c "$(wget -O- https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

termux 中也可选择 oh-my-termux

```bash
bash -c "$(curl -fsSL https://git.io/oh-my-termux)"
```

安装成功后如图

![oh-my-zsh 安装成功](<assets/安卓上的termux-oh-my-zsh 安装成功.jpg>)

## 设置 zsh 为默认终端

```bash
chsh -s zsh
```

重启终端后检查是否为 zsh

```bash
echo $SHELL
```

输出应为

```bash
/data/data/com.termux/files/usr/bin/zsh
```

## 安装自动补全和语法高亮插件

自动补全插件

```text
zsh-autosuggestions
```

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:=~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```
语法高亮插件

```text
zsh-syntax-highlighting
```

```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

## 切换主题为 powerlevel10k

编辑 `~/.zshrc` 中的 `ZSH_THEME` 项为 `powerlevel10k/powerlevel10k`

```bash
ZSH_THEME="powerlevel10k/powerlevel10k"
```

```text
powerlevel10k/powerlevel10k
```

克隆主题仓库并运行配置文件

```bash
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
source ~/.zshrc
```

接下来根据引导进行安装配置即可。