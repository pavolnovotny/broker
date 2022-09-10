<template>
  <footer>
    <cookie-law>
      <div slot-scope="props" class="cookies d-flex">
        <p class="d-inline-block mt-3">{{$t('cookies.text')}}</p>
        <b-button class="ml-2 align-self-center cookies-btn" variant="success" @click="props.accept">{{$t('cookies.btn')}}</b-button>
      </div>
    </cookie-law>
    <b-container>
      <b-row class="justify-content-center">
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
      <b-row class="justify-content-center">
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
        <div class="ml-3 qr-code">
          <img class="d-inline-block" src="~/static/images/contact-qr.png" alt="contact">
        </div>
      </b-row>
    </b-container>
    <b-container fluid class="footer-bottom">
      <b-row class="justify-content-center">
        <p class="text-center"> &copy; <span>{{new Date().getFullYear()}}</span> {{ $t('footer') }} </p>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
import { BIconFacebook, BIconInstagram, BIconLinkedin, BIconGeoAlt, BIconTelephone, BIconEnvelope } from 'bootstrap-vue'
export default {
  name: 'footer-index',
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

<style scoped lang="scss">
footer {
  background-color: #06112a;
  color: rgba(255, 255, 255, 0.7);
}
.qr-code img {
  height: 150px;
  width: 150px;
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
  color: #5ea51d;
}
.facebook, .instagram, .linkedin {
  display: inline-block;
  height: 60px;
  width: 60px;
  transition: all .2s ease-in-out;
  background-color: #fff;
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

.footer-bottom {
  background-color: #050d21;
  padding: 10px;
}

.Cookie--base {
  padding: 10px;
  border-top: 1px solid #050d21;
}

.cookies {
  background-color: #f3f5f1;
}
@media (max-width: 576px) {
  .cookies {
    p {
      margin-left: 10px;
    }
    flex-direction: column;
  }
  .cookies-btn {
    margin: auto;
  }
}

</style>
