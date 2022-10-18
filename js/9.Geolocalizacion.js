const d = document
const n = navigator

export default function getGeolocation(id){
  const $idGeolocation = d.getElementById(id)
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximiumAge: 0
  }

  const success = (position) => {
    let coords = position.coords
    console.log(position)

    $idGeolocation.innerHTML = `
      <p>Your current Position is:</p>
      <ul>
        <li>Latitud: <b>${coords.latitude}</b></li>
        <li>Longitud: <b>${coords.longitude}</b></li>
        <li>Precisión: <b>${coords.accuracy}</b> meters</li>
      </ul>
    <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},19z" target="_blank" rel="noopener">Google Maps</a>
      `
  }

  const error = (err) => {
    $idGeolocation.innerHTML = `<p> <strong> Error ${err.code}: ${err.message}  </strong> </p>`
    console.log(`Error ${err.code}: ${err.message} `)
  }


  n.geolocation.getCurrentPosition(success, error, options)
}