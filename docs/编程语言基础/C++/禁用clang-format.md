C++ 语法的格式化由 `clang-format` 工具完成，该工具的配置已检查到项目中的 `.clang-format` 文件中。这些设置旨在匹配以下列出的格式化规范。你可以使用 `clang-format` 命令行工具对文件进行“格式化”，也可以通过启用 Visual Studio 的自动 clang 格式化功能，在每次编辑或保存文件时自动格式化。所有文件都已按此方式格式化，GitHub 工作流 `clang-format` 也会确保所有拉取请求正确格式化，因此应保持整洁。显然，这不包括 `Eigen` 或 `rpclib` 等外部代码。

如果你在 `clang-format` 中发现 bug，可以通过以下注释对来禁用特定代码块的 clang 格式化：

```cpp
// clang-format off
...
// clang-format on
```