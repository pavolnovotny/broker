<template>
  <section>
    <b-container>
      <b-jumbotron class="jumbotron" header="BootstrapVue" lead="Bootstrap v4 Components for Vue.js 2">
        <p>For more information visit website</p>
        <b-button variant="primary" href="#">More Info</b-button>
      </b-jumbotron>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'Jumbotron-landing'
}
</script>

<style scoped>
.jumbotron {
  background-image: url('@/static/images/house.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
