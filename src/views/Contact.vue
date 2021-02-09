<template>
    <div class="contact">
        <vs-row>
            <div class="contact-title">
                <div class="overlay"></div>
                <h2>{{ $t('contacts') }}</h2>
            </div>
            <vs-col vs-w="1"></vs-col>
            <vs-col vs-w="10">
                <div class="contact-section">
                    <vs-col vs-w="6" vs-lg="6" vs-sm="12" style="text-align:center">
                        <img style="width:100%; margin-bottom:5%" src="../assets/logo.png" alt="logo" srcset="">
                    </vs-col>
                    <vs-col vs-w="6" vs-lg="6" vs-sm="12">
                        <div class="contact-body">
                            <p>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 10" fill="#dd972e" width="30px" height="30px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>  
                                </span>
                                P.O Box 2784 Dammam 32416
                                <br>
                                Kingdom of Saudi Arabia
                            </p>
                            <p>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 10" fill="#dd972e" width="30px" height="30px"><path d="M0 0h24v24H0z" fill="none"/><path d="M17.38 10.79l-2.2-2.2c-.28-.28-.36-.67-.25-1.02.37-1.12.57-2.32.57-3.57 0-.55.45-1 1-1H20c.55 0 1 .45 1 1 0 9.39-7.61 17-17 17-.55 0-1-.45-1-1v-3.49c0-.55.45-1 1-1 1.24 0 2.45-.2 3.57-.57.35-.12.75-.03 1.02.24l2.2 2.2c2.83-1.45 5.15-3.76 6.59-6.59z"/></svg>
                                </span>
                                <a href="tel:+966138346737">+966 13 8346737</a>
                            </p>
                            <p>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 10" fill="#dd972e" width="30px" height="30px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>                        
                                </span>
                                <a href="https://www.catco.com.sa" target="_blank" rel="noopener noreferrer">catco.com.sa</a>
                            </p>
                            <p>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 10" fill="#dd972e" width="30px" height="30px"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                                </span>
                                <a href="mailto:info@catco.com.sa">info@catco.com.sa</a>
                            </p>
                        </div>
                    </vs-col>
                </div>
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
            // this.openLoadingBackground()
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

        .contact-section {
            margin: 9% 0;
        }

        .contact-body {
            border: 1px solid #dd972e;
            padding:20px;
            direction: ltr;
            p {
                color : #444;
                font-size:20px
            }
        }
    }
</style>