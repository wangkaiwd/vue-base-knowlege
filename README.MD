## 区别
1. `v-bind`绑定参数进行给子组件传值时，相当于`react`的`{}`
2. `key`：用处不同
   * vue:管理可复用的元素。vue通常会复用已有元素而不是从头开始渲染。通过不同`key`来告诉`vue`元素应该从头渲染而不是复用。
   * key:用来区分遍历的兄弟元素，在进行兄弟元素至之间的增删改查时能很好的区分对应的元素
## 知识点记录
2. 翻转字符串：`str.split("").reverse().join("")`