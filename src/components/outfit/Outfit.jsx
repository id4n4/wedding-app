import { TitleSection } from '../TitleSection'
import OutfitImage from '../../assets/SVGs/outfit.svg'
import { SectionLayout } from '../../layouts/SectionLayout'
import { MainLayout } from '../../layouts/MainLayout'
import { ImgTemplate } from '../generalComponents/ImgTemplate'

export const Outfit = () => {
  return (
    <SectionLayout>
      <MainLayout>
        <TitleSection title='Vestuario' />
        <ImgTemplate src={OutfitImage} alt='outfit' />
        <div className='mt-2 space-y-2 text-center text-primary'>
          <h2 className='text-5xl '>Damas:</h2>
          <p className='text-2xl font-semibold uppercase'>Vestido Largo</p>
          <div className='flex items-center gap-2'>
            <p className='text-sm uppercase'>Se reserva el color blanco</p>
            <div className='w-4 h-4 bg-white border border-gray-700 rounded-full'/>
          </div>
        </div>
        <div className='mt-2 space-y-2 text-center text-primary'>
          <h2 className='text-5xl '>Caballeros:</h2>
          <p className='text-2xl font-semibold uppercase'>Por definir</p>
        </div>
      </MainLayout>
    </SectionLayout>
  )
}
