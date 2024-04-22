import { Button } from '@tremor/react'
import { MainLayout } from '../../layouts/MainLayout'
import { SectionLayout } from '../../layouts/SectionLayout'
import { TitleSection } from '../TitleSection'
import hotelLocationImage from '../../assets/SVGs/hotelLocation.svg'
import drinkImage from '../../assets/SVGs/drink.svg'

export const Suggestions = () => {
  return (
    <SectionLayout>
      <MainLayout>
        <TitleSection title='Sugerencias' />
        <div className='flex justify-around w-full gap-2'>
          <div className='flex flex-col items-center justify-center gap-5'>
            <h1 className='p-2 bg-darkBackground rounded-xl text-primary'>Hoteles</h1>
            <img src={hotelLocationImage} alt='Ubicación' className='h-[6rem]'/>
            <Button className='uppercase'>Ver más</Button>
          </div>
          <div className='flex flex-col items-center justify-center gap-5'>
            <h1 className='p-2 bg-darkBackground rounded-xl text-primary'>Sitios Turísticos</h1>
            <img src={drinkImage} alt='Bebida' className='h-[6rem] -translate-x-2'/>
            <Button className='uppercase'>Ver más</Button>
          </div>
        </div>
      </MainLayout>
    </SectionLayout>
  )
}
