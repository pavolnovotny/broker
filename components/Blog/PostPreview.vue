<template>
  <div class="wrapper">
    <nuxt-link
      :key="id"
      :to="`${$route.fullPath}/${id}`"
      class="mb-5 preview"
    >
      <b-card :title="title" :img-src="thumbnailImage" :img-alt="title" img-top>
        <b-card-text>
          {{excerpt}}
        </b-card-text>
        <b-card-text class="small text-muted">Last updated {{timestamp}}</b-card-text>
      </b-card>
    </nuxt-link>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'PostPreview-index',
  props: {
    title: {
      type: String,
      required: true
    },
    excerpt: {
      type: String,
      required: true
    },
    thumbnailImage: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    createdAt: {
      type: String,
      required: true
    }
  },
  computed: {
    getCookie () {
      const code = this.$cookies?.get('i18n_redirected') ?? null
      switch (code) {
        case 'cz':
          return 'cs'
        case 'sk':
          return 'sk'
        case 'en':
          return 'en'
        default:
       return 'cs'
      }
    },
    timestamp () {
      return moment(this.createdAt).locale(this.getCookie).startOf('hour').fromNow()
    }
  }
}
</script>

<style scoped>
.preview {
  color: #06112a;
}
.preview:hover {
  text-decoration: none;
}

.thumbnail {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 10rem;
}
</style>
