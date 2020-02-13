<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content wow fadeIn">
        <img class="footer__image"
          src="../assets/images/logo/logo-horizontal.svg"
          alt="gitconfco logo">
        <p class="footer__text">Powered by
          <i aria-hidden="true" class="fab fa-github"></i>
          <span class="sr-only">GitHub</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import WOW from 'wow.js/dist/wow.min';

export default {
  mounted() {
    new WOW().init();
  },
};
</script>

<style lang="scss">
@import '../styles/variables';
@import '../styles/mixins';
@import '../styles/typography';

.footer {
  background: $ebony;
  padding: 50px 0;

  @include from('lg') {
    padding: 89px 0;
  }

  &__content {
    align-items: center;
    border-top: $corn solid 2px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding-top: 45px;
  }

  &__image {
    max-width: 160px;
  }

  &__text {
    @extend %gc-body1;

    margin-left: 10px;
  }
}
</style>
