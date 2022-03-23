<template>
	<div class="container">
		<h3 style="font:900 20px/200% '';color:#999">购物车</h3>
		<ul>
<li v-for="item,index in card" class="row every">
<p>{{item.name}}</p>
<p><input  type="number" style="text-align:center;" min="1" :value="item.num" oninput="proNum()"></p>
<p><button @click="del(item.id)">DEL</button></p>
</li>
		</ul>
<div style="width:100%;">总价：$<span ref="zong"></span></div>
	</div>
</template>
<script>
	export default{
data(){
	return {
		card:[]
	}
},
	methods:{
		del(id){
			let card=this.$store.state.card;
			card.forEach((item,index)=>{
				if(id==item.id){
					card.splice(index,1)
				}
			})
			// 更新数组状态

			this.$store.commit('card',card);
			this.card=card=this.$store.state.card;
			this.$refs.zong.innerHTML=this.money();
		},
		money(){
			let card=this.$store.state.card;
			let mn=0;
			card.forEach((item,index)=>{
				mn+=item.price*item.num;
			})
			return mn;
		},
    proNum(){
      this.money();
      this.$refs.zong.innerHTML=this.money();
    	},

	},
	mounted(){
		 this.card=this.$store.state.card;

		this.$refs.zong.innerHTML=this.money();
	}

	}
</script>
<style lang="less" scoped>
.container{padding:3%;}
p:nth-child(1){width:30%;}
p{
	display:block;width:20%;
	}
input,button{box-sizing:border-box;}
input{height:20px;width:36px;}
button{height:20px;width:36px;margin-top:2px;display:block;font:12px/100% '';}
</style>
