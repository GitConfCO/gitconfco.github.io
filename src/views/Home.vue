<template>
  <div class="home">
    <home-hero/>
    <about/>
    <separator/>
    <home-speakers/>
    <separator/>
    <home-cfp/>
    <separator/>
    <home-venue/>
    <sponsors/>
  </div>
</template>

<script>
import About from '@/components/About.vue';
import HomeCfp from '@/components/HomeCFP.vue';
import HomeHero from '@/components/HomeHero.vue';
import HomeSpeakers from '@/components/HomeSpeakers.vue';
import Sponsors from '@/components/Sponsors.vue';
import HomeVenue from '@/components/HomeVenue.vue';
import Separator from '@/components/Separator.vue';

export default {
  name: 'home',
  components: {
    About,
    HomeCfp,
    HomeHero,
    HomeSpeakers,
    Sponsors,
    HomeVenue,
    Separator,
  },
};
</script>
