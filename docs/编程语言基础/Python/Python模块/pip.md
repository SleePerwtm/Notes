# 换源

## 临时换源

```bash
pip install <package_name> -i https://pypi.tuna.tsinghua.edu.cn/simple
```

## 永久换源

```bash
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple/
```

## 恢复默认源

```bash
pip config unset global.index-url
```

## 常用镜像源

- 清华源：https://pypi.tuna.tsinghua.edu.cn/simple/
- 阿里源：https://mirrors.aliyun.com/pypi/simple/
- 腾讯源：https://mirrors.cloud.tencent.com/pypi/simple/
- 豆瓣源：https://pypi.doubanio.com/simple/

# 常用命令

## 查看已安装的包

```bash
pip list
```

## 导出包依赖到 requirements.txt

```bash
pip freeze > requirements.txt
```

## 从 requirements.txt 安装依赖

```bash
pip install -r requirements.txt
```
