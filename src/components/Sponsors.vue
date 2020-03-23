<template>
  <section id="home-sponsors" class="home-sponsors">
    <div class="container">
      <h1 class="wow fadeIn">
        <span class="sr-only">Conf sponsors</span>
        <span class="home-sponsors__title"
              data-heading="Conf"
              aria-hidden="true">Conf</span>
        <br>
        <span class="home-sponsors__title"
              data-heading="/Sponsors"
              aria-hidden="true">/Sponsors</span>
      </h1>

      <div v-for="category in sponsors"
          :key="category.id"
          class="home-sponsors__category">

        <h2 aria-hidden="true"
            class="home-sponsors__category-name wow fadeIn"
            :data-heading="category.title">
          <span class="sr-only">{{ category.id }}</span>
          {{ category.title }}
        </h2>

        <div :class="cssClasses(category.id)">
          <a v-for="sponsor in category.sponsors"
            :key="sponsor.name"
            :href="sponsor.url"
            class="home-sponsors__sponsor">
            <img class="home-sponsors__sponsor-image"
                :src="getImage(`sponsors/${category.id}`, sponsor.image)"
                :alt="sponsor.name">
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getImage } from '@/utils/media';
import sponsors from '@/assets/data/sponsors';
import WOW from 'wow.js/dist/wow.min';

export default {
  name: 'home-sponsors',
  data() {
    return {
      sponsors,
    };
  },
  methods: {
    cssClasses(category) {
      return `home-sponsors__category-list home-sponsors__category-list--${category} wow fadeIn`;
    },
    getImage,
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

.home-sponsors {
  $this: &;

  @extend %gc-section-padding;

  background: $white;

  &__category {
    margin-top: 56px;
  }

  &__category-list {
    align-items: center;
    display: flex;
    justify-content: center;

    &--bronze,
    &--community {
      #{$this}__sponsor {
        flex: 0 1 120px;
      }
    }

    &--gold {
      #{$this}__sponsor {
        flex: 0 1 180px;
      }
    }

    &--silver {
      #{$this}__sponsor {
        flex: 0 1 150px;
      }
    }

    &--platinum {
      #{$this}__sponsor {
        flex: 0 1 200px;
      }
    }
  }

  &__category-name {
    @extend %gc-subsection-title;

    color: $ebony;
    margin-bottom: 50px;
    text-align: center;

    &::before {
      -webkit-text-stroke: 1px rgba($ebony, 0.3);
      width: 100%;
    }
  }

  &__sponsor {
    margin: 0 10px;
  }

  &__sponsor-image {
    width: 100%;
  }

  &__title {
    @extend %gc-section-title;

    color: $ebony;

    &::before {
      -webkit-text-stroke: 1px rgba($ebony, 0.3);
    }
  }
}
</style>
