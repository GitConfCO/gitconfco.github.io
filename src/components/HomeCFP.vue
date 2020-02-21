<template>
  <section class="home-cfp">
    <div class="container">
      <h1 class="wow fadeIn">
        <span class="sr-only">Call for speakers</span>
        <span class="home-cfp__title"
              data-heading="/Call for"
              aria-hidden="true">/Call for</span>
        <br>
        <span class="home-cfp__title"
              data-heading="Speakers"
              aria-hidden="true">Speakers</span>
      </h1>
      <div class="home-cfp__content">
        <p>{{ description }}</p>
        <p>{{ dates }}</p>
        <Cta :text="ctaText" :url="'#'" :icon="'plus-square'" class="home-cfp__cta"/>
      </div>
    </div>
  </section>
</template>

<script>
import Cta from '@/components/Cta.vue';

export default {
  name: 'home-cfp',
  data() {
    return {
      description: 'Do you have a talk idea? We\'d like to see your talk in the first version of GitConf CO, we\'d like to hear about Git, GitHub, CI, CD and automation, but also non-techical talks that could be interesting for developers who use Git.',
      dates: 'CFP will be open from March 17th until April 17th, speakers will be notified on April 24th',
      ctaText: 'Submit your talk',
    };
  },
  components: {
    Cta,
  },
};
</script>

<style lang="scss">
@import '../styles/variables';
@import '../styles/mixins';
@import '../styles/typography';

.home-cfp {

  &__content {
    margin-top: 45px;
  }

  &__cta {
    pointer-events: none;
    cursor: not-allowed;
    margin: 50px auto 0;
  }

  &__title {
    @extend %gc-section-title;

  }
}
</style>
