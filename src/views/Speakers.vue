<template>
  <div class="speakers">
    <div class="container">
      <h1 class="speakers__heading wow fadeIn">
        <span class="sr-only">Conf speakers</span>
        <span class="speakers__title"
              data-heading="Conf"
              aria-hidden="true">Conf</span>
        <br>
        <span class="speakers__title"
              data-heading="/Speakers"
              aria-hidden="true">/Speakers</span>
      </h1>
      <div class="speakers__list">
        <div v-for="item in speakers"
              :key="item.name"
              :id="item.id"
              class="speaker__item wow fadeIn">
          <div class="speaker__picture-wp">
            <img class="speaker__picture"
              :src="getImage('speakers', item.image)"
              :alt="item.name">
          </div>
          <h2 class="speaker__name">{{item.name}}</h2>
          <p class="speaker__bio">{{item.bio}}</p>

          <div class="speaker__social">
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
</template>

<script>
import { getIconClasses, getImage } from '@/utils/media';
import speakers from '@/assets/data/speakers';
import WOW from 'wow.js/dist/wow.min';

export default {
  data() {
    return {
      speakers,
    };
  },
  methods: {
    getImage,
    getIconClasses,
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

.speakers {
  &__list {
    padding-bottom: 20px;
    margin-top: 220px;

    @include from('md') {
      margin-top: 60px;
    }

    @include from('lg') {
      margin-top: 120px;
    }
  }

  &__title {
    @extend %gc-section-title;
  }
}

.speaker {
  &__bio {
    @extend %gc-body2;

    margin: 25px 0;
  }

  &__item {
    @include gc-double-box($corn, $ebony, 20px);

    padding: 140px 20px 20px;
    position: relative;

    &:not(:first-child) {
      margin-top: 280px;
    }

    @include from('md') {
      min-height: 360px;
      padding: 50px;
      padding-left: calc(40% + 30px);

      &:not(:first-child) {
        margin-top: 100px;
      }
    }

    @include from('lg') {
      min-height: 480px;
      padding-left: calc(50% + 45px);

      &:not(:first-child) {
        margin-top: 180px;
      }
    }

    .fab {
      color: $corn;
      font-size: 30px;
      margin: 0 9px;
    }
  }

  &__name {
    @extend %gc-body3;

    margin-top: 20px;
    text-align: center;

    @include from('md') {
      margin-top: 0;
      text-align: left;
    }
  }

  &__picture {
    height: 100%;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
  }

  &__picture-wp {
    border: 1px solid $corn;
    left: 50%;
    margin: 0 auto 50px;
    padding-bottom: 300px;
    position: absolute;
    transform: translate(-50%, -310px);
    width: 300px;

    @include from('md') {
      left: 50px;
      max-width: unset;
      padding-bottom: 40%;
      position: absolute;
      top: 50px;
      transform: none;
      width: calc(40% - 50px);
    }

    @include from('lg') {
      left: 80px;
      padding-bottom: 65%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: calc(50% - 80px);
    }

    @include from('xl') {
      padding-bottom: 55%;
    }
  }

  &__social {
    margin: 0 -9px;
  }
}
</style>
