<template>
  <section>
    <b-container fluid class="header-section">
      <h3 class="text-center">{{title}}</h3>
    </b-container>
    <b-container>
      <Carousel :images="images"/>
        <div class="mt-4 mb-4">
          <b-card no-body>
            <b-tabs card>
              <b-tab :title="$t('propertyOffers.mainParameters')" active>
                <b-card-text>
                  <div>
                    <ul class="main-keys list-unstyled">
                      <li class="mt-1 mb-1"><strong>{{$t('propertyOffers.propertyCondition')}}: </strong><span>{{onSaleText}}</span></li>
                      <li class="mt-1 mb-1"><strong>{{$t('propertyOffers.city')}}: </strong><span>{{city}}</span></li>
                      <li class="mt-1 mb-1"><strong>{{$t('propertyOffers.street')}}: </strong><span>{{street}}</span></li>
                      <li class="mt-1 mb-1"><strong>{{$t('propertyOffers.disposition')}}: </strong><span>{{disposition}}</span></li>
                      <li class="mt-1 mb-1"><strong>{{$t('propertyOffers.area')}}: </strong><span>{{usableArea}} m²</span></li>
                    </ul>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab :title="$t('propertyOffers.keyParameters')">
                <b-card-text>
                  <div>
                    <ul class="list-unstyled key-params">
                      <li v-for="(param, i) in keyParametersArray" :key="i" class="mt-1 mb-1" ><BIconCheckCircleFill/> {{param}}</li>
                    </ul>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab :title="$t('propertyOffers.description')">
                <b-card-text>{{ description }}</b-card-text>
              </b-tab>
              <b-tab :title="$t('propertyOffers.videoTour')">
                <b-card-text>
                  <Video :src="video"/>
                </b-card-text>
              </b-tab>
              <b-tab :title="$t('propertyOffers.videoTour')">
                <b-card-text>
                  <Map :src="map"/>
                </b-card-text>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
    </b-container>
    <b-container fluid>
      <b-row class="justify-content-center">
        <Map :src="map"/>
      </b-row>
    </b-container>
    <b-container class="mt-4 mb-4">
      <div class="d-flex flex-column align-items-center price-list">
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
  components: {
    Carousel,
    Video,
    Map,
    ContactForm,
    BIconCheckCircleFill
  },
  asyncData (context) {
    return context.app.$storyapi.get('cdn/stories/property-offers/' + context.params.propertyId, {
      version: context.isDev ? 'draft' : 'published'
    }).then((res) => {
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
        description: res.data.story.content.description,
        video: res.data.story.content.video,
        map: res.data.story.content.map
      }
    })
  },
  computed: {
    keyParametersArray () {
      return this.keyParameters.split(',')
    },
    onSaleText () {
      return this.isOnSale ? this.$t('propertyOffers.onSale') : this.$t('propertyOffers.onRent')
    }
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
.price-list {
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
