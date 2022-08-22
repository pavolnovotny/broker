<template>
    <b-container fluid>
      <b-row align-h="center" align-v="center">
        <b-col sm="12" md="4" xl="4"><FlipCard/></b-col>
        <b-col sm="12" md="4" xl="4"><FlipCard/></b-col>
        <b-col sm="12" md="4" xl="4"><FlipCard/></b-col>
        <b-col sm="12" md="4" xl="4"><FlipCard/></b-col>
      </b-row>
    </b-container>
</template>

<script>
import FlipCard from './shared/FlipCard'
export default {
  name: 'Skills-landing ',
  components: {
    FlipCard
  }
}
</script>

<style scoped>
.skills {
  background-color: orange;
  padding: 200px 0 100px;

}
</style>
