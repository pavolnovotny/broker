<template>
  <section class=" mb-0">
    <b-container>
      <main>
        <b-row>
          <b-col md="4" >
            <b-img src="~/static/images/about.png" fluid alt="Responsive image"></b-img>
          </b-col>
          <b-col align-v="center" align-h="center" md="8">
            <div>
              <h1>Ing. Michal Šmiga</h1>
              <p>{{ $t('about.text1') }}</p>
              <b-button variant="success" class="cta"><nuxt-link :to="localePath('contact')">{{ $t('pages.contact') }}</nuxt-link></b-button>
            </div>
          </b-col>
        </b-row>
      </main>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'about-section'
}
</script>

<style scoped>
.foto {
  padding: 0 20px 20px 0;
}

.header {
  background: #DEF2F1;
  padding: 15px;
  text-align: center;
  margin-bottom: 15px;
}

.cta {
  text-decoration: none!important;
  color: #fff!important;
}

main {
  margin-top: 50px;
}
</style>
