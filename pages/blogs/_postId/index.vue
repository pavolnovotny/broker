<template>
  <b-container>
    <section id="post" v-editable="blok">
      <div class="thumbnail" :style="{backgroundImage: 'url(' + image + ')'}"></div>
      <h1 class="text-center mt-3 mb-3">{{title}}</h1>
      <p>{{content}}</p>
    </section>
  </b-container>
</template>

<script>
export default {
  name: 'index-blog',
  nuxtI18n: {
    paths: {
      cz: '/clanky/:postId',
      sk: '/clanky/:postId',
      en: '/blogs/:postId'
    }
  },
  async asyncData ({ app, params, isDev }) {
    try {
      const res = await app.$storyapi.get('cdn/stories/blog/' + params.postId, {
        language: app.i18n.localeProperties.code,
        version: isDev ? 'draft' : 'published'
      })
      return {
        id: res.data.story.slug,
        blok: res.data.story.content,
        image: res.data.story.content.thumbnail,
        title: res.data.story.content.title,
        content: res.data.story.content.content
      }
    } catch (e) {
      console.error(e)
      return {}
    }
  }
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
