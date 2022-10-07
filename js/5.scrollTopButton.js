const d = document
const w = window

export default function scrollTopButton(button){
  const $scrollButton = d.querySelector(button)

  w.addEventListener("scroll", (e)=>{
    const scrollTop = d.documentElement.scrollTop
    scrollTop > 600 ? $scrollButton.classList.remove("hidden") : $scrollButton.classList.add("hidden")

  })

  d.addEventListener("click", (e)=>{
    if(e.target.matches(button)){
      w.scrollTo({
        behavior: "smooth",
        top: 0
      })
    }
  })


}

