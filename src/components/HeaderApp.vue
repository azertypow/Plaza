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
    <router-link
        to="/"
        class="link-to-home"
    >
      <img
          alt=""
          class="is-background-app v-header-app__bacjground"
          src="../assets/header-logo.jpg"
      >
    </router-link>

    <img
        alt=""
        @click="toggleMenu"
        class="v-header-app__menu"
        src="../assets/menu.jpg"
    >

    <img
        class="v-home_header__streaming"
        src="../assets/programme.jpg"
        alt
    >

    <router-link
        to="/streaming"
        class="link-to-streaming"
    ></router-link>


    <transition name="slide-fade">

      <div
          class="header-app-menu"
          v-if="menuOpen"
      >

        <router-link
            @click="toggleMenu"
            to="/timeline"
            class="link-to-timeline"
        ></router-link>

        <img
            class="menu-background"
            src="../assets/menuContent.jpg"
            alt=""
        >
      </div>

    </transition>

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
      windowScrollPosition: 0,
      menuOpen: false,
    }
  },

  computed: {
    headerHeight(): number {
      const value = 250 - this.windowScrollPosition
      if( value > 50 ) return value
      return 50
    },
  },

  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
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

.link-to-timeline {
  display: block;
  width: 100px;
  height: 40px;
  //background: red;
  position: absolute;
  top: 55px;
  left: 520px;
}

.link-to-streaming {
  display: block;
  width: 140px;
  height: 40px;
  position: absolute;
  bottom: 0;
  left: 920px;
  transform: translate(0, 100% );
  z-index: -1;
}

.header-app-menu {
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  display: block;
  transform: translate(0, 100%);
}

.menu-background {
  display: block;
  width: 100%;
}

.v-header-app__bacjground {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.link-to-home {

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

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: transform .3s ease-in-out;
}
.slide-fade-leave-active {
  transition: transform .8s ease-in-out;
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translate(0, 120%);
  opacity: 0;
}

</style>
