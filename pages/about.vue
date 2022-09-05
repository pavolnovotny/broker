<template>
  <section class="mb-5">
    <b-container fluid class="header-section">
      <h1 class="ml-5">{{$t('about.AboutMe')}}</h1>
    </b-container>
    <b-container>
      <main>
        <b-row>
          <b-col md="4" class="foto">
            <b-img thumbnail src="~/static/images/about-page.jpg" fluid alt="Responsive image"></b-img>
          </b-col>
          <b-col align-v="center" align-h="center" md="8">
            <div>
              <h1>Ing. Michal Šmiga</h1>
              <p>{{ $t('about.text1') }}</p>
              <p>{{ $t('about.text2') }}</p>
              <p>{{ $t('about.text3') }}</p>
              <b-button class="cta" variant="success"><nuxt-link :to="localePath('contact')">{{ $t('pages.contact') }}</nuxt-link></b-button>
            </div>
          </b-col>
        </b-row>
      </main>
    </b-container>
<!--    <b-container fluid>-->
<!--      <b-row>-->
<!--        <b-embed-->
<!--          class="map mb-0"-->
<!--          type="iframe"-->
<!--          aspect="16by9"-->
<!--          src="https://www.google.com.qa/maps/d/embed?mid=1-9mYKUGgMjBXZt_KO6SHHOfZ6dvNX3c&ehbc=2E312F"-->
<!--          allowfullscreen-->
<!--        ></b-embed>-->
<!--      </b-row>-->
<!--    </b-container>-->
  </section>
</template>

<script>
export default {
  name: 'about-page',
  nuxtI18n: {
    paths: {
      cz: '/o-mne',
      sk: '/o-mne',
      en: '/about'
    }
  }
}
</script>

<style scoped>
.foto {
  padding: 0 20px 20px 0;
}
.map {
  max-height: 350px;
  margin-bottom: 0px;
}

.cta a {
  color: #FEFFFF;text-decoration: none;
}

main {
  margin-top: 50px;
}
</style>
