<template>
    <div class="posts">
        <div class="posts-title">
            <div class="overlay"></div>
            <h2>{{ $t('blog') }}</h2>
        </div>

        <vs-row vs-w="12">
            <vs-col class="cardx" vs-justify="center" vs-align="center" vs-lg="4" vs-sm="12" v-for="(product, index) in products" :key="index" >
                <vs-card  fixedHeight>
                    <div class="header" slot="header">
                        <h3>
                            {{  product.name[locale]  }}
                        </h3>
                    </div>
                    <div slot="media">
                        <img :src="'http://catco1.portfolios.spatiulab.com/images/services/' +  product.image">
                    </div>
                    <div>
                        <span>
                            {{  product.description[locale]  }}
                        </span>
                    </div>

                </vs-card>
            </vs-col>
        </vs-row>

    </div>
</template>

<script>
    import axios from "axios"
    export default {
        data() {
            return {
                locale : localStorage.getItem('lang'),
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

            .vs-card--header {
                background-color: #164483;
                color:#fff;
                text-align:center
            }
        }
    }
</style>