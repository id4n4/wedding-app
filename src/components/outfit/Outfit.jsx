import { Button } from '@tremor/react'
import { useState } from 'react'
import { AiOutlineBgColors } from 'react-icons/ai'
import OutfitImage from '../../assets/SVGs/outfit.svg'
import { MainLayout } from '../../layouts/MainLayout'
import { SectionLayout } from '../../layouts/SectionLayout'
import { TitleSection } from '../TitleSection'
import { ImgFlour } from '../generalComponents/ImgFlour'
import { ImgTemplate } from '../generalComponents/ImgTemplate'
import { ModalTemplate } from '../generalComponents/ModalTemplate'
import { ColorPalette } from './components/ColorPalette'

export const Outfit = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <SectionLayout>
      <ImgFlour isLeft />
      <MainLayout>
        <TitleSection title='Vestuario' />
        <ImgTemplate src={OutfitImage} alt='outfit' />
        <div className='mt-2 space-y-2 text-center text-primary'>
          <h2 className='text-5xl '>Damas:</h2>
          <p className='text-2xl font-semibold uppercase'>Vestido Largo</p>
          <p className='text-2xl font-semibold'>Reservado color blanco</p>
          <Button icon={AiOutlineBgColors} onClick={() => setIsOpen(true)} className='uppercase'>Paleta de Colores</Button>
          <ModalTemplate
            hideModal={() => { setIsOpen(false) }}
            isOpen={isOpen}
            title='Vestido largo'
            subtitle='Damas'
          >
            <ColorPalette />
          </ModalTemplate>
        </div>
        <div className='mt-2 space-y-2 text-center text-primary'>
          <h2 className='text-5xl '>Caballeros:</h2>
          <p className='text-2xl font-semibold uppercase'>
            Conjunto guayabera blanca
          </p>
        </div>
      </MainLayout>
    </SectionLayout>
  )
}
