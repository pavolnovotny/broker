<template>
<section class="text-center pt-5 pb-5">
  <h1 class="mb-4">{{ $t('offered services') }}</h1>
  <b-button variant="success">{{ $t('banner.myService') }}</b-button>
</section>
</template>

<script>
export default {
  name: 'OfferedServices'
}
</script>

<style scoped>
section {
  background-color: #f3f5f1;
}
</style>
