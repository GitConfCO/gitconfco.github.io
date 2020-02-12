<template>
  <div class="coming-soon">
    <div class="container">
      <div class="coming-soon__content">
        <h1>
          <span class="sr-only">Coming soon</span>
          <span class="coming-soon__title"
                data-heading="Coming"
                aria-hidden="true">Coming</span>
          <br>
          <span class="coming-soon__title"
                data-heading="Soon"
                aria-hidden="true">Soon</span>
        </h1>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'coming-soon',
};
</script>

<style lang="scss">
@import '../styles/variables';
@import '../styles/mixins';
@import '../styles/typography';

.coming-soon {
  padding: 45px 0;

  &__content {
    text-align: right;

    h1 {
      text-align: center;
    }
  }

  &__title {
    @extend %gc-home-hero;

    margin: 0;
  }
}
</style>
