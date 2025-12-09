# 配置 Git 处理行结束符

原文链接：[https://docs.github.com/en/get-started/git-basics/configuring-git-to-handle-line-endings](https://docs.github.com/en/get-started/git-basics/configuring-git-to-handle-line-endings)

为避免在差异比较中出现问题，你可以配置 Git 以正确处理行结束符。

## 关于行结束符

每次在键盘上按下回车键时，都会插入一个称为行结束符的不可见字符。不同的操作系统处理行结束符的方式不同。

当你使用 Git 和 GitHub 协作开发项目时，如果例如你在 Windows 机器上工作，而你的协作者在 macOS 上进行了修改，Git 可能会产生意外的结果。

你可以配置 Git 自动处理行结束符，以便与使用不同操作系统的人员有效协作。

## 行结束符的全局设置

`git config core.autocrlf` 命令用于更改 Git 处理行结束符的方式。它接受单个参数。

=== "Windows"

    在 Windows 上，你只需将 `true` 传递给配置。例如：

    ```powershell
    git config --global core.autocrlf true
    # Configure Git to ensure line endings in files you checkout are correct for Windows.
    # For compatibility, line endings are converted to Unix style when you commit files.
    ```

=== "Mac"

    在 macOS 上，您只需将 `input` 传递给配置。例如：

    ```bash
    git config --global core.autocrlf input
    # Configure Git to ensure line endings in files you checkout are correct for macOS
    ```

=== "Linux"

    在 Linux 上，您只需将 `input` 传递给配置。例如：

    ```bash
    git config --global core.autocrlf input
    # Configure Git to ensure line endings in files you checkout are correct for Linux
    ```


## 仓库级别设置

可选地，你可以配置一个 `.gitattributes` 文件来管理 Git 如何在特定仓库中读取行结束符。当你将此文件提交到仓库时，它会覆盖所有仓库贡献者的 `core.autocrlf` 设置。这确保了所有用户的一致行为，无论他们的 Git 设置和环境如何。

`.gitattributes` 文件必须在仓库的根目录中创建，并像任何其他文件一样提交。

`.gitattributes` 文件看起来像一个包含两列的表格：
- 左侧是 Git 需要匹配的文件名
- 右侧是 Git 应该为这些文件使用的行结束符配置

### 示例

下面是一个 `.gitattributes` 文件的示例。你可以将其用作你仓库的模板：

```gitattributes
# 设置默认行为，以防人们没有设置 core.autocrlf
* text=auto

# 明确声明你希望始终被规范化并在检出时转换为本地行结束符的文本文件
*.c text
*.h text

# 声明在检出时始终使用 CRLF 行结束符的文件
*.sln text eol=crlf

# 标记所有真正是二进制且不应被修改的文件
*.png binary
*.jpg binary
```

你会注意到文件被匹配—`*.c`、`*.sln`、`*.png`—，用空格分隔，然后给出一个设置—`text`、`text eol=crlf`、`binary`。下面我们将介绍一些可能的设置。

- `text=auto`：Git 会以它认为最佳的方式处理文件。这是一个很好的默认选项。
- `text eol=crlf`：Git 在检出时总是将行结束符转换为 `CRLF`。你应该对那些必须保持 `CRLF` 结束符的文件（即使在 OSX 或 Linux 上）使用此设置。
- `text eol=lf`：Git 在检出时总是将行结束符转换为 `LF`。你应该对那些必须保持 LF 结束符的文件（即使在 Windows 上）使用此设置。
- `binary`：Git 会理解指定的文件不是文本文件，不应该尝试更改它们。`binary` 设置也是 `-text -diff` 的别名。

## 更改换行符后刷新仓库

在设置 `core.autocrlf` 选项或提交 `.gitattributes` 文件后，Git 会自动更改行结束符以匹配你的新配置。你可能会发现 Git 报告了你未修改的文件发生了变化。

为确保仓库中的所有行结束符都符合你的新配置，使用 Git 备份你的文件，然后删除并恢复所有文件以规范化行结束符。

在添加或提交任何更改之前，请验证 Git 是否正确应用了配置。例如，Git 会自动确定仓库中的文件是文本文件还是二进制文件。为避免仓库中二进制文件的损坏，我们建议你在 `.gitattributes` 中明确将文件标记为二进制文件。更多信息，请参阅 Git 文档中的 [gitattributes - 按路径定义属性](https://www.git-scm.com/docs/gitattributes#_marking_files_as_binary)。

为避免丢失仓库中文件的任何本地更改，请通过运行以下命令添加并提交所有未完成的更改：

```shell
git add . -u
git commit -m "保存文件以准备刷新行结束符"
```

要更新当前分支上的所有文件以反映新配置，请运行以下命令：

```shell
git add --renormalize .
```

要显示重写并规范化的文件，运行以下命令：

```shell
git status
```

（可选）要提交仓库中任何未完成的更改，请运行以下命令：

```shell
git commit -m "规范化所有行结束符"
```

## 进一步阅读

- [自定义 Git - Git 属性](https://git-scm.com/book/en/v2/Customizing-Git-Git-Attributes)（《Pro Git》书籍中）
- [git-config](https://git-scm.com/docs/git-config)（Git 的手册页中）
- [入门 - 首次 Git 设置](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)（《Pro Git》书籍中）
- [注意你的行结束符](http://adaptivepatchwork.com/2012/03/01/mind-the-end-of-your-line/)，作者 [Tim Clem](https://github.com/tclem)