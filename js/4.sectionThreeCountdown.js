const d = document

export default function countdown(id, limitDate, finalMsn){

  const $countdown = d.getElementById(id)
  const countdownDate = new Date(limitDate).getTime()

  const transformNumber = (number) => {
    return number < 10 ? `0${Math.floor(number)}` : Math.floor(number);
  }

  let countdownTempo = setInterval(() => {
    let now = new Date().getTime()
    let limitTime = countdownDate - now
    const days = transformNumber(limitTime /  (1000 * 60 * 60 * 24) )
    const hours = transformNumber(limitTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60) )
    const minutes =  transformNumber(limitTime % (1000 * 60 * 60) / (1000 * 60) )
    const seconds = transformNumber(limitTime % (1000 * 60) / (1000) )

    $countdown.innerHTML = `<h3> Faltan: ${days} Días; ${hours} Horas; ${minutes} minutos y ${seconds} segundos</h3>`

    if(limitTime < 0){
      clearInterval(countdownTempo)
       $countdown.innerHTML = `<h3>  ${finalMsn} </h3>`
    }

  }, 1000);


}

