const d = document

export default function contactFormValidation(){
  const $form = d.querySelector(".contact-form")
  const $inputs = d.querySelectorAll(".contact-form [required]")

  $inputs.forEach(input =>{
    const $span = d.createElement("span")
    $span.id = input.name
    $span.textContent = input.title
    input.insertAdjacentElement("afterend", $span)
    $span.classList.add("contact-form-error", "none")
  })

  d.addEventListener("keyup", (e) =>{
    if(e.target.matches(".contact-form [required]")){
      let $input = e.target
      let pattern = $input.pattern || $input.dataset.pattern

      if(pattern && $input.value!== ""){
        const expReg = new RegExp(pattern)
        return!expReg.exec($input.value)
        ? d.getElementById($input.name).classList.add("is-active")
        : d.getElementById($input.name).classList.remove("is-active")
      }

      if(!pattern ){
        return $input.value === ""
        ? d.getElementById($input.name).classList.add("is-active")
        : d.getElementById($input.name).classList.remove("is-active")
      }

    }


  })

}