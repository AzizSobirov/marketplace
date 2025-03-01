<template>
  <div class="content">
    <div class="empty">
      <div class="empty__bg">
        <span>Пусто</span>
        <span>Пусто</span>
        <span>Пусто</span>
      </div>

      <div class="empty__title">На этой странице пока ничего нет.</div>
      <div class="empty__btn">
        <span>Перейти в магазин</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Warehouse",
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

.empty {
  position: relative;
  width: 100%;
  height: calc(100vh - rem(155));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: rem(12);

  &__bg {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    pointer-events: none;

    span {
      color: transparent;
      -webkit-text-stroke: rem(0.1) rgba(255, 255, 255, 0.05);
      font-weight: 700;
      font-size: rem(195);
      text-transform: uppercase;
      line-height: 1;

      &:nth-child(1),
      &:nth-child(3) {
        opacity: 0.5;
      }

      &:nth-child(1) {
        transform: translateY(30%);
      }

      &:nth-child(3) {
        transform: translateY(-30%);
      }
    }
  }

  &__title {
    position: relative;
    font-weight: 700;
    font-size: rem(14);
    color: #fff;
  }

  &__btn {
    position: relative;
    width: rem(162);
    height: rem(48);
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--primary);
    border: rem(1) solid var(--primary);
    border-radius: rem(8);
    cursor: pointer;

    span {
      font-weight: 500;
      font-size: rem(12);
      color: #12141a;
    }
  }
}
</style>
