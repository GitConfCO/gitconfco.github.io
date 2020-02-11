<template>
  <div class="container">
    <hr class="separator">
  </div>
</template>

<script>
export default {
  name: 'separator',
};
</script>

<style lang="scss">
@import '../styles/variables';
@import '../styles/mixins';

.separator {
  border: none;
  border-bottom: 1px solid $corn;
  margin: 40px 0;

  @include from('md') {
    margin: 60px 0;
  }

  @include from('lg'){
    margin: 80px 0;
  }
}
</style>
