<template>
  <section id="services" data-aos="slide-right">
    <b-container>
      <h1 class="pt-5 pb-5 text-center">{{ $t('services.Services') }}</h1>
      <b-row>
        <!-- Sale, rent, property search -->
        <b-col md="6" xl="6" class="mb-4">
          <h4 class="text-center">{{$t('services.SellRentSearchProperties')}}</h4>
          <div class="accordion" role="tablist">
            <b-card class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-1 variant="success">{{$t('services.sellingProperties')}}</b-button>
              </b-card-header>
              <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>{{$t('services.sellingPropertiesText')}}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-2 variant="success">{{$t('services.rentingProperties')}}</b-button>
              </b-card-header>
              <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>{{$t('services.rentingPropertiesText')}}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-3 variant="success">{{$t('services.propertiesSearching')}}</b-button>
              </b-card-header>
              <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>{{$t('services.propertiesSearchingText')}}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </b-col>
        <!-- Marketing, financing, legal service -->
        <b-col md="6" xl="6" class="mb-4">
          <div class="accordion" role="tablist">
            <h4 class="text-center">{{$t('services.MarketingFinancingLegalService')}}</h4>
              <b-card class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-4 variant="success">{{$t('services.marketingAndPropagation')}}</b-button>
                </b-card-header>
                <b-collapse id="accordion-4" visible accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>{{$t('services.marketingAndPropagationText')}}</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
            <b-card class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-5 variant="success">{{$t('services.web')}}</b-button>
              </b-card-header>
              <b-collapse id="accordion-5" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>{{$t('services.webText')}}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-6 variant="success">{{$t('services.photosAndVideos')}}</b-button>
              </b-card-header>
              <b-collapse id="accordion-6" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>{{$t('services.photosAndVideosText')}}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-7 variant="success">{{$t('services.homeStaging')}}</b-button>
              </b-card-header>
              <b-collapse id="accordion-7" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>{{$t('services.homeStagingText')}}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-8 variant="success">{{$t('services.virtualVisitation')}}</b-button>
              </b-card-header>
              <b-collapse id="accordion-8" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>{{$t('services.virtualVisitationText')}}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-9 variant="success">{{$t('services.paintingAndCleaning')}}</b-button>
              </b-card-header>
              <b-collapse id="accordion-9" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>{{$t('services.paintingAndCleaningText')}}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-10 variant="success">{{$t('services.legalService')}}</b-button>
              </b-card-header>
              <b-collapse id="accordion-10" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>{{$t('services.legalServiceText')}}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </b-col>
        <!-- Real estate management -->
        <b-col md="6" xl="6" class="mb-4">
          <h4 class="text-center">{{$t('services.propertyManagement')}}</h4>
          <div class="accordion" role="tablist">
            <b-card class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-11 variant="success">{{$t('services.propertyManagement')}}</b-button>
              </b-card-header>
              <b-collapse id="accordion-11" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>{{$t('services.propertyManagementText')}}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </b-col>
        <!-- Thermal management -->
        <b-col md="6" xl="6" class="mb-4">
          <h4 class="text-center">{{$t('services.ThermalManagement')}}</h4>
          <div class="accordion" role="tablist">
            <b-card class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-12 variant="success">{{$t('services.ThermalManagement')}}</b-button>
              </b-card-header>
              <b-collapse id="accordion-12" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>{{$t('services.ThermalManagementText')}}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'service-section'
}

</script>

<style scoped>
section {
  padding-bottom: 40px;
  background-color: #FEFFFF;
}
</style>
