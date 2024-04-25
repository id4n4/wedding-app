import { TitleSection } from '../TitleSection'
import ChampanImage from '../../assets/SVGs/champan.svg'
import { Button } from '@tremor/react'
import { MdLocationOn } from 'react-icons/md'
import { SectionLayout } from '../../layouts/SectionLayout'
import { MainLayout } from '../../layouts/MainLayout'
import { ImgTemplate } from '../generalComponents/ImgTemplate'
import { ImgFlour } from '../generalComponents/ImgFlour'
import { useState } from 'react'
import { ModalTemplate } from '../generalComponents/ModalTemplate'
import { MapComponent } from '../generalComponents/Map'
import { MAP_HACIENDA } from '../../constants/locations'
import { TbRoute } from 'react-icons/tb'
import { startRoute } from '../../functions/map_functions'

export const Reception = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <SectionLayout>
      <ImgFlour isLeft={false} />
      <MainLayout id='reception'>
        <TitleSection title='Recepción' />
        <ImgTemplate src={ChampanImage} alt='champan' />
        <div className='text-lg text-center uppercase md:text-xl text-primary'>
          <p>Hacienda el paraíso</p>
          <p>San Carlos Córdoba</p>
          <p>7:00 P.M.</p>
        </div>
        <Button onClick={() => {
          setIsOpen(true)
        }} icon={MdLocationOn}>CÓMO LLEGAR</Button>
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
            center={MAP_HACIENDA.location}
            options={MAP_HACIENDA.options}
            zoom={13}
          />
          <Button
            icon={TbRoute}
            onClick={() => {
              startRoute(MAP_HACIENDA.location)
            }}
          >
            Iniciar Ruta
          </Button>
        </div>
      </ModalTemplate>
    </SectionLayout>
  )
}
