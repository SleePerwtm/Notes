---

# 1 numpy.random

## 1.1 numpy.random.uniform

```python
np.random.uniform(-1, 1, size=(100, 2))
```

- `size` 前面是生成的*浮点数*的范围区间
- `size = (x, y, z,...)` 是生成的多维数组的大小
- 生成的数据类型是 `numpy.ndarray`
  - 可以用***引用多维数组***的方式来引用数据（如 `a[0][1]`）
  - 独有的方法：使用逗号隔开索引值，如 `a[0, 1]`（等同于 `a[0][1]`）
