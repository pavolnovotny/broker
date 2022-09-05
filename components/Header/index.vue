<template>
    <b-navbar sticky toggleable="lg" type="dark" variant="info">
      <b-navbar-brand>
        <nuxt-link :to="localePath('/')"><img src="~/static/images/logo.svg" alt="logo"/></nuxt-link>
      </b-navbar-brand>

      <div class="mb-2">
      </div>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <nuxt-link :to="localePath('/')" tag="li"><a>{{ $t('nav.home') }}</a></nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link :to="localePath('about')" tag="li"><a>{{ $t('nav.about') }}</a></nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link :to="localePath('contact')" tag="li"><a>{{ $t('nav.contact') }}</a></nuxt-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="flex-row position-relative d-lg-flex  align-items-center ml-auto">
          <li class="d-inline-block mr-3 position-relative hide"><BIconTelephone class="icon"/><span class="ml-4">725 747 519</span></li>
          <li class="d-inline-block mr-3 position-relative hide"><BIconEnvelope class="icon"/><span class="ml-4">michal.smiga@kwcz.cz</span></li>
          <li class="d-inline-block mr-3">
            <b-button class="cta" variant="success">
              <nuxt-link :to="localePath('contact')">{{ $t('banner.form') }}</nuxt-link>
            </b-button>
          </li>
          <li class="d-inline-block mr-3 position-relative"><LangugageInput/></li>
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

.nav-link a:hover,
.nav-link a:active,
.nav-link .nuxt-link-exact-active a {
  color: #5ea51d !important;
}

.nav-link .nuxt-link-exact-active {
  border-bottom: 2px solid #5ea51d;
}

.navbar-brand {
  padding: 10px 0 10px 0;
  img {
    width: 80px;
    height: 50px;
    display: inline-block;
    border-radius: 15px 40px;
  }
}

.icon {
  position: absolute;
  top: 2px;
  left: 0;
  width: 20px;
  height: 20px;
  color: #5ea51d;
}

@media (max-width: 992px) {
  .hide {
    display: none!important;
  }
  .navbar-brand img {
    width: 100px;
  }
}
</style>
