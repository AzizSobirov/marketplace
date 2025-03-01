<template>
  <div
    ref="slider"
    class="slider"
    :style="{
      '--percent': '0%',
    }"
  >
    <div v-if="label" class="slider-label">{{ label }}</div>
    <div class="slider-range">
      <slot name="left"></slot>
      <div class="slider-inp" :style="{ '--percent': `${getPercent(value)}%` }">
        <input
          type="range"
          :min="min"
          :max="max"
          :step="step"
          :value="value"
          @input="$emit('update', $event.target.value)"
        />
      </div>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: {
    label: {
      type: String,
      default: null,
    },
    value: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    getPercent(value) {
      return ((value - this.min) / (this.max - this.min)) * 100;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.slider {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: rem(8);

  &-label {
    font-size: rem(8);
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }

  &-range {
    position: relative;
    padding: 0 rem(8);
    width: 100%;
    height: rem(28);
    background: transparent;
    border-radius: rem(5);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: rem(6);
    --percent: 30%;

    svg {
      width: rem(14);
      height: rem(14);
    }
  }

  &-inp {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    --percent: 50%;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      height: rem(2);
      width: 100%;
      background: linear-gradient(
        to right,
        var(--primary) 0% var(--percent),
        #cecece var(--percent) 100%
      );
      border-radius: 9999px;
    }
  }

  input {
    position: relative;
    z-index: 2;
    width: 100%;
    font-size: rem(15);
    border: none;
    outline: none;
    background: transparent;
    border-radius: 9999px;
    accent-color: #fff;
    appearance: none;

    &:focus {
      border: none;
      outline: none;
    }

    &::-webkit-slider-thumb {
      appearance: none;
      width: rem(15);
      height: rem(15);
      border-radius: 50%;
      background-color: #fff;
      cursor: pointer;
    }
  }
}
</style>
