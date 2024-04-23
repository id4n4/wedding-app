import Wave from 'react-wavify'

export const WaveUp = () => {
  return (
    <Wave fill='#E9E4D9'
      paused={false}
      style={{ display: 'flex', position: 'relative' }}
      options={{
        height: 90,
        amplitude: 20,
        speed: 0.20,
        points: 3
      }}
    />
  )
}
