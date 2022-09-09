<template>
  <div>
    <nuxt-link
      :key="id"
      :to="`/property-offers/${id}`"
      class="preview"
    >
      <b-card :title="title" :img-src="heroImage" :img-alt="title" img-top class="position-relative">
        <div class="wrapper-labels">
          <div class="label sale-label"><h4>{{onSaleText}}</h4></div>
          <div class="label ready-label"><h4>{{isReadyText}}</h4></div>
          <div v-if="isReserved" class="label ready-label"><h4>{{$t('propertyOffers.reserved')}}</h4></div>
        </div>
        <b-card-text class="d-flex flex-column">
          <div class="label__price mb-2 font-weight-bold">{{price}} Czk</div>
          <div class="d-flex justify-content-between">
            <div><strong>{{$t('propertyOffers.city')}}: </strong><span>{{city}}</span></div>
            <div><strong>{{$t('propertyOffers.street')}}: </strong><span>{{street}}</span></div>
          </div>
          <div>
            <div>
              <div class="mt-2 mb-2"><strong>{{$t('propertyOffers.disposition')}}: </strong><span>{{disposition}}</span></div>
              <div class="mb-2"><strong>{{$t('propertyOffers.area')}}: </strong><span>{{usableArea}}m²</span></div>
            </div>
            <button class="btn btn-success">DETAIL</button>
          </div>
        </b-card-text>
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
    },
    isReserved: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    onSaleText () {
      return this.isOnSale ? this.$t('propertyOffers.onSale') : this.$t('propertyOffers.onRent')
    },
    isReadyText () {
      return this.isReady ? this.$t('propertyOffers.isReady') : this.$t('propertyOffers.isNotReady')
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  max-width: 350px;
}
.wrapper-labels {
  position: absolute;
  top: 20px;
  left: 0;
}

.preview:hover {
  text-decoration: none;
}

.card-body {
  background: #f3f5f1;
  color: black;
}

.label {
  padding: 2px 5px 2px 5px;
  border-radius: 0 15px 15px 0;
  margin-bottom: 5px;
  background-color: #af0023;
  color: #fff;
  h4 {
    margin-bottom: 0;
    font-size: 20px;
  }
  &__price {
    font-size: 20px;
  }
}
</style>
