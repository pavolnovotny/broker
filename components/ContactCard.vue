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
        <ul class="list-unstyled">
          <li><strong>Email: </strong>michal.smiga@kwcz.cz</li>
          <li><strong>{{$t('contact.contactCard.telephone')}}: </strong>725 747 519</li>
          <li><strong>{{$t('contact.contactCard.address')}}: </strong>Kaprova 52/6 Praha 1</li>
        </ul>

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
