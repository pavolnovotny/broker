<template>
  <section>
    <b-container fluid class="header-section">
      <h1 class="ml-5">{{$t('Blogs')}}</h1>
    </b-container>
    <b-container>
      <b-row>
        <PostPreview
          v-for="post in posts"
          :key="post.id"
          :title="post.title"
          :excerpt="post.previewText"
          :thumbnail-image="post.thumbnailUrl"
          :id="post.id"
          :created-at="post.createdAt"
          class="col-xl-6"
        />
      </b-row>
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
    title: 'Články',
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
  asyncData (context) {
    return context.app.$storyapi
      .get('cdn/stories/', {
        version: context.isDev ? 'draft' : 'published',
        starts_with: 'blog/'
      })
      .then((res) => {
        console.log(res.data)
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
      })
  },
  data () {
    return {
      posts: []
    }
  }
}
</script>

<style scoped>

</style>
