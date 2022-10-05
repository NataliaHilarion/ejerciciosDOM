import hamburgerMenu from "./1.menu_hamburger.js";
import {digitalClock, alarm} from "./2.sectionOneClock.js"
import {shorcuts, moveBall} from "./3.sectionTwoKeyboard.js"
import countdown from "./4.sectionThreeCountdown.js"

const d = document

d.addEventListener("DOMContentLoaded", e => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a")
  digitalClock("#clock", "#startClock", "#stopClock")
  alarm("assets/alarm-clock.mp3", "#startAlarm", "#stopAlarm")
  countdown("countdown", "Dec 31, 2022 00:00:00", "Feliz cumpleaños a mi!" )
})

d.addEventListener("keydown", (e) =>{
  shorcuts(e)
  moveBall(e, ".ball", ".stage")
})