import { FaInstagram } from 'react-icons/fa'
import waveDOWN from '../../assets/waveDown.svg'
import waveUP from '../../assets/waveUp.svg'
import { MainLayout } from '../../layouts/MainLayout'
import { Button } from '@tremor/react'

export const SharePhoto = () => {
  return (
    <section className='flex flex-col w-full h-full pb-10 font-sans bg-primary'>
      <div className='relative'>
        <div className='bg-background'>
          <img src={waveUP} alt='waveUP' className='w-full' loading='lazy' decoding='async'/>
        </div>
        <div className='relative h-5 bg-darkBackground'>
          <h2 className='text-2xl md:text-[4rem] text-center text-primary absolute bottom-full inset-0'>Comparte las fotos de la Boda</h2>
        </div>
        <img src={waveDOWN} alt='waveUP' className='w-full' loading='lazy' decoding='async'/>
      </div>
      <MainLayout>
        <div>
          <p className='text-xl text-center uppercase text-balance text-main'>
            Un minuto, un segundo.
          </p>
          <p className='text-xl text-center uppercase text-balance text-main'>
            Un instante que queda en la eternidad.
          </p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <FaInstagram className='text-9xl text-main'/>
          <p className='text-main'>#ApellidosDeLosNovios</p>
        </div>
        <Button className='uppercase'>
          Ver fotos en Instagram
        </Button>
      </MainLayout>
    </section>
  )
}
