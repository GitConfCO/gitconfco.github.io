<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

export default {
  components: {
    Footer,
    Header,
  },
};
</script>

<style lang="scss">
@import 'styles/variables';

#app {
  background-color: $ebony;
  position: relative;
  z-index: 0;
}
</style>
