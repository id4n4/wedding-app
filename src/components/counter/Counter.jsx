import { useEffect, useState } from 'react'
import waveDOWN from '../../assets/waveDown.svg'
import '../../styles/counter_style.css'

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
        <img src={waveDOWN} alt='waveUP' className='w-full' />
      </div>
      <div className='absolute left-0 right-0 z-50 flex justify-center -top-7'>

        <div className='flex flex-col items-center justify-center space-y-4 text-4xl rounded-full shadow-2xl text-paragraph w-[19rem] h-[19rem] bg-background ring-1 ring-primary z-10'>
          <h1 className='tracking-widest uppercase'>Faltan</h1>
          <div className='flex gap-3 lobster'>
            <div className='flex flex-col items-center'>
              <h2>{timeLeft.days}</h2>
              <p>Días</p>
            </div>
            <div className='flex flex-col items-center'>
              <h2>{timeLeft.hours}</h2>
              <p>Hs</p>
            </div>
            <div className='flex flex-col items-center'>
              <h2>{timeLeft.minutes}</h2>
              <p>Min</p>
            </div>
            <div className='flex flex-col items-center'>
              <h2>{timeLeft.seconds}</h2>
              <p>Seg</p>
            </div>
          </div>
        </div>
        <div className='ring_counter ring-2 ring-yellow-600  w-[20rem] h-[19rem] rounded-full absolute -top-1' />
        <div className='ring_counter ring-2 ring-yellow-700 w-[19rem] h-[19rem] rounded-full absolute -top-1' />
        <div className='ring_counter ring-2 ring-yellow-600 w-[21rem] h-[19rem] rounded-full absolute top-0' />
        <div className='ring_counter ring-2 ring-yellow-700 w-[19rem] h-[20rem] rounded-full absolute top-1' />
        <div className='ring_counter ring-2 ring-yellow-700 w-[20rem] h-[20rem] rounded-full absolute -top-2' />
      </div>
    </section>
  )
}
