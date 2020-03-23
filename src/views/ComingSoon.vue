<template>
  <div class="coming-soon">
    <div class="container">
      <div class="coming-soon__content">
        <h1 class="coming-soon__title-wp">
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

<style lang="scss">
@import '../styles/variables';
@import '../styles/mixins';
@import '../styles/typography';

.coming-soon {
  padding: 45px 0;

  &__title {
    @extend %gc-home-hero;
  }

  &__title-wp {
    text-align: center;
  }
}
</style>
