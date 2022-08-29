<template>
    <b-navbar sticky toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#"><img src="~/static/images/logo.svg"/></b-navbar-brand>
      <LangugageInput/>
      <div class="mb-2">
      </div>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item><nuxt-link :to="localePath('/')">{{ $t('pages.home') }}</nuxt-link></b-nav-item>
          <b-nav-item><nuxt-link :to="localePath('about')">{{ $t('pages.about') }}</nuxt-link></b-nav-item>
          <b-nav-item><nuxt-link :to="localePath('contact')">{{ $t('pages.contact') }}</nuxt-link></b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
              <b-icon-arrow-up/>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

</template>

<script>
import { BIconArrowUp } from 'bootstrap-vue'
import LangugageInput from '../LangugageInput'
export default {
  name: 'index-header',
  components: {
    BIconArrowUp,
    LangugageInput
  }
}
</script>

<style scoped>
.bg-info {
  background-color: #3AAFA9 !important;
  color: #FEFFFF;
}
</style>
