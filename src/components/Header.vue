<template>
  <header class="header" :class="{ 'header__expanded': visibleNav }">
    <div class="container">
      <div class="header__wrapper">
        <a href="/">
          <img class="header__image"
              src="../assets/images/logo/logo.svg"
              alt="gitconfco logo">
        </a>
        <div class="header__content">
          <p class="header__text">Powered by
            <i aria-hidden="true" class="fab fa-github"></i>
            <span class="sr-only">GitHub</span>
          </p>
          <i v-on:click="toggleNav" class="fas fa-bars header__menu" aria-label="Menu"></i>
        </div>
      </div>
      <div class="header__navigation">
        <a v-for="item in navigation"
            :key="item.title"
            :href="item.url"
            v-on:click="checkUrl(item)"
            class="header__navigation-item">{{ item.title }}</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
      visibleNav: false,
      navigation: [
        {
          title: 'Home',
          url: '/',
        },
        {
          title: 'Speakers',
          url: '/coming-soon/',
        },
        {
          title: 'Team',
          url: '/coming-soon/',
        },
        {
          title: 'Schedule',
          url: '/coming-soon/',
        },
        {
          title: 'Sponsors',
          url: '/#home-sponsors',
        },
      ],
    };
  },
  methods: {
    toggleNav() {
      this.visibleNav = !this.visibleNav;
      window.scrollTo(0, 0);

      if (this.visibleNav) {
        document.documentElement.style.overflow = 'hidden';
      } else {
        document.documentElement.style.overflow = 'auto';
      }
    },
    checkUrl(item) {
      if (item.url.startsWith('/#')) {
        this.toggleNav();
      }
    },
  },
};
</script>

<style lang="scss">
@import '../styles/variables';
@import '../styles/mixins';
@import '../styles/typography';

.header {
  $this: &;

  height: 140px;
  transition: height .5s ease, background-color .2s ease;
  padding-top: 15px;

  @include from('md') {
    padding-top: 35px;
  }

  >.container,
  &__image {
    height: 100px;

    @include from('md') {
      height: 140px;
    }
  }

  &__content {
    align-items: center;
    border-bottom: 2px solid $corn;
    color: $corn;
    display: flex;
    flex-grow: 1;
    height: 50px;
    justify-content: space-between;
    margin-left: 25px;
    transition: all .5s ease;

    @include from('md') {
      height: 70px;
    }

    #{$this}__menu {
      cursor: pointer;
      font-size: 26px;
    }
  }

  &__expanded {
    background-color: $corn;
    height: 100vh;
    width: 100vw;

    #{$this}__content {
      border-bottom: 2px solid $ebony;
      color: $ebony;
    }

    #{$this}__navigation {
      display: flex;
      flex-direction: column;
    }
  }

  &__navigation {
    display: none;
    height: calc(100vh - 115px);
    justify-content: center;
    overflow-y: scroll;
    top: 0;
    transition: all .5s ease;
    z-index: 80;

    @include from('md') {
      height: calc(100vh - 175px);
    }

    &-wrapper {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: center;
    }

    &-item {
      @extend %gc-cta;

      color: $ebony;
      display: block;
      font-size: 40px;
      line-height: 40px;
      margin: 20px 0;
      text-align: right;

      @include from('md') {
        font-size: 50px;
        line-height: 50px;
        margin: 25px 0;
      }

      @include from('lg') {
        font-size: 60px;
        line-height: 60px;
        margin: 30px 0;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__wrapper {
    display: flex;
  }
}
</style>