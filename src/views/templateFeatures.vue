
<script>
import { h, resolveComponent } from "vue";

export default {
  data() {
    return {
      items: [
        {
          name: "First",
        },
        {
          name: "Second",
        },
        {
          name: "Third",
        },
      ],
    };
  },
  render() {
    console.log(this.items);
    const length = this.items.length;
    if (length) {
      // const heading = () => {
      //   return h("h3", {}, "V-for");
      // };
      // const list = () => {
      //   //return h("h3", {}, "V-for");
      //   return h(
      //     "ul",
      //     {
      //       class: "ulClass",
      //     },
      //     this.items.map((item) => {
      //       return h("li", item.name);
      //     })
      //   );
      // };
      // ########VFORRRR###########
      return h("div", {}, [
        h("h2", "v-if,v-for"),
        h(
          "ul",
          {
            class: "ulClass",
          },
          this.items.map((item) => {
            return h("li", item.name);
          })
        ),
      ]);
    } else {
      return h("p", "No items found.");
    }
  },
};
</script>

<style scoped>
.ulClass {
  margin: 0 auto;
  max-width: min-content;
}
</style>