<template>
  <div class="content">
    <div class="back-btn" @click="$router.back()"><- Назад</div>

    <div class="products">
      <div
        v-for="product in getItems"
        :key="product.id"
        class="product"
        @click="$router.push(`/auctions/create/${product.id}`)"
      >
        <div class="product__img">
          <img :src="product.standard_cover" alt="" />
        </div>

        <div class="product__info">
          <div class="product__info-title">{{ product.title }}</div>
          <div class="product__info-category">Категория товара</div>
        </div>

        <div class="product__status">В собственности</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SelectCars",
  computed: {
    ...mapState(["items"]),
    getItems() {
      return this.items.filter((item) => item.type === "car");
    },
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

.back-btn {
  color: var(--primary);
  font-size: rem(16);
  font-weight: 600;
  cursor: pointer;
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
  cursor: pointer;
  position: relative;
  padding: rem(20);
  background: var(--background);
  border-radius: rem(12);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(20);

  &__status {
    color: #5fdfb6;
    font-size: rem(14);
    font-weight: 600;
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
      width: 100%;
      height: 100%;
      min-height: rem(115);
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: inherit;
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

  &__distance {
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
}
</style>
