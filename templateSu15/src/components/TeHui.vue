<template>
	<div class="container">
		<h3>特惠专区</h3>
		<div> 
		<ul>
			<li class="row" v-for="item,index in arr" @click="ck(index)" :key="index">
<div style="width:30%"><img :src="path+item.img" ></div>
<div style="width:40%"><p> {{item.name}} </p>
	<p style="color:#f40;font:900 14px/200% ''"> ￥{{item.price}} </p>
</div>
<div style="width:30%"><p><button >More</button></p></div>
			</li>
		</ul>
		 </div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				type1:'特惠',
				path:this.$store.state.path,
			arr:[]
			}
		},
		methods:{
			ck(i){//路由跳到详情组件  
				this.$router.push({path:'/detal',query:{
					type1:this.type1,id:i
				}})
			}
		},
		created(){
			this.$store.state.a="特惠专区";
			//  获取数据
			if(localStorage.list){
				var arr=JSON.parse(localStorage.list);
				this.arr=arr.filter((item,index)=>{//筛选出特惠商品
					return  item.type1==this.type1
				})
			}
		}
	}
</script>
<style scoped>
button{
	font:10px/160% '';background:#f40;
	color:#fff;border:none;padding:2%;
	border-radius:5px;
}

</style>