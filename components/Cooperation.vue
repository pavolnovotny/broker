<template>
  <section id="cooperation">
    <b-container>
      <b-jumbotron class="jumbotron">
        <b-button class="button"  variant="primary" target="_blank" href="https://www.canva.com/design/DAFHH3VdTYE/KdE4xFI65qJkw2XfKKr9KA/view?utm_content=DAFHH3VdTYE&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent">
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
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
.button {
  position: absolute;
  bottom: 60px;
  left: 40px;
  background-color: #3AAFA9;
  border: 1px solid #FEFFFF;
}

section {
  padding: 150px 0 50px 0;
  clip-path: polygon(100% 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 0 10%);
  background: #DEF2F1;
}
</style>
