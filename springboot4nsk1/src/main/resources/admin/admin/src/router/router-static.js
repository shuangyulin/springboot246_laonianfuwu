import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import jiedanrenwu from '@/views/modules/jiedanrenwu/list'
    import news from '@/views/modules/news/list'
    import yuangong from '@/views/modules/yuangong/list'
    import dianpuxinxi from '@/views/modules/dianpuxinxi/list'
    import shangpinxinxi from '@/views/modules/shangpinxinxi/list'
    import shangjia from '@/views/modules/shangjia/list'
    import renwuwancheng from '@/views/modules/renwuwancheng/list'
    import tongjishangpin from '@/views/modules/tongjishangpin/list'
    import shangpinfenlei from '@/views/modules/shangpinfenlei/list'
    import yonghu from '@/views/modules/yonghu/list'
    import tongjirenwu from '@/views/modules/tongjirenwu/list'
    import renwuxinxi from '@/views/modules/renwuxinxi/list'
    import config from '@/views/modules/config/list'
    import goumaixinxi from '@/views/modules/goumaixinxi/list'
    import zhiyuanhuodong from '@/views/modules/zhiyuanhuodong/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/jiedanrenwu',
        name: '接单任务',
        component: jiedanrenwu
      }
      ,{
	path: '/news',
        name: '科普知识',
        component: news
      }
      ,{
	path: '/yuangong',
        name: '员工',
        component: yuangong
      }
      ,{
	path: '/dianpuxinxi',
        name: '店铺信息',
        component: dianpuxinxi
      }
      ,{
	path: '/shangpinxinxi',
        name: '商品信息',
        component: shangpinxinxi
      }
      ,{
	path: '/shangjia',
        name: '商家',
        component: shangjia
      }
      ,{
	path: '/renwuwancheng',
        name: '任务完成',
        component: renwuwancheng
      }
      ,{
	path: '/tongjishangpin',
        name: '统计商品',
        component: tongjishangpin
      }
      ,{
	path: '/shangpinfenlei',
        name: '商品分类',
        component: shangpinfenlei
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/tongjirenwu',
        name: '统计任务',
        component: tongjirenwu
      }
      ,{
	path: '/renwuxinxi',
        name: '任务信息',
        component: renwuxinxi
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/goumaixinxi',
        name: '购买信息',
        component: goumaixinxi
      }
      ,{
	path: '/zhiyuanhuodong',
        name: '志愿活动',
        component: zhiyuanhuodong
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
