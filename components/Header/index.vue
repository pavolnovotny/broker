<template>
    <b-navbar sticky toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">
        <img src="~/static/images/logo.svg" alt="logo"/>
      </b-navbar-brand>
      <LangugageInput/>
      <div class="mb-2">
      </div>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <nuxt-link :to="localePath('/')">{{ $t('pages.home') }}</nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link :to="localePath('about')">{{ $t('pages.about') }}</nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link :to="localePath('contact')">{{ $t('pages.contact') }}</nuxt-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <ul class="flex-row position-relative d-md-none d-lg-flex ">
            <li class="d-inline-block mt-1 mb-1"><BIconTelephone class="icon"/><span>725 747 519</span></li>
            <li class="d-inline-block"><BIconEnvelope class="icon"/><span>michal.smiga@kwcz.cz</span></li>
            <li class="d-inline-block"><b-button variant="success">{{ $t('banner.myService') }}</b-button></li>
          </ul>
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>

<script>
import { BIconTelephone, BIconEnvelope } from 'bootstrap-vue'
import LangugageInput from '../LangugageInput'
export default {
  name: 'index-header',
  components: {
    LangugageInput,
    BIconTelephone,
    BIconEnvelope
  }
}
</script>

<style scoped lang="scss">
.bg-info {
  background-color: #06112a !important;
  color: #FEFFFF;
}

.nav-link a {
  color: #fff !important;
  text-decoration: none;
}

.nav-link a:hover {
  color: #5ea51d !important;
}

.navbar-brand {
  padding: 10px 0 10px 0;
  img {
    width: 100px;
    height: 50px;
    display: inline-block;
    border-radius: 15px 40px;
  }
}

.icon {
  margin-right: 8px;
  width: 20px;
  height: 20px;
  font-weight: 900;
  color: #5ea51d;
}
</style>
