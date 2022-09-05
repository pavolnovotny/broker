<template>
  <div class="preview">
    <nuxt-link
      :key="id"
      :to="id"
    >
      <article>
        <div class="thumbnail" :style="{backgroundImage: 'url(' + thumbnailImage+')'}"></div>
        <div>{{title}}</div>
        <p>{{excerpt}}</p>
      </article>
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
    }
  }
}
</script>

<style scoped>
.preview {
  border: 1px solid black;
}

.thumbnail {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 10rem;
}
</style>
