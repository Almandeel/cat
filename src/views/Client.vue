<template>
    <div class="div">
        <div class="client">
            <vs-row vs-col="12">
                <div class="client-title">
                    <div class="overlay"></div>
                    <h2>عملائنا</h2>
                </div>
                <vs-col vs-w="1"></vs-col>
                <vs-col vs-w="10">
                    <div class="images">
                        <vs-col vs-lg="4" vs-sm="6">
                            <vs-images>
                                <vs-image class="image" src="https://picsum.photos/1000/800?image=16" />
                            </vs-images>
                        </vs-col>
                        <vs-col vs-lg="4" vs-sm="6">
                            <vs-images>
                                <vs-image class="image" src="https://picsum.photos/1000/800?image=16" />
                            </vs-images>
                        </vs-col>
                        <vs-col vs-lg="4" vs-sm="6">
                            <vs-images>
                                <vs-image class="image" src="https://picsum.photos/1000/800?image=16" />
                            </vs-images>
                        </vs-col>
                        <vs-col vs-lg="4" vs-sm="6">
                            <vs-images>
                                <vs-image class="image" src="https://picsum.photos/1000/800?image=16" />
                            </vs-images>
                        </vs-col>
                        <vs-col vs-lg="4" vs-sm="6">
                            <vs-images>
                                <vs-image class="image" src="https://picsum.photos/1000/800?image=16" />
                            </vs-images>
                        </vs-col>
                        <vs-col vs-lg="4" vs-sm="6">
                            <vs-images>
                                <vs-image class="image" src="https://picsum.photos/1000/800?image=16" />
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
    export default {
        data() {
    return {
      backgroundLoading:'#024fff',
    };
  },
  mounted : function() {
    this.openLoadingBackground()
  },
  methods : {
    openLoadingBackground(){
      this.$vs.loading({background:this.backgroundLoading,color:'rgb(255, 255, 255)'})
      setTimeout( ()=> {
        this.$vs.loading.close()
      }, 3000);
    },
  }
    }
</script>

<style lang="scss">
    .client {
        direction: rtl;

        .client-title {
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
        }
    }
</style>