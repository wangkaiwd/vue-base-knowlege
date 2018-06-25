<template>
  <div>
    hello world
    <div
      class="blog-font"
      :style="{fontSize:postFontSize+'em'}"
    >
      <!-- 在自定义组件中通过v-on来监听子组件中通过$emit()定义的方法 -->
      <Title
        v-for="post in posts"
        :postTitle="post"
        :key="post.id"
        :toBig="toBig"
        @textTobig="postFontSize += $event"
      >
      </Title>
    </div>
  </div>
</template>

<script>
import Title from "./sub/Title.vue";
export default {
  data() {
    return {
      posts: [
        { id: 1, title: "My journey with Vue" },
        { id: 2, title: "Blogging with Vue" },
        { id: 3, title: "Why Vue is so fun" }
      ],
      postFontSize: 1
    };
  },
  components: {
    Title
  },
  methods: {
    toBig(num) {
      this.postFontSize += num;
    },
    // 如果绑定的是一个函数的话，怎么访问$event
    textTobig() {}
  }
};
</script>

<style>
</style>
