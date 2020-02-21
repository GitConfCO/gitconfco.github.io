<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content wow fadeIn">
        <div class="footer__brand">
          <img class="footer__image"
            src="../assets/images/logo/logo-horizontal.svg"
            alt="gitconfco logo">
          <p class="footer__brand-name">
            Powered by <i aria-hidden="true" class="fab fa-github"></i>
            <span class="sr-only">GitHub</span>
          </p>
        </div>
        <div class="footer__details">
          <div class="footer__detail-info">
            <span class="footer__design-brand">
              Designed by <a href="https://www.hugeinc.com" target="blank">Huge</a>
            </span><br>
            <a href="https://github.com/GitConfCO/code-of-conduct" class="footer__coc">
              Code of Conduct
            </a><br>
            <span>GitConf CO 2020</span>
          </div>
          <div class="footer__details-social">
            <span>Follow us:</span><br>
            <a href="http://www.twitter.com/gitconfco" target="blank"><i aria-hidden="true" class="fab fa-twitter"></i></a>
            <a href="http://www.instagram.com/gitconf_co" target="blank"><i aria-hidden="true" class="fab fa-instagram"></i></a>
          </div>
          <div class="footer__details-social">
            <span>Contact us:</span><br>
            <span>gitconfco@gmail.com</span><br>
          </div>
        </div>
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

  @include from('md') {
    padding: 89px 0;
  }

  &__brand {
    margin: 0 auto;

    @include from('md') {
      align-items: center;
      display: flex;
      margin: 0;
    }
  }

  &__brand-name {
    margin-bottom: 0;
    margin-top: 15px;

    @include from('md') {
      margin-top: 0;
    }
  }

  &__coc {
    text-decoration: underline;
  }

  &__content {
    border-top: $corn solid 2px;
    display: flex;
    flex-direction: column;
    padding-top: 45px;

    @include from('md') {
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &__design-brand {
    font-weight: 700;
  }

  &__details {
    margin-top: 45px;

    @include from('md') {
      margin-top: 0;
    }
  }

  &__details-social {
    margin-top: 15px;

    .fab {
      font-size: 25px;
      margin-right: 10px;
      margin-top: 5px;
    }
  }

  &__image {
    max-width: 160px;
  }
}
</style>
