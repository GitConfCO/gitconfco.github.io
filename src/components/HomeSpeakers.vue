<template>
  <div class="home-speakers">
    <div class="container">
      <div class="home-speakers__content">
        <h1 class="home-speakers__heading">
          <span class="sr-only">Confirmed speakers</span>
          <span class="home-speakers__title"
                data-heading="Confirmed"
                aria-hidden="true">Confirmed</span>
          <br>
          <span class="home-speakers__title"
                data-heading="/Speakers"
                aria-hidden="true">/Speakers</span>
        </h1>
        <div v-for="item in speakers" :key="item.name" class="home-speakers__item">
          <img :src="getImage(item.image)" :alt="item.name">
          <Cta :text="item.name" :url="item.url" :icon="'plus-square'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cta from '@/components/Cta.vue';

export default {
  name: 'home-speakers',
  data() {
    return {
      speakers: [
        {
          name: 'Test name 1',
          image: 'speaker-fpo.png',
          url: '#',
        },
        {
          name: 'Test name 2',
          image: 'speaker-fpo.png',
          url: '#',
        },
        {
          name: 'Test name 3',
          image: 'speaker-fpo.png',
          url: '#',
        },
        {
          name: 'Test name 4',
          image: 'speaker-fpo.png',
          url: '#',
        },
        {
          name: 'Test name 5',
          image: 'speaker-fpo.png',
          url: '#',
        },
        {
          name: 'Test name 6',
          image: 'speaker-fpo.png',
          url: '#',
        },
      ],
    };
  },
  components: {
    Cta,
  },
  methods: {
    getImage(name) {
      // eslint-disable-next-line global-require, import/no-dynamic-require
      return require(`../assets/speakers/${name}`);
    },
  },
};
</script>

<style lang="scss">
@import '../styles/variables';
@import '../styles/mixins';
@import '../styles/typography';

.home-speakers {
  &__content {
    text-align: center;

    @include from('md') {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin: 0 -50px;
      text-align: left;
    }
  }

  &__heading {
    @include from('md') {
      margin: 0 50px 20px;
    }

    @include from('lg') {
      margin: 0 50px;
      // The sum of all margins is sustracted from the total width.
      // As the header takes 2/3 spots, 100px are added.
      width: calc((100% - 300px) / 3 * 2 + 100px);
    }
  }

  &__item {
    font-size: 0;
    margin-top: 50px;
    width: 100%;

    @include from('md') {
      margin: 50px 50px 0;
      // The sum of all margins is sustracted from the total width.
      width: calc((100% - 200px) / 2);
    }

    @include from('lg') {
      // The sum of all margins is sustracted from the total width.
      width: calc((100% - 300px) / 3);

      &:first-of-type {
        margin-top: 0;
      }
    }

    img {
      border: 2px solid $corn;
      border-bottom: none;
      max-width: 200px;
      width: 80%;

      @include from('md') {
        max-width: unset;
      }
    }

    .cta {
      margin: auto;
    }
  }

  &__title {
    @extend %gc-section-title;
  }
}
</style>
