<template>
	<div class="container">

		<div class="ban">
			<img width="100%" :src="path+'img/shouye.jpg'" >
		</div>
		<div style="display:none"> {{this.$store.state.readJson}} </div>
		<h3>商品分类</h3>
		<div class="m3" >
			<ul class="row" >
				<li style="width:25% ;text-align:center" v-for="item,index in m3">
					<img style="width:50%;" :src="path+'img/b'+index+'.svg'" >
					<p style="font-size:12px;"> {{item}} </p>
				</li>
			</ul>
		</div>
<!-- =============================== -->
    <div class="swiper-container" id="swiper-container2" style="">
        <div class="swiper-wrapper">
            <div class="swiper-slide active-slider" style="background: #beffbe;"><img width="60%" :src="path+'img/01.png'" ></div>
            <div class="swiper-slide" style="background: #e1f4f4;"><img width="60%" :src="path+'img/02.png'" ></div>
            <div class="swiper-slide" style="background: #d5ffd4;"><img width="60%" :src="path+'img/03.png'" ></div>
            <div class="swiper-slide" style="background: #ddebff;"><img width="60%" :src="path+'img/04.png'" ></div>
            <div class="swiper-slide" style="background: #e1f9e5;"><img width="60%" :src="path+'img/05.png'" ></div>
            <div class="swiper-slide" style="background: #deff82;"><img width="60%" :src="path+'img/06.png'" ></div>
            <div class="swiper-slide" style="background: #bdf9d8;"><img width="60%" :src="path+'img/07.png'" ></div>
            <div class="swiper-slide" style="background: #f5faff;"><img width="60%" :src="path+'img/08.png'" ></div>
        </div>
	</div>
<!-- =============================== -->
		<div class="m0">
			<h3>今日特价</h3>
			<ul class="row">
				<li style="width:50%" v-for="item,index in arr0.slice(0,4)" :key="index" :style="'background-image:url('+path+item.img+')'">
					<p> {{item.name}} </p>
					<p> ￥{{item.price}} </p>
				</li>
			</ul>
		</div>
		<div>
			<h3>高端精品</h3>
			<ul class="row">
				<li style="width:50%;text-align:center;" @click="ck('精品',index)" v-for="item,index in arr1.slice(0,4)" :key="index">
					<img style="width:60%;" :src="path+item.img" >
					<p> {{item.name}} </p>
				</li>
			</ul>
		</div>
		<div class="m0">
			<h3>日常百货</h3>
				<ul class="row">
					<li style="width:50%" v-for="item,index in arr2.slice(0,12)" :key="index" :style="'background-image:url('+path+item.img+')'">
						<p> {{item.name}} </p>
						<p> ￥{{item.price}} </p>
					</li>
				</ul>
		</div>
		
	</div>
</template>
<script>
	import Swiper from 'swiper';
	import 'swiper/dist/css/swiper.css'
	export default{
		data(){
			return {
				type1:'*',
				path:this.$store.state.path,
				m3:['零食','水果','蔬菜','熟食','箱包','裤子','上衣','服饰'],
				arr0:[],
				arr1:[],
        arr2:[],
			arr:[],
			update:0
			}
		},
		mounted(){//渲染完成
			setTimeout(this.myswip2,10);

		},
		methods:{
			ck(type,i){
				this.$router.push({
				path:'/detal',
				query:{type1:type,id:i}
			})
			},
			read(){
							//  获取数据
			if(localStorage.list && this.update==0){
				this.update=1;
			let arr=JSON.parse(localStorage.list);
			// 特惠模块
			this.arr0=arr.filter((item,index)=>{
					return item.type1=='特惠';
				})
			// 精品模块、
			this.arr1=arr.filter((item,index)=>{
					return item.type1=='精品';
				})
        this.arr2=arr.filter((item,index)=>{
        		return item.type1=='日常';
        	})
			}
			},
			myswip2(){
			var mySwiper2 = new Swiper('#swiper-container2', {
            watchSlidesProgress: true,
            watchSlidesVisibility: true,
            slidesPerView: 3,
            loop:true,
            autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },

        })
			}
		},
		created(){
			console.log("----");
			this.$store.state.a="首页"
			this.read();
		},
		updated(){
			console.log("0000000",localStorage.list)
			this.read();

		}
	}
</script>
<style scoped lang="less">
/* less 可模仿div结构，写标签的嵌套 */
.m0{
	.row{
		li{
			margin:2% 0;/*上下的间距2% 左右为零*/
			background:url('http://127.0.0.1:8848/img/c1.svg') no-repeat 80% 0;
			/*背景图宽*/
			background-size:18vw;
			p:nth-child(2){color:#f10;font:900 14px/200% "";}
		}
	}
}
/*===========*/
.container{
	// padding:0 2%;
	text-align:left;
h3{
	font:900 15px/200% "";color:#939;

}
}
#swiper-container2{text-align:center;margin:2% 0;}
</style>
