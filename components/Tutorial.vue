<!-- Please remove this file from your project -->
<template>
 <div>
   <b-container>
     <LangugageInput/>

     <h1>{{ $t('message') }}</h1>
   </b-container>
 </div>
</template>

<script>

import LangugageInput from './LangugageInput'
export default {
  name: 'NuxtTutorial',
  components: {
    LangugageInput
  }
}
</script>

<style scoped>

</style>
