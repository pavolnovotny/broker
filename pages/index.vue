<template>
  <div>
    <Banner/>
    <Services/>
    <Cooperation/>
  </div>
</template>

<script>
import Banner from '../components/Banner'
import Services from '../components/Services'
import Cooperation from '../components/Cooperation'
export default {
  name: 'IndexPage',
  components: {
    Banner,
    Services,
    Cooperation
  }
}
</script>
