# Chocolatey

[官方网站](https://chocolatey.org/)

曾用过。有一些明显缺点：

- 没有国内源，下载速度慢。
- 使用 `choco search <package name>` 的时候，搜索慢且冗余，会有很多不太相关的结果。

# Scoop

[官方网站](https://scoop.sh/)

免费开源的包管理工具。

## 安装

### 打开 PowerShell 远程权限

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### 自定义 Scoop 安装目录

如果想指定安装目录，可以运行：

```powershell
$env:SCOOP='D:\Program Files\Scoop'`
[environment]::setEnvironmentVariable('SCOOP', $env:SCOOP, 'User')
iwr -useb get.scoop.sh | iex
```

如果跳过自定义安装目录，直接安装 Scoop，会默认安装在 `C:\Users\<用户名>\scoop` 目录下。

### 安装 Scoop

在 PowerShell 中运行以下命令：

```powershell
Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
```

如果发现安装速度极慢，导致安装错误，但再次安装仍提示 scoop 已安装，那么可以输入下面这一行指令来强制删除，然后再重新安装：
‘‘
‘
’’’
```powershell
del .\scoop -Force
```

### 安装 Scoop 的 bucket

scoop 默认自带一个 main bucket，里面包含大量没有 GUI 的软件包，可以安装其他的 bucket 来获取更多的软件包。

推荐安装 extras bucket

安装指令：

```powershell
scoop bucket add extras
```

删除指令：

```powershell
scoop bucket rm extras
```

如果添加社区维护的 bucket，可以用下面的命令：

```powershell
scoop bucket add <仓库名> <仓库地址>
```

## 使用

### 帮助

```powershell
scoop help
```

```powershell
scoop -h
```

查看某个命令的帮助：

```powershell
scoop <command> -h
```

### 搜索软件包

```powershell
scoop search <package name>
```

### 安装软件包

```powershell
scoop install <package name>
```

安装指定 bucket 中的软件包：

```powershell
scoop install <bucket name>/<package name>
```

安装指定版本的软件包：

```powershell
scoop install <package name>@<version>
```

### 查看已安装的软件包

```powershell
scoop list
```

### 更新指定应用

```powershell
scoop update <package name>
```

### 禁止更新指定应用

```powershell
scoop hold <package name>
```

### 解除禁止更新指定应用

```powershell
scoop unhold <package name>
```

### 更新所有应用

```powershell
scoop update *
```

### 更新 bucket 库

```powershell
scoop update
```

### 清理所有旧版本

```powershell
scoop cleanup *
```

### 卸载操作

```powershell
scoop uninstall <软件名>
```

全局卸载（包括 persist）

```powershell
scoop uninstall <软件名> -p
```