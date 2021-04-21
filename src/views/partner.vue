<template>
    <div class="div">
        <div class="partners">
            <vs-row vs-col="12">
                <div class="partners-title">
                    <div class="overlay"></div>
                    <h2 :class="{ ltr: !isRtl }">{{ $t('partners') }}</h2>
                </div>
                <vs-col vs-w="1"></vs-col>
                <vs-col vs-w="10">
                    <div class="galary" style="
                        display: flex;
                        flex-wrap: wrap;
                        align-content: flex-start;
                        justify-content: space-between;
                    ">
                        <div href="#" v-for="(partner, index) in partners" :key="index" style="
                            flex-grow: 1;
                            flex-basis: 200px;
                            max-width: 150px;
                            margin: 25px;
                        ">
                            <img :src="'http://catco1.portfolios.spatiulab.com/images/teams/' + partner.image" alt="" srcset="" style="height: 100%; width: 100%;">
                        </div>
                    </div>
                </vs-col>
                <vs-col vs-w="1"></vs-col>
            </vs-row>
        </div>
    </div>
</template>


<script>
    import axios from "axios";
    export default {
        data() {
            return {
                backgroundLoading: '#024fff',
                partners : []
            };
        },
        mounted: function () {
            // this.openLoadingBackground()
            this.getDate()
        },
        methods: {
            openLoadingBackground() {
                this.$vs.loading({
                    background: this.backgroundLoading,
                    color: 'rgb(255, 255, 255)'
                })
                setTimeout(() => {
                    this.$vs.loading.close()
                }, 3000);
            },
            getDate() {
                axios.get('http://catco1.portfolios.spatiulab.com/api/partners').then((result) => {
                    this.partners = result.data
                })
            }
        },
        computed: {
            isRtl() {
                return this.locale == 'ar';
            }
        }
    }
</script>

<style lang="scss">
    .partners {
        direction: rtl;

        .partners-title {
            z-index: 2;
            color: #fff;
            height: 100%;
            width: 100%;
            padding: 5% 0;
            background-image: url('../images/page.png');
            position: relative;

            h2 {
                padding: 0 10%;
            }

            h2:after {
                content: "";
                width: 2%;
                height: 50%;
                color: #fff;
                border: 1px solid #fff;
                display: block;
            }

            .overlay {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background-color: rgba(14, 30, 168, 0.226);
                width: 100%;
                height: 100%;
                z-index: -1;
            }
        }

        .image {
            width: 100%;
            margin-bottom: 2%;
            max-height: 500px;
            overflow: auto;
            .vs-image--img {
                background-size: cover;
            }
        }
    }

    .ltr {
        direction: ltr !important;
    }

.gallery {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
}

.gallery a {
  flex-grow: 1;
  flex-basis: 125px;
  max-width: 300px;
  margin: 5px;
}

.gallery img {
  height: 100%;
  width: 100%;
}
</style>