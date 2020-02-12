<template>
  <div class="home">
    <HomeHero/>
    <About/>
    <Separator/>
    <HomeSpeakers/>
    <HomeVenue/>
    <HomeSponsors/>
  </div>
</template>

<script>
import About from '@/components/About.vue';
import HomeHero from '@/components/HomeHero.vue';
import HomeSpeakers from '@/components/HomeSpeakers.vue';
import HomeSponsors from '@/components/HomeSponsors.vue';
import HomeVenue from '@/components/HomeVenue.vue';
import Separator from '@/components/Separator.vue';

export default {
  name: 'home',
  components: {
    About,
    HomeHero,
    HomeSpeakers,
    HomeSponsors,
    HomeVenue,
    Separator,
  },
};
</script>
