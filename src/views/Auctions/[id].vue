<template>
  <div class="content">
    <div class="wrapper" v-if="product">
      <div class="col">
        <div class="title">Информация о товаре</div>

        <div class="product">
          <div
            class="product__favourite"
            :class="{ active: isExistsFavourites }"
            @click="toggleProductFavourites"
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

          <div class="product__img">
            <img :src="product.standard_cover" alt="" />
          </div>

          <div class="product__info">
            <div class="product__info-group">
              <div class="product__info-subtitle">Бизнес</div>
              <div class="product__info-title">{{ product.title }}</div>
            </div>

            <div class="product__info-btn">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.927806"
                  y="0.588572"
                  width="30.4836"
                  height="30.4836"
                  rx="6.4743"
                  fill="#1B1E27"
                />
                <rect
                  x="0.927806"
                  y="0.588572"
                  width="30.4836"
                  height="30.4836"
                  rx="6.4743"
                  stroke="#1F222D"
                  stroke-width="1.17714"
                />
                <path
                  d="M21.8623 10.1377L17.7509 21.5233C17.7231 21.5838 17.6786 21.6351 17.6225 21.6711C17.5664 21.7071 17.5012 21.7262 17.4346 21.7262C17.368 21.7262 17.3028 21.7071 17.2467 21.6711C17.1906 21.6351 17.1461 21.5838 17.1183 21.5233L14.9045 17.0955L10.4768 14.8817C10.4162 14.8539 10.3649 14.8094 10.3289 14.7533C10.2929 14.6972 10.2738 14.632 10.2738 14.5654C10.2738 14.4988 10.2929 14.4336 10.3289 14.3775C10.3649 14.3215 10.4162 14.2769 10.4768 14.2491L21.8623 10.1377Z"
                  stroke="#B5C1D4"
                  stroke-width="1.26506"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          <div class="product__details">
            <div class="product__details-item">
              <div class="product__details-icon">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.71484 14.2563L7.46484 13.1313M7.46484 13.1313L2.96484 15.3813V5.63135L7.46484 3.38135M7.46484 13.1313V3.38135M7.46484 3.38135L11.9648 5.63135M11.9648 5.63135L16.4648 3.38135V9.00635M11.9648 5.63135V9.75635M14.9648 13.8813V13.8888M16.5556 15.4721C16.8703 15.1575 17.0847 14.7565 17.1716 14.3201C17.2584 13.8836 17.2139 13.4312 17.0436 13.02C16.8734 12.6088 16.585 12.2574 16.2149 12.0101C15.8449 11.7628 15.4099 11.6309 14.9648 11.6309C14.5198 11.6309 14.0848 11.7628 13.7147 12.0101C13.3447 12.2574 13.0563 12.6088 12.8861 13.02C12.7158 13.4312 12.6713 13.8836 12.7581 14.3201C12.845 14.7565 13.0594 15.1575 13.3741 15.4721C13.6876 15.7863 14.2178 16.2558 14.9648 16.8813C15.7531 16.2138 16.2841 15.7443 16.5556 15.4721Z"
                    stroke="#5D6374"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="product__details-info">
                <div class="product__details-title">Улица</div>
                <div class="product__details-value">
                  {{ product.street }}
                </div>
              </div>
            </div>

            <div class="product__details-item">
              <div class="product__details-icon">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7148 14.3813C13.1127 14.3813 13.4942 14.5394 13.7755 14.8207C14.0568 15.102 14.2148 15.4835 14.2148 15.8813C14.2148 15.4835 14.3729 15.102 14.6542 14.8207C14.9355 14.5394 15.317 14.3813 15.7148 14.3813C15.317 14.3813 14.9355 14.2233 14.6542 13.942C14.3729 13.6607 14.2148 13.2792 14.2148 12.8813C14.2148 13.2792 14.0568 13.6607 13.7755 13.942C13.4942 14.2233 13.1127 14.3813 12.7148 14.3813ZM12.7148 5.38135C13.1127 5.38135 13.4942 5.53938 13.7755 5.82069C14.0568 6.10199 14.2148 6.48352 14.2148 6.88135C14.2148 6.48352 14.3729 6.10199 14.6542 5.82069C14.9355 5.53938 15.317 5.38135 15.7148 5.38135C15.317 5.38135 14.9355 5.22331 14.6542 4.94201C14.3729 4.6607 14.2148 4.27917 14.2148 3.88135C14.2148 4.27917 14.0568 4.6607 13.7755 4.94201C13.4942 5.22331 13.1127 5.38135 12.7148 5.38135ZM7.46484 14.3813C7.46484 13.1879 7.93895 12.0433 8.78286 11.1994C9.62678 10.3555 10.7714 9.88135 11.9648 9.88135C10.7714 9.88135 9.62678 9.40724 8.78286 8.56333C7.93895 7.71941 7.46484 6.57482 7.46484 5.38135C7.46484 6.57482 6.99074 7.71941 6.14682 8.56333C5.30291 9.40724 4.15832 9.88135 2.96484 9.88135C4.15832 9.88135 5.30291 10.3555 6.14682 11.1994C6.99074 12.0433 7.46484 13.1879 7.46484 14.3813Z"
                    stroke="#5D6374"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="product__details-info">
                <div class="product__details-title">Лайки и просмотры</div>
                <div class="product__details-group">
                  <div class="product__like">
                    <div class="product__like-count">{{ product.likes }}</div>
                    <div class="product__like-icon">
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_0_2233)">
                          <path
                            d="M12.2148 5.38135C12.2148 5.11613 12.1095 4.86178 11.922 4.67424C11.7344 4.4867 11.4801 4.38135 11.2148 4.38135H8.05484L8.53484 2.09635C8.54484 2.04635 8.54984 1.99135 8.54984 1.93635C8.54984 1.73135 8.46484 1.54135 8.32984 1.40635L7.79984 0.881348L4.50984 4.17135C4.32484 4.35635 4.21484 4.60635 4.21484 4.88135V9.88135C4.21484 10.1466 4.3202 10.4009 4.50774 10.5885C4.69527 10.776 4.94963 10.8813 5.21484 10.8813H9.71484C10.1298 10.8813 10.4848 10.6313 10.6348 10.2713L12.1448 6.74635C12.1898 6.63135 12.2148 6.51135 12.2148 6.38135V5.38135ZM1.21484 10.8813H3.21484V4.88135H1.21484V10.8813Z"
                            fill="#5D6374"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_0_2233">
                            <rect
                              width="12"
                              height="12"
                              fill="white"
                              transform="translate(0.714844 0.381348)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div class="product__like">
                    <div class="product__like-count">{{ product.views }}</div>
                    <div class="product__like-icon">
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_0_2237)">
                          <path
                            d="M6.71484 7.83589C7.59852 7.83589 8.31489 7.18467 8.31489 6.38135C8.31489 5.57802 7.59852 4.9268 6.71484 4.9268C5.83116 4.9268 5.1148 5.57802 5.1148 6.38135C5.1148 7.18467 5.83116 7.83589 6.71484 7.83589Z"
                            fill="#5D6374"
                          />
                          <path
                            d="M12.691 6.25771C12.2205 5.1514 11.4038 4.19466 10.3417 3.50574C9.27956 2.81682 8.01867 2.42592 6.71484 2.38135C5.41101 2.42592 4.15013 2.81682 3.08802 3.50574C2.02592 4.19466 1.20915 5.1514 0.738674 6.25771C0.7069 6.3376 0.7069 6.42509 0.738674 6.50498C1.20915 7.61129 2.02592 8.56803 3.08802 9.25695C4.15013 9.94587 5.41101 10.3368 6.71484 10.3813C8.01867 10.3368 9.27956 9.94587 10.3417 9.25695C11.4038 8.56803 12.2205 7.61129 12.691 6.50498C12.7228 6.42509 12.7228 6.3376 12.691 6.25771ZM6.71484 8.74498C6.2006 8.74498 5.6979 8.60636 5.27032 8.34664C4.84274 8.08692 4.50948 7.71777 4.31269 7.28587C4.1159 6.85397 4.06441 6.37873 4.16473 5.92023C4.26505 5.46172 4.51269 5.04056 4.87631 4.71C5.23994 4.37944 5.70323 4.15433 6.20759 4.06313C6.71196 3.97193 7.23475 4.01873 7.70985 4.19763C8.18495 4.37653 8.59103 4.67948 8.87673 5.06818C9.16243 5.45688 9.31492 5.91386 9.31492 6.38135C9.31386 7.00793 9.03958 7.60857 8.55221 8.05163C8.06483 8.49469 7.4041 8.74402 6.71484 8.74498Z"
                            fill="#5D6374"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_0_2237">
                            <rect
                              width="12"
                              height="12"
                              fill="white"
                              transform="translate(0.714844 0.381348)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="product__details-item">
              <div class="product__details-icon">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_0_2222)">
                    <path
                      d="M13.2398 6.38135C13.0906 5.95778 12.8179 5.58857 12.457 5.32125C12.0962 5.05393 11.6635 4.90072 11.2148 4.88135H8.21484C7.61811 4.88135 7.04581 5.1184 6.62385 5.54036C6.2019 5.96231 5.96484 6.53461 5.96484 7.13135C5.96484 7.72808 6.2019 8.30038 6.62385 8.72234C7.04581 9.1443 7.61811 9.38135 8.21484 9.38135H11.2148C11.8116 9.38135 12.3839 9.6184 12.8058 10.0404C13.2278 10.4623 13.4648 11.0346 13.4648 11.6313C13.4648 12.2281 13.2278 12.8004 12.8058 13.2223C12.3839 13.6443 11.8116 13.8813 11.2148 13.8813H8.21484C7.76615 13.862 7.33353 13.7088 6.97264 13.4414C6.61176 13.1741 6.33913 12.8049 6.18984 12.3813M9.71484 2.63135V4.88135M9.71484 13.8813V16.1313"
                      stroke="#5D6374"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_2222">
                      <rect
                        width="18"
                        height="18"
                        fill="white"
                        transform="translate(0.714844 0.381348)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="product__details-info">
                <div class="product__details-title">Шаг ставки</div>
                <div class="product__details-value">
                  {{ formatPrice(300000) }} $
                </div>
              </div>
              <div class="product__details-info">
                <div class="product__details-title">Последняя ставка</div>
                <div class="product__details-value">
                  {{ formatPrice(10000000) }} $
                </div>
              </div>
            </div>
          </div>

          <div class="product__prices">
            <div class="product__prices-item">
              <div class="product__prices-subtitle">Выручка</div>
              <div class="product__prices-title">$ 150,000,000</div>
            </div>
            <div class="product__prices-item">
              <div class="product__prices-subtitle">Прибыль</div>
              <div class="product__prices-title">$ 150,000,000</div>
            </div>
            <div class="product__prices-item">
              <div class="product__prices-subtitle">Средний чек</div>
              <div class="product__prices-title">$ 150,000,000</div>
            </div>
            <div class="product__prices-item">
              <div class="product__prices-subtitle">Гос. цена</div>
              <div class="product__prices-title">$ 150,000,000</div>
            </div>
            <div class="product__prices-item">
              <div class="product__prices-subtitle">Продажи</div>
              <div class="product__prices-title">$ 150,000,000</div>
            </div>
            <div class="product__prices-item">
              <div class="product__prices-subtitle">Рентабельность</div>
              <div class="product__prices-title">$ 150,000,000</div>
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
            <span>Сделать ставку</span>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="title">Трансляция торгов</div>
        <div class="broadcast">
          <div v-for="i in 9" :key="i" class="broadcast__item">
            <div class="user">
              <img class="user-avatar" src="@/assets/img/avatar.png" alt="" />
              <div class="user-name">Source Insensitive</div>
            </div>
            <div class="broadcast__item-title">
              повысил ставку на $1M. Текущая цена: <span>$</span> 55,000,000
            </div>
          </div>
        </div>
      </div>

      <!-- Disable if chat doesnt' need -->
      <div class="col col-chat">
        <div class="title">Чат</div>
        <div class="chat">
          <div class="chat__messages">
            <div
              v-for="(message, index) in messages"
              :key="`msg-${index}`"
              class="message"
              :class="{ 'message--me': message.user.id === 2 }"
            >
              <div class="message__user">
                <div class="message__user-avatar">
                  <img :src="message.user.avatar" alt="" />
                </div>
                <div class="message__user-name">{{ message.user.name }}</div>
              </div>
              <div class="message__text" v-html="message.text"></div>
            </div>
          </div>
          <form class="chat__form" @submit.prevent="sendMessage">
            <input type="text" placeholder="Отправьте ваше сообщение..." />
          </form>
        </div>
      </div>

      <div class="col col-chart">
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

          <div class="modal__title">Выберите сумму</div>

          <div class="modal__prices">
            <div
              v-for="price in prices"
              :key="price"
              class="modal__prices-item"
              :class="{ active: price === selectedPrice }"
              @click="selectedPrice = price"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_0_3755)">
                  <path
                    d="M12.525 6C12.3757 5.57643 12.1031 5.20722 11.7422 4.9399C11.3813 4.67258 10.9487 4.51937 10.5 4.5H7.5C6.90326 4.5 6.33097 4.73705 5.90901 5.15901C5.48705 5.58097 5.25 6.15326 5.25 6.75C5.25 7.34674 5.48705 7.91903 5.90901 8.34099C6.33097 8.76295 6.90326 9 7.5 9H10.5C11.0967 9 11.669 9.23705 12.091 9.65901C12.5129 10.081 12.75 10.6533 12.75 11.25C12.75 11.8467 12.5129 12.419 12.091 12.841C11.669 13.2629 11.0967 13.5 10.5 13.5H7.5C7.05131 13.4806 6.61868 13.3274 6.2578 13.0601C5.89691 12.7928 5.62429 12.4236 5.475 12M9 2.25V4.5M9 13.5V15.75"
                    stroke="#5FD8DF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_3755">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>{{ price }}</span>
            </div>
          </div>

          <div class="modal__input">
            <div class="modal__input-header">
              <div class="modal__input-title">Часы размещения</div>
            </div>
            <input
              v-model="amount"
              type="number"
              placeholder="Укажите свою цену"
            />
          </div>

          <div class="modal__actions">
            <button type="submit"><span>Сделать ставку</span></button>
          </div>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import LineChart from "@/components/LineChart.vue";
