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
        path: "favourites",
        name: "favourites",
        meta: {
          title: "Склад хранения",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
        },
        component: () => import("../views/Favourites/index.vue"),
      },
      {
        path: "favourites/:id",
        name: "favourites-id",
        meta: {
          title: "Склад хранения",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
        },
        component: () => import("../views/Favourites/[id].vue"),
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
        path: "announcements",
        name: "announcements",
        meta: {
          title: "Мои объявления",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
        },
        component: () => import("../views/Announcements/index.vue"),
      },
      {
        path: "announcements/create",
        name: "announcements-create",
        meta: {
          title: "Опубликовать объявление",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
        },
        component: () => import("../views/Announcements/create.vue"),
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
        path: "auctions/create",
        name: "auctions-create",
        meta: {
          title: "Аукционы",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
        },
        component: () => import("../views/Auctions/create.vue"),
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
        path: "select",
        name: "select",
        meta: {
          title: "Аукционы",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
        },
        component: () => import("../views/Select.vue"),
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
