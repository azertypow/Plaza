<template>

  <header-app></header-app>

  <router-view/>

</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body, html {
  margin: 0;
  padding: 0;
  background: black;
}

.is-background-app {
  display: block;
  width: 1198px;
  height: auto;
  position: relative;
  margin: auto;
}

</style>

<script>
import HeaderApp from "@/components/HeaderApp.vue"
export default {
  components: {HeaderApp},
}
</script>
