<span id="20250218221108-wgdc7w9" style="display: none;"></span>---

用于定义网页的样式  
最基本的一条“规则”：形如“属性：值”  
直接写在元素 style 属性里的样式叫“内联样式”

# 1 属性

## 1.1 `position`​

CSS 中的 `position`​ 属性用于设置元素的定位方式。它有五种主要的取值：

1. **static**（默认值）：

    * 元素使用正常的文档流进行定位。
    * 不会受到 `top`​、`right`​、`bottom`​ 和 `left`​ 属性的影响。

    ```css
    .static-example {
        position: static;
    }
    ```
2. **relative**：

    * 元素相对于其正常位置进行定位。
    * 使用 `top`​、`right`​、`bottom`​ 和 `left`​ 属性时，会相对于自身的原始位置移动。

    ```css
    .relative-example {
        position: relative;
        top: 10px; /* 向下移动10像素 */
    }
    ```
3. **absolute**：

    * 元素相对于最近的已定位祖先（即 `position`​ 不为 `static`​ 的祖先）进行定位。
    * 如果没有已定位的祖先，则相对于 initial containing block（通常是 `<html>`​ 或 `<body>`​）。

    ```css
    .absolute-example {
        position: absolute;
        top: 20px; /* 相对于最近的已定位祖先向下移动20像素 */
        left: 15px; /* 向右移动15像素 */
    }
    ```
4. **fixed**：

    * 元素相对于视口进行定位，即使页面滚动也不会移动。
    * 常用于创建固定导航条等。

    ```css
    .fixed-example {
        position: fixed;
        top: 0; /* 固定在视口的顶部 */
        right: 0; /* 固定在视口的右侧 */
    }
    ```
5. **sticky**：

    * 元素在普通流中表现为 `relative`​，但当页面滚动到达指定位置后变为 `fixed`​。
    * 常用于实现滚动时固定的标题等效果。

    ```css
    .sticky-example {
        position: sticky;
        top: 0; /* 当滚动到达顶部时就固定 */
    }
    ```

使用 `position`​ 属性可以方便地控制元素的布局和视觉效果，根据具体的需求选择合适的定位方式。

‍
