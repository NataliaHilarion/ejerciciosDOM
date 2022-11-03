import hamburgerMenu from "./1.menu-hamburger.js";
import {digitalClock, alarm} from "./2.section-one-clock.js"
import {shorcuts, moveBall} from "./3.section-two-Keyboard.js"
import countdown from "./4.section-three-countdown.js"
import scrollTopButton from "./5.scroll-top-button.js"
import darkTheme from "./6.dark-theme.js"
import responsiveMedia from "./7.section-four-object-responsive.js"
import responsiveTester from "./8.section-five-responsive-tester.js"
import getGeolocation from "./9.section-six-geolocation.js"
import searchFilter from "./10.section-seven-search-filter.js"
import slider from "./12.section-eight-responsive-slider.js";
import scrollSpy from "./13.scroll-spy.js";
import contactFormValidation from "./14.section-nine-contact-form.js";

const d = document

d.addEventListener("DOMContentLoaded", e => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a")
  digitalClock("#clock", "#startClock", "#stopClock")
  alarm("assets/alarm-clock.mp3", "#startAlarm", "#stopAlarm")
  countdown("countdown", "Dec 31, 2022 00:00:00", "Feliz cumpleaños a mi!" )
  scrollTopButton(".scrollTopButton")
  responsiveMedia(
  "youtube",
  "(min-width: 1024px)",
  '<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=92">Ver video</a>',
  '<iframe width="560" height="315" src=""></iframe>'
  )
  responsiveTester("responsive-tester")
  getGeolocation("geolocalizacion")
  searchFilter(".card-filter", ".card")
  slider()
  scrollSpy()
  contactFormValidation()
})

d.addEventListener("keydown", (e) =>{
  shorcuts(e)
  moveBall(e, ".ball", ".stage")
})

// Se invoca afuera para que no se cruce con el DOMContentLoaded
darkTheme(".dark-theme", "dark-mode")