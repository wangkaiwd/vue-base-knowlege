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
    console.log("props", this.postTitle);
  }
};
</script>

<style>
</style>
