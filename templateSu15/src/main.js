// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// -------------------
import Vuex from 'vuex'
Vue.use(Vuex)
import store from './store/Store'
// -------------------
import axios from 'axios'  //读后台数据
import './style/su.css'

import less from 'less'
Vue.use(less)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
  created(){
  if(localStorage.card){
    console.log("000")
      let card=JSON.parse(localStorage.card);
      this.$store.commit('card',card)
    }
	axios.get(this.$store.state.path+'all')
	.then((res)=>{
    this.$store.state.readJson=1;
		console.log(res.data)
		localStorage.list=JSON.stringify(res.data);
	})
  }
})


// 本项目由苏丛老师整合，擅长全栈开发,QQ:630304481,江苏籍.