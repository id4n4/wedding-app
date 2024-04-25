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
import toast, { Toaster } from 'react-hot-toast'
import { TbRoute } from 'react-icons/tb'

export const Ceremony = () => {
  const [isOpen, setIsOpen] = useState(false)

  const startRoute = () => {
    // obtener ubicación actual
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const origin = `${coords.latitude},${coords.longitude}`
      const destination = `${MAP_CHURCH.location.lat},${MAP_CHURCH.location.lng}`
      const url = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}`
      window.open(url, '_blank')
    }, e => {
      console.error(e)
      toast.error('Debes permitir el acceso a tu ubicación para iniciar la ruta')
    })
  }
  return (
    <SectionLayout >
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
        <Button icon={MdLocationOn} onClick={() => { setIsOpen(true) }}>CÓMO LLEGAR</Button>
      </MainLayout>
      <ModalTemplate
        isOpen={isOpen}
        hideModal={() => { setIsOpen(false) }}
        title='Cómo llegar a la'
        subtitle='Ceremonia'
      >
        <div className='w-[80vw] flex flex-col items-center gap-2'>
          <MapComponent
            center={MAP_CHURCH.location}
            options={MAP_CHURCH.options}
          />
          <Button icon={TbRoute} onClick={startRoute} >Iniciar Ruta</Button>
        </div>
      </ModalTemplate>
    </SectionLayout>
  )
}
