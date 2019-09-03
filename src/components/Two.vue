<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="button" value="首页数据" @click="clickPost">

    <table width="100%">
    <tr v-for='value in fruList'>
      <td>{{value.value}}</td>
      <td>{{value.name}}</td>
    </tr>
    </table>

  </div>




</template>
<script>
    import {get} from "../axios/http";

    export default {
        name: 'Two',
        data () {
            return {
                msg: 'Hi, I am Two Page!',
                fruList: null
            }
        },
        // 进入页面前调用
        beforeRouteEnter(to, from, next) {
            console.log('进入enter路由钩子')
            next()
        },
        // 离开页面调用
        beforeRouteLeave(to,from, next){
            console.log('进入leave路由钩子')
            next()
        },
        // 页面路由改变时调用
        beforeRouteUpdate(to, from, next) {
            console.log('进入update路由钩子')
            console.log(to.params.id)
            next()
        },
        mounted:function(){
            var self=this;

            get('site/index',{}).then(function (resp) {
                self.fruList=resp.data.nature
                console.log(self.fruList)
            }).catch()
        },
        methods: {
            clickPost() {
                console.log('test')
            }
        }
    }
</script>

<style scoped>
</style>
