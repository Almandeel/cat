<template>
  <div id="app">
    <div>
      <Navbar />
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/NavbarComponent.vue";
export default {
  components : {
    Navbar
  },
  watch: {
    '$route' (to) {
      document.title = to.meta.title || 'Your Website'
    }
  },
}
</script>

