<template>
  <div class="not-found">
    <div class="container">
      <div class="not-found__content">
        <h1 data-heading="404" class="not-found__title">
          404
        </h1>
        <h2 class="not-found__subtitle">
          Page not found :(
        </h2>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../styles/variables';
@import '../styles/mixins';
@import '../styles/typography';

.not-found {
  padding: 45px 0;

  &__title {
    @extend %gc-home-hero;

    margin-bottom: 50px;
    text-align: center;
  }

  &__subtitle {
    text-align: center;
  }
}
</style>
