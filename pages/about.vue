<template>
  <section>
    <b-container>
      <h1>{{ $t('about.AboutMe') }}</h1>
      <b-row class="roww">
        <b-col md="4" class="foto">
          <b-img thumbnail src="@/static/images/stramak.png" fluid alt="Responsive image"></b-img>
        </b-col>
        <b-col align-v="center" align-h="center" md="8">
          <div>
            <h1>Ing. Michal Šmiga</h1>
            <p>{{ $t('about.text1') }}</p>
            <p>{{ $t('about.text2') }}</p>
            <p>{{ $t('about.text3') }}</p>
            <b-button><nuxt-link :to="localePath('contact')">{{ $t('pages.contact') }}</nuxt-link></b-button>
          </div>
        </b-col>
      </b-row>

    </b-container>
    <b-container fluid>
      <b-row align-v="end" align-h="end">
        <b-embed
          class="mapa mb-0"
          type="iframe"
          aspect="16by9"
          src="https://www.google.com.qa/maps/d/embed?mid=1-9mYKUGgMjBXZt_KO6SHHOfZ6dvNX3c&ehbc=2E312F"
          allowfullscreen
        ></b-embed>
      </b-row>
    </b-container>
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
  padding: 20px;
}
</style>
