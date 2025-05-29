/* MathJax 配置，来自 Material for MkDocs 文档 */
window.MathJax = {
    tex: {
        inlineMath: [["\\(", "\\)"]],
        displayMath: [["\\[", "\\]"]],
        processEscapes: true,
        processEnvironments: true
    },
    options: {
        ignoreHtmlClass: ".*|",
        processHtmlClass: "arithmatex",
        renderActions: {
            addMenu: [0, '', '']  // 禁用右键菜单提升性能
        }
    }
};
