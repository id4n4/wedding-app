import { TitleSection } from '../TitleSection'
import OutfitImage from '../../assets/SVGs/outfit.svg'
import { SectionLayout } from '../../layouts/SectionLayout'
import { MainLayout } from '../../layouts/MainLayout'
import { ImgTemplate } from '../generalComponents/ImgTemplate'
import { ImgFlour } from '../generalComponents/ImgFlour'

export const Outfit = () => {
  return (
    <SectionLayout>
      <ImgFlour isLeft />
      <MainLayout>
        <TitleSection title='Vestuario' />
        <ImgTemplate src={OutfitImage} alt='outfit' />
        <div className='mt-2 space-y-2 text-center text-primary'>
          <h2 className='text-5xl '>Damas:</h2>
          <p className='text-2xl font-semibold uppercase'>Vestido Largo</p>
          <p className='text-sm uppercase'>Se reserva el color blanco</p>
        </div>
        <div className='mt-2 space-y-2 text-center text-primary'>
          <h2 className='text-5xl '>Caballeros:</h2>
          <p className='text-2xl font-semibold uppercase'>Conjunto guayabera</p>
          <p className='text-sm uppercase'>Se reserva el color blanco</p>
        </div>
      </MainLayout>
    </SectionLayout>
  )
}
