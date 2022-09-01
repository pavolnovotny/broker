<template>
  <div>
    <Banner/>
    <Services/>
    <OfferedServices/>
    <About/>
  </div>
</template>

<script>
import Banner from '../components/Banner'
import Services from '../components/Services'
import About from '../components/About'
import OfferedServices from '../components/OfferedServices'
export default {
  name: 'IndexPage',
  components: {
    Banner,
    Services,
    About,
    OfferedServices
  }
}
</script>
