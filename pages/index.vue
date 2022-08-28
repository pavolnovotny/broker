<template>
  <div>
    <Banner/>
    <Services/>
    <Jumbotron/>
    <Tutorial />
  </div>
</template>

<script>
import Banner from '../components/Banner'
import Services from '../components/Services'
import Jumbotron from '../components/Jumbotron'
export default {
  name: 'IndexPage',
  components: {
    Banner,
    Services,
    Jumbotron
  }
}
</script>
