<template>
  <section>
    <b-container fluid class="header-section">
      <h1 class="ml-5">{{$t('propertyOffers.header')}}</h1>
    </b-container>
    <b-container>
      <b-row>
        <Preview
          v-for="property in properties"
          :key="property.id"
          :title="property.title"
          :heroImage="property.heroImage"
          :price="property.price"
          :isReady="property.isReady"
          :street="property.street"
          :city="property.city"
          :isOnSale="property.isOnSale"
          :id="property.id"
          :disposition="property.disposition"
          :usable-area="property.usableArea"
          :isReserved="property.isReserved"
          class="col-xl-6 mt-2 mb-4"
        />
      </b-row>
    </b-container>
  </section>
</template>

<script>
import Preview from '../../components/Property/Preview'
export default {
  name: 'posts-index',
  nuxtI18n: {
    paths: {
      cz: '/nabidka-nemovitosti',
      sk: '/ponuka-nehnutelnosti',
      en: '/property-offers'
    }
  },
  head: {
    title: 'Ponuka nemovitosti',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Ponuka nemovitosti'
      },
      {
        hid: 'title',
        name: 'title',
        content: 'Ing. Michal Šmiga / Ponuka nemovitosti'
      }
    ]
  },
  components: {
    Preview
  },
  asyncData (context) {
    return context.app.$storyapi
      .get('cdn/stories/', {
        version: context.isDev ? 'draft' : 'published',
        starts_with: 'property-offers/'
      })
      .then((res) => {
        console.log(res.data.stories)
        return {
          properties: res.data.stories.map((prop) => {
            return {
              id: prop.slug,
              title: prop.content.title,
              price: prop.content.price,
              disposition: prop.content.disposition,
              isReady: prop.content.isReady,
              usableArea: prop.content.usableArea,
              images: prop.content.images,
              heroImage: prop.content.heroImage,
              street: prop.content.street,
              city: prop.content.city,
              keyParameters: prop.content.keyParameters,
              isOnSale: prop.content.isOnSale,
              isReserved: prop.content.isReserved
            }
          })
        }
      })
  },
  data () {
    return {
      properties: []
    }
  }
}
</script>

<style scoped>

</style>
