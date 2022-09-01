<template>
  <section>
  <b-container>
    <b-row>
      <b-col align-self="center" align-v="center" align-h="center" md="6" >
        <div>
          <h1>Ing. Michal Šmiga</h1>
          <p>{{ $t('banner.text') }}</p>
          <b-button variant="success">{{ $t('banner.myService') }}</b-button>
          <b-button variant="success">{{ $t('banner.myService') }}</b-button>
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
    background: #f3f5f1;
  }
</style>
