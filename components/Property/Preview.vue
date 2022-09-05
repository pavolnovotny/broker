<template>
  <div class="wrapper">
    <nuxt-link
      :key="id"
      :to="`/property-offers/${id}`"
    >
      <b-card :title="title" :img-src="heroImage" :img-alt="title" img-top>
        <b-card-text>
          {{price}}
        </b-card-text>
        <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
      </b-card>
    </nuxt-link>
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
