<template>
  <div class="content">
    <div class="wrapper">
      <div class="col">
        <div class="group">
          <div class="item">
            <div class="subtitle">Стандартная обложка</div>
            <FileUpload @change="fileChange" />
          </div>
          <div class="item">
            <div class="subtitle">Собственная обложка</div>
            <FileUpload @change="fileChange" />
          </div>
        </div>

        <div class="item">
          <div class="subtitle">Загруженные фотографии</div>
          <div class="files">
            <FileUpload size="sm" @change="fileChange" />
            <FileUpload size="sm" @change="fileChange" />
            <FileUpload size="sm" @change="fileChange" />
            <FileUpload size="sm" @change="fileChange" />
            <FileUpload size="sm" @change="fileChange" />
          </div>
        </div>

        <div class="item">
          <div class="title">Заголовок объявления</div>

          <div class="input">
            <input type="text" placeholder="Введите текст..." />
          </div>
        </div>

        <div class="item">
          <div class="title">Описание</div>
          <div class="textarea">
            <textarea placeholder="Введите текст..."></textarea>
          </div>
        </div>

        <div class="item">
          <div class="title">Стоимость продажи</div>

          <div class="input">
            <input type="text" placeholder="Введите текст..." />
            <span>Мин. стоимость по рынку: $ 5,000,000</span>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="title">Предпросмотр объявления</div>

        <div class="product">
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

          <div class="product__img">
            <img src="@/assets/img/products/3.png" alt="" />
          </div>

          <div class="product__info">
            <div class="product__info-category">Категория товара</div>
            <div class="product__info-title">Хранилище данных - 16 ТБ</div>
          </div>

          <div class="product__info">
            <div class="product__info-category">
              На этом жестком диске хранятся зашифрованные данные, которые Вы
              можете передать или продать
            </div>
          </div>

          <div class="product__additional">
            <div class="product__distance">
              <div class="product__distance-icon">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.55859 12.8128L9.92293 17.7223M2.55859 12.8128L9.92293 7.90321M2.55859 12.8128V7.90321M9.92293 17.7223L17.2873 12.8128M9.92293 17.7223V12.8128M17.2873 12.8128L9.92293 7.90321M17.2873 12.8128V7.90321M9.92293 7.90321V2.99365M2.55859 7.90321L9.92293 12.8128M2.55859 7.90321L9.92293 2.99365M9.92293 12.8128L17.2873 7.90321M17.2873 7.90321L9.92293 2.99365"
                    stroke="#5D6374"
                    stroke-width="1.63652"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="product__distance-value">123 123 шт.</div>
            </div>
            <div class="product__weight">
              <div class="product__weight-icon">
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.51482 4.72908C7.51482 5.35448 7.76326 5.95426 8.20548 6.39649C8.64771 6.83871 9.24749 7.08715 9.87289 7.08715C10.4983 7.08715 11.0981 6.83871 11.5403 6.39649C11.9825 5.95426 12.231 5.35448 12.231 4.72908C12.231 4.10368 11.9825 3.50389 11.5403 3.06167C11.0981 2.61944 10.4983 2.371 9.87289 2.371C9.24749 2.371 8.64771 2.61944 8.20548 3.06167C7.76326 3.50389 7.51482 4.10368 7.51482 4.72908Z"
                    stroke="#5D6374"
                    stroke-width="1.57205"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.8131 7.08715H13.9327C14.1168 7.08712 14.2951 7.1517 14.4364 7.26963C14.5778 7.38757 14.6732 7.55137 14.7062 7.73247L15.9929 14.8067C16.0135 14.92 16.009 15.0364 15.9796 15.1478C15.9503 15.2591 15.8968 15.3626 15.823 15.451C15.7493 15.5395 15.6569 15.6106 15.5526 15.6594C15.4483 15.7082 15.3346 15.7334 15.2195 15.7334H4.52638C4.41123 15.7334 4.29748 15.7082 4.19318 15.6594C4.08888 15.6106 3.99658 15.5395 3.9228 15.451C3.84901 15.3626 3.79555 15.2591 3.7662 15.1478C3.73685 15.0364 3.73232 14.92 3.75293 14.8067L5.03965 7.73247C5.0726 7.55137 5.16807 7.38757 5.30942 7.26963C5.45076 7.1517 5.62902 7.08712 5.8131 7.08715Z"
                    stroke="#5D6374"
                    stroke-width="1.57205"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="product__distance-value">123 кг.</div>
            </div>
          </div>

          <div class="product__price">
            <div class="product__price-title">Цена от:</div>
            <div class="product__price-value">
              <div class="product__price-icon">
                <svg
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.2304 7.05006C13.0739 6.60614 12.7882 6.2192 12.41 5.93904C12.0318 5.65888 11.5784 5.49831 11.1081 5.47801H7.96403C7.33863 5.47801 6.73885 5.72645 6.29662 6.16867C5.8544 6.6109 5.60596 7.21068 5.60596 7.83608C5.60596 8.46148 5.8544 9.06127 6.29662 9.50349C6.73885 9.94571 7.33863 10.1942 7.96403 10.1942H11.1081C11.7335 10.1942 12.3333 10.4426 12.7755 10.8848C13.2178 11.327 13.4662 11.9268 13.4662 12.5522C13.4662 13.1776 13.2178 13.7774 12.7755 14.2196C12.3333 14.6619 11.7335 14.9103 11.1081 14.9103H7.96403C7.49379 14.89 7.04038 14.7294 6.66216 14.4493C6.28394 14.1691 5.99822 13.7822 5.84176 13.3383M9.53608 3.11993V5.47801M9.53608 14.9103V17.2684"
                    stroke="#5D6374"
                    stroke-width="1.57205"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <span>200 300 3333 333</span>
            </div>
          </div>

          <div class="product__btn"><span>Выгрузить со склада</span></div>
        </div>

        <div class="details">
          <div class="details__warn">
            <div class="details__warn-title">
              <div class="details__warn-icon">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4225 8.65613H11.4319M10.4792 11.4858H11.4225V15.2587H12.3657"
                    stroke="white"
                    stroke-width="1.88646"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <span>Информация</span>
            </div>
            <p class="details__warn-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div class="details__btn">
            <div class="details__btn-icon">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.22375 3.01141V10.7822M3.33838 6.89679H11.1091"
                  stroke="currentColor"
                  stroke-width="1.11011"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <span>Опубликовать объявление</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FileUpload from "@/components/FileUpload.vue";

