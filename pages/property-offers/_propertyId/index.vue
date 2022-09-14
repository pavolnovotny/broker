<template>
  <section>
    <b-container fluid class="header-section">
      <h3 class="text-center">{{title}}</h3>
    </b-container>
    <b-container>
      <Carousel :images="images"/>
      <div class="card mt-4">
        <h2 class="text-center">{{$t('propertyOffers.mainParameters')}}</h2>
        <ul class="main-keys list-unstyled mt-2">
          <li class="mt-1 mb-1"><strong>{{$t('propertyOffers.propertyCondition')}}: </strong><span>{{onSaleText}}</span></li>
          <li class="mt-1 mb-1"><strong>{{$t('propertyOffers.city')}}: </strong><span>{{city}}</span></li>
          <li class="mt-1 mb-1"><strong>{{$t('propertyOffers.street')}}: </strong><span>{{street}}</span></li>
          <li class="mt-1 mb-1"><strong>{{$t('propertyOffers.disposition')}}: </strong><span>{{disposition}}</span></li>
          <li class="mt-1 mb-1"><strong>{{$t('propertyOffers.area')}}: </strong><span>{{usableArea}} m²</span></li>
        </ul>
      </div>
      <div class="card mt-4">
        <h2 class="text-center">{{$t('propertyOffers.keyParameters')}}</h2>
        <ul class="list-unstyled key-params mt-2">
          <li v-for="(param, i) in keyParametersArray" :key="i" class="mt-1 mb-1" ><BIconCheckCircleFill/> {{param}}</li>
        </ul>
      </div>
      <div class="card mt-4">
        <h2 class="text-center">{{$t('propertyOffers.description')}}</h2>
        <p class="mt-2">{{description}}</p>
      </div>
      <div class="card mt-4">
        <h2 class="text-center">{{$t('propertyOffers.videoTour')}}</h2>
        <Video :src="video"/>
      </div>
    </b-container>
    <b-container fluid>
      <b-row class="justify-content-center mt-4">
        <Map :src="map"/>
      </b-row>
    </b-container>
    <b-container class="mt-4 mb-4">
      <div class="d-flex flex-column align-items-center card">
        <h4>{{$t('propertyOffers.price')}}: {{ price }}Kč</h4>
        <h4>{{$t('propertyOffers.countMortgage')}} <a target="_blank" href="https://www.hypo-portal.cz">www.hypo-portal.cz</a> </h4>
      </div>
      <h3 class="text-center mt-4 mb-4">{{$t('propertyOffers.tourInterest')}}</h3>
      <b-row class="justify-content-center mt-3 mb-3">
        <b-col md="6" xl="6">
          <ContactForm/>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { BIconCheckCircleFill } from 'bootstrap-vue'
import Carousel from '../../../components/shared/Carousel'
import Video from '../../../components/shared/Video'
import Map from '../../../components/shared/Map'
import ContactForm from '../../../components/ContactForm'

export default {
  name: 'propertyId-index',
  nuxtI18n: {
    paths: {
      cz: '/nabidka-nemovitosti/:propertyId',
      sk: '/ponuka-nehnutelnosti/:propertyId',
      en: '/property-offers/:propertyId'
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
    Carousel,
    Video,
    Map,
    ContactForm,
    BIconCheckCircleFill
  },
  async asyncData ({ app, params, isDev }) {
    try {
      const res = await app.$storyapi.get('cdn/stories/property-offers/' + params.propertyId, {
        version: isDev ? 'draft' : 'published',
        language: app.i18n.localeProperties.code
      })
      const property = {
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
        description: res.data.story.content.description,
        video: res.data.story.content.video,
        map: res.data.story.content.map,
        id: res.data.story.slug
      }
      return property
    } catch (e) {
      console.error(e)
      return {}
    }
  },
  computed: {
    keyParametersArray () {
      return this.keyParameters?.split(',')
    },
    onSaleText () {
      return this.isOnSale ? this.$t('propertyOffers.onSale') : this.$t('propertyOffers.onRent')
    }
  }
}
</script>

<style scoped>
.thumbnail {
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
}
.card {
  background-color: #f3f5f1;
  padding: 30px 20px;
}
.main-keys, .key-params {
  columns: 1;
  -webkit-columns: 1;
  -moz-columns: 1;

}
@media (min-width: 576px) {
  .main-keys, .key-params {
    columns: 1;
    -webkit-columns: 1;
    -moz-columns: 1;
  }
}
@media (min-width: 768px) {
  .main-keys, .key-params {
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
  }
}
@media (min-width: 992px) {
  .main-keys, .key-params {
    columns: 3;
    -webkit-columns: 3;
    -moz-columns: 3;
  }
}
</style>
