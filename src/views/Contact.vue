<template>
    <div class="contact">
        <vs-row>
            <div class="contact-title">
                <div class="overlay"></div>
                <h2>{{ $t('contacts') }}</h2>
            </div>
            <vs-col vs-w="1"></vs-col>
            <vs-col vs-w="10">
                
            </vs-col>
            <vs-col vs-w="1"></vs-col>
        </vs-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                locale: localStorage.getItem('lang'),
                backgroundLoading: '#024fff',
            };
        },
        mounted: function () {
            this.openLoadingBackground()
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
        }
    }
</script>

<style lang="scss" scoped>
    .contact {
        direction: rtl;

        .contact-title {
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
    }
</style>