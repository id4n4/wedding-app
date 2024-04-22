import { Button, Divider } from '@tremor/react'
import { MainLayout } from '../../layouts/MainLayout'
import { SectionLayout } from '../../layouts/SectionLayout'
import { WaveLines } from '../ceremony/components/WaveLines'
import { TitleSection } from '../TitleSection'
import MusicImage from '../../assets/SVGs/music.svg'
import { ImgTemplate } from '../generalComponents/ImgTemplate'
import { FaSpotify } from 'react-icons/fa'

export const Music = () => {
  return (
    <>
      <WaveLines />
      <SectionLayout>
        <MainLayout>
          <div className='text-center text-primary'>
            <h1>Hagamos juntos una fiesta épica.</h1>
            <h1>Aquí algunos detalles a tener en cuenta.</h1>
          </div>
          <Divider />
          <TitleSection title='Música' />
          <ImgTemplate src={MusicImage} alt='Música' />
          <div className='w-1/2 space-y-5 text-xl text-center text-primary'>
            <p>¡Ayúdanos para que nuestra boda sea inolvidable</p>
            <p>Agrega la música que deseas escuchar dando clic en playlist Spotify</p>
          </div>
          <Button icon={FaSpotify} className='uppercase'>
            Playlist Spotify
          </Button>
        </MainLayout>
      </SectionLayout>
    </>
  )
}
