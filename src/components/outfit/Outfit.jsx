import { TitleSection } from '../TitleSection'
import OutfitImage from '../../assets/SVGs/outfit.svg'
import { SectionLayout } from '../../layouts/SectionLayout'
import { MainLayout } from '../../layouts/MainLayout'
import { ImgTemplate } from '../generalComponents/ImgTemplate'
import { ImgFlour } from '../generalComponents/ImgFlour'
import { outfitColors } from '../../constants/outfitColors'
import { ModalTemplate } from '../generalComponents/ModalTemplate'
import { ColorPalette } from './components/ColorPalette'
import { useState } from 'react'

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
          <div className='relative grid h-6 grid-cols-5 overflow-hidden transition-transform duration-300 rounded-md cursor-pointer hover:scale-95'
            onClick={() => {
              setIsOpen(true)
            }}
          >
            <div style={{ background: outfitColors[0].color }} />
            <div style={{ background: outfitColors[1].color }} />
            <div style={{ background: outfitColors[2].color }} />
            <div style={{ background: outfitColors[3].color }} />
            <div style={{ background: outfitColors[4].color }} />
            <div className='absolute inset-0 text-white transition-all opacity-0 bg-black/30 hover:opacity-100'>
              <p className='font-sans'>Paleta de colores</p>
            </div>
          </div>
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
