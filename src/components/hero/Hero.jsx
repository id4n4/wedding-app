import { Title } from './components/Title'
import { Week } from './components/Week'
import { WaveUp } from '../generalComponents/WaveUp'

export const Hero = () => {
  return (
    <section className='font-sans min-h-[700px] w-full bg-primary h-full flex flex-col'>
      <div className='flex items-center justify-center flex-grow'>
        <div className='max-w-[1000px] text-main flex flex-col justify-center items-center gap-10 py-20 px-16 '>
          <Week />
          <Title />
          <div className='max-w-[800px] mx-auto'>
            <p className='text-xl text-center uppercase text-balance '>
          Uno solo puede ser vencido, pero dos pueden resistir. !la cuerda de tres hilos no se rompe fácilmente!
            </p>
          </div>
        </div>
      </div>
      <div>
        <WaveUp />
      </div>
    </section>
  )
}
