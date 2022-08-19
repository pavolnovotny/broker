<!-- Please remove this file from your project -->
<template>
 <div>
   <b-container>
    {{testing}}
     <div>
       <b-jumbotron style="background-image: url(https://picsum.photos/1024/400/?image=41); background-size: 100%;" class="jumbotron" header="BootstrapVue" lead="Bootstrap v4 Components for Vue.js 2">
         <p>For more information visit website</p>
         <b-button variant="primary" href="#">More Info</b-button>
       </b-jumbotron>
     </div>
     <h1>{{ $t('message') }}</h1>
     <div>
       <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image"></b-img>
     </div>
     <div>
       <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image"></b-img>
     </div>
     <div>
       <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image"></b-img>
     </div>
   </b-container>

   <FlipCard/>

 </div>
</template>

<script>
import FlipCard from '../components/shared/FlipCard'
export default {
  name: 'NuxtTutorial',
  components: {
    FlipCard
  },
  computed: {
    testing () {
      return process.env.KEY || 0
    }
  }
}
</script>

<style scoped>
.jumbotron {
  /*background-image: url('../static/favicon.ico');*/
  background-size: cover;
}
</style>
