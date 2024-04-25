import { TitleSection } from '../TitleSection'
import { WaveLines } from './components/WaveLines'
import { Button } from '@tremor/react'
import { MdLocationOn } from 'react-icons/md'
import ChurchImage from '../../assets/SVGs/church.svg'
import { SectionLayout } from '../../layouts/SectionLayout'
import { MainLayout } from '../../layouts/MainLayout'
import { ImgTemplate } from '../generalComponents/ImgTemplate'
import { ImgFlour } from '../generalComponents/ImgFlour'
import { ModalTemplate } from '../generalComponents/ModalTemplate'
import { useState } from 'react'
import { MapComponent } from '../generalComponents/Map'
import { MAP_CHURCH } from '../../constants/locations'
import { Toaster } from 'react-hot-toast'
import { TbRoute } from 'react-icons/tb'
import { startRoute } from '../../functions/map_functions'

export const Ceremony = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <SectionLayout>
      <Toaster />
      <WaveLines />
      <ImgFlour isLeft />
      <MainLayout id='ceremony'>
        <TitleSection title='Ceremonia' />
        <ImgTemplate src={ChurchImage} alt='Iglesia' />
        <div className='text-lg text-center uppercase md:text-xl text-primary'>
          <p>Iglesia la medalla milagrosa</p>
          <p>Cereté - Córdoba</p>
          <p>5:00 P.M.</p>
        </div>
        <Button
          icon={MdLocationOn}
          onClick={() => {
            setIsOpen(true)
          }}
        >
          CÓMO LLEGAR
        </Button>
      </MainLayout>
      <ModalTemplate
        isOpen={isOpen}
        hideModal={() => {
          setIsOpen(false)
        }}
        title='Cómo llegar a la'
        subtitle='Ceremonia'
      >
        <div className='w-[80vw] flex flex-col items-center gap-2'>
          <MapComponent
            center={MAP_CHURCH.location}
            options={MAP_CHURCH.options}
          />
          <Button
            icon={TbRoute}
            onClick={() => {
              startRoute(MAP_CHURCH.location)
            }}
          >
            Iniciar Ruta
          </Button>
        </div>
      </ModalTemplate>
    </SectionLayout>
  )
}
