import Wave from 'react-wavify'

export const WaveDown = () => {
  return (
    <Wave fill='#E9E4D9'
      paused={false}
      style={{ display: 'flex', position: 'relative' }}
      options={{
        height: 90,
        amplitude: 30,
        speed: 0.15,
        points: 2
      }}
    />
  )
}
