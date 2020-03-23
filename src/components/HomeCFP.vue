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
      <div class="home-cfp__content wow fadeIn">
        <p>{{ description }}</p>
        <p>{{ dates }}</p>
        <Cta  :text="ctaText"
              icon="plus-square"
              :url="ctaUrl"
              class="home-cfp__cta"/>
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
      description: 'Do you have a talk idea? We\'d like to see your talk in the first version of GitConf CO, we\'d like to hear about Git, GitHub, CI, CD, and automation, but also no-technical talks that could be interesting for developers who use Git.',
      dates: 'CFP will be open from March 17th to April 17th, speakers will be notified on April 24th',
      ctaText: 'Submit your talk',
      ctaUrl: 'https://www.papercall.io/gitconfco2020',
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
  @extend %gc-section-padding;

  &__content {
    margin-top: 45px;
  }

  &__cta {
    margin: 50px auto 0;
  }

  &__title {
    @extend %gc-section-title;
  }
}
</style>
