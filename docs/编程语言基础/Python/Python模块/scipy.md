Scipy 是世界上著名的、开源的高级科学计算库。Scipy 是基于 Numpy 构建的一个集成了多种数学算法和方便的函数的 Python 模块。

官方网站：[https://scipy.org/](https://scipy.org/)

参考资料：

- 来自 CSDN 的[文章](https://blog.csdn.net/qq_41185868/article/details/79682406)

# 特点

- **基本算法**：SciPy 为优化、积分、插值、特征值问题、代数方程、微分方程、统计和许多其他类别的问题提供算法。
- **广泛适用的**：SciPy 提供的算法和数据结构广泛适用于各个领域。
- **基础**：扩展 NumPy，为数组计算提供额外的工具，并提供专门的数据结构，如稀疏矩阵和k维树。
- **性能**：SciPy 包装了用 Fortran、C 和 C++ 等语言编写的高度优化的实现。享受 Python 的灵活性和编译代码的速度。

# 与 NumPy 的关系

SciPy 函数库在 NumPy 库的基础上增加了众多的数学、科学以及工程计算中常用的库函数。例如线性代数、常微分方程数值求解、信号处理、图像处理、稀疏矩阵等等。

Scipy 和 Numpy 联系很密切，建立在 Numpy 之上。Scipy 一般都是操控 Numpy 数组来进行科学计算、统计分析，所以可以说是基于 Numpy 之上了。Scipy 有很多子模块可以应对不同的应用，例如插值运算，优化算法、数学统计等等。SciPy 则是在 NumPy 的基础上构建的更为强大，应用领域也更为广泛的科学计算包。正是出于这个原因，SciPy 需要依赖 NumPy 的支持进行安装和运行。

# 安装

```bash
pip install scipy
```

# 库包含的内容

## `scipy.optimize`

### 线性规划求解 `linprog()`

```python
from scipy.optimize import linprog
result = linprog(c, A_ub, b_ub, A_eq, b_eq, bounds, method)
```