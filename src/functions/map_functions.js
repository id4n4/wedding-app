import toast from 'react-hot-toast'

export const startRoute = (destino) => {
  // obtener ubicación actual
  navigator.geolocation.getCurrentPosition(({ coords }) => {
    const origin = `${coords.latitude},${coords.longitude}`
    const destination = `${destino.lat},${destino.lng}`
    const url = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}`
    window.open(url, '_blank')
  }, e => {
    console.error(e)
    toast.error('Debes permitir el acceso a tu ubicación para iniciar la ruta')
  })
}
