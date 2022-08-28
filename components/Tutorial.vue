<!-- Please remove this file from your project -->
<template>
 <div>
   <b-container>
      <ContactForm/>
     <h1>{{ $t('message') }}</h1>

   </b-container>
 </div>
</template>

<script>
import ContactForm from './ContactForm'
export default {
  name: 'NuxtTutorial',
  components: {
    ContactForm
  }
}
</script>

<style scoped>

</style>
