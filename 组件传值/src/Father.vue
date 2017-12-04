<!--根组件-->
<template>
    <!--有且只有一个根标签-->
    <div>
        <!--v-on:flag（子组件传递的参数名） 自定义事件，接收子组件传来的数据-->
        <!--这里的receiveSonData不写括号-->
        <!--@flag自定义事件（注意，这里的receiveSonData不能加括号）-->
        <Son @flag="receiveSonData"></Son>
        <Ba></Ba>
        <Bb></Bb>
        <App ref='app' :toSon='msg'></App>
        <button @click="viewAppData">App数据</button>
    </div>
</template>

<script>
    import App from './App.vue';
    // 引入子组件
    import Son from "./Son.vue";
    // 引入俩个兄弟组件
    import Ba from "./Ba.vue";
    import Bb from "./Bb.vue";

    export default {
        data () {
            return {
                msg: 'hello App,I am your father!!'
            }
        },
        components: {
            // 子组件名
            Son, // Son:Son es6语法的简写
            // 第一个Son:子组件在父组件里的名字，第二个Son引入时的子组件名字
            Ba,
            Bb,
            App
        },
        methods:{
            receiveSonData:function (data) {
                console.log(data);// {a:2,b:4}
            },
            viewAppData () {
                // 在父组件中可以直接通过this.$refs.app调用子组件的方法和属性
                console.log(this.$refs.app);//这里打印的是子组件的实例对象
            }
        }
    }
    // 父子组件传值：
        /*a.子组件给父组件传值：
            一、收到子组件的内容
                1. 在父组件中引入子组件
                2. 在components中给子组件命名
                3. 将子组件写到父组件的模板中
            二、收到子组件的数据
                1. 子组件定义一个方法，调用this.$emit("数据名"，数据内容)
                2. 子组件执行这个方法
                3. 父组件通过自定义事件，事件名为子组件的数据名，执行事件时传递的参数即为子组件传递的数据
            */

</script>
<style>


</style>

