<template>
  <section class="home-hero">
    <div class="container">
      <div class="home-hero__content">
        <h1 class="wow fadeIn home-hero__heading">
          <span class="home-hero__heading-box"></span>
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
  </section>
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
  @include from('md') {
    padding-top: 60px;
  }

  @include from('lg') {
    padding-bottom: 100px;

    &__info {
      vertical-align: bottom;
      display: inline-block;
      margin-bottom: -100px;
      padding-left: 100px;
      width: 40%;
    }
  }

  &__content {
    text-align: right;

    @include from('lg') {
      text-align: left;
    }
  }

  &__heading {
    margin-right: 20px;
    padding: 20px;
    position: relative;
    text-align: left;

    @include from('md') {
      padding: 30px;
    }

    @include from('lg') {
      display: inline-block;
      margin: 0;
      padding-left: 140px;
      padding-top: 40px;
      width: 60%;
    }

    &-box {
      @include gc-double-box($corn, $ebony, 20px);

      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;

      @include from('lg') {
        &:after {
          left: 60px;
          top: 60px;
        }
      }
    }
  }

  &__details {
    margin-top: 40px;
    text-align: right;

    @include from('lg') {
      text-align: left;
    }
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
