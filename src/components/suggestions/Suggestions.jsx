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
          <div className='grid items-center w-1/2 grid-rows-4 justify-items-center'>
            <h1 className='p-2 text-2xl md:text-4xl bg-darkBackground rounded-xl text-primary'>Hoteles</h1>
            <img src={hotelLocationImage} alt='Ubicación' className='h-[6rem] row-span-2'/>
            <Button className='uppercase'>Ver más</Button>
          </div>
          <div className='grid items-center w-1/2 grid-rows-4 justify-items-center'>
            <h1 className='p-2 text-2xl text-center bg-darkBackground rounded-xl text-primary md:text-4xl'>Sitios Turísticos</h1>
            <img src={drinkImage} alt='Bebida' className='h-[6rem] -translate-x-2 row-span-2'/>
            <Button className='uppercase'>Ver más</Button>
          </div>
        </div>
      </MainLayout>
    </SectionLayout>
  )
}
