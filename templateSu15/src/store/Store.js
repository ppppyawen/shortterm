import Vue  from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	// =================================
	state:{
		a:'苏老师创建的模板',
		path:'http://127.0.0.1:3000/',
		readJson:0,
		count:6,
		arr:[3,6,9],
		card:[]
	},
	// =================================
	  getters: {               // state的计算属性(通过store.getters.lastName访问)    
	    lastName: state => {} 
	  },
	  mutations: {         // mutations改变store的状态（通过store.commit(‘SET_NAME‘, ‘qian‘)提交修改）
	    
	    add(state,val){
			state.count++

		},
		add1(state,val){

			state.arr=val
		},
		card(state,arr){
			localStorage.card=JSON.stringify(arr);
			state.card=arr;
		}
	  },
	  actions: {              // actions提交mutations
	    changeName({state, commit}){
	      return commit('SET_NAME','qian')
	    }
	  },
	// =================================
})