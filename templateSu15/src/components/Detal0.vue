<template>
	<div class="container">
		<h3>商品详情</h3>
		<!-- <p>{{path+obj.img}} </p> -->
		<img :src="path+obj.img" >
		<p style="font:900 16px/200% '';"> {{obj.name}} </p>
		<!-- <p> {{this.$store.state.card}} </p> -->
		<p><button @click="add()">加入购物车</button></p>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				path:this.$store.state.path,
				obj:{}
			}
		},
		methods:{
			add(){
				this.obj.num=1;
				let card=this.$store.state.card;

				// 去重
				let filter=card.filter((item,index)=>{
					return item.id==this.obj.id;
				})
				if(filter.length==0){card.push(this.obj)}
				// 更新数组状态
				this.$store.commit('card',card)
			}
		},
		created(){
			this.$store.state.a="商品详情0";
			this.obj=JSON.parse(this.$route.query.msg);
		}
	}
</script>
<style>

</style>
