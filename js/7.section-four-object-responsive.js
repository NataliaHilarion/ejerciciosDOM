const d  = document
const w  = window

export default function responsiveMedia(id, mediaq, mobileContent, desktopContent){
  let breakPoint = w.matchMedia(mediaq)

  const responsive = (e) => {
    if(e.matches){
      document.getElementById(id).innerHTML = desktopContent
    }else{
      document.getElementById(id).innerHTML = mobileContent
    }

  }

  breakPoint.addEventListener("change",responsive)
  responsive(breakPoint)

}
