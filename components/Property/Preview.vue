<template>
  <div>
    {{title}}
  </div>
</template>

<script>
export default {
  name: 'Preview-index',
  props: {
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    disposition: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    isReady: {
      type: Boolean,
      required: true
    },
    usableArea: {
      type: String,
      required: true
    },
    heroImage: {
      type: String,
      required: true
    },
    street: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    isOnSale: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
