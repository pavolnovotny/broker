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
  // nuxtI18n: {
  //   paths: {
  //     cz: `/clanky/${this.$route.params.postId}`,
  //     sk: `/clanky/${this.$route.params.postId}`,
  //     en: `/blogs/${this.$route.params.postId}`
  //   }
  // },
  asyncData (context) {
    return context.app.$storyapi.get('cdn/stories/blog/' + context.params.postId, {
      version: 'draft'
    }).then((res) => {
      console.log(res.data)
      return {
        id: res.data.story.slug,
        blok: res.data.story.content,
        image: res.data.story.content.thumbnail,
        title: res.data.story.content.title,
        content: res.data.story.content.content
      }
    })
  },
  mounted () {
    // this.$storyblok.init()
    // this.$storyblok.on('change', () => {
    //   location.reload(true)
    // })
    console.log(this.$route)
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
