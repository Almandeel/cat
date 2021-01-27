<template>
    <div>
        <vs-row>
            <vs-col vs-w="1"></vs-col>
            <vs-col vs-w="10">
                <vs-navbar v-model="activeItem" class="nabarx">
                    <div slot="title">
                        <vs-navbar-title class="logo">
                            CATCO
                        </vs-navbar-title>
                    </div>

                    <vs-navbar-item index="0">
                        <router-link :to="'/' + $i18n.locale + '/' ">{{ $t('home') }}</router-link>
                    </vs-navbar-item>

                    <vs-navbar-item index="1">
                        <router-link :to="'/' + $i18n.locale + '/about' ">{{ $t('about') }}
                        </router-link>
                    </vs-navbar-item>

                    <vs-navbar-item index="2">
                        <router-link :to="'/' + $i18n.locale + '/clients' ">{{ $t('clients') }}
                        </router-link>
                    </vs-navbar-item>

                    <vs-navbar-item index="3">
                        <router-link :to="'/' + $i18n.locale + '/partners' ">{{ $t('partners') }}
                        </router-link>
                    </vs-navbar-item>

                    <vs-navbar-item index="3">
                        <router-link :to="'/' + $i18n.locale + '/products' ">{{ $t('blog') }}
                        </router-link>
                    </vs-navbar-item>

                    <vs-navbar-item index="4">
                        <router-link v-if="locale == 'ar'" @click="chengeLang()" to="/">{{ $t('en') }}</router-link>
                        <router-link v-if="locale == 'en'" @click="chengeLang()" to="/">{{ $t('ar') }}</router-link>
                    </vs-navbar-item>
                </vs-navbar>
            </vs-col>
            <vs-col vs-w="1"></vs-col>
        </vs-row>

    </div>
</template>
<script>
    import {
        i18n
    } from "../main.js";
    export default {
        data: () => ({
            locale: i18n.locale,
            activeItem: 0,
            backgroundLoading: '#024fff',
        }),
        methods: {
            chengeLang() {
                if (this.$i18n.locale == 'ar') {
                    this.$i18n.locale = 'en'
                } 
                else {
                    this.$i18n.locale = 'ar'
                    // window.location.reload()
                }
                                    window.location.reload()


            }
        },
    }
</script>

<style lang="scss">
    $main-color : #024fff;

    .logo {
        color: $main-color !important;
    }

    .vs-navbar--item:hover a {
        transition: all .5s ease-in-out;
        color: #024fff
    }

    .router-link-active {
        color: #024fff !important
    }

    .nabarx {
        padding: 10px 0;
    }

    .vs-navbar-color-transparent {
        direction: rtl;
    }
</style>