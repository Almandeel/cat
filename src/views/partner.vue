<template>
    <div class="div">
        <div class="partners">
            <vs-row vs-col="12">
                <div class="partners-title">
                    <div class="overlay"></div>
                    <h2>{{ $t('partners') }}</h2>
                </div>
                <vs-col vs-w="1"></vs-col>
                <vs-col vs-w="10">
                    <div class="images">
                        <vs-col vs-lg="4" vs-sm="6" v-for="(partner, index) in partners" :key="index">
                            <vs-images hover="zoom">
                                <vs-image class="image" :src="'http://catco1.portfolios.spatiulab.com/images/teams/' + partner.image" />
                            </vs-images>
                        </vs-col>
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
            this.openLoadingBackground()
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
            .vs-image--img {
                background-size: cover;
            }
        }
    }
</style>