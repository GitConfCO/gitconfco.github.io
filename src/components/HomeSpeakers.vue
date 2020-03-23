<template>
  <section class="home-speakers">
    <div class="container">
      <h1 class="wow fadeIn">
        <span class="sr-only">Confirmed speakers</span>
        <span class="home-speakers__title"
              data-heading="Confirmed"
              aria-hidden="true">Confirmed</span>
        <br>
        <span class="home-speakers__title"
              data-heading="/Speakers"
              aria-hidden="true">/Speakers</span>
      </h1>
      <div class="home-speakers__container">
        <div v-for="item in speakers"
              :key="item.name"
              class="home-speakers__item wow fadeIn">
          <img class="home-speakers__picture"
            :src="getImage('speakers', item.image)"
            :alt="item.name" />
          <cta :text="item.name"
            :url="item.url"
            icon="plus-square"
            :isRouterLink="true" />
        </div>
        <div class="home-speakers__item wow fadeIn">
          <img class="home-speakers__picture"
            :src="getImage('speakers', 'person.png')"
            alt="You?">
          <cta text="You?" url="https://www.papercall.io/gitconfco2020"
            icon="plus-square" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getImage } from '@/utils/media';
import Cta from '@/components/Cta.vue';
import speakers from '@/assets/data/speakers';
import WOW from 'wow.js/dist/wow.min';

export default {
  name: 'home-speakers',
  data() {
    return {
      speakers,
    };
  },
  components: {
    Cta,
  },
  methods: {
    getImage,
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

.home-speakers {
  @extend %gc-section-padding;

  &__container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 45px;

    @include from('md') {
      justify-content: flex-start;
    }
  }

  &__item {
    margin-bottom: 30px;
    max-width: 300px;
    padding-right: 10px;

    @include from('md') {
      flex-basis: 50%;
    }

    @include from('lg') {
      flex-basis: 33%;
    }
  }

  &__picture {
    border: 2px solid $corn;
    border-bottom: none;
    display: block;
    height: 380px;
    margin: 0 auto;
    object-fit: cover;
    width: 80%;

    @include from('md') {
      margin: 0;
    }
  }

  &__title {
    @extend %gc-section-title;
  }
}
</style>
