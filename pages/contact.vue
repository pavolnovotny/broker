<template>
  <section>
    <b-container fluid class="header-section">
      <h1 class="ml-5">{{$t('contact.Contact')}}</h1>
    </b-container>
    <b-container>
      <b-row class="mb-5">
        <b-col md="6" xl="6"><ContactForm/></b-col>
        <b-col md="6" xl="6"><ContactCard/></b-col>
      </b-row>
    </b-container>
    <b-container fluid>
      <b-row class="justify-content-center">
        <h3 class="mt-2 mb-2">{{$t('contact.WhereYouCanFindMe')}}</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5119.760306613713!2d14.415664358875969!3d50.08853067861013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b95e70843fdf5%3A0x97fc11865c44e99f!2zSW5nLiBNaWNoYWwgxaBtaWdhLCByZWFsaXRuw60gbWFrbMOpxZkgLSBQcmFoYSBhIFN0cmVkb8SNZXNrw70ga3Jhag!5e0!3m2!1ssk!2scz!4v1662123842319!5m2!1ssk!2scz"
                width="2500"
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import ContactForm from '../components/ContactForm'
import ContactCard from '../components/ContactCard'
export default {
  name: 'contact-page',
  components: {
    ContactForm,
    ContactCard
  },
  nuxtI18n: {
    paths: {
      cz: '/kontakt',
      sk: '/kontakt',
      en: '/contact'
    }
  },
  head: {
    title: 'Ing. Michal Šmiga - Kontakt',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Ing. Michal Šmiga Email: michal.smiga@kwcz.cz\n' + 'Telefón: 725 747 519\n' + 'Adresa: Kaprova 52/6 Praha 1'
      },
      {
        hid: 'title',
        name: 'title',
        content: 'Ing. Michal Šmiga / Kontakt'
      }
    ]
  }
}
</script>

<style scoped>

</style>
