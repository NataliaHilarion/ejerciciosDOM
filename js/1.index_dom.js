import hamburgerMenu from "./1.menu_hamburger.js";
import {digitalClock, alarm} from "./2.sectionOneClock.js"
import {shorcuts, moveBall} from "./3.sectionTwoKeyboard.js"
import countdown from "./4.sectionThreeCountdown.js"
import scrollTopButton from "./5.scrollTopButton.js"
import darkTheme from "./6.darkTheme.js"

const d = document

d.addEventListener("DOMContentLoaded", e => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a")
  digitalClock("#clock", "#startClock", "#stopClock")
  alarm("assets/alarm-clock.mp3", "#startAlarm", "#stopAlarm")
  countdown("countdown", "Dec 31, 2022 00:00:00", "Feliz cumpleaños a mi!" )
  scrollTopButton(".scrollTopButton")
})

d.addEventListener("keydown", (e) =>{
  shorcuts(e)
  moveBall(e, ".ball", ".stage")
})

// Se invoca afuera para que no se cruce con el DOMContentLoaded
darkTheme(".dark-theme", "dark-mode")