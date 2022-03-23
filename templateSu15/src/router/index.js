import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Tehui from '@/components/Tehui'
import Detal from '@/components/Detal'
import Detal0 from '@/components/Detal0'
import Card from '@/components/Card'
import UpRefresh from '@/components/UpRefresh'
// @这东西代表着到src这个文件夹的路径

// 解决跳转同一路径时报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
// -----------------


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: List
    },
    {
      path: '/tehui',//参数 
      name: 'tehui',
      component: Tehui
    },
    {
      path: '/detal',//参数 
      name: 'detal',
      component: Detal
    },
    {
      path: '/detal0',//参数 
      name: 'detal0',
      component: Detal0
    },
    {
      path: '/card',//参数 
      name: 'card',
      component: Card
    },

    {
      path: '/up',//参数 
      name: 'UpRefresh',
      component: UpRefresh
    }
  ]
})
