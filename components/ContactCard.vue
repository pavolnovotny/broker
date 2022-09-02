<template>
  <div>
    <b-card
      tag="article"
      style="max-width: 30rem;"
      class="mb-2"
    >
      <b-card-text>
        <h4>Pokud se se mnou chcete spojit, můžete mi napsat, zavolat nebo přijít do mojí kanceláře.</h4>
        <h4>Budu se na Vás těšit !</h4>
        <ul>
          <li>Email: michal.smiga@kwcz.cz</li>
          <li>Telefon: 725 747 519</li>
          <li>Adresa: Kaprova 52/6 Praha 1</li>
        </ul>

        <h4>Uložte si můj kontakt:</h4>
        <b-img class="text-center d-inline-block" src="~/static/images/contact-qr.png" fluid alt="Responsive image"></b-img>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'ContactCard'
}
</script>

<style scoped>

</style>
