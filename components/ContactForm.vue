<template>
  <div class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <div>
            <h2>{{ $t('contact.Contact') }}</h2>
            <form ref="form" @submit.prevent="handleSubmit">

              <div class="form-group">
                <label for="firstName">{{ $t('contact.name') }}</label>
                <input
                  :class="['form-control', { 'is-invalid': submitted && $v.user.firstName.$error }]"
                  type="text"
                  v-model="user.firstName"
                  id="firstName"
                  name="firstName"
                />
                <div v-if="submitted && !$v.user.firstName.required" class="invalid-feedback">{{ $t('contact.nameRequired') }}</div>
              </div>

              <div class="form-group">
                <label for="lastName">{{ $t('contact.familyName') }}</label>
                <input
                  :class="['form-control' ,{ 'is-invalid': submitted && $v.user.lastName.$error }]"
                  type="text"
                  v-model="user.lastName"
                  id="lastName"
                  name="lastName"
                />
                <div v-if="submitted && !$v.user.lastName.required" class="invalid-feedback">{{ $t('contact.surnameRequired') }}</div>
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
                  <span v-if="!$v.user.telephone.required">{{ $t('contact.telephoneRequired') }}</span>
                </div>
              </div>

              <div class="form-group">
                <label for="email">Email</label>
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
                <label for="serviceType">{{ $t('contact.serviceType') }}</label>
                <select
                  type="select"
                  v-model="user.serviceType"
                  id="serviceType"
                  name="serviceType"
                  :class="['form-control' ,{ 'is-invalid': submitted && $v.user.serviceType.$error }]">
                  <option v-for="(option, i) in options" :key="i" :value="option.type">
                    {{option.type}}
                  </option>
                </select>
                <div v-if="submitted && $v.user.serviceType.$error" class="invalid-feedback">
                  <span v-if="!$v.user.serviceType.required">{{ $t('contact.serviceRequired') }}</span>
                </div>
              </div>

              <div class="form-group">
                <label for="message">{{ $t('contact.Message') }}</label>
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
                <button class="btn btn-primary">{{ $t('contact.Send') }}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser'
import { required, email, onlyCzechTel } from '../utils/custom-validators'

export default {
  name: 'contact-form',
  data () {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        serviceType: '',
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
      firstName: { required },
      lastName: { required },
      email: { required, email },
      serviceType: { required },
      telephone: { onlyCzechTel, required },
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
