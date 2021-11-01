import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <---
import RenderComponent from "./components/RenderComponent.vue";

const app = createApp(App);

app.component('RenderComponent', RenderComponent);

app.use(router);
app.mount('#app')
