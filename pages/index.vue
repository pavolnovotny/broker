<template>
  <div>
    <Intro/>
    <Skills/>
    <Jumbotron/>
    <Tutorial />
  </div>

</template>

<script>
import Intro from '../components/Intro'
import Skills from '../components/Skills'
import Jumbotron from '../components/Jumbotron'
export default {
  name: 'IndexPage',
  components: {
    Intro,
    Skills,
    Jumbotron
  }
}
</script>
