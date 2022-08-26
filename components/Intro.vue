<template>
  <section class="image">
  <b-container>
    <b-row class="roww">

      <b-col align-self="center" align-v="center" align-h="center" md="6" >
        <div>
          <h1>Ing. Michal Šmiga</h1>
          <p>
            Váš certifikovaný realitný maklér patriaci pod najväčšiu realitnú kanceláriu na svete Keller Williams. Vašu nehnuteľnosť viem predať/prenajať rýchlo a za maximálnu cenu.
          </p>
          <a href="#about" class="btn">Read More</a>
        </div>
      </b-col>
      <b-col md="6"  class="foto">
        <b-img src="@/static/images/new.png" fluid alt="Responsive image"></b-img>
      </b-col>
    </b-row>
  </b-container>
  </section>
</template>

<script>
export default {
  name: 'Intro-Landing'
}
</script>

<style scoped lang="scss">
.foto {
  max-width: 700px;
}
.image {
  background: linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);
}
</style>
