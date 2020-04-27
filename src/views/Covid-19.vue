<template>
  <div class="covid-message">
    <div class="container">
      <div class="covid-message__toggle-wp">
        <button class="covid-message__toggle"
          :class="{ 'covid-message__toggle--active' : !isSpanish}"
          @click="setLanguage('en')">
          EN
        </button>
        |
        <button class="covid-message__toggle"
          :class="{ 'covid-message__toggle--active' : isSpanish}"
          @click="setLanguage('es')">
          ES
        </button>
      </div>
      <div v-if="!isSpanish">
        <h1 class="covid-message__title" :data-heading="infoEnglish.title">
          {{ infoEnglish.title }}
        </h1>
        <p class="covid-message__date">{{ infoEnglish.date }}</p>
        <div v-html="infoEnglish.text"></div>
      </div>
      <div v-else>
        <h1 class="covid-message__title" :data-heading="infoSpanish.title">
          {{ infoSpanish.title }}
        </h1>
        <p class="covid-message__date">{{ infoSpanish.date }}</p>
        <div v-html="infoSpanish.text"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSpanish: false,
      infoSpanish: {
        language: 'es',
        title: 'Comunicado oficial sobre COVID-19',
        date: '27 de abril de 2020',
        text: `<p>Desde hace varios meses venimos preparando para todos ustedes
        con mucho amor un evento en el que pudiéramos reunirnos a aprender y
        a compartir. Debido a la pandemia a la que el mundo se enfrenta en
        este momento, y teniendo como prioridad la salud de todos, decidimos
        aplazar la primer edición de GitConf CO para el año 2021 (fecha por definir).</p>
        <p>Les mandamos un abrazo virtual gigante y esperamos que ustedes y sus familias
        se encuentren muy bien.<p>
        #stayHome<br>
        #staySafe<br>
        <br>
        Con cariño,<br>
        Equipo organizador`,
      },
      infoEnglish: {
        language: 'en',
        title: 'Important info about COVID-19',
        date: 'April 27th of 2020',
        text: `<p>For several months now, we’ve been setting up, with lots of love,
        an event where we can gather, learn and share. The world, nevertheless,
        is in a very different state right now. Due to the COVID-19 pandemic,
        and thinking about us all, we have decided to postpone GitConf’s
        first edition until 2021(specific date to be defined).</p>
        <p>A big big virtual hug to you all, take care of your families and yourselves!</p>
        #stayHome<br>
        #staySafe<br>
        <br>
        With love,<br>
        Organizing team`,
      },
    };
  },
  methods: {
    setLanguage(language) {
      if (language === 'es') {
        this.isSpanish = true;
      } else {
        this.isSpanish = false;
      }
    },
  },
};
</script>

<style lang="scss">
@import '../styles/variables';
@import '../styles/mixins';
@import '../styles/typography';

.covid-message {
  &__date {
    font-weight: 700;
    margin-top: 30px;
  }

  &__title {
    @extend %gc-section-title-small;
  }

  &__toggle {
    color: $white;

    &--active {
      color: $corn;
    }
  }

  &__toggle-wp {
    display: flex;
    justify-content: flex-end;
    padding: 30px 0;
  }
}
</style>
