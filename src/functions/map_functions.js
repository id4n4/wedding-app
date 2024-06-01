import toast from 'react-hot-toast'

export const startRoute = async (destino) => {
  navigator.geolocation.getCurrentPosition((position) => successCallback(position, destino), errorCallback)
}

function successCallback ({ coords }, destino) {
  const origin = `${coords.latitude},${coords.longitude}`
  const destination = `${destino.lat},${destino.lng}`
  const url = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}`
  window.open(url, '_blank')
}

function errorCallback (error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      toast.log('El usuario denegó el permiso para la Geolocalización.')
      break
    case error.POSITION_UNAVAILABLE:
      toast.log('La información de la ubicación no está disponible.')
      break
    case error.TIMEOUT:
      toast.log('La solicitud para obtener la ubicación ha caducado.')
      break
    case error.UNKNOWN_ERROR:
      toast.log('Ocurrió un error desconocido.')
      break
  }
}
