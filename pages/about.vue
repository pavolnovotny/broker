<template>
  <b-container>
    <b-row class="roww">
      <b-col md="4" class="foto">
        <b-img thumbnail src="@/static/images/stramak.png" fluid alt="Responsive image"></b-img>
      </b-col>
      <b-col align-v="center" align-h="center" md="8">
        <div>
          <h1>The headphones of the future.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            repudiandae rerum libero ipsum asperiores omnis mollitia, nostrum
            commodi placeat ea itaque modi corrupti corporis nam voluptas aut
            reprehenderit eaque culpa.
          </p>
          <a href="#about" class="btn">Read More</a>
        </div>
      </b-col>
    </b-row>
  </b-container>
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
.roww {
  background-color: #353C46;
}
</style>
