import { Button } from '@tremor/react'
import { FaInstagram } from 'react-icons/fa'

import { content } from '../../config/content'
import { MainLayout } from '../../layouts/MainLayout'
import { WaveDown } from '../generalComponents/WaveDown'
import { WaveUp } from '../generalComponents/WaveUp'
import {} from './style/style.css'

const linkHashtag = 'https://www.instagram.com/explore/tags/' + content.hashtag
const items = content.photos

export const SharePhoto = () => {
  const openInstagram = () => {
    window.open(linkHashtag, '_blank')
  }
  return (
    <section className='flex flex-col w-full font-sans '>
      <div>
        <div className=' bg-gradient-to-t from-secondary to-background to-10%'>
          <WaveUp />
        </div>
        <div className='relative z-20 px-5 bg-darkBackground'>
          <h2 className='text-2xl md:text-[3rem] text-center text-primary'>
            Un minuto, un segundo. Un instante que queda en la eternidad.
          </h2>
        </div>
      </div>
      <div className='relative'>
        <div className='relative z-10 pb-8 overflow-hidden bg-black/50'>
          <div className='relative z-10 rotate-180 '>
            <WaveDown />
          </div>
          <MainLayout>
            <div>
              <p className='text-xl text-center uppercase text-balance text-main'>
                Comparte las fotos de la Boda
              </p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <FaInstagram className='text-9xl text-main' />
              <h4 className='text-2xl font-medium text-main'>#{content.hashtag}</h4>
            </div>
            <Button className='uppercase' onClick={openInstagram}>
              Ver fotos en Instagram
            </Button>
          </MainLayout>
        </div>
        <div className='slider'>
          <div className='slide-track'>
            {items.map((item, idx) => (
              <div key={idx} className='w-full h-full md:w-1/2 lg:w-1/3 xl:w-1/4'
              >
                <img src={item} alt='foto' decoding='async' className='object-cover w-full h-full' />
              </div>
            ))}
            {items.map((item, idx) => (
              <div key={idx} className='w-full h-full md:w-1/2 lg:w-1/3 xl:w-1/4'
              >
                <img src={item} alt='foto' decoding='async' className='object-cover w-full h-full' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
