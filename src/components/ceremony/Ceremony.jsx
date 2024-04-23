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

export const Ceremony = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <SectionLayout >

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
      />
    </SectionLayout>
  )
}
