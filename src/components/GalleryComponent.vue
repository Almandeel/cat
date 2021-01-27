<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="(slider, index) in sliders" :key="index"
      :style="{backgroundImage: 'url(http://catco1.portfolios.spatiulab.com/images/sliders/'+ slider.image +')' }"
      :class="{slide :'slide-' + index}"></swiper-slide>
    <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
  </swiper>
</template>

<script>
  import {
    Swiper,
    SwiperSlide
  } from 'vue-awesome-swiper'
  import axios from "axios"
  export default {
    name: 'swiper-example-fade-effect',
    title: 'Fade effect',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        sliders: [],
        swiperOption: {
          spaceBetween: 30,
          effect: 'fade',
          centeredSlides: true,
          autoplay: {
            delay: 3500,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    methods: {
      slider() {
        axios.get("http://catco1.portfolios.spatiulab.com/api/home").then((result) => {
          this.sliders = result.data
        })
      }
    },
    mounted: function () {
      this.slider()
    }
  }
</script>

<style lang="scss" scoped>
  .swiper {
    height: 91vh !important;
    .swiper-slide {
      background-position: center;
      background-size: cover;
    }
  }
</style>