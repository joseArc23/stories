import styles from './maps/styles'

function initMap() {
  const coords = {
    lat: 19.426245,
    lng: -99.167332
  }
  let map = new google.maps.Map(document.getElementById('mapa'),{
    center: coords,
    zoom: 16,
    styles: styles
  })

  let marker = new google.maps.Marker({
    position: coords,
    map,
    title: 'Lugar random del mundo'
  })
}


//taller crear una web con maps y gelocalizacion
//desarrollo web frontend

initMap()