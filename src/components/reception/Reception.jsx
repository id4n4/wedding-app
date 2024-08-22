import { Button } from '@tremor/react'
import { useState } from 'react'
import { FaMapLocationDot } from 'react-icons/fa6'
import { MdLocationOn } from 'react-icons/md'
import ChampanImage from '../../assets/SVGs/champan.svg'
import { content } from '../../config/content'
import { sendToGoogleMap } from '../../functions/map_functions'
import { MainLayout } from '../../layouts/MainLayout'
import { SectionLayout } from '../../layouts/SectionLayout'
import { TitleSection } from '../TitleSection'
import { ImgFlour } from '../generalComponents/ImgFlour'
import { ImgTemplate } from '../generalComponents/ImgTemplate'
import { MapComponent } from '../generalComponents/Map'
import { ModalTemplate } from '../generalComponents/ModalTemplate'

export const Reception = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <SectionLayout>
      <ImgFlour isLeft={false} />
      <MainLayout id='reception'>
        <TitleSection title='Recepción' />
        <ImgTemplate src={ChampanImage} alt='champan' />
        <div className='text-lg text-center uppercase md:text-xl text-primary'>
          <p>{content.reception.place}</p>
          <p>{content.reception.state}</p>
          <p>{content.reception.city}</p>
          <p>{content.reception.time}</p>
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
        subtitle='Recepción'
      >
        <div className='w-[80vw] flex flex-col items-center gap-2'>
          <MapComponent
            center={content.reception.location}
            zoom={13}
          />
          <Button
            icon={FaMapLocationDot}
            onClick={() => {
              sendToGoogleMap(content.reception.location)
            }}
          >
            Ver en google map
          </Button>
        </div>
      </ModalTemplate>
    </SectionLayout>
  )
}
