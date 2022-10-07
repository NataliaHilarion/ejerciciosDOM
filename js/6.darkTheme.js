const d = document

export default function darkTheme(button, classDark){

  const $themeButton = d.querySelector(button)
  const $stage = d.querySelector(".stage")
  const $selectors = d.querySelectorAll("[data-dark]")

  let sun = "☀️"
  let moon = "🌑"

   const lightMode = () => {
    $selectors.forEach((el) => el.classList.remove(classDark))
    $themeButton.textContent = moon
    $stage.style.background = "Black"
    localStorage.setItem("theme", "light")
  }

  const darkMode = () => {
    $selectors.forEach((el) => el.classList.add(classDark))
    $themeButton.textContent = sun
    $stage.style.background = "grey"
    localStorage.setItem("theme", "dark")
  }

  d.addEventListener("click", (e)=>{
    if(e.target.matches(button)){
      $themeButton.textContent === moon ? darkMode() :  lightMode()
    }
  })

  d.addEventListener("DOMContentLoaded", (e)=>{
    if(localStorage.getItem("theme") === null) localStorage.setItem("theme", "light")
    if(localStorage.getItem("theme") === "light") lightMode()
    if(localStorage.getItem("theme") === "dark") darkMode()


  })
}


