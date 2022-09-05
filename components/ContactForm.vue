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
            <label for="telephone">{{ $t('contact.Telephone') }}</label>
            <input
              type="number"
              v-model="user.telephone"
              id="telephone"
              name="telephone"
              :class="['form-control' ,{ 'is-invalid': submitted && $v.user.telephone.$error }]"
            />
            <div v-if="submitted && $v.user.telephone.$error" class="invalid-feedback">
              <span v-if="!$v.user.telephone.onlyCzechTel">{{ $t('contact.invalidTelephone') }}</span>
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

          <div class="form-group">
            <button v-b-modal.modal-1 class="btn btn-success">{{ $t('contact.Send') }}</button>
          </div>
          <b-modal id="modal-1" title="BootstrapVue">
            <p class="my-4">Hello from modal!</p>
          </b-modal>
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
        message: ''
      },
      submitted: false,
      options: [
        { type: this.$t('contact.SaleProperty') },
        { type: this.$t('contact.RentalProperty') },
        { type: this.$t('contact.Financing') },
        { type: this.$t('contact.Management') },
        { type: this.$t('contact.Search') },
        { type: this.$t('contact.AnotherTopic') }
      ]
    }
  },
  validations: {
    user: {
      name: { required },
      email: { required, email },
      telephone: { onlyCzechTel },
      message: { required }
    }
  },
  methods: {
    handleSubmit (e) {
      this.submitted = true

      // stop here if form is invalid
      this.$v.$touch()
      if (this.$v.$invalid) {
        console.log('problem')
        return
      }

      emailjs.sendForm('service_bvfesk3', 'template_y3h8xjf', this.$refs.form, '1SLzVUL_X0gJ4bW1g')
        .then((result) => {
          console.log('SUCCESS!', result.text)
          this.$refs.form.reset()
        }, (error) => {
          console.log('FAILED...', error.text)
        })
    }
  }
}
</script>

<style scoped>
.jumbotron {
  background-color: white;
}
</style>
