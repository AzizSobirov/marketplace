<template>
  <LineChart class="chart" :data="data" :options="options" />
</template>

<script>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale
);

export default {
  name: "MyChart",
  components: { LineChart: Line },
  props: {
    data: {
      type: Object,
      required: true,
    },
    options: {
      type: Object,
      required: false,
      default: () => ({ responsive: true }),
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins.scss" as *;

.chart {
  width: 100%;
  max-height: rem(175) !important;
}
</style>
