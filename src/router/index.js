import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import New from '@/components/New'
import Result from '@/components/Result'
import UserList from '@/components/UserList' //コンポーネントを読み込む

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {  //新しいページ
      path: '/new',
      name: 'New',
      component: New
    },
    { path: '/content/:id',
      name: 'content',
      component: UserList },
    { path: '/result',
      name: 'Result',
      component: Result }
  ]
})
