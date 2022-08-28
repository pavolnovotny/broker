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
}
.button {
  position: absolute;
  bottom: 60px;
  left: 40px;
}
</style>
