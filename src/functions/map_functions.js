export const sendToGoogleMap = (destino) => {
  window.open(`https://www.google.com/maps/dir/?api=1&destination=${destino.lat},${destino.lng}`, '_blank')
}
