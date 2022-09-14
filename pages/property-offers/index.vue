<template>
  <section>
    <b-container fluid class="header-section">
      <h1 class="ml-5">{{$t('propertyOffers.header')}}</h1>
    </b-container>
    <b-container v-if="properties.length">
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
          class="col-xl-4 col-md-6 col-sm-12 mt-2 mb-4"
        />
      </b-row>
    </b-container>
    <b-container fluid v-else>
      <h4>{{$t('propertyOffers.noOffers')}}</h4>
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
    title: 'Ing. Michal Šmiga - Ponuka nemovitosti',
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
  async asyncData ({ app, isDev }) {
    try {
      const res = await app.$storyapi
        .get('cdn/stories/', {
          version: isDev ? 'draft' : 'published',
          language: app.i18n.localeProperties.code,
          starts_with: 'property-offers/'
        })
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
    } catch (e) {
      console.error(e)
      return []
    }
  }
}
</script>

<style scoped>

</style>
