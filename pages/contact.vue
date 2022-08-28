<template>
  <section>
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
.mapa {
  max-height: 400px;
}
</style>
