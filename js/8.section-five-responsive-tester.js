const d = document

export default function responsiveTester(form){
  const $form = d.getElementById(form)
  let testerWindow;

 d.addEventListener("submit", (e)=>{
  if(e.target === $form){
    e.preventDefault()

    //window.open([url],[nombre_de_la_ventana],[configuracion_ventana]);
    testerWindow = window.open(
      [$form.direccion.value],
      ['nueva_página'],
      [`innerWidth = ${$form.ancho.value},
        innerHeight = ${$form.alto.value}`]
    )
  }
 })

d.addEventListener("click", (e)=>{
  if(e.target === $form.cerrar){
    testerWindow.close()
    $form.reset()
  }
})

}




