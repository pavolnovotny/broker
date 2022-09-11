<template>
  <div class="wrapper">
    <nuxt-link
      :key="id"
      :to="`${$route.fullPath}/${id}`"
      class="preview"
    >
      <b-card :title="title" :img-src="thumbnailImage" :img-alt="title" img-top>
        <b-card-text>
          {{excerpt}}
        </b-card-text>
        <b-card-text class="small text-muted">Last updated {{time}}</b-card-text>
      </b-card>
    </nuxt-link>
  </div>
</template>

<script>
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
    time () {
      const date = new Date(this.createdAt)
      console.log(date)
      return date.toISOString()
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

.wrapper {
  max-width: 350px;
  margin-bottom: 20px;
}
</style>
