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


@keyframes image-header_1 {

  0% {
    transform: translate(0, 0);
  }

  33% {
    transform: translate(100%, 0);
  }

  66% {
    transform: translate(100%, 0);
  }

  100% {
    transform: translate(100%, 0);
  }

}

@keyframes image-header_2 {

  0% {
    transform: translate(0, 0);
  }

  33% {
    transform: translate(0%, 0);
  }

  66% {
    transform: translate(100%, 0);
  }

  100% {
    transform: translate(100%, 0);
  }

}

@keyframes image-header_3 {

  0% {
    transform: translate(0, 0);
  }

  33% {
    transform: translate(0%, 0);
  }

  66% {
    transform: translate(0%, 0);
  }

  100% {
    transform: translate(100%, 0);
  }

}

@keyframes image-header_4 {

  //0% {
  //  transform: translate(0, 0);
  //}
  //
  //30% {
  //  transform: translate(0, 0);
  //}
  //
  //40% {
  //  transform: translate(100%, 0);
  //}
  //
  //100% {
  //  transform: translate(100%, 0);
  //}

}

@keyframes image-header_5 {

  0% {
    transform: translate(0, 0);
  }

  40% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(100%, 0);
  }

  100% {
    transform: translate(100%, 0);
  }

}

@keyframes image-header_6 {

  0% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(0, 0);
  }

  60% {
    transform: translate(100%, 0);
  }

  100% {
    transform: translate(100%, 0);
  }

}

@keyframes image-header_7 {

  0% {
    transform: translate(0, 0);
  }

  60% {
    transform: translate(0, 0);
  }

  70% {
    transform: translate(100%, 0);
  }

  100% {
    transform: translate(100%, 0);
  }

}

@keyframes image-header_8 {

  0% {
    transform: translate(0, 0);
  }

  70% {
    transform: translate(0, 0);
  }

  80% {
    transform: translate(100%, 0);
  }

  100% {
    transform: translate(100%, 0);
  }

}

@keyframes image-header_9 {

  0% {
    transform: translate(0, 0);
  }

  80% {
    transform: translate(0, 0);
  }

  90% {
    transform: translate(100%, 0);
  }

  100% {
    transform: translate(100%, 0);
  }

}

</style>

<script>
import HeaderApp from "@/components/HeaderApp.vue"
export default {
  components: {HeaderApp},
}
</script>
