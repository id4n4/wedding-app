import { Title } from './components/Title'
import { Week } from './components/Week'

export const Hero = () => {
  return (
    <section className='font-sans min-h-[500px] w-full bg-primary h-full flex justify-center items-center'>
      <div className='max-w-[1000px] text-main flex flex-col justify-center items-center gap-5 '>
        <Week />
        <Title />
        <div className='max-w-[800px] mx-auto'>
          <p className='text-xl text-center uppercase text-balance'>
          Uno solo puede ser vencido, pero dos pueden resistir; !la cuerda de tres hilos no se rompe fácilmente!
          </p>
        </div>
      </div>
    </section>
  )
}
