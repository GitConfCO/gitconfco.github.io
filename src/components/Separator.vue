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
  margin: 0;
}
</style>
