<template>
  <a :href="url" class="cta">
    {{ text }}
    <i :class="`fa fa-${this.icon} cta__icon`"></i>
  </a>
</template>

<script>
export default {
  name: 'cta',
  props: {
    text: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import '../styles/variables';
@import '../styles/mixins';
@import '../styles/typography';

.cta {
  @extend %gc-cta;

  align-items: center;
  background: $bunting;
  border: $corn solid 2px;
  display: flex;
  justify-content: space-between;
  max-width: 300px;
  padding: 10px 14px;
  width: 100%;

  &__icon {
    border-left: 2px solid $corn;
    color: $corn;
    margin-left: 14px;
    padding-left: 14px;
  }
}
</style>
