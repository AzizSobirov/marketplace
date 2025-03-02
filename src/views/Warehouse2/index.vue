<template>
  <div class="content">
    <TheFilter
      @search="searchProducts"
      @changeCategory="changeCategory"
      @changeSort="changeSort"
    />

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

        <div class="product__additional">
          <div class="product__distance">
            <div class="product__distance-icon">
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.9397 10.5797L10.0664 1.87967H13.5056C13.6287 1.8831 13.7483 1.82712 13.8399 1.72312C13.9316 1.61912 13.9884 1.47491 13.999 1.31981C14.0033 1.23779 13.9942 1.15553 13.9723 1.07814C13.9504 1.00075 13.9161 0.92987 13.8716 0.869916C13.8271 0.809961 13.7734 0.762209 13.7137 0.729623C13.654 0.697038 13.5896 0.680317 13.5246 0.680497H1.20687C1.08424 0.678032 0.96544 0.734442 0.87443 0.838347C0.78342 0.942252 0.726975 1.08592 0.716483 1.24036C0.712174 1.32238 0.721253 1.40464 0.743156 1.48203C0.765059 1.55942 0.799318 1.6303 0.843804 1.69025C0.888291 1.75021 0.942055 1.79796 1.00176 1.83055C1.06146 1.86313 1.12583 1.87985 1.19086 1.87967H4.64904L0.775779 10.5797C0.726059 10.6914 0.705968 10.8203 0.718454 10.9475C0.73094 11.0747 0.775345 11.1935 0.845157 11.2864C0.89136 11.3464 0.946723 11.3939 1.00788 11.4259C1.06904 11.458 1.13472 11.4741 1.20094 11.4731H6.64616C6.70907 11.4731 6.76939 11.4415 6.81388 11.3853C6.85836 11.329 6.88335 11.2528 6.88335 11.1733V9.69454C6.8817 9.53981 6.92646 9.39002 7.00864 9.27531C7.09082 9.16059 7.20431 9.08946 7.32629 9.07622C7.39118 9.07077 7.45626 9.08225 7.51749 9.10993C7.57873 9.13762 7.6348 9.18092 7.68223 9.23715C7.72967 9.29337 7.76745 9.36133 7.79323 9.43679C7.81901 9.51225 7.83224 9.59361 7.83209 9.6758V11.1748C7.83209 11.2543 7.85708 11.3305 7.90156 11.3868C7.94605 11.443 8.00638 11.4746 8.06928 11.4746H13.5109C13.5772 11.4756 13.6428 11.4595 13.704 11.4274C13.7652 11.3954 13.8205 11.3479 13.8667 11.2879C13.9374 11.1954 13.9826 11.0766 13.9957 10.949C14.0089 10.8215 13.9892 10.692 13.9397 10.5797ZM7.83209 6.97616C7.83209 7.13518 7.78212 7.28769 7.69315 7.40014C7.60419 7.51258 7.48353 7.57575 7.35772 7.57575C7.23191 7.57575 7.11125 7.51258 7.02229 7.40014C6.93332 7.28769 6.88335 7.13518 6.88335 6.97616V5.77699C6.88335 5.61797 6.93332 5.46546 7.02229 5.35302C7.11125 5.24057 7.23191 5.1774 7.35772 5.1774C7.48353 5.1774 7.60419 5.24057 7.69315 5.35302C7.78212 5.46546 7.83209 5.61797 7.83209 5.77699V6.97616ZM7.83209 3.07885C7.83209 3.23787 7.78212 3.39037 7.69315 3.50282C7.60419 3.61526 7.48353 3.67843 7.35772 3.67843C7.23191 3.67843 7.11125 3.61526 7.02229 3.50282C6.93332 3.39037 6.88335 3.23787 6.88335 3.07885V2.47926C6.88335 2.32024 6.93332 2.16773 7.02229 2.05529C7.11125 1.94284 7.23191 1.87967 7.35772 1.87967C7.48353 1.87967 7.60419 1.94284 7.69315 2.05529C7.78212 2.16773 7.83209 2.32024 7.83209 2.47926V3.07885Z"
                  fill="#DCDCDC"
                />
              </svg>
            </div>
            <div class="product__distance-value">10 000 км.</div>
          </div>

          <div class="product__favourite">
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

        <div class="product__btn"><span>Выгрузить со склада</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import TheFilter from "@/components/Filter.vue";

export default {
  name: "Warehouse",
  components: {
    TheFilter,
  },
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
  height: calc(100vh - rem(210));
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

    &:hover {
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
