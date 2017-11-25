<template>
    <div>
        我是Son组件
    </div>
</template>
<script>
    export default {
        created:function () {
            this.hello();
        },
        methods: {
            hello:function(){
                // 给父组件传递数据，flag:数据名，数据的内容{a:2,b:4}
                this.$emit("flag",{a:2,b:4});
            }
        }
    }
</script>
<style>

</style>