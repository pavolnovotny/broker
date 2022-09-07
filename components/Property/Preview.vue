<template>
  <div class="wrapper">
    <nuxt-link
      :key="id"
      :to="`/property-offers/${id}`"
    >
      <b-card :title="title" :img-src="heroImage" :img-alt="title" img-top class="position-relative">
        <div class="sale-label"><h4>{{onSaleText}}</h4></div>
        <div class="ready-label"><h4>{{isReadyText}}</h4></div>
        <b-card-text>
          <div><span>{{price}}</span></div>
          <div>
            <div><span>{{$t('propertyOffers.city')}}:</span><span>{{city}}</span></div>
            <div><span>{{$t('propertyOffers.street')}}:</span><span>{{street}}</span></div>
          </div>
          <div>
            <div><span>{{$t('propertyOffers.disposition')}}:</span><span>{{disposition}}</span></div>
            <div><span>{{$t('propertyOffers.usableArea')}}:</span><span>{{usableArea}}</span></div>
            <div><span>{{$t('propertyOffers.added')}}:</span><span>25.6.2022</span></div>
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
.sale-label {
  position: absolute;
  top: 20px;
  right: 0;
  background-color: red;
  padding: 2px 5px 2px 5px;
  h4 {
    margin-bottom: 0;
  }
}
.ready-label {
  position: absolute;
  top: 20px;
  right: 60px;
  background-color: blue;
  padding: 2px 5px 2px 5px;
  h4 {
    margin-bottom: 0;
  }
}
</style>
