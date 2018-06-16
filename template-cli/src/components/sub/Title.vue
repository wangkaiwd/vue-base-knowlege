<template>
  <div class="blog-post">
    <h2>{{postTitle.title}}</h2>
    <p>{{postTitle.id}}</p>
    <!-- 通过组件传值的方式实现让父组件的postFontSize发生变化,react实现方式 -->
    <button @click="() => toBig(0.5)">large</button>
    <!-- 通过自定义事件实现相同的功能 -->
    <button @click="$emit('textTobig', 1)">_self large</button>
  </div>
</template>

<script>
export default {
  props: ["postTitle", "toBig"],
  created() {
    /**
     * 单向数据流：单向下行绑定
     * 每次父级组件发生更新时，自组件中所有的prop刷新为最新的值，这意味着你不应该在一个子组件内部改变prop
     *  1. 这个prop用来传递一个初始值；这个自组件接下来希望将其作为一个本地的prop数据来使用
     *     这种情况最好定义一个本地的data属性并将这个prop作为其初始值
     *      props:['initialCounter'],
     *      data() {
     *        return {
     *          counter:this.initialCounter,
     *       }
     *     }
     *  2. 这个prop以一个原始值传入且需要进行转换。在这种情况下，最好使用这个prop的值来定义一个计算属性
     */
    // this.postTitle = [
    //   { id: 1, title: "My journey with Vue of self" },
    //   { id: 2, title: "Blogging with Vue" },
    //   { id: 3, title: "Why Vue is so fun" }
    // ];
  }
};
</script>

<style>
</style>
