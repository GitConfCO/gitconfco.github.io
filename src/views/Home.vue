<template>
  <div class="home">
    <HomeHero/>
    <About/>
    <Separator/>
    <HomeSpeakers/>
    <HomeCFP/>
    <Separator/>
    <HomeVenue/>
    <Sponsors/>
  </div>
</template>

<script>
import About from '@/components/About.vue';
import HomeCFP from '@/components/HomeCFP.vue';
import HomeHero from '@/components/HomeHero.vue';
import HomeSpeakers from '@/components/HomeSpeakers.vue';
import Sponsors from '@/components/Sponsors.vue';
import HomeVenue from '@/components/HomeVenue.vue';
import Separator from '@/components/Separator.vue';

export default {
  name: 'home',
  components: {
    About,
    HomeCFP,
    HomeHero,
    HomeSpeakers,
    Sponsors,
    HomeVenue,
    Separator,
  },
};
</script>
