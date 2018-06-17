## 区别
1. `v-bind`绑定参数进行给子组件传值时，相当于`react`的`{}`
2. `key`：用处不同
   * vue:管理可复用的元素。vue通常会复用已有元素而不是从头开始渲染。通过不同`key`来告诉`vue`元素应该从头渲染而不是复用。
   * key:用来区分遍历的兄弟元素，在进行兄弟元素至之间的增删改查时能很好的区分对应的元素
3. `v-for`:可以用来遍历对象，并且可以在遍历时直接通过`v-if`进行对遍历内容的条件渲染（更为灵活）


## 知识点记录
1. 翻转字符串：`str.split("").reverse().join("")`

## 疑惑点
1. 当`vue`组件中的`data`并没有通过一个函数返回对象时，`data`中的变量将影响到全部该组件（如何进行演示）
2. 全局注册通用的基础组件（结合`webpack`）
3. 组件传参时参数的命名规则
4. 在绑定`submit`和`keyup`等事件时为什么没有生效
   1. `submit`事件：当表单数据向服务器提交时触发。**`submit`事件的发生对象是`<form>`元素，而不是`button`元素，因为提交的是表单而不是按钮**
   2. 键盘事件是由用户击打键盘触发:  
      ```js
      `keydown`: 按下键盘时触发 
      `keypress`: 按下有值的键时触发（Ctrl,Alt,Shift等键不会触发）。对于有值的键，按下时先触发`keydown`事件，再触发这个事件  
      `keyup`: 送开键盘时触发该事件

      // 用户一直按键不松开连续触发键盘事件,触发的顺序如下：
      1. keydown
      2. keypress
      3. keydown
      4. keypress
      5. ...(重复以上过程)
      6. keyup
      ```
      > 连续按键时`keydown`和`keypress`会连续触发，而`keyup`只是在键盘弹起时触发一次  

      由于是键盘打击时触发，所以事件的绑定对象一般是`input`,`textarea`等与用户有交互的元素
      ```html
      <input v-model="task" type="text">
      <button @click="addList">add</button>
      <!-- 以下事件绑定不会生效 -->
      1. keyup事件应该给input标签绑定，button中并不能进行输入
      <button @keyup="addList">add</button>
      2. 提交的是表单<form>并不是<button>,而这里并没有表单
      <button @submit="addList">add</button>
      ```
    3. 写一个简单版`todos`在提交输入框中的内容时可以通过回车和按钮实现的2种方式：
      ```html
      1. click+keyup
      <div id="app" v-cloak>
        <!-- 如果触发keyup的按键是enter键时触发事件 -->
        <input @keyup.enter="addList" v-model="task" type="text">
        <button @click="addList">add</button>
        <ul>
          <!-- 给循环的内容绑定v-for -->
          <li v-for="(todo,i) in todos" :key="i">{{todo}}</li>
        </ul>
      </div>

      2. submit
      <div id="app" v-cloak>
        <!-- 当然，这里要阻止浏览器的默认事件，防止表单的自动提交刷新页面 -->
        <form @submit.prevent="addList">
          <input v-model="task" type="text">
          <button>add</button>
          <ul>
            <!-- 给循环的内容绑定v-for -->
            <li v-for="(todo,i) in todos" :key="i">{{todo}}</li>
          </ul>
        </form>
      </div>
      ```
