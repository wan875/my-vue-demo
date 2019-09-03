<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{count}}</h2>
    <h3>{{count1}}</h3>
    <button @click="clickAdd">新增</button>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                msg: 'Vuex test!'
            }
        },
        computed: {
            // 获取state值
            count() {
                return this.$store.state.count;
            },
            count1(){
                return this.$store.state.count1;
            }
        },
        methods: {
            clickAdd() {
                //分发action中的add方法
                this.$store.dispatch('add', 1);
                this.$store.dispatch('change',2);
            }
        }
    }
</script>
<style scoped>

</style>
