

<template>
  <Example>TV Finder</Example>
  <Application>
    <template #namedSlot>
      <h3>Hello From Named Slot</h3>
    </template>
    <h4>Hi From Default slot</h4>
    <template #sc="{ shows }">
      <h3 v-if="shows?.length > 0">
        Average Score {{ computedAverage(shows) }}
      </h3>
    </template>
  </Application>
</template>
<script>
import Application from "../components/Application.vue";
import Example from "../components/Example.vue";
export default {
  components: { Application, Example },
  setup() {
    const computedAverage = (shows) => {
      return (
        shows.reduce((acc, info) => +info.score + acc, 0) / shows.length
      ).toFixed(2);
      // console.log();
    };
    return { computedAverage };
  },
};
</script>

<style lang="scss" scoped>
</style>