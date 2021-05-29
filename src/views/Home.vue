<template>
  <div class="home">
    <div
        class="v-home_home-header"
    >

      <home-header
          v-for="(headerContent, index) of arrayOfHeaderContent"
          :data="headerContent"
          :animation-name="`image-header_${index + 1}`"
          :index="index"
      ></home-header>
    </div>

    <div class="video_image__container">
      <div class="video_image">
        <img class="video_image__0" src="../assets/video/1.jpg" alt="">
        <img class="video_image__1" src="../assets/video/1.jpg" alt="">
        <img class="video_image__2" src="../assets/video/1.jpg" alt="">
      </div>
    </div>

    <div class="video_image__container">
      <div class="video_image video_reverse">
        <img class="video_image__0" src="../assets/video/1.jpg" alt="">
        <img class="video_image__1" src="../assets/video/1.jpg" alt="">
        <img class="video_image__2" src="../assets/video/1.jpg" alt="">
      </div>
    </div>

    <div class="video_image__container">
      <div class="video_image">
        <img class="video_image__0" src="../assets/video/1.jpg" alt="">
        <img class="video_image__1" src="../assets/video/1.jpg" alt="">
        <img class="video_image__2" src="../assets/video/1.jpg" alt="">
      </div>
    </div>

    <img
        class="is-background-app"
        src="../assets/background/bottom.jpg" alt="">

  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue"
import HomeHeader from "@/components/HomeHeader.vue"

export default defineComponent({

  name: 'Home',
  components: {HomeHeader},

  data() {
    return {
      arrayOfHeaderContent: [
        {
          text: '/header_images/210524_interface-web_SD_2.png',
          img:  '/header_images/210524_interface-web_SD_2_header.jpg',
        },
        {
          text: '/header_images/210524_interface-web_SD_22.png',
          img:  '/header_images/210524_interface-web_SD_2_header2.jpg',
        },
        {
          text: '/header_images/210524_interface-web_SD_23.png',
          img:  '/header_images/210524_interface-web_SD_2_header3.jpg',
        },
        {
          text: '/header_images/210524_interface-web_SD_2.png',
          img:  '/header_images/210524_interface-web_SD_2_header.jpg',
        },
        {
          text: '/header_images/210524_interface-web_SD_24.png',
          img:  '/header_images/210524_interface-web_SD_2_header4.jpg',
        },
        {
          text: '/header_images/210524_interface-web_SD_25.png',
          img:  '/header_images/210524_interface-web_SD_2_header5.jpg',
        },
        {
          text: '/header_images/210524_interface-web_SD_26.png',
          img:  '/header_images/210524_interface-web_SD_2_header6.jpg',
        },
        {
          text: '/header_images/210524_interface-web_SD_27.png',
          img:  '/header_images/210524_interface-web_SD_2_header7.jpg',
        },
        {
          text: '/header_images/210524_interface-web_SD_28.png',
          img:  '/header_images/210524_interface-web_SD_2_header8.jpg',
        },
        {
          text: '/header_images/210524_interface-web_SD_29.png',
          img:  '/header_images/210524_interface-web_SD_2_header9.jpg',
        },
      ]
    }
  },

});
</script>

<style lang="scss" scoped>

.home {
  padding-top: 295px;
}

.v-home_home-header {
  width: 1198px;
  margin: auto;
  position: relative;
  height: 492.5px;

  > * {
    position: absolute;
  }
}

.video_image__container {
  overflow: hidden;
  width: 1198px;
  margin: auto;
  position: relative;
  border-top: solid 1px;
  border-bottom: solid 1px;
}

.video_image {
  position: relative;
  width: 100%;
  display: block;
  animation: video-animation 100s linear;
}

.video_reverse {
  animation: video-animation--reverse 100s linear;
}

.video_image__0 {
  position: absolute;
  width: 100%;
  display: block;
  top: 0;
  left: -100%;
}

.video_image__1 {
  position: relative;
  width: 100%;
  display: block;
}

.video_image__2 {
  position: absolute;
  width: 100%;
  display: block;
  top: 0;
  left: 100%;
}

@keyframes video-animation {
  from {
    transform: translate(0, 0);
  }

  to {
    transform: translate(-100%, 0);
  }
}

@keyframes video-animation--reverse {
  from {
    transform: translate(0, 0);
  }

  to {
    transform: translate(100%, 0);
  }
}

</style>
