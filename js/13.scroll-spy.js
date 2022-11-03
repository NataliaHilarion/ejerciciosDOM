const d = document

export default function scrollSpy(){
  const $sections = d.querySelectorAll("section[data-scroll-spy]")

  const callBack = (entries)=>{
    // console.log("entries:", entries)

    entries.forEach(entry=>{
      // console.log("entry:", entry)
      const id = entry.target.getAttribute("id")
      // console.log(id)
      if(entry.isIntersecting){
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active")
      } else{
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active")
      }

    })
  }

  // API IntersectionObserver: Provee una vía asíncrona para observar cambios en la intersección de un elemento con un elemento ancestro o con el viewport del documento de nivel superior.
  const observer = new IntersectionObserver(callBack, {
    // root:
    // rootMargin: "-250px",  //es necesario los valores en px
    threshold: 0.5
  })
  // console.log("observer:", observer)


  $sections.forEach(el =>{
    observer.observe(el)
  })
}