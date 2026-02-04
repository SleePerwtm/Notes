参考自 **Material for Mkdocs** 的[官方中文文档](https://mkdoc-material.llango.com/)。

---

**MkDocs** 是一个快速、简单且极具美感的静态网站生成器，专为构建项目文档而设计。文档源文件使用 Markdown 编写，并通过单个 YAML 配置文件进行配置。

常用的一个主题是 **Material for Mkdocs**，下面主要记录它的用法。

# 1 Material for Mkdocs

## 1.1 入门

### 1.1.1 安装

#### 1.1.1.1 使用 `pip`​ 安装

```bash
pip install mkdocs-material
```

这将自动安装所有依赖包的兼容版本：[MkDocs](https://www.mkdocs.org/)，[Markdown](https://python-markdown.github.io/)，[Pygments](https://pygments.org/)和[pymdown-extensions](https://facelessuser.github.io/pymdown-extensions/)。

### 1.1.2 新建网站

在当前项目中使用如下命令启动文档：

```bash
mkdocs new [dir-name]
```

​`[dir-name]`​ 是文档启动的位置。

该操作会新建以下结构：

```plaintext
.
├─ docs/
│  └─ index.md
└─ mkdocs.yml
```

### 1.1.3 基本配置

在 `mkdocs.yml`​ 中添加下面几行即可启用主题：

```yaml
theme:
  name: material
```

### 1.1.4 预览

使用以下命令启动本地预览服务器：

```bash
mkdocs serve
```

### 1.1.5 生成静态网站

使用以下命令将所有的 Markdown 文件生成一个静态网站：

```bash
mkdocs build
```

这会在当前目录生成一个 `./site`​ 文件夹，里面是生成的静态网站，可以直接托管到服务器上。
