<template>
  <b-container>
    <b-row class="roww">
      <b-col md="6"  class="foto">
        <b-img src="@/static/images/new.png" fluid alt="Responsive image"></b-img>
      </b-col>
      <b-col align-self="center" align-v="center" align-h="center" md="6" >
        <div>
          <h1>Ing. Michal Šmiga</h1>
          <p>
            Váš certifikovaný realitný maklér patriaci pod najväčšiu realitnú kanceláriu na svete Keller Williams. Vašu nehnuteľnosť viem predať/prenajať rýchlo a za maximálnu cenu.
          </p>
          <a href="#about" class="btn">Read More</a>
        </div>
      </b-col>
    </b-row>
  </b-container>
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

</style>
