<template>
  <div>
    hello world
    <p :title="msg">
      鼠标悬停几秒钟查看此处动态绑定的提示信息
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: `页面加载于${new Date().toLocaleString()}`
    };
  }
};
</script>

<style>
</style>
