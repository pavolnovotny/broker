<template>
  <section>
    <b-container fluid>
      <h1 class="pt-5 pb-5 text-center">{{ $t('services.Services') }}</h1>
      <b-row align-h="center" align-v="center">
        <b-col v-for="service in services" :key="service.id" sm="12" md="4" xl="4">
          <FlipCard :type="service.type" :text="service.text"  />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import FlipCard from './shared/FlipCard'

export default {
  name: 'service-section',
  data () {
    return {
      services: [
        {
          type: this.$t('services.sellingProperties'),
          text: this.$t('services.sellingPropertiesText'),
          src: 'sell-property',
          id: 1
        },
        {
          type: this.$t('services.marketingAndPropagation'),
          text: this.$t('services.marketingAndPropagationText'),
          src: 'sell-property',
          id: 2
        },
        {
          type: this.$t('services.homeStaging'),
          text: this.$t('services.homeStagingText'),
          src: 'sell-property',
          id: 3
        },
        {
          type: this.$t('services.legalService'),
          text: this.$t('services.legalServiceText'),
          src: 'sell-property',
          id: 4
        },
        {
          type: this.$t('services.rentingProperties'),
          text: this.$t('services.rentingPropertiesText'),
          src: 'sell-property',
          id: 5
        },
        {
          type: this.$t('services.web'),
          text: this.$t('services.webText'),
          src: 'sell-property',
          id: 6
        },
        {
          type: this.$t('services.virtualVisitation'),
          text: this.$t('services.virtualVisitationText'),
          src: 'sell-property',
          id: 7
        },
        {
          type: this.$t('services.propertiesFinancing'),
          text: this.$t('services.propertiesFinancingText'),
          src: 'sell-property',
          id: 8
        },
        {
          type: this.$t('services.propertiesSearching'),
          text: this.$t('services.propertiesSearchingText'),
          src: 'sell-property',
          id: 9
        },
        {
          type: this.$t('services.photosAndVideos'),
          text: this.$t('services.photosAndVideosText'),
          src: 'sell-property',
          id: 10
        },
        {
          type: this.$t('services.paintingAndCleaning'),
          text: this.$t('services.paintingAndCleaningText'),
          src: 'sell-property',
          id: 11
        },
        {
          type: this.$t('services.propertyManagement'),
          text: this.$t('services.propertyManagementText'),
          src: 'sell-property',
          id: 12
        }
      ]
    }
  },
  components: {
    FlipCard
  }
}

</script>
