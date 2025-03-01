<template>
  <div class="content">
    <div class="wrapper">
      <div class="col">
        <div class="title">Информация о товаре</div>

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
            <img src="@/assets/img/products/1.png" alt="" />
          </div>

          <div class="product__info">
            <div class="product__info-category">Категория товара</div>
            <div class="product__info-title">Хранилище данных - 16 ТБ</div>
            <p class="product__info-desc">
              На этом жестком диске хранятся зашифрованные данные, которые Вы
              можете передать или продать
            </p>
          </div>

          <div class="product__additional">
            <div class="product__count">
              <div class="product__count-icon">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.55859 12.9901L9.92293 17.8996M2.55859 12.9901L9.92293 8.08052M2.55859 12.9901V8.08052M9.92293 17.8996L17.2873 12.9901M9.92293 17.8996V12.9901M17.2873 12.9901L9.92293 8.08052M17.2873 12.9901V8.08052M9.92293 8.08052V3.17096M2.55859 8.08052L9.92293 12.9901M2.55859 8.08052L9.92293 3.17096M9.92293 12.9901L17.2873 8.08052M17.2873 8.08052L9.92293 3.17096"
                    stroke="#5D6374"
                    stroke-width="1.63652"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="product__count-value">1 шт.</div>
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
                    d="M8.06243 4.81919C8.06243 5.44459 8.31087 6.04438 8.75309 6.4866C9.19532 6.92883 9.7951 7.17727 10.4205 7.17727C11.0459 7.17727 11.6457 6.92883 12.0879 6.4866C12.5301 6.04438 12.7786 5.44459 12.7786 4.81919C12.7786 4.19379 12.5301 3.59401 12.0879 3.15178C11.6457 2.70956 11.0459 2.46112 10.4205 2.46112C9.7951 2.46112 9.19532 2.70956 8.75309 3.15178C8.31087 3.59401 8.06243 4.19379 8.06243 4.81919Z"
                    stroke="#5D6374"
                    stroke-width="1.57205"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.36071 7.17727H14.4803C14.6644 7.17724 14.8427 7.24182 14.984 7.35975C15.1254 7.47768 15.2208 7.64148 15.2538 7.82259L16.5405 14.8968C16.5611 15.0101 16.5566 15.1265 16.5272 15.2379C16.4979 15.3492 16.4444 15.4528 16.3706 15.5412C16.2969 15.6296 16.2046 15.7007 16.1003 15.7495C15.996 15.7983 15.8822 15.8236 15.7671 15.8235H5.07398C4.95884 15.8236 4.84509 15.7983 4.74079 15.7495C4.63649 15.7007 4.54419 15.6296 4.4704 15.5412C4.39662 15.4528 4.34316 15.3492 4.31381 15.2379C4.28446 15.1265 4.27993 15.0101 4.30054 14.8968L5.58726 7.82259C5.62021 7.64148 5.71568 7.47768 5.85703 7.35975C5.99837 7.24182 6.17662 7.17724 6.36071 7.17727Z"
                    stroke="#5D6374"
                    stroke-width="1.57205"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="product__count-value">123 кг.</div>
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

          <div class="product__btn" @click="modal = true">
            <div class="product__btn-icon">
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
            <span>Добавить лот на продажу</span>
          </div>

          <div class="product__warn">
            <div class="product__warn-title">
              <div class="product__warn-icon">
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
            <p class="product__warn-desc">
              Если предмет отсутствует у вас на вашем складе, Вы можете
              выставить лот на торговую площадку, приобретите этот товар
            </p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="title">Список товара</div>

        <div class="table">
          <div class="table__body">
            <table>
              <thead>
                <tr>
                  <th>№</th>
                  <th>Статич. ID</th>
                  <th>Имя игрока</th>
                  <th>Состояние</th>
                  <th>Количество</th>
                  <th>Стоимость за шт.</th>
                  <th>Таймер</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="i in 15" :key="i">
                  <td>№ {{ i }}</td>
                  <td>#123123</td>
                  <td>
                    <div class="user">
                      <div class="user__avatar">
                        <img src="@/assets/img/avatar.png" alt="" />
                      </div>
                      <div class="user__name">Source Insensitive</div>
                    </div>
                  </td>
                  <td>Отличное (96%)</td>
                  <td>123123</td>
                  <td>$ 5,000,000</td>
                  <td>13 ч. 15 м.</td>
                  <td>
                    <div class="btn"><span>Купить</span></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="title">Медиана цены</div>
        <LineChart :data="chart.data" :options="chart.options" />
      </div>
    </div>

    <transition name="default-transition">
      <div class="modal" v-if="modal">
        <div class="modal__overlay" @click="modal = false"></div>
        <form class="modal__content" @submit.prevent="handleSubmit">
          <div class="modal__close" @click="modal = false">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4.36475L4 12.3647M4 4.36475L12 12.3647"
                stroke="white"
                stroke-opacity="0.2"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div class="modal__title">
            Вы уверены, что хотите приобрести аппартамены <span>№55</span>?
          </div>

          <div class="modal__input">
            <input
              v-model="amount"
              type="number"
              max="120"
              placeholder="Введите значение"
            />

            <Slider
              v-model="amount"
              :max="120"
              @update="(value) => (amount = parseFloat(value))"
            />
          </div>

          <div class="product__warn">
            <div class="product__warn-title">
              <div class="product__warn-icon">
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
            <p class="product__warn-desc">
              Если предмет отсутствует у вас на вашем складе, Вы можете
              выставить лот на торговую площадку, приобретите этот товар
            </p>
          </div>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
