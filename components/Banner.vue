<template>
  <section>
  <b-container>
    <b-row>
      <b-col align-self="center" align-v="center" align-h="center" md="6" >
        <div>
          <h1>Ing. Michal Šmiga</h1>
          <p>{{ $t('banner.text') }}</p>
          <b-button href="#myService" variant="success">{{ $t('banner.myService') }}</b-button>
        </div>
      </b-col>
      <b-col md="6">
        <b-img src="~/static/images/new.png" fluid alt="Michal Smiga photo"></b-img>
      </b-col>
    </b-row>
  </b-container>
  </section>
</template>

<script>
export default {
  name: 'Banner-landing'
}
</script>

<style scoped lang="scss">
  section {
    background: linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);
  }
</style>
