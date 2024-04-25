import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api'

const containerStyle = {
  width: '80vw',
  height: '40vh',
  borderRadius: '1rem'
}
const API_KEY_MAPS = import.meta.env.VITE_API_KEY_MAP

export function MapComponent ({ center, options, zoom = 18 }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY_MAPS
  })

  return isLoaded
    ? (<GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      options={{
        styles: options
      }}
    >
      {
        center.lat && center.lng && (
          <MarkerF
            position={center}
          />
        )
      }
    </GoogleMap>)
    : <></>
}
