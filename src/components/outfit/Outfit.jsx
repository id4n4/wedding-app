import { Button } from '@tremor/react'
import { useState } from 'react'
import { AiOutlineBgColors } from 'react-icons/ai'
import outfitMan from '../../assets/SVGs/outfitMan.svg'
import outfitWoman from '../../assets/SVGs/outfitWoman.svg'
import { MainLayout } from '../../layouts/MainLayout'
import { SectionLayout } from '../../layouts/SectionLayout'
import { TitleSection } from '../TitleSection'
import { ImgFlour } from '../generalComponents/ImgFlour'
import { ModalTemplate } from '../generalComponents/ModalTemplate'
import { ColorPalette } from './components/ColorPalette'

export const Outfit = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <SectionLayout>
      <ImgFlour isLeft />
      <MainLayout>
        <TitleSection title='Vestuario' />
        <div className='mt-2 space-y-2 text-center text-primary'>
          <h2 className='text-5xl '>Damas:</h2>
          <div className='flex justify-center'>
            <img src={outfitWoman} alt='outfitWoman' loading='lazy' decoding='async' className='h-[15rem] min-w-[100px] max-w-[250px]'/>
          </div>
          <p className='text-2xl font-semibold uppercase'>Vestido Largo</p>
          <p className='text-2xl font-semibold'>Se reserva el color blanco</p>
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
          <div className='flex justify-center'>
            <img src={outfitMan} alt='outfitMan' loading='lazy' decoding='async' className='h-[15rem] min-w-[100px] max-w-[250px]'/>
          </div>
          <p className='text-2xl font-semibold uppercase'>
            Conjunto guayabera blanca
          </p>
        </div>
      </MainLayout>
    </SectionLayout>
  )
}
