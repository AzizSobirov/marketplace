import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../views/index.vue"),
    children: [
      {
        path: "",
        name: "empty",
        meta: {
          title: "Склад хранения",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
        },
        component: () => import("../views/Empty.vue"),
      },
      {
        path: "warehouse",
        name: "warehouse",
        meta: {
          title: "Склад хранения",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
        },
        component: () => import("../views/Warehouse/index.vue"),
      },
      {
        path: "warehouse/:id",
        name: "warehouse-id",
        meta: {
          title: "Склад хранения",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
        },
        component: () => import("../views/Warehouse/[id].vue"),
      },
      {
        path: "warehouse2",
        name: "warehouse2",
        meta: {
          title: "Склад хранения",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
        },
        component: () => import("../views/Warehouse2/index.vue"),
      },
      {
        path: "warehouse2/create",
        name: "warehouse2-create",
        meta: {
          title: "Опубликовать объявление",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
        },
        component: () => import("../views/Warehouse2/create.vue"),
      },

      {
        path: "announcements",
        name: "announcements",
        meta: {
          title: "Мои объявления",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
        },
        component: () => import("../views/Announcements.vue"),
      },
      {
        path: "history",
        name: "history",
        meta: {
          title: "История",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
        },
        component: () => import("../views/History.vue"),
      },
      {
        path: "auctions",
        name: "auctions",
        meta: {
          title: "Аукционы",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
        },
        component: () => import("../views/Auctions/index.vue"),
      },
      {
        path: "auctions/:id",
        name: "auctions-info",
        meta: {
          title: "Аукционы",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
        },
        component: () => import("../views/Auctions/[id].vue"),
      },
      {
        path: "auctions/create",
        name: "auctions-create",
        meta: {
          title: "Аукционы",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
        },
        component: () => import("../views/Auctions/create.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