import avatar from "@/assets/img/avatar.png";

export default {
  name: "WarehouseProductInfo",
  components: { LineChart },
  data() {
    return {
      product: null,
      modal: false,
      prices: [
        "1,000,000",
        "10,000,000",
        "2,000,000",
        "3,000,000",
        "7,000,000",
        "9,000,000",
      ],
      selectedPrice: "1,000,000",
      amount: null,
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
      messages: [
        {
          id: 1,
          user: {
            id: 1,
            name: "Source Insensitive",
            avatar: avatar,
          },
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
        },
        {
          id: 2,
          user: {
            id: 2,
            name: "Source Insensitive",
            avatar: avatar,
          },
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
        },
        {
          id: 1,
          user: {
            id: 1,
            name: "Source Insensitive",
            avatar: avatar,
          },
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
        },
        {
          id: 2,
          user: {
            id: 2,
            name: "Source Insensitive",
            avatar: avatar,
          },
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
        },
        {
          id: 1,
          user: {
            id: 1,
            name: "Source Insensitive",
            avatar: avatar,
          },
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
        },
      ],
    };
  },
  computed: {
    ...mapState(["auctions"]),
    ...mapGetters(["isExistsFavourites"]),
  },
  methods: {
    ...mapMutations(["toggleProductFavourites"]),
    formatPrice(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    handleSubmit() {
      this.modal = false;
    },
    sendMessage() {},
  },
  mounted() {
    this.product = this.auctions.find(
      (item) => item.id == this.$route.params.id
    );

    if (!this.product) {
      this.$router.push("/auctions");
    }
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.content {
  // padding-bottom: rem(30);
  // min-height: calc(100vh - rem(120));
  // overflow: auto;
  width: 100%;

  // &::-webkit-scrollbar {
  //   width: 0;
  // }
}

.wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: flex-start;
  gap: rem(20) rem(40);
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
    flex-basis: rem(560);
  }

  &-chat {
    flex-grow: 0;
    flex-basis: rem(400);
  }

  &-chart {
    flex-basis: 100%;
    gap: rem(10);
  }
}

.title {
  font-weight: 700;
  font-size: rem(18);
  color: #fff;
}

.product {
  position: relative;
  padding: rem(15);
  width: 100%;
  background: var(--background);
  border-radius: rem(12);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(20);

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
    margin-top: rem(-15);
    margin-left: rem(-15);
    width: calc(100% + rem(30));
    min-height: rem(205);
    height: rem(205);
    background: #15171e;
    border-radius: rem(10);
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
    align-items: center;
    justify-content: space-between;
    gap: rem(20);

    &-group {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: rem(4);
    }

    &-title {
      font-weight: 600;
      font-size: rem(18);
      color: #fff;
    }

    &-subtitle {
      font-weight: 500;
      font-size: rem(14);
      color: #5d6374;
    }

    &-btn {
      width: rem(32);
      height: rem(32);

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  &__details {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: rem(24);

    &-item {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: rem(10);
    }

    &-icon {
      width: rem(18);
      height: rem(18);

      svg {
        width: 100%;
        height: 100%;
      }
    }

    &-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: rem(6);
    }

    &-title {
      font-weight: 500;
      font-size: rem(12);
      color: #5d6374;
    }

    &-value {
      font-weight: 500;
      font-size: rem(12);
      color: #fff;
    }

    &-group {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: rem(10);
    }
  }

  &__like {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: rem(6);

    &-icon {
      width: rem(13);
      height: rem(13);

      svg {
        margin-bottom: rem(1.5);
        width: 100%;
        height: 100%;
      }
    }

    &-count {
      font-weight: 600;
      font-size: rem(12);
      color: #fff;
    }
  }

  &__prices {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: rem(12);

    &-item {
      padding: rem(10) rem(12);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: rem(8);

      &:nth-child(odd) {
        background: #181a20;
        border-radius: rem(6);
      }
    }

    &-title {
      font-weight: 600;
      font-size: rem(12);
      color: #fff;
    }

    &-subtitle {
      font-weight: 500;
      font-size: rem(12);
      color: #5d6374;
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
}

.broadcast {
  height: 100%;
  width: 100%;
  // overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(18);

  &::-webkit-scrollbar {
    width: 0;
  }

  &__item {
    padding: 0 rem(18);
    height: rem(60);
    width: 100%;
    border-radius: rem(10);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: rem(10);

    &:nth-child(odd) {
      background: linear-gradient(90deg, #101217 0%, rgba(16, 18, 23, 0) 100%);
    }

    .user {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: rem(18);

      &-avatar {
        width: rem(40);
        height: rem(40);
        border-radius: 50%;
        object-fit: cover;
      }

      &-name {
        font-weight: 600;
        font-size: rem(14);
        color: #fff;
      }
    }

    &-title {
      font-weight: 600;
      font-size: rem(14);
      text-align: center;
      color: #fff;

      span {
        color: var(--primary);
      }
    }
  }
}

.chat {
  padding: rem(25);
  width: 100%;
  height: 100%;
  background: #0e1015;
  border: rem(1) solid #12141a;
  border-radius: rem(12);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: rem(35);

  &__messages {
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: rem(35);

    &::-webkit-scrollbar {
      width: 0;
    }
  }

  .message {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: rem(10);

    &.message--me {
      align-items: flex-end;

      .message__user {
        flex-direction: row-reverse;

        &::before {
          content: "Вы";
          padding: rem(4) rem(10);
          display: block;
          font-weight: 600;
          font-size: rem(10);
          color: #285b5e;
          background: var(--primary);
          border-radius: 9999px;
        }
      }

      .message__text {
        text-align: right;
      }
    }

    &__user {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: rem(12);

      &-avatar {
        width: rem(25);
        height: rem(25);

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }
      }

      &-name {
        font-weight: 600;
        font-size: rem(12);
        color: #fff;
      }
    }

    &__text {
      max-width: 80%;
      text-wrap: balance;
      font-weight: 500;
      font-size: rem(12);
      line-height: 175%;
      color: #80858f;
    }
  }

  &__form {
    margin-top: auto;
    padding: rem(10) rem(14);
    width: 100%;
    height: rem(45);
    background: #0b0d11;
    border-radius: rem(6);

    input {
      width: 100%;
      font-weight: 500;
      font-size: rem(12);
      line-height: 175%;
      color: #fff;

      &::placeholder {
        color: #555a6a;
      }
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
    gap: rem(24);
    padding: rem(25);
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
    top: rem(25);
    right: rem(25);
    width: rem(20);
    height: rem(20);
    cursor: pointer;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &__title {
    width: 100%;
    font-weight: 700;
    font-size: rem(20);
    line-height: 152%;
    color: #fff;

    span {
      color: var(--primary);
    }
  }

  &__prices {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: rem(12);

    &-item {
      height: rem(46);
      background: rgba(255, 255, 255, 0.05);
      border-radius: rem(8);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: rem(10);
      cursor: pointer;

      &.active,
      &:hover {
        border: rem(1) solid var(--primary);
        background: linear-gradient(
          180deg,
          rgba(95, 216, 223, 0.35) 0%,
          rgba(52, 117, 121, 0.35) 100%
        );
      }

      svg {
        width: rem(18);
        height: rem(18);
      }

      span {
        font-weight: 600;
        font-size: rem(14);
        text-align: center;
        color: rgba(255, 255, 255, 0.75);
      }
    }
  }

  &__input {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: rem(15);

    &-header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: rem(20);
    }

    &-title {
      font-weight: 600;
      font-size: rem(12);
      color: #fff;
    }

    &-max {
      font-weight: 600;
      font-size: rem(12);
      color: #5d6374;
    }

    input {
      padding: 0 rem(24);
      height: rem(64);
      width: 100%;
      font-size: rem(13);
      font-weight: 500;
      background: #11141b;
      border-radius: rem(8) rem(8) 0 0;

      &::placeholder {
        color: #5e6470;
      }

      &[type="number"] {
        appearance: none;
        -webkit-appearance: textfield;
        -moz-appearance: textfield;
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }
    }

    .slider {
      position: absolute;
      bottom: rem(-12);
      left: rem(-8);
      width: calc(100% + rem(16));
    }
  }

  &__actions {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: rem(10);

    button {
      height: rem(46);
      background: linear-gradient(180deg, #5fd8df 0%, #347579 100%);
      border-radius: rem(8);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      span {
        font-weight: 600;
        font-size: rem(12);
        text-align: center;
        color: #fff;
      }
    }
  }
}
</style>
