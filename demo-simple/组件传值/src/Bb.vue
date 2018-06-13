<template>
    <div>
        我是Bb
        <p>{{msg}}</p>
    </div>
</template>
<script>
import bus from "./bus";

export default {
    data: function () {
        return {
            msg: ""
        }
    },
    created: function () {
        console.log(11);
        // 接收Bb传递来的数据
        bus.$on("toBb", function (data) {
            console.log(data);//组件传来的数据
        });
    }
}
    // bus传值可以在任意俩个组件之间传值，并不一定只能在兄弟元素之间传值
    /**
     * 兄弟组件传值：
     *      通过定义一个公共的Vue实例bus
     *      利用$emit将信息绑定到bus的属性上
     *      在兄弟组件中利用$on获取bus上的属性
     */
</script>
<style>

</style>