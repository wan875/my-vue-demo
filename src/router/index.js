import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import One from "../components/One";
import Two from "../components/Two";
import Home from "../components/Home";
import Count from "../components/Count";
import Form from "../components/Form";

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[
        {
          path: 'one',
          component: One,
          //单独路由钩子
          beforeEnter: (to, from, next) => {
            console.log('one进入前执行');
            next();
          }
        },
        {
          path: 'two',
          component: Two
        },
        {
          path: 'count',
          component: Count
        },
        {
          path: 'form',
          component: Form
        }
      ]
    },
    {
      path: '*',
      component: () => import('@/components/404')
    }
  ]
})

// 全局路由拦截-进入页面前执行
router.beforeEach((to, from, next) => {
  // 这里可以加入全局登陆判断
  console.log('此处判断是否登录')
  // 继续执行
  next();
});

// 全局后置钩子-常用于结束动画等
router.afterEach(() => {
  //不接受next
});

export default router;
