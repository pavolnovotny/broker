<template>
  <section id="cooperation">
    <b-container>
      <b-jumbotron class="jumbotron">
        <b-button class="button"  variant="primary" href="https://www.canva.com/design/DAFHH3VdTYE/KdE4xFI65qJkw2XfKKr9KA/view?utm_content=DAFHH3VdTYE&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent">
          {{ $t('WhyWorkWithMe') }}
        </b-button>
      </b-jumbotron>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'Cooperation-jumbotron'
}
</script>

<style scoped>
.jumbotron {
  background-image: url('~/static/images/house.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 450px;
  position: relative;
  border: 4px solid white;
}
.button {
  position: absolute;
  bottom: 60px;
  left: 40px;
}

section {
  background: linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);
  padding: 150px 0 50px 0;
  clip-path: polygon(100% 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 0 10%);
}
</style>
