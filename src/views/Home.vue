<template>
  <div class="home">
    <home-hero/>
    <covid-banner/>
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
import CovidBanner from '@/components/CovidBanner.vue';
import HomeCfp from '@/components/HomeCFP.vue';
import HomeHero from '@/components/HomeHero.vue';
import HomeSpeakers from '@/components/HomeSpeakers.vue';
import HomeVenue from '@/components/HomeVenue.vue';
import Separator from '@/components/Separator.vue';
import Sponsors from '@/components/Sponsors.vue';

export default {
  name: 'home',
  components: {
    About,
    CovidBanner,
    HomeCfp,
    HomeHero,
    HomeSpeakers,
    HomeVenue,
    Separator,
    Sponsors,
  },
};
</script>
