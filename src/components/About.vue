<template>
  <section class="about">
    <div class="container">
      <div class="about__media wow fadeIn">
        <img class="about__image--back"
              src="../assets/images/pictures/about-fpo-back.jpeg"
              alt="Terminal">
        <img class="about__image--front"
              src="../assets/images/pictures/about-fpo.jpeg"
              alt="Git">
      </div>
      <div class="about__content wow fadeIn">
        <h2 class="about__title">{{ title }}</h2>
        <div class="about__body">
          <p>
            {{ content }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import WOW from 'wow.js/dist/wow.min';

export default {
  name: 'about',
  data() {
    return {
      title: 'About',
      content: 'GitConf is the first Git conference ever in Latin America, an entire day dedicated to learning and sharing Git, GitHub, CI, CD and automation.',
    };
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

.about {
  @extend %gc-section-padding;

  @include from('md') {
    display: flex;
  }

  &__content {
    @include gc-double-box($corn, $ebony, 20px);

    margin-right: 20px;
    padding: 25px;

    @include from('md') {
      display: inline-block;
      margin-left: 100px;
      padding: 40px;
      width: calc(70% - 120px);
    }

    @include from('lg') {
      margin-left: 100px;
      width: calc(50% - 70px);
    }
  }

  &__title {
    @extend %gc-paragraph-title;

    margin: 0 0 16px;
  }

  &__body {
    @extend %gc-body2;
  }

  &__media {
    display: none;
    position: relative;
    width: 100%;

    @include from('md') {
      display: inline-block;
      vertical-align: top;
      width: 30%;
    }

    @include from('lg') {
      width: calc(50% - 50px);
    }
  }

  &__image {
    &--front,
    &--back {
      background-color: $ebony;
      border: 1px solid $corn;
      height: 160px;
      object-fit: cover;
      width: 100%;

      @include from('lg') {
        height: 200px;
        width: 90%;
      }
    }

    &--front {
      left: 50px;
      position: absolute;
      top: 50px;
      z-index: 2;

      @include from('lg') {
        left: 80px;
      }
    }
  }
}
</style>
