<template>
  <section>
    <b-container fluid>
      <h1 class="pt-5 pb-5 text-center">{{ $t('services.Services') }}</h1>
      <b-row align-h="center" align-v="center">
        <b-col v-for="(service, i) in services" :key="i" sm="12" md="4" xl="3">
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
          src: 'sell-property'
        },
        {
          type: this.$t('services.marketingAndPropagation'),
          text: this.$t('services.marketingAndPropagationText'),
          src: 'sell-property'
        },
        {
          type: this.$t('services.homeStaging'),
          text: this.$t('services.homeStagingText'),
          src: 'sell-property'
        },
        {
          type: this.$t('services.legalService'),
          text: this.$t('services.legalServiceText'),
          src: 'sell-property'
        },
        {
          type: this.$t('services.rentingProperties'),
          text: this.$t('services.rentingPropertiesText'),
          src: 'sell-property'
        },
        {
          type: this.$t('services.web'),
          text: this.$t('services.webText'),
          src: 'sell-property'
        },
        {
          type: this.$t('services.virtualVisitation'),
          text: this.$t('services.virtualVisitationText'),
          src: 'sell-property'
        },
        {
          type: this.$t('services.propertiesFinancing'),
          text: this.$t('services.propertiesFinancingText'),
          src: 'sell-property'
        },
        {
          type: this.$t('services.propertiesSearching'),
          text: this.$t('services.propertiesSearchingText'),
          src: 'sell-property'
        },
        {
          type: this.$t('services.photosAndVideos'),
          text: this.$t('services.photosAndVideosText'),
          src: 'sell-property'
        },
        {
          type: this.$t('services.paintingAndCleaning'),
          text: this.$t('services.paintingAndCleaningText'),
          src: 'sell-property'
        },
        {
          type: this.$t('services.propertyManagement'),
          text: this.$t('services.propertyManagementText'),
          src: 'sell-property'
        }
      ]
    }
  },
  components: {
    FlipCard
  }
}

</script>

<style scoped>
section {
  padding-bottom: 60px;
}
</style>
