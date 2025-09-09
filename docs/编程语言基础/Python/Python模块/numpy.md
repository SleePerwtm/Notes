# 与 Matlab 功能相似的函数对应

[matlab中一些函数在numpy中的对应](https://blog.csdn.net/Taylent/article/details/101671713)

[MATLAB与Numpy函数对照表](https://blog.csdn.net/a8039974/article/details/84646219)

[numpy与matlab的数据交换](https://www.zhihu.com/column/p/31763749)

# 库包含的内容

## 1 numpy.random

### 1.1 numpy.random.uniform

```python
np.random.uniform(-1, 1, size=(100, 2))
```

- `size` 前面是生成的*浮点数*的范围区间
- `size = (x, y, z,...)` 是生成的多维数组的大小
- 生成的数据类型是 `numpy.ndarray`
  - 可以用***引用多维数组***的方式来引用数据（如 `a[0][1]`）
  - 独有的方法：使用逗号隔开索引值，如 `a[0, 1]`（等同于 `a[0][1]`）
