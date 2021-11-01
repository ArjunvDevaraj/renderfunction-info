<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/templateFeatures">TemplateFeatures</router-link> |
    <router-link to="/example">Example</router-link> |
    <router-link to="/application">Application</router-link>|
    <router-link to="/rendercomponent">Component Rendering</router-link>|
    <router-link to="/resolvedynamic">Component IS Rendering</router-link>
  </div>
  <h3>Render Functions INFO</h3>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#nav .router-link-exact-active {
  background-color: rgb(0, 221, 166);
}
</style>
