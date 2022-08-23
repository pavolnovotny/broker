<!-- Please remove this file from your project -->
<template>
 <div>
   <b-container>
     <LangugageInput/>
      <ContactForm/>
     <h1>{{ $t('message') }}</h1>

   </b-container>
 </div>
</template>

<script>

import LangugageInput from './LangugageInput'
import ContactForm from './ContactForm'
export default {
  name: 'NuxtTutorial',
  components: {
    LangugageInput,
    ContactForm
  }
}
</script>

<style scoped>

</style>
