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
              <div class="product__details-value">
                {{ formatPrice(10000) }} $
              </div>
            </div>
          </div>
        </div>

        <div class="product__date">
          <div class="product__date-icon">
            <svg
              v-if="i % 2 == 0"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_0_863)">
                <path
                  d="M17.3264 16.4942L16.0164 4.6416H13.0475V6.86699H13.7506V7.99199H11.2194V6.86699H11.9225V4.6416H7.50865V6.86699H8.21177V7.99199H5.68017V6.86699H6.38365V4.6416H3.41365L2.10373 16.4942C2.03516 17.1122 2.23204 17.7303 2.64372 18.1898C3.0554 18.6496 3.64814 18.9133 4.27005 18.9133H15.1597C15.7816 18.9133 16.3747 18.6496 16.7864 18.1901C17.1977 17.7303 17.3946 17.1122 17.3264 16.4942ZM9.83072 12.3398C10.1735 12.4118 10.5623 12.4934 10.8868 12.7072C11.3147 12.9891 11.5316 13.4233 11.5316 13.9977C11.5316 14.7385 11.0049 15.3678 10.2779 15.5861V16.35H9.1529V15.5861C8.42552 15.3678 7.89817 14.7385 7.89817 13.9977H9.02317C9.02317 14.2938 9.34028 14.5434 9.7154 14.5434C10.0902 14.5434 10.4066 14.2938 10.4066 13.9977C10.4066 13.6739 10.3419 13.5966 9.59939 13.4405C9.25626 13.3684 8.86778 13.2869 8.54329 13.0731C8.11544 12.7912 7.89817 12.357 7.89817 11.7825C7.89817 11.0418 8.42552 10.4125 9.1529 10.1942V9.43024H10.2779V10.1942C11.0049 10.4125 11.5316 11.0418 11.5316 11.7825H10.4066C10.4066 11.4865 10.0902 11.2366 9.7154 11.2366C9.34028 11.2366 9.02317 11.4865 9.02317 11.7825C9.02317 12.1063 9.08787 12.1837 9.83072 12.3398Z"
                  fill="#DF5F61"
                />
                <path
                  d="M7.5083 4.2452C7.5083 3.02809 8.4983 2.03809 9.71506 2.03809C10.9322 2.03809 11.9222 3.02809 11.9222 4.2452V4.64141H13.0472V4.2452C13.0472 2.40793 11.5523 0.913086 9.71506 0.913086C7.87779 0.913086 6.3833 2.40793 6.3833 4.2452V4.64141H7.5083V4.2452Z"
                  fill="#DF5F61"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_863">
                  <rect
                    width="18"
                    height="18"
                    fill="white"
                    transform="translate(0.714844 0.913086)"
                  />
                </clipPath>
              </defs>
            </svg>

            <svg
              v-else
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_0_875)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.8852 2.58825C2.01262 1.47125 2.97466 0.652832 4.08827 0.652832H11.8555C12.9691 0.652832 13.9311 1.47125 14.0586 2.58825L15.2181 12.7525C15.3677 14.0644 14.3158 15.1732 13.015 15.1732H2.92872C1.62794 15.1732 0.57599 14.0644 0.725644 12.7525L1.8852 2.58825ZM5.79392 4.28293C5.79392 3.88197 5.46887 3.55691 5.06791 3.55691C4.66693 3.55691 4.34189 3.88197 4.34189 4.28293C4.34189 6.28778 5.96713 7.91303 7.97199 7.91303C9.97682 7.91303 11.6021 6.28778 11.6021 4.28293C11.6021 3.88197 11.2771 3.55691 10.8761 3.55691C10.4751 3.55691 10.1501 3.88197 10.1501 4.28293C10.1501 5.48584 9.17486 6.46099 7.97199 6.46099C6.76905 6.46099 5.79392 5.48584 5.79392 4.28293Z"
                  fill="#5FDFB6"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_875">
                  <rect
                    width="15.2852"
                    height="15.2852"
                    fill="white"
                    transform="translate(0.329346 0.270508)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div class="product__date-info">
            <div class="product__date-title">
              {{ i % 2 == 0 ? "Время продажи" : "Время покупки" }}
            </div>
            <div class="product__date-value">23.07.2003</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hisory",
  methods: {
    formatPrice(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
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

  &__details {
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
      width: rem(20);
      height: rem(20);

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
      font-weight: 600;
      font-size: rem(14);
      color: #fff;
    }

    &-group {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: rem(10);
    }
  }

  &__date {
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

    &-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: rem(4);
    }

    &-title {
      font-weight: 500;
      font-size: rem(12);
      color: #5d6374;
    }

    &-value {
      font-weight: 600;
      font-size: rem(14);
      color: #fff;
    }
  }
}
</style>
