import { useMemo } from 'react'
import heart from '../../../assets/SVGs/heart.svg'
import { content } from '../../../config/content'
import { obtenerSemanaCompleta } from '../../../functions/dateHelper'

const weddingDay = content.fecha.getDate()

export const Week = () => {
  const month = useMemo(
    () => content.fecha.toLocaleString('es-ES', { month: 'long' }),
    []
  )
  const daysOfWeek = useMemo(() => {
    return obtenerSemanaCompleta(content.fecha)
  }, [])
  return (
    <div className='flex flex-col items-center px-5 space-y-2'>
      <h1 className='text-3xl sm:text-6xl tracking-[.5rem] text-primary capitalize'>{month}</h1>
      <div className='flex justify-center gap-3 text-xl md:gap-10'>
        {daysOfWeek.map(({ label, day }) => (
          <div key={label} className='flex flex-col items-center'>
            <h2 className='text-lg sm:text-xl trajan'>{label}</h2>
            {
              day === weddingDay
                ? (
                  <div className='relative'>
                    <img
                      src={heart}
                      alt='heart'
                      width={45}
                      className='z-0 ml-1'
                    />
                    <p className='absolute inset-0 text-center'>{day}</p>
                  </div>)
                : <p>{day}</p>

            }
          </div>
        ))}
      </div>
    </div>
  )
}