import LineChart from "@/components/LineChart.vue";
import { Slider } from "@/components/ui";

export default {
  name: "WarehouseProductInfo",
  components: { LineChart, Slider },
  data() {
    return {
      modal: true,
      amount: 0,
      chart: {
        data: {
          labels: [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь",
          ],
          datasets: [
            {
              label: "Amount ($)",
              data: [
                12000000, 11000000, 10000000, 10000000, 12000000, 10500000,
                10000000, 11000000, 10000000, 10000000, 11500000, 11000000,
              ],
              borderWidth: 2,
              fill: true,
              backgroundColor: (context) => {
                const bgColor = ["rgb(75, 192, 192)", "rgba(75, 192, 192, 0)"];
                if (!context.chart.chartArea) {
                  return;
                }
                const {
                  ctx,
                  chartArea: { top, bottom },
                } = context.chart;
                const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
                gradientBg.addColorStop(0, bgColor[0]);
                gradientBg.addColorStop(1, bgColor[1]);
                return gradientBg;
              },
              borderColor: "#5FD8DF",
              tension: 0.4,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              position: "top", // Move the x-axis labels to the top
              grid: {
                color: "rgba(255, 255, 255, 0.1)",
              },
              ticks: {
                color: "#ffffff",
              },
            },
            y: {
              grid: {
                color: "rgba(255, 255, 255, 0.1)",
              },
              ticks: {
                color: "#ffffff",
                callback: function (value) {
                  return "$" + value.toLocaleString();
                },
              },
            },
          },
        },
      },
    };
  },
  methods: {
    handleSubmit() {
      this.modal = false;
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

  &::-webkit-scrollbar {
    width: 0;
  }
}

.wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: rem(40);
}

.col {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(20);

  &:nth-child(1) {
    flex-basis: rem(460);
  }
  &:nth-child(2) {
    flex-basis: rem(1000);
  }
}

.title {
  font-weight: 700;
  font-size: rem(18);
  color: #fff;
}

.product {
  position: relative;
  padding: rem(24);
  width: 100%;
  background: var(--background);
  border-radius: rem(12);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(24);

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
    position: relative;
    margin-top: rem(-24);
    margin-left: rem(-24);
    padding: rem(10);
    width: calc(100% + rem(48));
    min-height: rem(185);
    height: rem(185);
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
      font-size: rem(14);
      color: #5d6374;
    }

    &-title {
      font-weight: 600;
      font-size: rem(16);
      color: #fff;
    }

    &-desc {
      margin-top: rem(5);
      font-weight: 500;
      font-size: rem(14);
      line-height: 170%;
      color: #5d6374;
    }
  }

  &__additional {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: rem(24);
  }

  &__count,
  &__weight {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: rem(10);

    &-icon {
      width: rem(20);
      height: rem(20);

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
    gap: rem(15);

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
    color: var(--primary);
    border: rem(1.5) solid var(--primary);
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

    &:hover {
      color: var(--background);
      background: var(--primary);
    }
  }

  &__warn {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: rem(12);

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
}

.table {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(20);

  &__body {
    height: rem(650);
    width: 100%;
    overflow: auto;

    &::-webkit-scrollbar {
      width: rem(5);
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--primary);
      border-radius: rem(10);
    }

    tbody tr:nth-child(odd) {
      background: linear-gradient(90deg, #101217 0%, rgba(16, 18, 23, 0) 100%);
    }
  }

  table {
    width: 100%;
    text-align: center;
    border-collapse: collapse;

    thead {
      position: sticky;
      top: 0;
      background: #0a0c12;
    }

    th {
      padding: 0 rem(5) rem(20);
      font-weight: 500;
      font-size: rem(12);
      color: #3f4450;
    }

    td {
      padding: rem(10) rem(5);
      font-weight: 600;
      font-size: rem(14);
      text-align: center;
      color: #fff;
    }
  }

  .user {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: rem(10);

    &-avatar {
      min-width: rem(40);
      min-height: rem(40);
      width: rem(40);
      height: rem(40);
      border-radius: 50%;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    &-name {
      font-weight: 600;
      font-size: rem(14);
      color: #fff;
    }
  }

  .btn {
    border-radius: rem(10);
    width: rem(118);
    height: rem(40);
    background: #181a21;
    transition: var(--transition-ease);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    span {
      font-weight: 500;
      font-size: rem(12);
      color: #7a819c;
    }

    &:hover {
      background: var(--primary);
      color: #12141a;
    }
  }
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  &__content {
    position: relative;
    width: rem(500);
    background: radial-gradient(
      129.24% 101.1% at -8.3% -27.05%,
      rgba(73, 166, 172, 0.22) 0%,
      rgba(73, 166, 172, 0) 100%
    );
    border-radius: rem(14);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: rem(20);
    padding: rem(28) rem(25) rem(25);
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      background: #07090f;
    }
  }

  &__close {
    position: absolute;
    top: rem(18);
    right: rem(18);
    width: rem(20);
    height: rem(20);
    cursor: pointer;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &__title {
    font-weight: 700;
    font-size: rem(20);
    line-height: 152%;
    color: #fff;

    span {
      color: var(--primary);
    }
  }
}
</style>
