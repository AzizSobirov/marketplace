import Vue from "vue";
import Vuex from "vuex";

import avatar from "../assets/img/avatar.png";
import product1 from "../assets/img/products/1.png";
import product2 from "../assets/img/products/2.png";
import product3 from "../assets/img/products/3.png";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      avatar: avatar,
      name: "Игрок",
      company: "Source Insensitive",
      wallet: "$ 120,000,000",
      balance: "$ 120,000,000",
    },
    auctions: [
      {
        id: 1,
        street: "Vinewood, Baker, Str 132",
        likes: 100,
        views: 100,
        standard_cover: product3,
        own_cover: product3,
        files: [],
        title: "Audi TT",
        description: "Lorem ipsum dolor",
        price: 1000000,
        weight: 123,
      },
    ],
    favourites: [
      {
        id: 2,
        street: "Vinewood, Baker, Str 132",
        likes: 100,
        views: 100,
        standard_cover: product1,
        own_cover: product3,
        files: [],
        title: "Хранилище данных - 16 ТБ",
        description: "Lorem ipsum dolor",
        price: 1000000,
        count: 1,
        weight: 123,
        time: "168 д. 15 ч.",
      },
    ],
    warehouse: [
      {
        id: 3,
        street: "Vinewood, Baker, Str 132",
        standard_cover: product2,
        own_cover: product2,
        files: [],
        title: "Audi TT",
        description: "Lorem ipsum dolor",
        price: 1000000,
        distance: 10000,
      },
    ],
    announcements: [
      {
        id: 4,
        street: "Vinewood, Baker, Str 132",
        standard_cover: product2,
        own_cover: product2,
        files: [],
        title: "Audi TT",
        description: "Lorem ipsum dolor",
        price: 1000000,
        distance: 10000,
      },
    ],
    history: [],

    items: [
      {
        id: 1,
        street: "Vinewood, Baker, Str 132",
        standard_cover: product3,
        own_cover: product3,
        files: [],
        title: "House",
        description: "Lorem ipsum dolor",
        price: 1000000,
        type: "house",
      },
      {
        id: 2,
        street: "Vinewood, Baker, Str 132",
        standard_cover: product3,
        own_cover: product3,
        files: [],
        title: "House",
        description: "Lorem ipsum dolor",
        price: 1000000,
        type: "house",
      },
      {
        id: 3,
        street: "Vinewood, Baker, Str 132",
        standard_cover: product2,
        own_cover: product2,
        files: [],
        title: "Audi TT",
        description: "Lorem ipsum dolor",
        price: 1000000,
        type: "car",
      },
      {
        id: 4,
        street: "Vinewood, Baker, Str 132",
        standard_cover: product2,
        own_cover: product2,
        files: [],
        title: "Audi TT",
        description: "Lorem ipsum dolor",
        price: 1000000,
        type: "car",
      },
    ],
  },
  getters: {
    isExistsFavourites: (state) => (id) => {
      return state.favourites.some((item) => item.id === id);
    },
  },
  mutations: {
    addProductToAuctions(state, product) {
      state.auctions.push({
        id: Math.floor(Math.random() * 1000),
        street: "Vinewood, Baker, Str 132",
        likes: 100,
        views: 100,
        weight: 123,
        ...product,
      });
      console.log(state.auctions);
    },
    removeProductAuctions(state, product) {
      state.auctions = state.auctions.filter((item) => item.id !== product.id);
    },

    addProductToAnnouncements(state, product) {
      state.announcements.push({
        id: Math.floor(Math.random() * 1000),
        ...product,
      });
    },
    removeProductAnnouncements(state, id) {
      state.announcements = state.announcements.filter(
        (item) => item.id !== id
      );
    },

    toggleProductFavourites(state, product) {
      const exist = state.favourites.find((item) => item.id === product.id);
      if (exist) {
        state.favourites = state.favourites.filter(
          (item) => item.id !== product.id
        );
      } else {
        state.favourites.push({
          ...product,
          count: 1,
          weight: 123,
          time: "168 д. 15 ч.",
        });
      }

      console.log(state.favourites);
    },
  },
  actions: {},
});
