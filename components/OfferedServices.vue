<template>
  <section class="text-center pt-5 pb-5">
    <h1 class="mb-4">{{ $t('offered services') }}</h1>
    <b-button class="cta" variant="success">
      <a target="_blank" href="https://www.canva.com/design/DAFHH3VdTYE/KdE4xFI65qJkw2XfKKr9KA/view?utm_content=DAFHH3VdTYE&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent">
        {{ $t('banner.myService') }}
      </a>
    </b-button>
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
