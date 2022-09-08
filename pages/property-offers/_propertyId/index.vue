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
                <b-card-text></b-card-text>
              </b-tab>
              <b-tab :title="$t('propertyOffers.keyParameters')">
                <b-card-text>{{}}</b-card-text>
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
    <b-container>
      <b-row class="justify-content-center mt-5 mb-5">
        <div class="d-flex flex-column align-items-center">
          <div>Cena: 5.490.000Kč</div>
          <div>Spočítej si rychle a zdarma nejvýhodnější hypotéku na www.hypo-portal.cz</div>
        </div>
      </b-row>
      <b-row class="justify-content-center">
        <h3>MÁŠ ZÁJEM O PROHLÍDKU? NAPIŠ A DOMLUVÍME SI TERMÍN</h3>
      </b-row>
      <b-row class="justify-content-center">
        <ContactForm/>
      </b-row>
    </b-container>
  </section>
</template>

<script>
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
    ContactForm
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
        description: res.data.story.content.description,
        video: res.data.story.content.video,
        map: res.data.story.content.map
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
