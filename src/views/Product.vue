<template>
    <div class="posts">
        <div class="posts-title">
            <div class="overlay"></div>
            <h2>{{ $t('blog') }}</h2>
        </div>

        <vs-row vs-w="12">
            <vs-col v-for="(product,index) in products" :key="index" class="cardx" type="flex" vs-justify="center"
                vs-align="center" vs-w="12">
                <div v-if="index % 2 == 0">
                    <vs-card fixedHeight>
                        <vs-row>
                            <vs-col vs-lg="4" vs-sm="12">
                                <div>
                                    <img
                                        :src="'http://catco1.portfolios.spatiulab.com/images/services/' +  product.image" style="width:100%">
                                </div>
                            </vs-col>
                            <vs-col class="title" vs-lg="8" vs-sm="12">
                                <div>
                                    <h3>
                                        {{ product.name[locale] }}
                                    </h3>
                                </div>
                                <div>
                                    <p>
                                        {{ product.description[locale] }}
                                    </p>
                                </div>
                            </vs-col>
                        </vs-row>
                    </vs-card>
                </div>
                <div v-else>
                    <vs-card style="direction:ltr" fixedHeight>
                        <vs-row>
                            <vs-col vs-lg="4" vs-sm="12">
                                <div>
                                    <img
                                        :src="'http://catco1.portfolios.spatiulab.com/images/services/' +  product.image" style="width:100%">
                                </div>
                            </vs-col>
                            <vs-col class="title" vs-lg="8" vs-sm="12">
                                <div>
                                    <h3>
                                        {{ product.name[locale] }}
                                    </h3>
                                </div>
                                <div>
                                    <p>
                                        {{ product.description[locale] }}
                                    </p>
                                </div>
                            </vs-col>
                        </vs-row>
                    </vs-card>
                </div>
            </vs-col>
        </vs-row>

    </div>
</template>

<script>
    import axios from "axios"
    export default {
        data() {
            return {
                locale: localStorage.getItem('lang'),
                backgroundLoading: '#024fff',
                products: []
            };
        },
        methods: {
            getProducts() {
                axios.get("http://catco1.portfolios.spatiulab.com/api/products").then((result) => {
                    this.products = result.data
                })
            }
        },
        mounted: function () {
            this.getProducts()
        }
    }
</script>

<style lang="scss">
    .posts {
        direction: rtl;

        .posts-title {
            z-index: 2;
            color: #fff;
            height: 100%;
            width: 100%;
            padding: 5% 0;
            background-image: url('../images/posts.jpg');
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

        .cardx {
            padding: 25px;
            margin-bottom: 15px;

            .header {
                background-color: aqua;
            }

            .title {
                padding: 60px 20px;
                text-align: center;

                h3 {
                    font-size: 30px;
                    margin-bottom: 20px;
                }

                p {
                    font-size: 18px;
                    line-height: 2;
                }

            }
        }
    }
</style>