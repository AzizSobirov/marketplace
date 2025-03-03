<template>
  <div class="content">
    <TheEmpty />
  </div>
</template>

<script>
import TheEmpty from "@/components/Empty.vue";

export default {
  name: "NotFound",
  components: {
    TheEmpty,
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
</style>
