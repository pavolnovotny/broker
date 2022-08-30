<template>
  <footer>
    <b-container>
      <b-row>
        <ul class="d-flex align-items-center justify-content-center mt-4">
          <li class="d-inline-block">
            <a href="https://www.facebook.com/smiga.michal" target="_blank"><BIconFacebook class="facebook"/></a>
            </li>
          <li class="d-inline-block ml-3 mr-3 ">
            <a href="https://www.instagram.com/smiga.michal/" target="_blank"><BIconInstagram class="instagram"/></a>
          </li>
          <li class="d-inline-block">
            <a href="https://www.linkedin.com/in/smigamichal/?locale=cs_CZ" target="_blank"><BIconLinkedin class="linkedin"/></a>
          </li>
        </ul>
      </b-row>
      <b-row>
        <div class="d-flex align-items-center justify-content-center mt-2">
          <img class="logo" src="~/static/images/logo.svg"/>
          <ul class="d-flex flex-column position-relative">
            <li class="d-flex">
              <BIconGeoAlt class="icon align-self-center"/>
              <div><p class="mb-0">Kaprova 52/6 Praha 1</p><p class="mb-0">Křižíkova 506/62 Praha 8</p></div>
            </li>
            <li class="d-inline-block mt-1 mb-1"><BIconTelephone class="icon"/><span>725 747 519</span></li>
            <li class="d-inline-block"><BIconEnvelope class="icon"/><span>michal.smiga@kwcz.cz</span></li>
          </ul>
        </div>
      </b-row>
    </b-container>
    <hr class="mb-1 mt-1"/>
    <b-container>
      <b-row>
        <p class="text-center"> &copy; <span>{{new Date().getFullYear()}}</span> {{ $t('footer') }} </p>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
import { BIconFacebook, BIconInstagram, BIconLinkedin, BIconGeoAlt, BIconTelephone, BIconEnvelope } from 'bootstrap-vue'
export default {
  name: 'footer-bottom',
  components: {
    BIconFacebook,
    BIconInstagram,
    BIconLinkedin,
    BIconGeoAlt,
    BIconTelephone,
    BIconEnvelope
  }
}
</script>

<style scoped>
footer {
  background-color: #3AAFA9;
  color: #FEFFFF;
}
.logo {
  width: 100px;
  height: 60px;
  display: inline-block;
  border-radius: 15px 40px;
}
.icon {
  margin-right: 8px;
  width: 20px;
  height: 20px;
  font-weight: 900;
}
.facebook, .instagram, .linkedin {
  display: inline-block;
  height: 60px;
  width: 60px;
  transition: all .2s ease-in-out;
  background-color: #FEFFFF;
  padding: 12px;
  border-radius: 50%;
}

.facebook:hover,.instagram:hover,.linkedin:hover {
  transform: scale(1.3);
}

.facebook {
  color: #4267B2;
}
.instagram {
  color: #C13584;
}
.linkedin {
  color: #0A66C2;
}
hr {
  height: 1px;
  background-color: #FEFFFF;
}
</style>
