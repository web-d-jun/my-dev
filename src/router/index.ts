import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/views/notice_board.vue")
  },
  {
    path: "/page1",
    name: "page",
    component: () => import("@/views/page1/index.vue")
  },
  {
    path: "/chat",
    name: "chatting",
    component: () => import("@/views/chat/index.vue")
  },
  {
    path: "/vue/notice_board",
    name: "notice_board",
    component: () => import("@/views/notice_board.vue")
  },
  {
    path: "/graphql/crud",
    name: "crud",
    component: () => import("@/views/graph_ql/crud.vue")
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404.vue")
  }
  // {
  //   path: '/notice_board',
  //   name: 'notice_board',
  //   component: () => import('@/views/notice_board.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path === "/*") {
    window.location.href = "/404";
  }
  if (to.path === "/") {
    next();
  }
  if (to.path !== from.path) {
    next();
  }
});

export default router;
