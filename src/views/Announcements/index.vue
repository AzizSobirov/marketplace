<template>
  <div class="content">
    <div class="products">
      <div v-for="i in 15" :key="i" class="product">
        <div class="product__status">
          <span>На складе</span>
        </div>

        <div class="product__img">
          <img src="@/assets/img/products/2.png" alt="" />
        </div>

        <div class="product__info">
          <div class="product__info-category">Категория товара</div>
          <div class="product__info-title">Хранилище данных - 16 ТБ</div>
        </div>

        <div class="product__btn"><span>Снять с продажи</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Announcements",
  methods: {
    searchProducts() {},
    changeCategory() {},
    changeSort() {},
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
