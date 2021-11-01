
<script>
import { h, resolveDynamicComponent } from "vue";
export default {
  data() {
    return {
      name: "renderComponent",
    };
  },
  // `<component :is="name"></component>`
  render() {
    const Component = resolveDynamicComponent(this.name);
    return h(Component, {
      style: "color:green!important",
      text: "Component Here",
      onClick: (event) => console.log("clicked", event.target),
    });
  },
};
</script>

<style scoped>
.ulClass {
  margin: 0 auto;
  max-width: min-content;
}
</style>