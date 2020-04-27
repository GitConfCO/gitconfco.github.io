<template>
  <section class="covid-banner">
    <div class="container">
      <div class="covid-banner__content wow fadeIn">
        <div class="covid-banner__title-container">
          <h2 class="wow fadeIn">
            <span class="sr-only">Important Update</span>
            <span class="covid-banner__title"
                  data-heading="Important"
                  aria-hidden="true">Important</span>
            <br>
            <span class="covid-banner__title"
                  data-heading="Update"
                  aria-hidden="true">Update</span>
          </h2>
        </div>
        <div class="covid-banner__details">
          <p class="covid-banner__description">{{ description }}</p>
          <cta icon="exclamation"
              :text="cta.text"
              :url="cta.url"
              :isRouterLink="true" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Cta from '@/components/Cta.vue';
import WOW from 'wow.js/dist/wow.min';

export default {
  name: 'covid-banner',
  data() {
    return {
      heading: 'Important update',
      description: 'Due to the COVID-19 global pandemic, GitConf has been postponed, please check the full statement in the link below.',
      cta: {
        text: 'About COVID-19',
        url: '/covid-19',
      },
    };
  },
  components: {
    Cta,
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

.covid-banner {
  &__content {
    border-bottom: 1px solid $corn;
    border-top: 1px solid $corn;
    margin: 50px 0;
    padding: 50px 0;

    @include from('lg') {
      min-height: 350px;
      padding: 65px 0;
      position: relative;
      padding-left: 60%;
    }

    @include from('xl') {
      min-height: 350px;
      padding-left: 55%;
    }
  }

  &__title {
    @extend %gc-section-title;
  }

  &__description {
    @include from('lg') {
      margin: 0;
    }
  }

  &__title-container {
    margin-bottom: 50px;

    @include from('lg') {
      left: 0;
      position: absolute;
    }
  }

  .cta {
    margin-top: 50px;
  }
}
</style>
