<template>
    <div>
        我是Ba
        <button @click="sendToBb()">点击给Bb传参</button>
    </div>
</template>
<script>
    import bus from "./bus";
    export default {
        created: function () {
            this.sendToBb();
        },
        methods: {
            sendToBb:function(){
                // 向Bb传递数据
                bus.$emit("toBb",{name:"小明",age:"18"});
            }
        }
    }
</script>
<style>

</style>