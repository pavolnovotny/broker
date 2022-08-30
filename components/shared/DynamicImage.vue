<template>
  <img :src="imageUrl" :alt="imageUrl">
</template>

<script>
export default {
  name: 'dynamic-image',
  props: {
    imageUrl: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
img {
  filter: brightness(0.50);
  border-radius: 3%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  overflow: hidden;
}
</style>
