<template>
  <div class="filter">
    <div class="filter__input">
      <div class="filter__input-icon">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.0625 17.3125L12.1875 12.4375M2.4375 8.375C2.4375 9.12189 2.58461 9.86147 2.87044 10.5515C3.15626 11.2416 3.5752 11.8685 4.10333 12.3967C4.63146 12.9248 5.25845 13.3437 5.94849 13.6296C6.63853 13.9154 7.37811 14.0625 8.125 14.0625C8.87189 14.0625 9.61147 13.9154 10.3015 13.6296C10.9916 13.3437 11.6185 12.9248 12.1467 12.3967C12.6748 11.8685 13.0937 11.2416 13.3796 10.5515C13.6654 9.86147 13.8125 9.12189 13.8125 8.375C13.8125 7.62811 13.6654 6.88853 13.3796 6.19849C13.0937 5.50845 12.6748 4.88146 12.1467 4.35333C11.6185 3.8252 10.9916 3.40626 10.3015 3.12044C9.61147 2.83461 8.87189 2.6875 8.125 2.6875C7.37811 2.6875 6.63853 2.83461 5.94849 3.12044C5.25845 3.40626 4.63146 3.8252 4.10333 4.35333C3.5752 4.88146 3.15626 5.50845 2.87044 6.19849C2.58461 6.88853 2.4375 7.62811 2.4375 8.375Z"
            stroke="#DCDCDC"
            stroke-width="1.625"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Найти предмет в хранилище..."
        @input="$emit('search', $event.target.value)"
      />
    </div>

    <div class="filter__select">
      <div class="filter__select-trigger" @click="toggleCategories">
        <div class="filter__select-icon">
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.16675 1.66663H13.8334V3.38613C13.8333 3.80602 13.6665 4.20868 13.3695 4.50554L9.87508 7.99996V13.5416L5.12508 15.125V8.39579L1.57841 4.49446C1.31356 4.20307 1.16679 3.82344 1.16675 3.42967V1.66663Z"
              stroke="#DCDCDC"
              stroke-width="1.58333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div class="filter__select-value" :class="{ active: category }">
          {{ category || "Выбор категории" }}
        </div>

        <div class="filter__select-arrow" :class="{ active: categoryOptions }">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="#4F5666"
              stroke-width="1.42"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <div v-if="categoryOptions" class="filter__select-options">
        <div
          v-for="item in categories"
          :key="item"
          class="filter__select-option"
          :class="{ active: item === category }"
          @click="
            () => {
              category = item;
              $emit('changeCategory', item);
            }
          "
        >
          {{ item }}
        </div>
      </div>
    </div>

    <div class="filter__select">
      <div class="filter__select-trigger" @click="toggleSort">
        <div class="filter__select-icon">
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.16675 1.66663H13.8334V3.38613C13.8333 3.80602 13.6665 4.20868 13.3695 4.50554L9.87508 7.99996V13.5416L5.12508 15.125V8.39579L1.57841 4.49446C1.31356 4.20307 1.16679 3.82344 1.16675 3.42967V1.66663Z"
              stroke="#DCDCDC"
              stroke-width="1.58333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div class="filter__select-value" :class="{ active: sort }">
          {{ sort || "Сортировать" }}
        </div>

        <div class="filter__select-arrow" :class="{ active: sortOptions }">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="#4F5666"
              stroke-width="1.42"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <div v-if="sortOptions" class="filter__select-options">
        <div
          v-for="item in sorts"
          :key="item"
          class="filter__select-option"
          :class="{ active: item === sort }"
          @click="
            () => {
              sort = item;
              $emit('changeSort', item);
            }
          "
        >
          {{ item }}
        </div>
      </div>
    </div>

    <router-link :to="`${this.$route.path}/create`" class="filter__btn">
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.82141 1.11462V8.88538M0.936035 5H8.70679"
          stroke="currentColor"
          stroke-width="1.11011"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <span> Создать</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "FilterProducts",
  data() {
    return {
      category: null,
      categoryOptions: false,
      categories: ["Category 1", "Category 2", "Category 3"],
      sort: null,
      sortOptions: false,
      sorts: ["По цене", "По дате"],
    };
  },
  methods: {
    toggleCategories() {
      this.categoryOptions = !this.categoryOptions;
    },
    toggleSort() {
      this.sortOptions = !this.sortOptions;
    },
  },
  mounted() {
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".filter__select")) {
        this.categoryOptions = false;
        this.sortOptions = false;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.filter {
  height: rem(48);
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: rem(30);

  &__input,
  &__select {
    position: relative;
    padding: rem(14) rem(18);
    background: var(--background);
    border-radius: rem(6);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: rem(10);

    &-icon,
    &-arrow {
      width: rem(20);
      height: rem(20);

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  &__input {
    grid-column-start: span 2;

    input {
      color: #fff;
      width: 100%;

      &::placeholder {
        color: #3f4450;
      }
    }
  }

  &__select {
    cursor: pointer;

    &-trigger {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: rem(10);
    }

    &-value {
      color: #3f4450;
      font-size: rem(15);
      font-weight: 500;

      &.active {
        color: #fff;
      }
    }

    &-options {
      position: absolute;
      top: calc(100% + rem(2));
      left: 0;
      z-index: 2;
      width: 100%;
      background: var(--background);
      border-radius: rem(6);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      overflow: hidden;
    }

    &-option {
      padding: rem(18);
      width: 100%;
      color: #fff;
      font-size: rem(14);
      font-weight: 500;
      cursor: pointer;
      transition: var(--transition-ease);

      &:hover,
      &.active {
        background: #0a0c12;
      }
    }

    &-arrow {
      transition: var(--transition-ease);

      &.active {
        transform: rotate(180deg);
      }
    }
  }

  &__btn {
    color: var(--primary);
    border: rem(1) solid var(--primary);
    border-radius: rem(10);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: rem(10);
    transition: var(--transition-ease);
    cursor: pointer;

    svg {
      width: rem(13);
      height: rem(13);
    }

    span {
      font-size: rem(12.5);
      font-weight: 500;
    }

    &:hover {
      color: #12141a;
      background: var(--primary);
    }
  }
}
</style>
