<template>
  <iframe :src="src"
          width="1000"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
  </iframe>
</template>

<script>
export default {
  name: 'Map-index',
  props: {
    src: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
