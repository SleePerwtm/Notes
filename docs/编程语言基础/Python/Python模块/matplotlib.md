‍

---

# 1 正常显示中文代码

```python
import matplotlib.pyplot as plt
```

```python
plt.rcParams["font.sans-serif"] = ["SimSun"]  # 设置默认字体为宋体
plt.rcParams["axes.unicode_minus"] = False  # 用来正常显示负号
```