export default {
  name: "CreateWarehouse",
  components: { FileUpload },
  data() {
    return {};
  },
  methods: {
    fileChange(file) {
      console.log(file);
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.content {
  padding-bottom: rem(30);
  min-height: calc(100vh - rem(120));
  overflow: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(40);

  &::-webkit-scrollbar {
    width: 0;
  }
}

.wrapper {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: rem(60);
}

.col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(26);

  &:nth-child(1) {
    width: rem(800);
  }
  &:nth-child(2) {
    width: rem(460);
    gap: rem(20);
  }
}

.title {
  font-weight: 700;
  font-size: rem(18);
  color: #fff;
}

.subtitle {
  font-weight: 500;
  font-size: rem(14);
  color: #505564;
}

.group {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: rem(32);

  &.secondary {
    gap: rem(10);
  }
}

.item {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(20);
}

.files {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: rem(14);
}

.textarea {
  padding: rem(25);
  height: rem(145);
  width: 100%;
  background: rgba(5, 6, 9, 0.58);
  border-radius: rem(10);

  textarea {
    width: 100%;
    height: 100%;
    color: #fff;
    font-weight: 500;
    font-size: rem(14);
    resize: none;

    &::placeholder {
      color: #3c3f49;
    }
  }
}

.input {
  padding: rem(12) rem(18) rem(12) rem(25);
  height: rem(64);
  width: 100%;
  background: rgba(5, 6, 9, 0.58);
  border-radius: rem(10);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: rem(20);

  input {
    flex-grow: 1;
    font-weight: 500;
    font-size: rem(14);
    color: #fff;

    &::placeholder {
      color: #3c3f49;
    }
  }

  span {
    padding: rem(12);
    font-weight: 500;
    font-size: rem(14);
    color: #40a6ac;
    background: rgba(95, 216, 223, 0.08);
    border-radius: rem(6);
  }
}

.btn {
  height: rem(45);
  width: 100%;
  background: #12141a;
  border-radius: rem(6);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition-ease);
  cursor: pointer;

  &-primary {
    background: #40a6ac;

    span {
      color: #12141a;
    }
  }

  span {
    font-weight: 500;
    font-size: rem(12);
    color: #505564;
  }
}

.product {
  position: relative;
  padding: rem(20);
  width: 100%;
  background: var(--background);
  border-radius: rem(12);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(25);

  &__favourite {
    position: absolute;
    top: rem(20);
    right: rem(20);
    z-index: 2;
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

  &__img {
    margin-top: rem(-20);
    margin-left: rem(-20);
    position: relative;
    width: calc(100% + rem(40));
    min-height: rem(185);
    height: rem(185);
    background: #15171e;
    border-radius: rem(10) rem(10) 0 0;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
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
    gap: rem(10);

    &-category {
      font-weight: 500;
      font-size: rem(14);
      color: #5d6374;
    }

    &-title {
      font-weight: 600;
      font-size: rem(16);
      color: #fff;
    }

    &-subtitle {
      font-weight: 500;
      font-size: rem(16);
      color: #fff;
    }
  }

  &__additional {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: rem(25);
  }

  &__distance,
  &__weight {
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
      font-size: rem(14);
      color: #fff;
    }
  }

  &__price {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: rem(10);

    &-title {
      font-weight: 500;
      font-size: rem(14);
      color: #5d6374;
    }

    &-value {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: rem(5);
    }

    &-icon {
      width: rem(20);
      height: rem(20);

      svg {
        width: 100%;
        height: 100%;
      }
    }

    span {
      font-weight: 500;
      font-size: rem(14);
      color: #fff;
    }
  }

  &__btn {
    width: 100%;
    height: rem(54);
    border: rem(1) solid var(--primary);
    border-radius: rem(8);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition-ease);
    cursor: pointer;

    span {
      font-weight: 500;
      font-size: rem(14);
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

.details {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(25);

  &__warn {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: rem(10);

    &-title {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: rem(10);

      span {
        font-weight: 500;
        font-size: rem(14);
        line-height: 191%;
        color: #fff;
      }
    }

    &-icon {
      width: rem(22);
      height: rem(22);

      svg {
        width: 100%;
        height: 100%;
      }
    }

    &-desc {
      font-weight: 500;
      font-size: rem(14);
      line-height: 170%;
      color: #5d6374;
    }
  }

  &__btn {
    width: 100%;
    height: rem(48);
    color: #12141a;
    background: var(--primary);
    border-radius: rem(10);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: rem(12);
    transition: var(--transition-ease);
    cursor: pointer;

    &-icon {
      width: rem(14);
      height: rem(14);

      svg {
        width: 100%;
        height: 100%;
      }
    }

    span {
      font-weight: 500;
      font-size: rem(14);
    }
  }
}
</style>
