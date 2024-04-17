import { useEffect, useState } from 'react'
import waveDOWN from '../../assets/waveDown.svg'
import '../../styles/counter_style.css'
import points from '../../assets/SVGs/groupPoints.svg'

export const Counter = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-08-24') - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })
  return (
    <section className='relative h-[300px]'>
      <div className='relative z-0'>
        <img src={waveDOWN} alt='waveUP' className='w-full' loading='lazy' decoding='async'/>
      </div>
      <div className='absolute left-0 right-0 z-50 flex justify-center -top-7'>

        <div className='flex flex-col items-center justify-center space-y-4 text-4xl rounded-full shadow-2xl text-paragraph w-[19rem] h-[19rem] bg-background ring-1 ring-primary z-10'>
          <h1 className='tracking-widest uppercase'>Faltan</h1>
          <div className='flex gap-5 lobster'>
            <div className='flex flex-col items-center'>
              <p >{timeLeft.days}</p>
              <h2 >Días</h2>
            </div>
            <div className='flex flex-col items-center'>
              <p>{timeLeft.hours}</p>
              <h2>Hs</h2>
            </div>
            <div className='flex flex-col items-center'>
              <p>{timeLeft.minutes}</p>
              <h2>Min</h2>
            </div>
            <div className='flex flex-col items-center'>
              <p>{timeLeft.seconds}</p>
              <h2>Seg</h2>
            </div>
          </div>
        </div>
        <div className='ring_counter ring-2 ring-yellow-600  w-[20rem] h-[19rem] rounded-full absolute -top-1' />
        <div className='ring_counter ring-2 ring-yellow-700 w-[19rem] h-[19rem] rounded-full absolute -top-1' />
        <div className='ring_counter ring-2 ring-yellow-600 w-[21rem] h-[19rem] rounded-full absolute top-0' />
        <div className='ring_counter ring-2 ring-yellow-700 w-[19rem] h-[20rem] rounded-full absolute top-1' />
        <div className='ring_counter ring-2 ring-yellow-700 w-[20rem] h-[20rem] rounded-full absolute -top-2' />

        <img src={points} alt='puntos' className='w-[25rem] absolute -top-14'/>
      </div>
    </section>
  )
}
