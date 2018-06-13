<template>
    <div>
        我是father的第二个孩子
        <!-- hello App,I am your father!! -->
        <h3 @click='viewData'>{{toSon}}</h3>
    </div>
</template>
<script>
    export default {
        props:['toSon'],
        methods: {
            viewData () {
                console.log(this.toSon);// hello App,I am your father!!
            }
        }
    }
</script>
<style>

</style>