<template>
  <div :style="style" v-bind="$attrs">
    <h4>{{ text }}</h4>
    <input type="text" v-model="value" />
  </div>
  {{ value }}
</template>

<script>
import { ref } from "vue";
export default {
  inheritAttrs: false,
  name: "RenderComponent",
  props: ["text", "style"],
  setup(props, context) {
    //console.log("context");
    //console.log(context.attrs);
    let value = ref(context.attrs.value);
    const alert = () => {
      alert("here");
    };
    return { value, alert };
  },
};
</script>

<style lang="scss" scoped>
</style>