const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

//葱1 南瓜2 白菜3 茄子4 辣椒5
//6衬衣 7T恤 8连衣裙 9裤子 10西装外套 11袜子
//12卷纸 13晾衣架 14汉堡 15糖果  16鸡腿 17药品 18咖啡 19酒水 20蛋糕 21火锅调料 22 牛奶 23包子 24坚果
//25高跟鞋 首饰26
let arr=[
{"id":"20","type0":"夏装","type1":"日常","name":"药品","price":"66.00","img":"img/c17.svg","detal":"3"},
{"id":"23","type0":"冬装","type1":"日常","name":"咖啡","price":"66.00","img":"img/c18.svg","detal":""},
{"id":"9","type0":"夏装","type1":"精品","name":"连衣裙","price":"189.00","img":"img/c8.svg","detal":"2"},
{"id":"29","type0":"夏装","type1":"精品","name":"高跟鞋","price":"65.00","img":"img/c25.svg","detal":"2"},
{"id":"26","type0":"冬装","type1":"日常","name":"酒水","price":"66.00","img":"img/c19.svg","detal":""},
{"id":"7","type0":"夏装","type1":"日常","name":"蛋糕","price":"6.00","img":"img/c20.svg","detal":""},
{"id":"28","type0":"夏装","type1":"日常","name":"火锅调料","price":"66.00","img":"img/c21.svg","detal":"1"},
{"id":"30","type0":"夏装","type1":"日常","name":"牛奶","price":"66.00","img":"img/c22.svg","detal":"3"},
{"id":"33","type0":"冬装","type1":"日常","name":"包子","price":"66.00","img":"img/c23.svg","detal":""},
{"id":"19","type0":"夏装","type1":"精品","name":"西装外套","price":"265.00","img":"img/c10.svg","detal":"2"},
{"id":"31","type0":"冬装","type1":"精品","name":"钻石首饰","price":"55.00","img":"img/c26.svg","detal":""},
{"id":"7","type0":"夏装","type1":"日常","name":"坚果","price":"6.00","img":"img/c24.svg","detal":""},
{"id":"10","type0":"夏装","type1":"日常","name":"卷纸","price":"66.00","img":"img/c12.svg","detal":"3"},
{"id":"13","type0":"冬装","type1":"日常","name":"晾衣架","price":"66.00","img":"img/c13.svg","detal":""},
{"id":"16","type0":"冬装","type1":"日常","name":"汉堡","price":"66.00","img":"img/c14.svg","detal":""},
{"id":"7","type0":"夏装","type1":"日常","name":"糖果","price":"6.00","img":"img/c15.svg","detal":""},
{"id":"18","type0":"夏装","type1":"日常","name":"鸡腿","price":"66.00","img":"img/c16.svg","detal":"1"},
{"id":"3","type0":"夏装","type1":"特惠","name":"白菜/500g","price":"2.50","img":"img/c3.svg","detal":"3"},
{"id":"0","type0":"夏装","type1":"特惠","name":"葱/500g","price":"1.60","img":"img/c1.svg","detal":"1"},
{"id":"6","type0":"冬装","type1":"特惠","name":"辣椒/500g","price":"9.00","img":"img/c5.svg","detal":""},
{"id":"7","type0":"夏装","type1":"特惠","name":"南瓜/500g","price":"6.00","img":"img/c2.svg","detal":""},
{"id":"8","type0":"夏装","type1":"特惠","name":"茄子/500g","price":"5.00","img":"img/c4.svg","detal":"1"},
{"id":"11","type0":"冬装","type1":"特惠","name":"裤子","price":"89.00","img":"img/c9.svg","detal":""},
{"id":"1","type0":"夏装","type1":"特惠","name":"衬衣","price":"85.00","img":"img/c6.svg","detal":"2"},
{"id":"5","type0":"冬装","type1":"特惠","name":"T恤","price":"55.00","img":"img/c7.svg","detal":""},
{"id":"21","type0":"冬装","type1":"特惠","name":"袜子","price":"15.00","img":"img/c12.svg","detal":""},
]
let cur=0;
// 路由  向前台返回  json数据  所有
router.get('/all', async (ctx, next) => {
  ctx.body = JSON.stringify(arr);
})
// 路由  向前台返回  json数据  18条
router.get('/myjson', async (ctx, next) => {
	cur=18
  ctx.body = JSON.stringify(arr.slice(0,cur));
})
// 路由  向前台返回 json数据  两条  
router.get('/more', async (ctx, next) => {
  ctx.body = JSON.stringify(arr.slice(cur,cur+=2));
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
