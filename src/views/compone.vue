
<template>
  <Example :level="2"
    >Render Function
    <h2>inner h2</h2>
  </Example>
</template>

<script>
import Example from "../components/Example.vue";
export default {
  components: { Example },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>