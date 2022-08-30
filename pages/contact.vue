<template>
  <section>
    <b-container fluid class="header">
      <h1>{{$t('contact.Contact')}}</h1>
    </b-container>
    <b-container>
      <ContactForm/>
    </b-container>

  </section>
</template>

<script>
import ContactForm from '../components/ContactForm'
export default {
  name: 'contact-page',
  components: {
    ContactForm
  },
  nuxtI18n: {
    paths: {
      cz: '/kontakt',
      sk: '/kontakt',
      en: '/contact'
    }
  }
}
</script>

<style scoped>
.header {
  background: #DEF2F1;
  padding: 15px;
  text-align: center;
  margin-bottom: 15px;
}

</style>
