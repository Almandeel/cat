<template>
  <div class="home">
    <gallery></gallery>
  </div>
</template>

<script>
import gallery from "@/components/GalleryComponent.vue"
export default {
  components : {
    gallery
  },
  data() {
    return {
      backgroundLoading:'#024fff',
    };
  },
  mounted : function() {
    // this.openLoadingBackground()
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