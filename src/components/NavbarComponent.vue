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
                        <router-link to="/">{{ $t('home') }}</router-link>
                    </vs-navbar-item>

                    <vs-navbar-item index="1">
                        <router-link to="about">{{ $t('about') }}
                        </router-link>
                    </vs-navbar-item>

                    <vs-navbar-item index="2">
                        <router-link to="/clients">{{ $t('clients') }}
                        </router-link>
                    </vs-navbar-item>

                    <vs-navbar-item index="3">
                        <router-link to="/partners">{{ $t('partners') }}
                        </router-link>
                    </vs-navbar-item>

                    <vs-navbar-item index="3">
                        <router-link to="/products">{{ $t('blog') }}
                        </router-link>
                    </vs-navbar-item>

                    <vs-navbar-item index="3">
                        <router-link to="/contacts">{{ $t('contacts') }}
                        </router-link>
                    </vs-navbar-item>

                    <vs-navbar-item index="4">
                        <p  v-if="locale == 'ar'" @click="chengeLang('en')" >{{ $t('en') }}</p>
                        <p  v-if="locale == 'en'" @click="chengeLang('ar')" >{{ $t('ar') }}</p>
                    </vs-navbar-item>
                </vs-navbar>
            </vs-col>
            <vs-col vs-w="1"></vs-col>
        </vs-row>

    </div>
</template>
<script>
    export default {
        data: () => ({
            locale: localStorage.getItem("lang") || "en",
            activeItem: 0,
            backgroundLoading: '#024fff',
        }),
        methods: {
            chengeLang(lang) {
                localStorage.setItem("lang", lang)
                this.$i18n.locale = lang
                window.location.reload()
            }
        },
    }
</script>

<style lang="scss" >
    $main-color : #024fff;

    .logo {
        color: $main-color !important;
    }

    .vs-navbar--item p {
        cursor: pointer;
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