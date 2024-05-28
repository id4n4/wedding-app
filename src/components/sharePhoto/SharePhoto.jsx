import { FaInstagram } from 'react-icons/fa'
import { MainLayout } from '../../layouts/MainLayout'
import { Button } from '@tremor/react'
import { WaveDown } from '../generalComponents/WaveDown'
import { WaveUp } from '../generalComponents/WaveUp'
const linkHashtag = 'https://www.instagram.com/explore/tags/IvAle_wed/'

export const SharePhoto = () => {
  const openInstagram = () => {
    window.open(linkHashtag, '_blank')
  }
  return (
    <section className='flex flex-col w-full h-full pb-10 font-sans bg-primary'>
      <div>
        <div className=' bg-background'>
          <WaveUp />
        </div>
        <div className='relative z-10 h-5 bg-darkBackground'>
          <h2 className='text-2xl md:text-[4rem] text-center text-primary absolute bottom-full inset-0'>Comparte las fotos de la Boda</h2>
        </div>
        <div className='rotate-180'>
          <WaveDown />
        </div>
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
          <h4 className='text-2xl font-medium text-main'>#IvAle_wed</h4>
        </div>
        <Button className='uppercase' onClick={openInstagram} >
          Ver fotos en Instagram
        </Button>
      </MainLayout>
    </section>
  )
}
