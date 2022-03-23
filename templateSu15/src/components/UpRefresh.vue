<template>
	<div class="container">
		
  <!-- Swiper -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="tip0"></div>
      <div class="swiper-slide row">

        <li style="width:50%;text-align:center;" @click="ck(item)"  v-for="item,index in arr" :key="index">
					<img style="width:60%;" :src="path+item.img" >
					<p> {{item.name}} </p>
				</li>

      </div>
      <div class="tip" >上拉加载更多</div>
    </div>
    <!-- Add Scroll Bar -->
    <div class="swiper-scrollbar"></div>
  </div>

	</div>
</template>
<script>
	import Swiper from 'swiper';
	import 'swiper/dist/css/swiper.css'
	import axios from 'axios'
	export default{
		data(){
			return {
				cur:12,
				path:this.$store.state.path,
				arr:[],
				swiper:{}
			}
		},
		created(){
			/*if(localStorage.list){
				this.arr=JSON.parse(localStorage.list);
			}*/

			
		},
		mounted(){
			
			axios.get(this.path+'myjson')
				.then((res)=>{
					this.arr=res.data;
					setTimeout(()=>{this.myswip()},0)
				})
		},
		updated(){//数据更新  触发 这个方法  
			setTimeout(()=>{this.swiper.update();},10);
			
		},
		methods:{
		ck(item){
			this.$router.push({path:'/detal0',
			query:{msg:JSON.stringify(item)}});
		},
			myswip(){
				var the=this;//  记录this  vue对象
				
	this.swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      slidesPerView: 'auto',
      freeMode: true,
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      mousewheel: true,
        on:{
    
    // =================================
    touchMove(){//this 指向  
      the.mov();
    },
    touchEnd(){
      the.end();
    },
    // ==================================
  }
    });
			},

	mov(){
    let 滚动距离=this.swiper.translate;//负值
    if(滚动距离>0){
      document.querySelector('.tip0').innerHTML="下拉刷新...";
      this.swiper.down=true;
    }
    // ------------------------
    let 内容高=document.querySelector('.swiper-slide').offsetHeight;
    let 外壳高=document.querySelector('.swiper-container').offsetHeight;
    console.log(内容高-外壳高+滚动距离)
    if(内容高-50<外壳高+(-滚动距离)){
      console.log("===到达极限===");
      // document.querySelector('.tip').innerHTML="正在加载..."
      this.swiper.up=true;
    }
  },
  end(){
    if(this.swiper.down){
      document.querySelector('.tip0').innerHTML="";
      console.log("*********下拉刷新出东西来********");
      this.swiper.down=false;
    }
    // ------------------------
    if(this.swiper.up){
    // 上拉刷出新内容
/*    var rand=Math.floor(Math.random()*10)
    this.arr.push(this.arr[rand],this.arr[rand+1])
    setTimeout(()=>{this.swiper.update();},0)*/
	axios.get('http://127.0.0.1:3000/more')
				.then((res)=>{
					let a0=res.data;
					if(a0.length>0){//后台没有啦
					this.arr=this.arr.concat(res.data);
					document.querySelector('.tip').innerHTML="下拉加载更多"
				}else{
					document.querySelector('.tip').innerHTML="===是有底限的==="
				}
					// setTimeout(()=>{this.swiper.update();},0)
				})

    
    this.swiper.up=false;
    
    }
  } 

		}
	}
</script>
<style scoped>
	
.swiper-wrapper{
	position:absolute;
      width: 100%;
      height: 100%;
}
    .swiper-container {
    	position:absolute;
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      font-size: 18px;
      height: auto;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding: 30px;
    }

</style>