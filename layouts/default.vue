<template>
  <div class="app">
    <Header/>
    <Nuxt class="content"/>
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
.app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.content {
  flex: 1;
}
</style>
