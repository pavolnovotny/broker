<template>
  <form ref="form" @submit.prevent="sendEmail">
    <label>Name</label>
    <input type="text" name="user_name">
    <label>Email</label>
    <input type="email" name="user_email">
    <label>Service type</label>
    <select>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
    </select>
    <input type="email" name="user_email">
    <label>Telephone</label>
    <input type="tel" name="user_telephone">
    <label>Message</label>
    <textarea name="message"></textarea>
    <input type="submit" value="Send">
  </form>
</template>

<script>
import emailjs from '@emailjs/browser'

export default {
  methods: {
    sendEmail () {
      emailjs.sendForm('service_bvfesk3', 'template_y3h8xjf', this.$refs.form, '1SLzVUL_X0gJ4bW1g')
        .then((result) => {
          console.log('SUCCESS!', result.text)
        }, (error) => {
          console.log('FAILED...', error.text)
        })
      this.$refs.form.reset()
    }
  }
}
</script>
