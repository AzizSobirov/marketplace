<template>
  <div class="content">
    <TheFilter
      v-if="announcements.length"
      @search="(value) => (search = value)"
      @changeCategory="(value) => (category = value)"
      @changeSort="(value) => (sort = value)"
    />

    <div v-if="getProducts.length" class="products">
      <div v-for="product in getProducts" :key="product.id" class="product">
        <div class="product__status">
          <span>На складе</span>
        </div>

        <div class="product__img">
          <img :src="product.standard_cover" alt="" />
        </div>

        <div class="product__info">
          <div class="product__info-category">Категория товара</div>
          <div class="product__info-title">{{ product.title }}</div>
        </div>

        <div
          class="product__btn"
          @click="removeProductAnnouncements(product.id)"
        >
          <span>Снять с продажи</span>
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
  name: "Announcements",
  components: {
    TheFilter,
    TheEmpty,
  },
  data() {
    return {
      category: null,
      search: null,
      sort: null,
    };
  },
  computed: {
    ...mapState(["announcements"]),
    getProducts() {
      let filteredProducts = this.announcements;

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
    ...mapMutations(["removeProductAnnouncements"]),
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
  height: calc(100vh - rem(120));
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
  position: relative;
  padding: rem(20);
  background: var(--background);
  border-radius: rem(12);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(20);

  &__status {
    position: absolute;
    top: rem(10);
    left: rem(10);
    z-index: 2;
    padding: rem(3) rem(10) rem(6);
    background: #1b1e26;
    border-radius: rem(6);

    span {
      font-weight: 500;
      font-size: rem(10);
      color: #757c8f;
      line-height: 1;
    }
  }

  &__img {
    margin-top: rem(-20);
    margin-left: rem(-20);
    position: relative;
    width: calc(100% + rem(40));
    min-height: rem(164);
    height: rem(164);
    background: #15171e;
    border-radius: rem(10) rem(10) 0 0;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      min-height: rem(115);
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

  &__btn {
    width: 100%;
    height: rem(48);
    border: rem(1) solid #df5f61;
    border-radius: rem(8);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition-ease);
    cursor: pointer;

    span {
      font-weight: 500;
      font-size: rem(12.5);
      color: #df5f61;
      transition: var(--transition-ease);
    }

    &:hover {
      background: #df5f61;

      span {
        color: #fff;
      }
    }
  }
}
</style>
