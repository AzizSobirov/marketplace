<template>
  <div class="content">
    <TheFilter
      v-if="favourites.length"
      @search="(value) => (search = value)"
      @changeCategory="(value) => (category = value)"
      @changeSort="(value) => (sort = value)"
    />

    <div v-if="getProducts.length" class="products">
      <div v-for="product in getProducts" :key="product.id" class="product">
        <div class="product__img">
          <img :src="product.standard_cover" alt="" />
        </div>

        <div class="product__info">
          <div class="product__info-category">Категория товара</div>
          <div class="product__info-title">{{ product.title }}</div>
        </div>

        <div class="product__additional">
          <div class="product__count">
            <div class="product__count-icon">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.91602 11.6851L9.51885 16.087M2.91602 11.6851L9.51885 7.28324M2.91602 11.6851V7.28324M9.51885 16.087L16.1217 11.6851M9.51885 16.087V11.6851M16.1217 11.6851L9.51885 7.28324M16.1217 11.6851V7.28324M9.51885 7.28324V2.88135M2.91602 7.28324L9.51885 11.6851M2.91602 7.28324L9.51885 2.88135M9.51885 11.6851L16.1217 7.28324M16.1217 7.28324L9.51885 2.88135"
                  stroke="#DCDCDC"
                  stroke-width="1.4673"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="product__count-value">{{ product.count }} шт.</div>
          </div>

          <div
            class="product__favourite"
            :class="{ active: isExistsFavourites(product.id) }"
            @click="toggleProductFavourites(product)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-heart"
            >
              <path
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
              />
            </svg>
          </div>
        </div>

        <router-link :to="`/favourites/${product.id}`" class="product__btn">
          <span>Выгрузить со склада</span>
        </router-link>

        <div class="product__time">
          <div class="product__time-icon">
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9861 11.4377L9.51885 9.23675V5.5685M2.91602 9.23675C2.91602 10.1038 3.0868 10.9624 3.41863 11.7635C3.75045 12.5646 4.23681 13.2925 4.84994 13.9057C5.46307 14.5188 6.19096 15.0051 6.99205 15.337C7.79315 15.6688 8.65175 15.8396 9.51885 15.8396C10.3859 15.8396 11.2446 15.6688 12.0456 15.337C12.8467 15.0051 13.5746 14.5188 14.1878 13.9057C14.8009 13.2925 15.2873 12.5646 15.6191 11.7635C15.9509 10.9624 16.1217 10.1038 16.1217 9.23675C16.1217 8.36965 15.9509 7.51104 15.6191 6.70995C15.2873 5.90886 14.8009 5.18097 14.1878 4.56784C13.5746 3.95471 12.8467 3.46835 12.0456 3.13652C11.2446 2.8047 10.3859 2.63391 9.51885 2.63391C8.65175 2.63391 7.79315 2.8047 6.99205 3.13652C6.19096 3.46835 5.46307 3.95471 4.84994 4.56784C4.23681 5.18097 3.75045 5.90886 3.41863 6.70995C3.0868 7.51104 2.91602 8.36965 2.91602 9.23675Z"
                stroke="#DCDCDC"
                stroke-width="1.4673"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="product__time-value">
            Время хранения: {{ product.time }}
          </div>
        </div>
      </div>
    </div>

    <TheEmpty v-else />
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import TheFilter from "@/components/Filter.vue";
import TheEmpty from "@/components/Empty.vue";

export default {
  name: "Warehouse",
  components: {
    TheFilter,
    TheEmpty,
  },
  data() {
    return {
      search: null,
      category: null,
      sort: null,
    };
  },
  computed: {
    ...mapState(["favourites"]),
    ...mapGetters(["isExistsFavourites"]),
    getProducts() {
      let filteredProducts = this.favourites;

      // Filter by category
      if (this.category) {
        filteredProducts = filteredProducts.filter(
          (product) => product.category === this.category
        );
      }

      // Filter by search (case-insensitive)
      if (this.search) {
        const searchTerm = this.search.toLowerCase();
        filteredProducts = filteredProducts.filter(
          (product) =>
            product.title.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
      }

      // Sorting
      if (this.sort) {
        if (this.sort === "price-asc") {
          filteredProducts.sort((a, b) => a.price - b.price);
        } else if (this.sort === "price-desc") {
          filteredProducts.sort((a, b) => b.price - a.price);
        } else if (this.sort === "newest") {
          filteredProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
        }
      }

      return filteredProducts;
    },
  },
  methods: {
    ...mapMutations(["toggleProductFavourites"]),
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(40);
}

.products {
  padding-bottom: rem(30);
  padding-right: rem(10);
  height: calc(100vh - rem(210));
  width: calc(100% + rem(16));
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: rem(30);

  &::-webkit-scrollbar {
    width: rem(6);
  }

  &::-webkit-scrollbar-track {
    background: var(--background);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: rem(5);
  }
}

.product {
  padding: rem(20);
  background: var(--background);
  border-radius: rem(12);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(20);

  &__img {
    position: relative;
    padding: rem(10);
    width: 100%;
    min-height: rem(145);
    height: rem(145);
    background: #15171e;
    border-radius: rem(10);
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      min-height: rem(95);
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  &__info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: rem(12);

    &-category {
      font-weight: 500;
      font-size: rem(12);
      color: #5d6374;
    }

    &-title {
      font-weight: 600;
      font-size: rem(14);
      color: #fff;
    }
  }

  &__additional {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: rem(20);
  }

  &__count {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: rem(10);

    &-icon {
      width: rem(18);
      height: rem(18);

      svg {
        width: 100%;
        height: 100%;
      }
    }

    &-value {
      font-weight: 500;
      font-size: rem(12.5);
      color: #5d6374;
    }
  }

  &__favourite {
    width: rem(18);
    height: rem(18);
    cursor: pointer;

    svg {
      width: 100%;
      height: 100%;
    }

    &:hover,
    &.active {
      svg {
        color: #df5f61;

        path {
          fill: #df5f61;
        }
      }
    }
  }

  &__btn {
    width: 100%;
    height: rem(48);
    border: rem(1) solid var(--primary);
    border-radius: rem(8);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition-ease);
    cursor: pointer;

    span {
      font-weight: 500;
      font-size: rem(12.5);
      color: var(--primary);
      transition: var(--transition-ease);
    }

    &:hover {
      background: var(--primary);

      span {
        color: var(--background);
      }
    }
  }

  &__time {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: rem(12);

    &-icon {
      width: rem(18);
      height: rem(18);

      svg {
        width: 100%;
        height: 100%;
      }
    }

    &-value {
      font-weight: 500;
      font-size: rem(12);
      color: #5d6374;
    }
  }
}
</style>
