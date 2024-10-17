import { Button } from '@tremor/react'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { FaMapLocationDot } from 'react-icons/fa6'
import { MdLocationOn } from 'react-icons/md'
import ChurchImage from '../../assets/SVGs/church.svg'
import { content } from '../../config/content'
import { sendToGoogleMap } from '../../functions/map_functions'
import { MainLayout } from '../../layouts/MainLayout'
import { SectionLayout } from '../../layouts/SectionLayout'
import { TitleSection } from '../TitleSection'
import { ImgFlour } from '../generalComponents/ImgFlour'
import { ImgTemplate } from '../generalComponents/ImgTemplate'
import { MapComponent } from '../generalComponents/Map'
import { ModalTemplate } from '../generalComponents/ModalTemplate'
import { WaveLines } from './components/WaveLines'

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
        <div className='text-center uppercase text-md md:text-xl text-primary'>
          <p>{content.ceremony.place}</p>
          <p>{content.ceremony.city}</p>
          <p>{content.ceremony.time}</p>
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
            center={content.ceremony.location}
          />
          <Button
            icon={FaMapLocationDot}
            onClick={() => {
              sendToGoogleMap(content.ceremony.location)
            }}
          >
            Ver en google map
          </Button>
        </div>
      </ModalTemplate>
    </SectionLayout>
  )
}
