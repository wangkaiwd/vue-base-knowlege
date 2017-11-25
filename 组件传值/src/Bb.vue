<template>
    <div>
        我是Bb
        <p>{{msg}}</p>
    </div>
</template>
<script>
    import bus from "./bus";
    export default {
        data:function () {
            return {
                msg:""
            }
        },
        created:function () {
            var _this = this;
            // 接收Bb传递来的数据
            bus.$on("toBb",function(data) {
                _this.msg = data;
            });
        }
    }

    /**
     * 兄弟组件传值：
     *      通过定义一个公共的Vue实例bus
     *      利用$emit将信息绑定到bus的属性上
     *      在兄弟组件中利用$on获取bus上的属性
     */
</script>
<style>

</style>