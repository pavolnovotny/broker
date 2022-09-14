<template>
  <section>
    <b-container fluid class="header-section">
      <h1 class="ml-5">{{$t('Blogs')}}</h1>
    </b-container>
    <b-container v-if="posts.length">
      <b-row>
        <PostPreview
          v-for="post in posts"
          :key="post.id"
          :title="post.title"
          :excerpt="post.previewText"
          :thumbnail-image="post.thumbnailUrl"
          :id="post.id"
          :created-at="post.createdAt"
          class="col-xl-4 col-md-6 col-sm-12 mt-2 mb-4"
        />
      </b-row>
    </b-container>
    <b-container fluid v-else>
      <h4>{{$t('noBlogs')}}</h4>
    </b-container>
  </section>
</template>

<script>
import PostPreview from '../../components/Blog/PostPreview'
export default {
  name: 'posts-index',
  nuxtI18n: {
    paths: {
      cz: '/clanky',
      sk: '/clanky',
      en: '/blogs'
    }
  },
  head: {
    title: 'Ing. Michal Šmiga - Články',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Články'
      },
      {
        hid: 'title',
        name: 'title',
        content: 'Ing. Michal Šmiga / Články'
      }
    ]
  },
  components: {
    PostPreview
  },
  async asyncData ({ app, isDev }) {
    try {
      const res = await app.$storyapi
        .get('cdn/stories/', {
          version: isDev ? 'draft' : 'published',
          language: app.i18n.localeProperties.code,
          starts_with: 'blog/'
        })

      return {
        posts: res.data.stories.map((bp) => {
          return {
            id: bp.slug,
            title: bp.content.title,
            previewText: bp.content.summary,
            thumbnailUrl: bp.content.thumbnail,
            createdAt: bp.created_at
          }
        })
      }
    } catch (e) {
      console.error(e)
      return []
    }
  }
}
</script>

<style scoped>

</style>
