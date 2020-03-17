<template>
  <div class="team">
    <div class="container">
      <h1 class="team__heading wow fadeIn">
        <span class="sr-only">Conf team</span>
        <span class="team__title"
              data-heading="Conf"
              aria-hidden="true">Conf</span>
        <br>
        <span class="team__title"
              data-heading="/Team"
              aria-hidden="true">/Team</span>
      </h1>

      <div v-for="category in team" :key="category.id">
        <h2 class="team__category-name wow fadeIn"
            :data-heading="category.title">
          {{ category.title }}
        </h2>

        <div class="team__content">
          <div class="team__member wow fadeIn" v-for="item in category.team" :key="item.name">
            <div class="team__member-picture">
              <img :src="getImage(category.id, item.image)"
                   :alt="item.name">
            </div>
            <div>
              <p class="team__member-name">{{ item.name }}</p>
              <p v-if="item.lastname" class="team__member-lastname">{{ item.lastname }}</p>
              <div class="team__member-social">
                <a v-for="profile in item.social"
                  :key="profile.url"
                  :href="profile.url">
                  <i aria-hidden="true" :class="getIconClasses(profile.name)"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import team from '@/assets/data/team';

import WOW from 'wow.js/dist/wow.min';

export default {
  data() {
    return {
      team,
    };
  },
  mounted() {
    new WOW().init();
  },
  methods: {
    getImage(category, image) {
      // eslint-disable-next-line global-require, import/no-dynamic-require
      return require(`../assets/images/team/${category}/${image}`);
    },
    getIconClasses(image) {
      return `fab fa-${image}-square`;
    },
  },
};
</script>

<style lang="scss">
@import '../styles/variables';
@import '../styles/mixins';
@import '../styles/typography';

.team {
  &__category-name {
    @extend %gc-subsection-title;

    margin-top:45px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    @include from('md') {
      flex-direction: row;
    }
  }

  &__member {
    margin: 24px auto;
    width: 158px;

    @include from('md') {
      flex-basis: 33%;
      margin: 0;
      padding: 24px;
    }

    @include from('lg') {
      flex-basis: 20%;
    }
  }

  &__member-lastname {
    @extend %gc-body4;

    margin-bottom: 7px;
    margin-top: 0;
    text-align: center;
  }

  &__member-name {
    @extend %gc-body3;

    margin-bottom: 12px;
    margin-top: 26px;
    text-align: center;
  }

  &__member-picture {
    border-radius: 50%;
    overflow: hidden;
    padding-bottom: 100%;
    position: relative;
    width: 100%;

    img {
      height: 100%;
      object-fit: cover;
      position: absolute;
      width: 100%;
    }
  }

  &__member-social {
    text-align: center;

    .fab {
      color: $corn;
      margin-left: 5px;
      margin-right: 5px;
    }
  }

  &__title {
    @extend %gc-section-title;
  }
}
</style>
