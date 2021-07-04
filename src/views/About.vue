<template>
  <div class="about">
    <vs-row vs-col="12">
      <vs-col vs-w="1"></vs-col>
      <vs-col vs-w="10">

        <vs-row vs-col="12" v-if="main_data !== {}">
          <vs-col vs-lg="6" vs-sm="12" vs-justfy="center" vs-align="center">
            <vs-images hover="scale">
              <vs-image class="image" :src="'https://catco1.portfolios.spatiulab.com/images/informations/' + main_data.image" />
            </vs-images>
          </vs-col>
          <vs-col vs-lg="6" vs-sm="12" vs-justify="left" vs-align="left" dir="ltr">
            <div class="text">
              <h3 :class="{ ltr: !isRtl }">{{ main_data.title[locale] }}</h3>
              <p class="description" :class="{ ltr: !isRtl }">
                {{ main_data.description[locale] }}
              </p>
            </div>
          </vs-col>
        </vs-row>

        <div class="items">
          <vs-divider position="center">
            {{ $t("vision") }}
          </vs-divider>
          <div class="box" v-if="abouts !== {}">

            <vs-col vs-lg="6" vs-sm="12" vs-justfy="center" vs-align="center" v-for="(about, index) in abouts" :key="index">
              <div class="box-body">
                <vs-row>
                  <vs-col vs-w="4">
                    <vs-col vs-justfy="center" vs-align="center">
                      <img width="100%"
                        :src="'https://catco1.portfolios.spatiulab.com/images/informations/' + about.image " alt="">
                    </vs-col>
                  </vs-col>
                  <vs-col vs-w="8">
                    <div class="description">
                      <h3>{{ about.title[locale] }}</h3>
                      <p>{{ about.description[locale] }}</p>
                    </div>
                  </vs-col>
                </vs-row>
              </div>
            </vs-col>
          </div>
        </div>

      </vs-col>
      <vs-col vs-w="1"></vs-col>

    </vs-row>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    data() {
      return {
        locale: localStorage.getItem('lang'),
        main_data: {},
        abouts: [],
        backgroundLoading: '#024fff',
      };
    },
    mounted: function () {
      this.getData()
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
      getData() {
        axios.get("https://catco1.portfolios.spatiulab.com/api/about").then((result) => {
          this.main_data = result.data[0]
          this.abouts = result.data[1]
          // console.log(this.abouts)
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
  .about {
    margin-top: 2%;
    text-align: left;

    .text {
      margin-top: 10%;
      line-height: 1.6;
      direction: rtl;
      text-align: justify;
      color: #333;

      p {
        margin-top: 15px;
      }
    }

    .image {
      width: 60%;
      margin: auto;

    }

    .items {
      margin: 5% 0;

      .box {
        margin-top: 30px;
        height: 200px;

        .box-body {
          box-sizing: border-box;
          padding-left: 5%;
          padding-bottom: 5%;

          h3 {
            margin: 10px 0;
          }

          p {
            line-height: 1.5;
          }
        }

        img {
          height: 50vh;
          width: 30vh;
        }

        .description {
          direction: ltr;
          text-align: left;
          background-color: #eee;
          height: 50vh;
          padding: 40px 30px
        }
      }
    }

    .vs-image--img {
      background-repeat: no-repeat;
      background-size: contain;
    }

  }
  .ltr {
    direction: ltr;
  }
</style>