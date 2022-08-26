<template>
  <section>
    <b-container>
      <b-row>dsfsdfs</b-row>
    </b-container>
    <b-container fluid>
      <b-row align-v="end" align-h="end">
        <b-embed
          class="mapa"
          type="iframe"
          aspect="16by9"
          src="https://www.google.com.qa/maps/d/embed?mid=1-9mYKUGgMjBXZt_KO6SHHOfZ6dvNX3c&ehbc=2E312F"
          allowfullscreen
        ></b-embed>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'contact-page'
}
</script>

<style scoped>
.mapa {
  max-height: 400px;
}
</style>
