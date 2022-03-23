<template>
  <div id="app" >
    <div id="top">{{this.$store.state.a}}</div>
<!-- +++++++ -->
    <div id="btm" :style="'background-image:url('+path+'img/bowen.jpg)'">
    <div class="menu row"  >
<li @click="ck(0,'/')" :class="index==0?'cur':''"><img width="3%" :src="path+'img/home.png'"  /><p>购物车</p></li>
<li><router-link :to="{path:'/tehui'}"><img width="3%" :src="path+'img/money.png'"  /><p>特惠专区</p></router-link></li>
<li @click="ck(3,'/up')" :class="index==3?'cur':''"><img width="3%" :src="path+'img/chi.png'"  /><p>国庆专场</p></li>
<li @click="ck(2,'/card')" :class="index==2?'cur':''"><img width="3%" :src="path+'img/card.png'"  /><p>购物车</p></li>
    </div>
</div>
<!-- +++++++ -->

<div id="container" ><router-view/></div>

    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  data(){
    return {
      a:this.$store.state.a,
      path:this.$store.state.path,
      index:0
    } },
    methods:{
      ck(index,path){
        this.$router.push({path:path});
        this.index=index;
      }
    },
    created(){
      this.$store.state.a="首页";

    }
}
</script>




<style lang="less">
@clr:#69c;
@hei:15.6vw;

// =============================
.menu {
  a:link{text-decoration:none;color:#fff;}
  a:visited{color:#fff;}
  li{
    height:15.6vw;
    width:25%;
      img{width:8vw;}
  p{font:12px/100% "";}
  }

}

// router-link标签自带的默认的样式
 .router-link-active{
   p{color:black;text-shadow:-1px -1px 0  #fff,1px 1px 0  #fff,;}
   }
   // 自定义的新式
.cur{color:orange;}

// =============================
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}
#top{
  width:100%;height:@hei;
  // background:@clr;
  background:-webkit-gradient(linear, 0 0, 0 90%, from(#1dc4cd), to(#dff7ff));
  color:#fff;font:800 18px/60px "";
}
#container{
  width:100%;
  position:fixed;bottom:0;top:@hei;bottom:@hei;
  /*border:5px solid #369;*/
  overflow-x:hidden;
  overflow-y:scroll;
}
#btm{
  box-sizing:border-box;
  padding-top:2%;
  width:100%;height:@hei;
  // background:@clr;
  background-size:20%;
  color:#fff;font:800 16px/60% "";
  position:fixed;bottom:0;
}

</style>
