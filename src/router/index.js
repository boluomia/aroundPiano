import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import Login from '../views/Login.vue'


Vue.use(VueRouter)

const routes = [
  // {
  //   path:'/login',
  //   name:'login',
  //   component:Login
  // },
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/mylove',
    name: 'mylove',
    component: () => import('../views/MyLove.vue')
  },
  {
    path: '/load',
    name: 'load',
    component: () => import('../views/Load.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/live',
    name: 'live',
    component: () => import('../views/Live.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/all',
    name: 'all',
    component: () => import('../views/All.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/play1',
    name: 'play1',
    component: () => import('@/components/SingleSong.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/radioplay1',
    name: 'radioplay1',
    component: () => import('@/components/SingleVideo.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/radioplay2',
    name: 'radioplay2',
    component: () => import('@/components/SingleVideo.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/radioplay3',
    name: 'radioplay3',
    component: () => import('@/components/SingleVideo.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/radioplay4',
    name: 'radioplay4',
    component: () => import('@/components/SingleVideo.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/radioplay5',
    name: 'radioplay5',
    component: () => import('@/components/SingleVideo.vue'),
    meta: { requiresAuth: true }
  },


  {
    path: '/music',
    name: 'music',
    component: () => import('../views/Music.vue'),
    meta: { requiresAuth: true },
    children: [
      // {
      //   path:'',
      //   redirect:''
      // },
      {
        path: 'musichome',
        component: () => import('@/components/musicHome.vue')
      },
      {
        path: 'collection',
        component: () => import('@/components/Collection.vue')
      },
      {
        path: 'radio',
        component: () => import('@/components/Radio.vue')
      },
      {
        path: 'allsong',
        component: () => import('@/components/AllSong.vue'),
      },
      {
        path: 'song0',
        component: () => import('@/components/Detailone.vue')
      },
      {
        path: 'song1',
        component: () => import('@/components/Detailtwo.vue')
      },
      {
        path: 'song2',
        component: () => import('@/components/DetailVideo.vue')
      },
      {
        path: 'song3',
        component: () => import('@/components/DetailVideo.vue')
      },
      {
        path: 'song4',
        component: () => import('@/components/DetailVideo.vue')
      },
      {
        path: 'song5',
        component: () => import('@/components/Detailone.vue')
      },
      {
        path: 'song6',
        component: () => import('@/components/Detailseven.vue')
      },
      {
        path: 'song7',
        component: () => import('@/components/DetailVideo.vue')
      },
      {
        path: 'radio1',
        component: () => import('@/components/radioPlay.vue')
      },
      {
        path: 'radio2',
        component: () => import('@/components/radioPlay.vue')
      },
      {
        path: 'radio3',
        component: () => import('@/components/radioPlay.vue')
      },
      {
        path: 'radio4',
        component: () => import('@/components/radioPlay.vue')
      },
      {
        path: 'radio5',
        component: () => import('@/components/radioPlay.vue')
      },
      {
        path: 'radio6',
        component: () => import('@/components/radioPlay.vue')
      },
      {
        path: 'radio7',
        component: () => import('@/components/radioPlay.vue')
      },
      {
        path: 'radio8',
        component: () => import('@/components/radioPlay.vue')
      },
    ]
  },
  {
    path: '/opern',
    name: 'opern',
    component: () => import('../views/Opern.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/video',
    name: 'video',
    component: () => import('../views/Video.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: 'videohome',
        component: () => import('@/components/videoHome.vue')
      },
      {
        path: 'teach',
        component: () => import('@/components/teach.vue')
      },
      {
        path: 'enjoy',
        component: () => import('@/components/enjoy.vue')
      },
      {
        path: 'multiple',
        component: () => import('@/components/multiple.vue')
      },
      {
        path: 'allvideo',
        component: () => import('@/components/AllVideo.vue')
      }
    ]
  },
]

const router = new VueRouter({
  routes
})


router.beforeEach((to, from, next) => {
  // 检查路由是否需要登录权限
  console.log({ to, from })

  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log("从"+from.path+"到"+to.path+"要权限")
    // 检查用户是否已登录
    if (!isLoggedIn()) {
      console.log("未登录");
      // 如果用户未登录，则重定向到登录页面
      next('/login')
    } else {
      // 用户已登录，继续导航
      console.log("已登录");
      if (to.path === '/login') {
        next('/')
      } else {
        next(true)
      }
    }
  }
  // 不需要登录权限的路由
  else {
    console.log("从"+from.path+"到"+to.path+"不要权限")
    if (from.path !== to.path)
      next(true);
  }
}

)

function isLoggedIn() {
  return localStorage.getItem('isLoggedIn') === 'true';
}


export default router
