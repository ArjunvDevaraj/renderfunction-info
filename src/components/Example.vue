
<script>
import { h } from "vue";
export default {
  props: {
    level: {
      default: 1,
    },
  },
  setup(props, { slots }) {
    console.log(slots);
    return () => {
      // const { level } = props;
      //console.log(slots);
      const slot = slots.default ? slots.default() : [];
      console.log("console", slots.default());

      const modifiedSlot = slot.map((childrean) => {
        return h("div", { style: "color:green" }, childrean);
      });

      return h(`h${props.level}`, modifiedSlot);
    };
  },
};
</script>

<style lang="scss" scoped>
</style>