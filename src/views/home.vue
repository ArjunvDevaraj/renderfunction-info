
<script>
import { h, resolveDirective, withDirectives, Transition } from "vue";
export default {
  // <div v-pin:top.animate="200"></div>
  render() {
    // const pin = resolveDirective("pin");
    //  return withDirectives(h("div"), [[pin, 200, "top", { animate: true }]]);
    //  return h(Transition, { mode: "out-in" } /* ... */);
  },
  render() {
    // const myParagraphVNode = h("p", "hi");
    // return h("div", [
    //   // Yikes - duplicate VNodes!
    //   myParagraphVNode,
    //   myParagraphVNode,
    // ]);
    return h(
      "div",
      Array.from({ length: 20 }).map(() => {
        return h("p", "hi");
      })
    );
  },
  // setup() {
  //   const myParagraphVNode = h("p", "hi");
  //   const renderFun = () => {
  //     // alert("render");
  //     return h("div", myParagraphVNode);
  //   };
  //   return () => {
  //     return renderFun();
  //   };
  // },
};
</script>

<style lang="scss" scoped>
</style>