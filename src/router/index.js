import { createWebHistory, createRouter } from "vue-router";
import compone from "../views/compone.vue";
import comptwo from "../views/comptwo.vue";
import compthree from "../views/compthree.vue";
import home from "../views/home.vue";
import templateFeatures from "../views/templateFeatures.vue";
import resolvedynamic from "../views/resolvedynamic.vue";


const routes = [
    {
        path: "/",
        name: "Home",
        component: home,
    }, {
        path: "/templateFeatures",
        name: "templateFeatures",
        component: templateFeatures,
    },
    {
        path: "/example",
        name: "Example",
        component: compone,
    },
    {
        path: "/application",
        name: "Application",
        component: comptwo,
    }, {
        path: "/rendercomponent",
        name: "rendercomponent",
        component: compthree,
    }, {
        path: "/resolvedynamic",
        name: "resolvedynamic",
        component: resolvedynamic,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;