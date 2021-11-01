
<script>
import { h, ref, resolveComponent } from "vue";
export default {
  emits: ["update:modelValue"],
  setup(_, { emit }) {
    let modelValue = ref(6500);
    const renderComponent = resolveComponent("RenderComponent");
    console.log("emots", emit);
    return () => {
      // const { text, style } = props;
      //  const renderComponent = resolveComponent("renderComponent");
      // const slot = slots.default
      //   ? slots.default({ text: "Component Here" })
      //   : [];
      // const modifiedSlot = slot.map((childrean) => {
      //   return h("div", { style: "color:red" }, childrean);
      // });
      //V-model
      // return h("input", {
      //   value: modelValue.value,
      //   onInput: (e) => {
      //     modelValue.value = e.target.value;
      //   },
      // });
      //V-model compoentnt
      // return h(renderComponent, {
      //   style: "color:green!important",
      //   text: "Component Here",
      //   value: modelValue.value,
      // });
      return h(renderComponent, {
        style: "color:green!important",
        text: "Component Here",
        id: "test",
        modelValue: "",
        value: "TESTQ",
        "onUpdate:modelValue": (value) => emit("update:modelValue", value),
      });
    };
  },
};
</script>