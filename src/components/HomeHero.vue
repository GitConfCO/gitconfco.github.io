<template>
  <div class="home-hero">
    <div class="container">
      <div class="home-hero__content">
        <h1>
          <span class="sr-only">GitConf CO 2020</span>
          <span class="home-hero__title"
                data-heading="GitConf"
                aria-hidden="true">GitConf</span>
          <br>
          <span class="home-hero__title"
                data-heading="/CO.2020"
                aria-hidden="true">/CO.2020</span>
        </h1>
        <div class="home-hero__info">
          <ul class="home-hero__details">
            <li class="home-hero__name">{{ conferenceName }}</li>
            <li class="home-hero__date">Fecha: {{ date }}</li>
            <li class="home-hero__time">Hora: {{ time }}</li>
            <li class="home-hero__venue">Lugar: {{ venue }}</li>
          </ul>
          <Cta :text="'Buy tickets'" :url="'#'" :icon="'level-up-alt'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cta from '@/components/Cta.vue';

export default {
  name: 'hero',
  data() {
    return {
      conferenceName: 'GitConf Colombia',
      date: '27/06/2020',
      time: '09:00 a.m',
      venue: 'Ruta N',
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

.home-hero {
  padding: 45px 0;

  &__content {
    text-align: right;

    h1 {
      text-align: left;
    }
  }

  &__details {
    @extend %gc-body1;

    margin-bottom: 32px;
    margin-top: 50px;
    text-align: left;
  }

  &__info {
    display: inline-block;
  }

  &__name {
    font-weight: 700;
  }

  &__title {
    @extend %gc-home-hero;

    margin: 0;
  }
}
</style>
