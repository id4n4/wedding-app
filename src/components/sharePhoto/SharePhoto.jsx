import { Button } from '@tremor/react'
import { useEffect, useState } from 'react'
import { FaInstagram } from 'react-icons/fa'
import slider1 from '../../assets/img/slider1.jpeg'
import slider2 from '../../assets/img/slider2.jpeg'
import slider3 from '../../assets/img/slider3.jpeg'
import slider4 from '../../assets/img/slider4.jpeg'
import { MainLayout } from '../../layouts/MainLayout'
import { WaveDown } from '../generalComponents/WaveDown'
import { WaveUp } from '../generalComponents/WaveUp'

const linkHashtag = 'https://www.instagram.com/explore/tags/IvAle_wed/'

export const SharePhoto = () => {
  const [items, setItems] = useState([slider1, slider2, slider3, slider4, slider1, slider2, slider3, slider4])
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
          <h2 className='text-2xl md:text-[4rem] text-center text-primary absolute bottom-full inset-0'>Comparte las fotos de la Boda</h2>
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
        </div>
        <div className='absolute top-0 bottom-0 z-0 grid w-full h-full overflow-hidden'
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gridTemplateRows: '1fr',
            transform: 'translateX(0)'
          }}
        >
          {items.map((item, idx) => (
            <div key={idx} className='h-full'
            >
              <div className='h-full'>
                <img src={item} alt='foto' decoding='async' className='object-cover w-full h-full' />
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
