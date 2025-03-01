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
          <div class="product__status-icon">
            <svg
              width="11"
              height="12"
              viewBox="0 0 11 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.375 7.3125L5.5 6V3.8125M1.5625 6C1.5625 6.51708 1.66435 7.0291 1.86222 7.50682C2.0601 7.98454 2.35014 8.4186 2.71577 8.78423C3.0814 9.14986 3.51546 9.4399 3.99318 9.63778C4.4709 9.83565 4.98292 9.9375 5.5 9.9375C6.01708 9.9375 6.5291 9.83565 7.00682 9.63778C7.48454 9.4399 7.9186 9.14986 8.28423 8.78423C8.64986 8.4186 8.9399 7.98454 9.13778 7.50682C9.33565 7.0291 9.4375 6.51708 9.4375 6C9.4375 5.48292 9.33565 4.9709 9.13778 4.49318C8.9399 4.01546 8.64986 3.5814 8.28423 3.21577C7.9186 2.85014 7.48454 2.5601 7.00682 2.36222C6.5291 2.16435 6.01708 2.0625 5.5 2.0625C4.98292 2.0625 4.4709 2.16435 3.99318 2.36222C3.51546 2.5601 3.0814 2.85014 2.71577 3.21577C2.35014 3.5814 2.0601 4.01546 1.86222 4.49318C1.66435 4.9709 1.5625 5.48292 1.5625 6Z"
                stroke="#5FD8DF"
                stroke-width="0.875"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <span>16ч. 21м. 14c.</span>
        </div>

        <div class="product__img">
          <img src="@/assets/img/products/3.png" alt="" />
        </div>

        <div class="product__info">
          <div class="product__info-title">Особняк №123</div>

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
              <div class="product__details-value">Vinewood, Baker, Str 132</div>
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
              <div class="product__details-title">Последняя ставка</div>
              <div class="product__details-value">10,000,000 $</div>
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
                  <div class="product__like-count">100</div>
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
                  <div class="product__like-count">100</div>
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
        </div>

        <div class="product__btn"><span>Участвовать в аукционе</span></div>
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
    padding: rem(7.5);
    background: #1b1e26;
    border-radius: rem(6);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: rem(8);

    &-icon {
      height: rem(12);
      width: rem(12);

      svg {
        margin-bottom: rem(4.5);
        width: 100%;
        height: 100%;
      }
    }

    span {
      font-weight: 500;
      font-size: rem(10);
      color: #fff;
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
    gap: rem(12);

    &-title {
      font-weight: 600;
      font-size: rem(15);
      color: #fff;
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

  &__details {
    margin: rem(10) 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: rem(28);

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
