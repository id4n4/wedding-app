import outfit from '../../assets/img/smoking+gala.png'
import { MainLayout } from '../../layouts/MainLayout'
import { SectionLayout } from '../../layouts/SectionLayout'
import { TitleSection } from '../TitleSection'
import { ImgFlour } from '../generalComponents/ImgFlour'

export const Outfit = () => {
  return (
    <>
      <SectionLayout>
        <ImgFlour isLeft />
        <MainLayout>
          <TitleSection title='Vestuario' />
          <div className='mt-2 space-y-5 text-center text-primary'>
            <div className='flex justify-center'>
              <img
                src={outfit}
                alt='outfitWoman'
                loading='lazy'
                decoding='async'
                className='h-[15rem] min-w-[100px] max-w-[250px]'
              />
            </div>
            <div>
              <h2 className='text-5xl '>Damas:</h2>
              <p className='text-xl font-semibold uppercase md:text-2xl'>Vestido Largo</p>
              <p className='font-semibold text-md'>
                Se reserva el color plata y blanco
              </p>
            </div>
            <div>
              <h2 className='text-5xl '>Caballeros:</h2>
              <p className='text-xl font-semibold uppercase md:text-2xl'>Smoking</p>
            </div>
          </div>
        </MainLayout>
      </SectionLayout>
    </>
  )
}
