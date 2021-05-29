<template>
  <section
      :class="{
          'is-open': isOnTop
        }"

      :style="{
    height: `${headerHeight}px`
      }"

      class="v-header-app"
  >
    <img
        alt=""
        class="is-background-app v-header-app__bacjground"
        src="../assets/header-logo.jpg"
    >

    <img
        alt=""
        class="v-header-app__menu"
        src="../assets/menu.jpg"
    >

    <img
        class="v-home_header__streaming"
        src="../assets/programme.jpg"
        alt
    >
  </section>

</template>

<script lang="ts">
import {defineComponent, PropType} from "vue"

export default defineComponent({

  name: 'HeaderApp',

  mounted() {
    window.addEventListener("scroll", () => {

      this.isOnTop = window.scrollY < 100
      this.windowScrollPosition = window.scrollY

    })
  },

  data() {
    return {
      isOnTop: true,
      windowScrollPosition: 0
    }
  },

  computed: {
    headerHeight(): number {
      const value = 250 - this.windowScrollPosition
      if( value > 50 ) return value
      return 50
    }
  }

});
</script>

<style scoped lang="scss">
.v-header-app {
  background: white;
  height: 250px;
  border-bottom: solid 2px black;
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 100;
  width: 100%;
  max-width: 1198px;
  transform: translateX(-50%);

  &.is-open {
    //height: 250px;
  }
}

.v-header-app__bacjground {
  width: 100%;
  height: 100%;
  object-fit: contain;
}


.v-header-app__menu {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 175.5px;
  cursor: pointer;
  display: block;
}

.v-home_header__streaming {
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  display: block;
  transform: translate(0, 100% );
  border-bottom: solid 2px black;
  z-index: -1;
}

</style>
