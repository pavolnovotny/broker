<template>
  <div>
    <select v-model="selectedValue" @change="onChange(selectedValue)">
      <option value="cz">🇨🇿 {{$t('lang.cz')}}</option>
      <option value="sk">🇸🇰 {{$t('lang.sk')}}</option>
      <option value="en">🇺🇸󠁢󠁥󠁮 {{$t('lang.en')}}</option>
    </select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedValue: ''
    }
  },
  created () {
    this.selectedValue = this.$i18n.locale
  },
  methods: {
    onChange (event) {
      this.$router.replace(this.switchLocalePath(event))
    }
  }
}
</script>

<style>
select {
  padding: 7px;
}
</style>
