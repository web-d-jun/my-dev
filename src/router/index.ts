import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/vue/info',
    name: 'vue_info',
    component: () => import('@/views/vue_info.vue'),
  },
  {
    path: '/notice_board',
    name: 'notice_board',
    component: () => import('@/views/notice_board.vue')
  }



];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    next();
  }

})

export default router;
