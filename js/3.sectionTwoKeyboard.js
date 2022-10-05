const d = document
let x = 0
let y = 0

export function moveBall(e, ball, stage){
  const $ball = d.querySelector(ball)
  const $stage = d.querySelector(stage)
  const limitBall = $ball.getBoundingClientRect()
  const limitStage = $stage.getBoundingClientRect()

 switch (e.keyCode) {
    case 37:
      if( limitBall.left > limitStage.left ) {
        e.preventDefault()
        x--
      };
      break;
    case 38:
      if( limitBall.top > limitStage.top ){
      e.preventDefault()
      y--;}
      break;
    case 39:
      if( limitBall.right < limitStage.right ){
      x++;
      e.preventDefault()}
      break;
    case 40:
      if( limitBall.bottom < limitStage.bottom ){
      y++;
      e.preventDefault()}
      break;
    default:
      break;
    }
    $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`
}


export function shorcuts(e){
  // console.log(e.type)
  // console.log(e.key)
  // console.log(e.keyCode)
  // console.log(e.ctrlKey)
  // console.log(e.altKey)
  // console.log(e.shiftKey)
  // console.log(e)

  if(e.key === "a" && e.altKey){
    alert("Has lanzado una alerta con el teclado: tecla A + tecla Alt")
  }

  if(e.key === "c" && e.altKey){
    confirm("Has lanzado una confirmacion con el teclado: tecla C + tecla Alt")
  }

  if(e.key === "r" && e.altKey){
    prompt("Has lanzado un aviso con el teclado: tecla R + tecla Alt")
  }

}