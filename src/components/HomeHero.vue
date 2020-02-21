<template>
  <div class="home-hero">
    <div class="container">
      <div class="home-hero__content">
        <h1 class="wow fadeIn">
          <span class="sr-only">GitConf CO 2020</span>
          <span class="home-hero__title"
                data-heading="GitConf"
                aria-hidden="true">GitConf</span>
          <br>
          <span class="home-hero__title"
                data-heading="/CO.2020"
                aria-hidden="true">/CO.2020</span>
        </h1>
        <div class="home-hero__info wow fadeIn">
          <ul class="home-hero__details">
            <li class="home-hero__name">{{ conferenceName }}</li>
            <li class="home-hero__date">Date: {{ date }}</li>
            <li class="home-hero__venue">City: {{ city }}</li>
          </ul>
          <!-- TODO: Uncomment after adding tito -->
          <!-- <Cta :text="'Buy tickets'" :url="'#'" :icon="'level-up-alt'" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// TODO: Uncomment after adding tito
// import Cta from '@/components/Cta.vue';

import WOW from 'wow.js/dist/wow.min';

export default {
  name: 'hero',
  data() {
    return {
      conferenceName: 'GitConf Colombia',
      date: '27/06/2020',
      city: 'Medellin',
    };
  },
  components: {
    // TODO: Uncomment after adding tito
    // Cta,
  },
  mounted() {
    new WOW().init();
  },
};
</script>

<style lang="scss">
@import '../styles/variables';
@import '../styles/mixins';
@import '../styles/typography';

.home-hero {
  padding-bottom: 45px;

  @include from('lg') {
    padding-bottom: 100px;
  }

  &__content {
    text-align: right;

    h1 {
      text-align: left;
    }
  }

  &__details {
    margin-bottom: 32px;
    margin-top: 50px;
    text-align: left;
  }

  &__info {
    //TODO: Show this section after refactor the component
    display: none;
  }

  &__name {
    font-weight: 700;
  }

  &__title {
    @extend %gc-home-hero;

    margin: 0;
  }
}
</style>
