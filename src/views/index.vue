<template>
  <div ref="marketplace" class="marketplace">
    <Sidebar />
    <main class="page">
      <Header />
      <transition name="default-transition" mode="out-in">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { Sidebar, Header } from "@/components/layout";

export default {
  name: "Marketplace",
  components: {
    Sidebar,
    Header,
  },
  methods: {
    updateFontSize() {
      const calculatedSize = (16 / 1080) * window.innerHeight;
      this.$refs.marketplace.style.fontSize = `${calculatedSize}px`;
    },
  },
  mounted() {
    this.updateFontSize();
    window.addEventListener("resize", this.updateFontSize);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.handleKeydown);
    window.removeEventListener("resize", this.updateFontSize);
  },
};
</script>
