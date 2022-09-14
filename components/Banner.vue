<template>
  <section>
    <b-container>
      <b-row>
        <b-col align-self="center" align-v="center" align-h="center" md="6" >
          <div class="banner-info" data-aos="zoom-in" data-aos-delay="300">
            <h1 class="banner-title">Ing. Michal Šmiga</h1>
            <p class="banner-text mb-4">{{ $t('banner.text') }}</p>
            <b-button class="mr-2" href="#services" variant="success">{{ $t('banner.myService') }}</b-button>
            <b-button class="cta" variant="success">
              <nuxt-link :to="localePath('contact')">{{ $t('banner.form') }}</nuxt-link>
            </b-button>
          </div>
        </b-col>
        <b-col md="6">
          <b-img src="~/static/images/hero.png" fluid alt="Michal Smiga photo"></b-img>
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
  // Small devices (landscape phones, 576px and up)
  //@media (min-width: 576px) { ... }

  // Medium devices (tablets, 768px and up)
  @media (max-width: 768px) {
    .banner-info {
      margin-top: 40px;
      text-align: center;
      margin-bottom: 20px;
    }
    //.banner-title {
    //  font-size: 40px;
    //}
  }

  // Large devices (desktops, 992px and up)
  //@media (min-width: 992px) { ... }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    .banner-title {
      font-size: 60px;
      font-weight: 400;
      line-height: 1.1;
      margin-bottom: 30px;
    }
  }
</style>
