# 临时修改

```bash
pip install <package-name> -i <temporary-mirror-url>
```

例如用*清华源*下载 `pandas`：

```bash
pip install pandas -i https://pypi.tuna.tsinghua.edu.cn/simple
```

# 永久修改

```bash
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

# 恢复默认源

```bash
pip config unset global.index-url
```