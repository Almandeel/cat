<template>
    <div class="example-3d">
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="(product, index) in products" :key="index"
                :style="{backgroundImage : 'url(https://catco1.portfolios.spatiulab.com/images/services/'+  product.image  +')'}">
                {{ product.name[locale] }}
                <div class="overlay"></div>
            </swiper-slide>
            <!-- <swiper-slide>Product 2</swiper-slide>
            <swiper-slide>Product 3</swiper-slide>
            <swiper-slide>Product 4</swiper-slide>
            <swiper-slide>Product 5</swiper-slide>
            <swiper-slide>Product 6</swiper-slide>
            <swiper-slide>Product 7</swiper-slide> -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    import {
        Swiper,
        SwiperSlide
    } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    import axios from "axios"


    export default {
        name: 'swiper-example-3d-coverflow',
        title: '3D Coverflow effect',
        components: {
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                locale : localStorage.getItem('lang'),
                swiperOption: {
                    effect: 'coverflow',
                    grabCursor: true,
                    centeredSlides: true,
                    slidesPerView: 'auto',
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true
                    },
                    pagination: {
                        el: '.swiper-pagination'
                    }
                },
                products: []
            }
        },
        methods: {
            getProducts() {
                axios.get("https://catco1.portfolios.spatiulab.com/api/products").then((result) => {
                    this.products = result.data
                })
            }
        },
        mounted: function () {
            this.getProducts()
        }
    }
</script>

<style lang="scss" scoped>
    .example-3d {
        width: 100%;
        height: 400px;
        padding-top: 50px;
        padding-bottom: 50px;
    }

    .swiper {
        height: 100%;
        width: 100%;

        .swiper-slide {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 300px;
            height: 300px;
            text-align: center;
            font-weight: bold;
            font-size: 25px;
            background-color: #2C8DFB;
            background-position: center;
            background-size: cover;
            color: #fff;
            border-radius: 20px;
        }

        .swiper-pagination {
            /deep/ .swiper-pagination-bullet.swiper-pagination-bullet-active {
                background-color: #fff;
            }
        }

        .overlay {
            position: absolute;
            top:0;
            bottom:0;
            background-color: rgba(34, 34, 34, 0.329);
            height: 100%;
            width: 100%;
            z-index: -1;
            border-radius: 20px;
        }
    }
</style>