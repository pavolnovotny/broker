import { helpers } from 'vuelidate/lib/validators'

export const OnlyDgitis = helpers.regex('onlyDigits', /^\d+$/)

export const onlyCzechTel = helpers.regex('onlyCzechTel', /^(\+?420)?(2[0-9]{2}|3[0-9]{2}|4[0-9]{2}|5[0-9]{2}|72[0-9]|73[0-9]|77[0-9]|60[1-8]|56[0-9]|70[2-5]|79[0-9])[0-9]{3}[0-9]{3}$/)

export * from 'vuelidate/lib/validators'
