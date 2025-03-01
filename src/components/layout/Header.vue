<template>
  <header class="header">
    <div class="header__page">
      <div class="header__page-title">{{ $route.meta.title || "" }}</div>
      <p class="header__page-desc">{{ $route.meta.desc || "" }}</p>
    </div>

    <div class="header__right">
      <div class="header__right-group">
        <div class="header__balance">
          <div class="header__balance-value">{{ user.wallet }}</div>
          <div class="header__balance-icon">
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.147 6.35507H4.14697C3.54698 6.35507 3.14697 5.96956 3.14697 5.3913C3.14697 4.81302 3.54698 4.42754 4.14697 4.42754H13.5154C14.1154 4.42754 14.5154 4.04202 14.5154 3.46377C14.5154 2.88549 14.1154 2.5 13.5154 2.5H4.14697C2.44802 2.5 1.14697 3.7539 1.14697 5.3913V14.5725C1.14697 15.6316 2.04803 16.5 3.14697 16.5H15.147C16.2459 16.5 17.147 15.6316 17.147 14.5725V8.28261C17.147 7.22145 16.2459 6.35507 15.147 6.35507ZM15.6586 13.0649H13.787C12.8501 13.0649 12.0901 12.3304 12.0901 11.4275C12.0901 10.9771 12.2796 10.5672 12.587 10.271C12.8943 9.97478 13.3196 9.79013 13.787 9.79013H15.6586V13.0649Z"
                fill="#505564"
              />
            </svg>
          </div>
        </div>
        <div class="header__balance">
          <div class="header__balance-value">{{ user.balance }}</div>
          <div class="header__balance-icon">
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.449951 13.7728C0.449951 14.5305 1.06422 15.1448 1.82197 15.1448H16.1779C16.9357 15.1448 17.5499 14.5306 17.55 13.7728C17.55 13.7728 17.55 13.7729 17.55 13.7728V8.17004H0.449951L0.449951 13.7728ZM11.85 11.1126C11.85 10.8806 12.038 10.6925 12.2701 10.6925H15.0398C15.2719 10.6925 15.4599 10.8806 15.46 11.1126V12.6375C15.4599 12.8695 15.2719 13.0576 15.0398 13.0576H12.2701C12.038 13.0576 11.85 12.8695 11.85 12.6375V11.1126Z"
                fill="#505564"
              />
              <path
                d="M16.1779 3.85522H1.82198C1.06423 3.85522 0.449955 4.46949 0.449951 5.22724V6.27H17.55V5.22724C17.55 4.4695 16.9357 3.85523 16.1779 3.85522C16.1779 3.85522 16.1779 3.85522 16.1779 3.85522Z"
                fill="#505564"
              />
            </svg>
          </div>
        </div>
      </div>

      <div class="header__user">
        <div class="header__user-info">
          <div class="header__user-name">{{ user.name }}</div>
          <div class="header__user-company">{{ user.company }}</div>
        </div>
        <div class="header__user-avatar">
          <img :src="user.avatar" alt="" />
        </div>
      </div>

      <div class="header__exit">
        <img class="header__exit-icon" src="@/assets/img/esc.png" alt="" />
        <div class="header__exit-group">
          <div class="header__exit-title">Выйти из меню дома</div>
          <div class="header__exit-desc">Кнопка ESC</div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.header {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: rem(20);

  &__page {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: rem(10);

    &-title {
      font-weight: 700;
      font-size: rem(24);
      color: #fff;
      line-height: 1;
    }

    &-desc {
      font-weight: 500;
      font-size: rem(12);
      line-height: 220%;
      color: #3f4450;
    }
  }

  &__right {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: rem(45);

    &-group {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: rem(20);
    }
  }

  &__balance {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: rem(12);

    &-value {
      font-weight: 600;
      font-size: rem(14);
      color: #fff;
    }

    &-icon {
      width: rem(18);
      height: rem(18);

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  &__user {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: rem(15);

    &-info {
      text-align: right;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: rem(4);
    }

    &-name {
      font-weight: 500;
      font-size: rem(12);
      color: var(--text-muted);
    }

    &-company {
      font-weight: 600;
      font-size: rem(14);
      color: #fff;
    }

    &-avatar {
      width: rem(40);
      height: rem(40);
      border-radius: 50%;

      img {
        width: 100%;
        height: 100%;
        border-radius: inherit;
        object-fit: cover;
      }
    }
  }

  &__exit {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: rem(10);

    &-icon {
      width: rem(38);
      height: rem(38);
      object-fit: contain;
    }

    &-group {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: rem(4);
    }

    &-title {
      font-weight: 700;
      font-size: rem(12);
      color: #fff;
    }

    &-desc {
      font-weight: 500;
      font-size: rem(10);
      color: var(--text-muted);
    }
  }
}
</style>
