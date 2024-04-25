import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api'

const containerStyle = {
  width: '80vw',
  height: '40vh',
  borderRadius: '1rem'
}
const API_KEY_MAPS = import.meta.env.VITE_API_KEY_MAP

export function MapComponent ({ center, options }) {
  console.log(API_KEY_MAPS)
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY_MAPS
  })

  return isLoaded
    ? (<GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={18}
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
