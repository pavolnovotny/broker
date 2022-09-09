<template>
  <div>
    <b-card
      tag="article"
      style="max-width: 30rem;"
      class="mb-2"
    >
      <b-card-text>
        <h4>{{$t('contact.contactCard.motivationText')}}</h4>
        <h4>{{$t('contact.contactCard.lookingForwardToSeeYou')}}</h4>
        <ul>
          <li> Email: michal.smiga@kwcz.cz</li>
          <li>Telefon: 725 747 519</li>
          <li>Adresa: Kaprova 52/6 Praha 1</li>
        </ul>

        <h4>Uložte si můj kontakt:</h4>
        <div>
          <img class="d-inline-block" src="~/static/images/contact-qr.png" alt="contact">
        </div>
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
