<template>
  <div class="home">
    <div
        class="v-home_home-header"
    >
      <div
          class="v-home_home-header__container"
      >
        <home-header
            v-for="(headerContent, index) of arrayOfHeaderContent"
            :data="headerContent"
            :animation-name="`image-header_${index + 1}`"
            :index="index"
        ></home-header>
      </div>
    </div>

    <div class="video_image__container">
      <div class="video_image film_1">
        <img class="video_image__0" src="../assets/video/1.jpg" alt="">
        <img class="video_image__1" src="../assets/video/1.jpg" alt="">
        <img class="video_image__2" src="../assets/video/1.jpg" alt="">
        <div class="video_content_0"><video src="../assets/video/mother.mp4"
                                            muted
                                            loop
                                            autoplay ></video></div>
        <div class="video_content_1"><video src="../assets/video/mother.mp4"
                                            muted
                                            loop
                                            autoplay ></video></div>

        <div class="video_content_2"><video src="../assets/video/mother.mp4"
                                            muted
                                            loop
                                            autoplay ></video></div>
      </div>
    </div>

    <div class="video_image__container">
      <div class="video_image video_reverse film_2">
        <img class="video_image__0" src="../assets/video/2.jpg" alt="">
        <img class="video_image__1" src="../assets/video/2.jpg" alt="">
        <img class="video_image__2" src="../assets/video/2.jpg" alt="">
        <div class="video_content_0"><video src="../assets/video/videoplayback_1.mp4"
                                            muted
                                            loop
                                            autoplay ></video></div>
        <div class="video_content_1"><video src="../assets/video/videoplayback_1.mp4"
                                            muted
                                            loop
                                            autoplay ></video></div>

        <div class="video_content_2"><video src="../assets/video/videoplayback_1.mp4"
                                            muted
                                            loop
                                            autoplay ></video></div>
      </div>
    </div>

    <router-link
        to="/particules"
        class="video_image__container"
    >
      <div class="video_image film_3">
        <img class="video_image__0" src="../assets/video/3.jpg" alt="">
        <img class="video_image__1" src="../assets/video/3.jpg" alt="">
        <img class="video_image__2" src="../assets/video/3.jpg" alt="">
        <div class="video_content_0"><video src="../assets/video/particules.mp4"
                                            muted
                                            loop
                                            autoplay ></video></div>
        <div class="video_content_1"><video src="../assets/video/particules.mp4"
                                            muted
                                            loop
                                            autoplay ></video></div>

        <div class="video_content_2"><video src="../assets/video/particules.mp4"
                                            muted
                                            loop
                                            autoplay ></video></div>

        <div class="video_content_3"><video src="../assets/video/particules.mp4"
                                            muted
                                            loop
                                            autoplay ></video></div>
      </div>
    </router-link>

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
          // text: '/Plaza/header_images/210524_interface-web_SD_2.png',
          // img:  '/Plaza/header_images/210524_interface-web_SD_2_header.jpg',
        },
        {
          text: '/header_images/210524_interface-web_SD_22.png',
          img:  '/header_images/210524_interface-web_SD_2_header2.jpg',
          // text: '/Plaza/header_images/210524_interface-web_SD_22.png',
          // img:  '/Plaza/header_images/210524_interface-web_SD_2_header2.jpg',
        },
        {
          text: '/header_images/210524_interface-web_SD_23.png',
          img:  '/header_images/210524_interface-web_SD_2_header3.jpg',
          // text: '/Plaza/header_images/210524_interface-web_SD_23.png',
          // img:  '/Plaza/header_images/210524_interface-web_SD_2_header3.jpg',
        },
          {
            text: '/header_images/210524_interface-web_SD_2.png',
            img:  '/header_images/210524_interface-web_SD_2_header.jpg',
            // text: '/Plaza/header_images/210524_interface-web_SD_2.png',
            // img:  '/Plaza/header_images/210524_interface-web_SD_2_header.jpg',
          },
        // {
        //   text: '/header_images/210524_interface-web_SD_24.png',
        //   img:  '/header_images/210524_interface-web_SD_2_header4.jpg',
        // },
        // {
        //   text: '/header_images/210524_interface-web_SD_25.png',
        //   img:  '/header_images/210524_interface-web_SD_2_header5.jpg',
        // },
        // {
        //   text: '/header_images/210524_interface-web_SD_26.png',
        //   img:  '/header_images/210524_interface-web_SD_2_header6.jpg',
        // },
        // {
        //   text: '/header_images/210524_interface-web_SD_27.png',
        //   img:  '/header_images/210524_interface-web_SD_2_header7.jpg',
        // },
        // {
        //   text: '/header_images/210524_interface-web_SD_28.png',
        //   img:  '/header_images/210524_interface-web_SD_2_header8.jpg',
        // },
        // {
        //   text: '/header_images/210524_interface-web_SD_29.png',
        //   img:  '/header_images/210524_interface-web_SD_2_header9.jpg',
        // },
        // {
        //   text: '/header_images/210524_interface-web_SD_2.png',
        //   img:  '/header_images/210524_interface-web_SD_2_header.jpg',
        // },
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
  overflow: hidden;
}

.v-home_home-header__container {
  position: relative;
  animation: header-home-anim;
  animation-duration: 18s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  display: flex;
  flex-wrap: nowrap;

  > * {
    width: 100%;
    flex-shrink: 0;
  }
}

.video_image__container {
  overflow: hidden;
  width: 1198px;
  margin: auto;
  position: relative;
  border-top: solid 1px;
  border-bottom: solid 1px;
  display: flex;
  flex-direction: row;
  align-content: center;
  flex-wrap: nowrap;
  color: black;
}

.video_image {
  position: relative;
  width: 100%;
  display: block;
  animation: video-animation 75s linear;
  animation-iteration-count: infinite;
}

.video_reverse {
  animation: video-animation--reverse 75s linear;
  animation-iteration-count: infinite;
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

.video_content_0,
.video_content_1,
.video_content_2,
.video_content_3 {
  position: absolute;
  height: 100%;
  width: 602px;
  top: 0;
  z-index: 1;

  > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.film_1 {
  .video_content_0 {
    left: 0;
  }
  .video_content_1 {
    left: 1198px;
  }
  .video_content_2 {
    left: -1201px;
  }
}
.film_2 {
  .video_content_0 {
    left: -1200px;
  }
  .video_content_1 {
    left: 0;
  }
  .video_content_2 {
    left: 1198px;
  }
}
.film_3 {
  .video_content_0 {
    left: -1310px;
  }
  .video_content_1 {
    left: -112px;
  }
  .video_content_2 {
    left: 1086px;
  }

  .video_content_3 {
    left: 2284px;
  }
}

.film_4 {

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

@keyframes header-home-anim {
  0% {
    transform: translate(0, 0);
  }

  27.5% {
    transform: translate(0, 0);
  }

  33% {
    transform: translate(-100%, 0);
  }

  60.5% {
    transform: translate(-100%, 0);
  }

  66% {
    transform: translate(-200%, 0);
  }

  93.5% {
    transform: translate(-200%, 0);
  }

  100% {
    transform: translate(-300%, 0);
  }
}

</style>

<style lang="scss">
.video_image__container:nth-child(4) {
  border-bottom: none;
}
</style>
