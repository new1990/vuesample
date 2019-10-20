import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
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
      path: '/users',
      name: 'UserList',
      component: UserList
    },
    { path: '/content/:id',
      name: 'content',
      component: UserList }
  ]
})
