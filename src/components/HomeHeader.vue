<template>
  <section class="v-home_header"
           :style="styleMain"
  >
      <img
          alt=""
          :src="data.text"
          class="v-home_header__text"
          :style="style"
      />
      <img
          alt=""
          :src="data.img"
          class="v-home_header__img"
          :style="style"
      />
  </section>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue"

export default defineComponent({

  name: 'HomeHeader',

  props: {
    data: {
      type: Object as PropType<{ img: string, text: string }>
    },
    animationName: {
      type: String,
      require: true,
    },
    index: {
      type: Number,
      require: true,
    },
  },

  data() {
    return {
      style: {
        // animationDelay: `${ 2 + ( this.timing! * 3) }s`,
        animationName: this.animationName,
      },
      styleMain: {
        zIndex: 50 - this.index!
      }
    }
  }

});
</script>

<style scoped lang="scss">
.v-home_header {
  position: relative;
  width: 100%;
  height: auto;
  animation: image;
  overflow: hidden;
  //background: white;
}

.v-home_header__text {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 2;
}

.v-home_header__img {
  display: block;
  position: relative;
  width: 100%;
  height: auto;
  z-index: 1;
}



</style>
