import Vue from "vue";
import Father from "./Father.vue";

var vm = new Vue({
    el:"#app",
    render: createElement=>createElement(Father)
});

