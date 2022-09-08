<template>
  <div>
    <b-embed
      type="iframe"
      aspect="16by9"
      :src="src"
      allowfullscreen
    ></b-embed>
  </div>
</template>

<script>
export default {
  name: 'video-index',
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
