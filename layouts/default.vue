<template>
  <div class="app">
    <Header/>
    <Nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../components/Footer'
import Header from '../components/Header'
export default {
  name: 'layout-lay',
  components: {
    Footer,
    Header
  }
}
</script>

<style scoped>

</style>
