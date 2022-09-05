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
  components: {
    PostPreview
  },
  asyncData (context) {
    return context.app.$storyapi
      .get('cdn/stories/', {
        version: 'draft',
        starts_with: 'blog/'
      })
      .then((res) => {
        return {
          posts: res.data.stories.map((bp) => {
            return {
              id: bp.slug,
              title: bp.content.title,
              previewText: bp.content.summary,
              thumbnailUrl: bp.content.thumbnail
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
  // data () {
  //   return {
  //     posts: [
  //       {
  //         title: 'A new beginning',
  //         previewText: 'This will be awesome',
  //         thumbnailUrl: 'https://picsum.photos/1024/400/?image=41',
  //         id: 'a-new-beginning'
  //       },
  //       {
  //         title: 'A second beginning',
  //         previewText: 'This second will be awesome',
  //         thumbnailUrl: 'https://picsum.photos/1024/400/?image=41',
  //         id: 'a-second-beginning'
  //       }
  //     ]
  //   }
  // }
}
</script>

<style scoped>

</style>
