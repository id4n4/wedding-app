import { Button } from '@tremor/react'
import { useEffect, useState } from 'react'
import { FaInstagram } from 'react-icons/fa'
import ia1 from '../../assets/img/ia1.jpg'
import ia14 from '../../assets/img/ia14.jpg'
import ia15 from '../../assets/img/ia15.jpg'
import ia4 from '../../assets/img/ia4.jpg'
import ia8 from '../../assets/img/ia8.jpg'

import { MainLayout } from '../../layouts/MainLayout'
import { WaveDown } from '../generalComponents/WaveDown'
import { WaveUp } from '../generalComponents/WaveUp'

const linkHashtag = 'https://www.instagram.com/explore/tags/IvAle/'

export const SharePhoto = () => {
  const [items, setItems] = useState([ia1, ia4, ia8, ia14, ia15])
  const openInstagram = () => {
    window.open(linkHashtag, '_blank')
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prev => {
        const last = prev.pop()
        return [last, ...prev]
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [])
  return (
    <section className='flex flex-col w-full h-full font-sans '>
      <div>
        <div className=' bg-background'>
          <WaveUp />
        </div>
        <div className='relative z-20 h-5 bg-darkBackground'>
          <h2 className='text-2xl md:text-[3rem] text-center text-primary absolute bottom-full inset-0'>
            Un minuto, un segundo. Un instante que queda en la eternidad.
          </h2>
        </div>
      </div>
      <div className='relative'>
        <div className='relative z-10 pb-8 overflow-hidden bg-black/50'>
          <div className='relative z-10 rotate-180'>
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
              <h4 className='text-2xl font-medium text-main'>#IvAle</h4>
            </div>
            <Button className='uppercase' onClick={openInstagram}>
              Ver fotos en Instagram
            </Button>
          </MainLayout>
        </div>
        <div className='absolute top-0 bottom-0 z-0 flex flex-wrap w-full h-full overflow-hidden '
        >
          {items.map((item, idx) => (
            <div key={idx} className='w-full h-full md:w-1/2 lg:w-1/3 xl:w-1/4'
            >
              <img src={item} alt='foto' decoding='async' className='object-cover w-full h-full' />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
