import hamburgerMenu from "./menu_hamburger.js";
import {digitalClock, alarm} from "./sectionOneClock.js"

const d = document

d.addEventListener("DOMContentLoaded", e => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a")
  digitalClock("#clock", "#startClock", "#stopClock")
  alarm("assets/alarm-clock.mp3", "#startAlarm", "#stopAlarm")
})

