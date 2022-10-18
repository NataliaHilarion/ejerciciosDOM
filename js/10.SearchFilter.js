const d = document

export default function searchFilter(input, selector){
  d.addEventListener("keyup", e =>{
    if(e.target.matches(input)){
      d.querySelectorAll(selector).forEach(card=>{
        card.textContent.toLowerCase().includes(e.target.value)
        ? card.classList.remove("filter")
        : card.classList.add("filter")
      })
    }
  })


}