import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../screens/home/homeScreen')
  },
  {
    path: '/channel/:username',
    name: 'channel',
    component: () => import('../screens/channel/channelScreen')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../screens/admin/adminScreen'),
    // children: [
    //   {
    //     path: 'logs',
    //     com
    //   }
    // ]
  },
  {
    path: '*',
    component: () => import('../screens/notfound/NotFound')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
