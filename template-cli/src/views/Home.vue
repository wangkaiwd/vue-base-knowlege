<template>
  <div class="home">
    <!--相当于for...in循环一个对象-->
    <h3 v-for="(val, key ,index) in person">{{`${key}:${val}-${index}`}}</h3>
    {{pageKey.pageindex}}
  </div>
</template>

<script>
  import page from '@/mixins/page'

  export default {
    name: 'home',
    data () {
      return {
        pageKey: {
          pageindex: 10,
        },
        person: {
          dead: false,
          name: '小花花',
          age: 18,
          skill: '放毒'
        }
      }
    },
    mixins: [page],
    // 如果混入包含一个钩子，而创建本身也有一个，俩个函数将被调用
    // Mixin钩子按照传入顺序一次调用，并在调用组件自身的钩子之前被调用
    mounted () {
      console.log('parent mounted')
      this.refresh()
      this.loadMore()
    },
    methods: {
      loadMore () {
        console.log('parent loadMore')
      }
    }
  }
  /**
   * 选项合并
   *  1. 和组件data中的数据发生冲突时以组件数据优先，数据对象在内部会进行浅合并（一层属性深度）
   *  2. 同名钩子函数会混合为一个数组，都将被调用。混入对象(page)的钩子将在组件自身钩子之前调用
   *  3. 值为对象的属性，例如methods,components和directives,将被混合为同一个对象
   *     俩个对象键名冲突时，取组件对象的键值对
   */
</script>
