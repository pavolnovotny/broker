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
  },
  head: {
    title: 'HomePage',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Váš certifikovaný realitní makléř spadající pod největší realitní kancelář na světě Keller Williams. Vaší nemovitost umím prodat/pronajmout rychle a za maximální cenu.'
      },
      {
        hid: 'title',
        name: 'title',
        content: 'Ing. Michal Šmiga / homepage'
      }
    ]
  }
}
</script>
