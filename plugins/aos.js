import AOS from 'aos'
import 'aos/dist/aos.css'

export default ({ app }) => {
  /* eslint-disable-next-line */
  app.AOS = new AOS.init()

  document.querySelectorAll('img')
    .forEach((img) => {
      img.addEventListener('load', () => {
        AOS.refresh()
      })
    })
}
