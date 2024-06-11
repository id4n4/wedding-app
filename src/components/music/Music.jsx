import { Button } from '@tremor/react'
import { MainLayout } from '../../layouts/MainLayout'
import { SectionLayout } from '../../layouts/SectionLayout'
import { WaveLines } from '../ceremony/components/WaveLines'
import { TitleSection } from '../TitleSection'
import MusicImage from '../../assets/SVGs/music.svg'
import { ImgTemplate } from '../generalComponents/ImgTemplate'
import { FaSpotify } from 'react-icons/fa'
import { ImgFlour } from '../generalComponents/ImgFlour'
import { useState } from 'react'
import { ModalTemplate } from '../generalComponents/ModalTemplate'

export const Music = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <WaveLines />
      <SectionLayout>
        <ImgFlour isLeft={false} />
        <MainLayout>
          <div className='text-center text-primary'>
            <h1 className='text-xl md:text-4xl'>Hagamos juntos una fiesta épica.</h1>
            <h1 className='text-xl md:text-4xl'>Aquí algunos detalles a tener en cuenta.</h1>
          </div>
          <div id='music' className='flex flex-col items-center gap-5'>
            <TitleSection title='Música' />
            <ImgTemplate src={MusicImage} alt='Música' />
            <div className='space-y-5 text-xl text-center md:w-1/2 text-primary'>
              <p>¡Ayúdanos para que nuestra boda sea inolvidable</p>
              <p>Agrega la música que deseas escuchar dando clic en playlist Spotify</p>
            </div>
            <Button icon={FaSpotify} className='uppercase' onClick={() => setIsOpen(true)}>
            Playlist Spotify
            </Button>
          </div>
        </MainLayout>
      </SectionLayout>
      <ModalTemplate
        isOpen={isOpen}
        hideModal={() => setIsOpen(false)}
        title='Playlist Spotify'
      >
        <div className='sm:w-[70vw] md:w-[50vw]'>
          <iframe src='https://open.spotify.com/embed/playlist/7CVl8WkWTCnExNDgVXmJul?utm_source=generator&theme=0' width='100%' height='500' allowFullScreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy' />
        </div>
      </ModalTemplate>
    </>
  )
}
