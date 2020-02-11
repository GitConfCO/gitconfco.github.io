<template>
  <section class="container">
    <div class="about">
      <div class="about__image">
        <div class="about__image--back">
        </div>
        <div class="about__image--front">
        </div>
      </div>
      <div class="about__content">
        <h2 class="about__title">{{ title }}</h2>
        <div class="about__body">{{ content }}</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
      title: 'About',
      content: 'GitConf es la primer conferencia sobre Git a realizarse en América Latina, dedicaremos un día entero a aprender sobre Git, GitHub, CI, CD y automatización acompañados de speakers nacionales e internacionales.',
    };
  },
};
</script>

<style lang="scss">
@import '../styles/variables';
@import '../styles/mixins';
@import '../styles/typography';

.about {
  padding: 0 20px 20px 0;

  @include from('md') {
    display: flex;
  }

  &__content {
    @include gc-double-box($corn, $ebony, 20px);

    padding: 38px 53px;

    @include from('md') {
      display: inline-block;
      margin-left: 100px;
      width: 70%;
    }

    @include from('lg') {
      margin-left: 100px;
      width: 50%;
    }
  }

  &__title {
    @extend %gc-paragraph-title;

    margin-bottom: 16px;
  }

  &__body {
    @extend %gc-body2;
  }

  &__image {
    display: none;
    position: relative;

    @include from('md') {
      display: inline-block;
      width: 30%;
    }

    @include from('lg') {
      width: 50%;
    }

    &--front,
    &--back {
      background-color: green;
      border: 1px solid $corn;
      height: 160px;
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
