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
  },
  head: {
    title: 'O mne',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Ing. Michal Šmiga Mám za sebou více než 5 leté zkušenosti s realitami. Začínal jsem jako správce nemovitostí v Praze, speciálně pro zahraniční majitele a investory. Tato práce mě naučila, že okamžité řešení požadavků klienta je základem dobré a dlouhodobé spolupráce do budoucna.'
      },
      {
        hid: 'title',
        name: 'title',
        content: 'Ing. Michal Šmiga / o mne'
      }
    ]
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
