<template>
  <div class="wrapper">
    <nuxt-link
      :key="id"
      :to="`/blogs/${id}`"
    >
      <b-card :title="title" :img-src="thumbnailImage" :img-alt="title" img-top>
        <b-card-text>
          {{excerpt}}
        </b-card-text>
        <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
      </b-card>
    </nuxt-link>
  </div>
<!--  <div class="preview">-->
<!--    <nuxt-link-->
<!--      :key="id"-->
<!--      :to="`/blogs/${id}`"-->
<!--    >-->
<!--      <article>-->
<!--        <div class="thumbnail" :style="{backgroundImage: 'url(' + thumbnailImage+')'}"></div>-->
<!--        <div>{{title}}</div>-->
<!--        <p>{{excerpt}}</p>-->
<!--      </article>-->
<!--    </nuxt-link>-->
<!--  </div>-->
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

.wrapper {
  max-width: 350px;
}
</style>
