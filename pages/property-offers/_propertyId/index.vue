<template>
  <section>
    <b-container fluid class="header-section">
      <h3 class="text-center">{{title}}</h3>
    </b-container>
    <b-container>
      <Carousel :images="images"/>
      <p>{{ description }}</p>
    </b-container>
  </section>
</template>

<script>
import Carousel from '../../../components/shared/Carousel'
export default {
  name: 'propertyId-index',
  components: {
    Carousel
  },
  asyncData (context) {
    return context.app.$storyapi.get('cdn/stories/property-offers/' + context.params.propertyId, {
      version: 'draft'
    }).then((res) => {
      console.log(res.data.story.content)
      return {
        blok: res.data.story.content,
        title: res.data.story.content.title,
        content: res.data.story.content.content,
        price: res.data.story.content.price,
        disposition: res.data.story.content.disposition,
        isReady: res.data.story.content.isReady,
        usableArea: res.data.story.content.usableArea,
        images: res.data.story.content.images,
        street: res.data.story.content.street,
        city: res.data.story.content.city,
        keyParameters: res.data.story.content.keyParameters,
        isOnSale: res.data.story.content.isOnSale,
        description: res.data.story.content.description
      }
    })
  }
  // mounted () {
  //   this.$storyblok.init()
  //   this.$storyblok.on('change', () => {
  //     location.reload(true)
  //   })
  // }
}
</script>

<style scoped>
.thumbnail {
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
}
</style>
