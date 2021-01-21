<template>
  <div class="about">
    <vs-row vs-col="12">
      <vs-col vs-w="1"></vs-col>
        <vs-col vs-w="10">

          <vs-row vs-col="12">
            <vs-col vs-lg="6" vs-sm="12" vs-justfy="center" vs-align="center">
              <vs-images hover="scale">
                <vs-image class="image" src="https://picsum.photos/1000/800?image=16" />
              </vs-images>
            </vs-col>

            <vs-col vs-lg="6" vs-sm="12" vs-justify="center" vs-align="center">
              <div class="text">
                <h3>اسم العمل</h3>
                <p>
                  "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور
                  أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد
                  أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس
                  أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت
                  نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا
                  كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم."
                </p>
              </div>
            </vs-col>
          </vs-row>

          <div class="items">
            <vs-divider position="center">
              الرؤيا و الاهداف
            </vs-divider>
            <div class="box">

              <vs-col vs-lg="6" vs-sm="12"  vs-justfy="center" vs-align="center">
                <div class="box-body">
                  <vs-row>
                    <vs-col vs-w="4">
                      <vs-col vs-justfy="center" vs-align="center">
                        <img width="100%" src="https://picsum.photos/1000/800?image=16" alt="">
                      </vs-col>
                    </vs-col>
                    <vs-col vs-w="8">
                      <div class="description">
                        <h3>الرؤيا</h3>
                        <p>لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور</p>
                      </div>
                    </vs-col>
                  </vs-row>
                </div>
              </vs-col>

              <vs-col vs-lg="6" vs-sm="12" vs-justfy="center" vs-align="center">
                <div class="box-body">
                  <vs-row>
                    <vs-col vs-w="4">
                      <vs-col vs-justfy="center" vs-align="center">
                        <img width="100%" src="https://picsum.photos/1000/800?image=16" alt="">
                      </vs-col>
                    </vs-col>
                    <vs-col vs-w="8">
                      <div class="description">
                        <h3>الرؤيا</h3>
                        <vs-list>
                          <vs-list-item title="لوريم ايبسوم دولار سيت أميت"></vs-list-item>
                          <vs-list-item title="لوريم ايبسوم دولار سيت أميت"></vs-list-item>
                          <vs-list-item title="لوريم ايبسوم دولار سيت أميت"></vs-list-item>
                        </vs-list>
                      </div>
                    </vs-col>
                  </vs-row>
                </div>
              </vs-col>

              <vs-col vs-lg="6" vs-sm="12" vs-justfy="center" vs-align="center">
                <div class="box-body">
                  <vs-row>
                    <vs-col vs-w="4">
                      <vs-col vs-justfy="center" vs-align="center">
                        <img width="100%" src="https://picsum.photos/1000/800?image=16" alt="">
                      </vs-col>
                    </vs-col>
                    <vs-col vs-w="8">
                      <div class="description">
                        <h3>الرؤيا</h3>
                        <vs-list>
                          <vs-list-item title="لوريم ايبسوم دولار سيت أميت"></vs-list-item>
                          <vs-list-item title="لوريم ايبسوم دولار سيت أميت"></vs-list-item>
                          <vs-list-item title="لوريم ايبسوم دولار سيت أميت"></vs-list-item>
                        </vs-list>
                      </div>
                    </vs-col>
                  </vs-row>
                </div>
              </vs-col>

              <vs-col vs-lg="6" vs-sm="12" vs-justfy="center" vs-align="center">
                <div class="box-body">
                  <vs-row>
                    <vs-col vs-w="4">
                      <vs-col vs-justfy="center" vs-align="center">
                        <img width="100%" src="https://picsum.photos/1000/800?image=16" alt="">
                      </vs-col>
                    </vs-col>
                    <vs-col vs-w="8">
                      <div class="description">
                        <h3>الرؤيا</h3>
                        <p>لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور</p>
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
  .about {
    margin-top: 2%;
    text-align: center;

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
          direction: rtl;
          text-align: justify;
          background-color: #eee;
          height: 50vh;
          padding: 40px 30px
        }
      }
    }

  }
</style>