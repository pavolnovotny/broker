<template>
  <b-card
    tag="form"
    :title="$t('contact.sendMeMessage')"
    style="max-width: 30rem;"
    class="mb-2"
  >
    <b-card-text>
        <form ref="form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">{{ $t('contact.name') }}*</label>
            <input
              :class="['form-control', { 'is-invalid': submitted && $v.user.name.$error }]"
              type="text"
              v-model="user.name"
              id="name"
              name="name"
            />
            <div v-if="submitted && !$v.user.name.required" class="invalid-feedback">{{ $t('contact.nameRequired') }}</div>
          </div>

          <div class="form-group">
            <label for="telephone">{{ $t('contact.Telephone') }}*</label>
            <input
              type="number"
              v-model="user.telephone"
              id="telephone"
              name="telephone"
              :class="['form-control' ,{ 'is-invalid': submitted && $v.user.telephone.$error }]"
            />
            <div v-if="submitted && $v.user.telephone.$error" class="invalid-feedback">
              <span v-if="!$v.user.telephone.onlyCzechTel">{{ $t('contact.invalidTelephone') }}</span>
              <span v-if="!$v.user.telephone.required">{{ $t('contact.telephoneRequired') }}</span>
            </div>
          </div>

          <div class="form-group">
            <label for="email">Email*</label>
            <input
              type="email"
              v-model="user.email"
              id="email"
              name="email"
              :class="['form-control' ,{ 'is-invalid': submitted && $v.user.email.$error }]"
            />
            <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
              <span v-if="!$v.user.email.required">{{ $t('contact.emailRequired') }}</span>
              <span v-if="!$v.user.email.email">{{ $t('contact.invalidEmail') }}</span>
            </div>
          </div>

          <div class="form-group">
            <label for="email">{{$t('contact.serviceType')}}*</label>
            <select
              type="text"
              v-model="user.serviceType"
              id="serviceType"
              name="serviceType"
              :class="['form-control' ,{ 'is-invalid': submitted && $v.user.serviceType.$error }]"
            >
              <option value=""></option>
              <option v-for="option in options" :key="option.type" :value="option.type">{{option.type}}</option>
            </select>
            <div v-if="submitted && $v.user.serviceType.$error" class="invalid-feedback">
              <span v-if="!$v.user.serviceType.required">{{ $t('contact.serviceRequired') }}</span>
            </div>
          </div>

          <div class="form-group">
            <label for="message">{{ $t('contact.Message') }}*</label>
            <textarea
              v-model="user.message"
              id="message"
              name="message"
              :class="['form-control',{ 'is-invalid': submitted && $v.user.message.$error }]"
              rows="3"
            />
            <div v-if="submitted && !$v.user.message.required" class="invalid-feedback">{{ $t('contact.messageRequired') }}</div>
          </div>

          <div><p>* {{$t('contact.requiredField')}}</p></div>

          <div class="form-group">
            <button class="btn btn-success">{{ $t('contact.Send') }}</button>
          </div>
        </form>
    </b-card-text>
  </b-card>
  </template>

<script>
import emailjs from '@emailjs/browser'
import { required, email, onlyCzechTel } from '../utils/custom-validators'

export default {
  name: 'contact-form',
  data () {
    return {
      user: {
        name: '',
        email: '',
        telephone: '',
        serviceType: '',
        message: ''
      },
      submitted: false,
      options: [
        { type: this.$t('contact.SaleProperty') },
        { type: this.$t('contact.RentalProperty') },
        { type: this.$t('contact.Financing') },
        { type: this.$t('contact.Management') },
        { type: this.$t('contact.Search') },
        { type: this.$t('services.ThermalManagement') },
        { type: this.$t('contact.AnotherTopic') }
      ]
    }
  },
  validations: {
    user: {
      name: { required },
      email: { required, email },
      telephone: { onlyCzechTel, required },
      serviceType: { required },
      message: { required }
    }
  },
  methods: {
    handleSubmit (e) {
      this.submitted = true

      // stop here if form is invalid
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }

      emailjs.sendForm(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        this.$refs.form,
        process.env.PUBLIC_KEY)
        .then((result) => {
          console.log('SUCCESS!', result.text)
          this.submitted = false
          this.user.name = null
          this.user.email = null
          this.user.telephone = null
          this.user.serviceType = null
          this.user.message = null
          this.makeToast('success', this.$t('contact.toastTitle'))
        }, (error) => {
          console.log('FAILED...', error.text)
        })
    },
    makeToast (variant = null, msg) {
      this.$bvToast.toast(msg, {
        variant,
        solid: true
      })
    }
  }
}
</script>

<style scoped>
.card {
  background-color: #f3f5f1;
}
</style>
