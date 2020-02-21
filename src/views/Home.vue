<template>
  <div class="home">
    <HomeHero/>
    <About/>
    <Separator/>
    <HomeCFP/>
    <Separator/>
    <HomeVenue/>
    <HomeSponsors/>
  </div>
</template>

<script>
import About from '@/components/About.vue';
import HomeCFP from '@/components/HomeCFP.vue';
import HomeHero from '@/components/HomeHero.vue';
import HomeSponsors from '@/components/HomeSponsors.vue';
import HomeVenue from '@/components/HomeVenue.vue';
import Separator from '@/components/Separator.vue';

export default {
  name: 'home',
  components: {
    About,
    HomeCFP,
    HomeHero,
    HomeSponsors,
    HomeVenue,
    Separator,
  },
};
</script>
