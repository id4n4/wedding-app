import { Button } from '@tremor/react'
import { MainLayout } from '../../layouts/MainLayout'
import { SectionLayout } from '../../layouts/SectionLayout'
import { TitleSection } from '../TitleSection'
import hotelLocationImage from '../../assets/SVGs/hotelLocation.svg'
import drinkImage from '../../assets/SVGs/drink.svg'
import { ImgFlour } from '../generalComponents/ImgFlour'

const URL_HOTELS = 'https://www.google.com/travel/search?q=hoteles%20monteria&g2lb=2503771%2C4814050%2C4874190%2C4893075%2C4965990%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72462234%2C72470899%2C72471280%2C72472051%2C72473841%2C72485658%2C72486593%2C72494250%2C72513513%2C72536387%2C72538597%2C72549171%2C72570850%2C72577179%2C72582855%2C72586336%2C72597757%2C72602734%2C72613543%2C72613564%2C72619172&hl=es-CO&gl=co&cs=1&ssta=1&ts=CAESCAoCCAMKAggDGhwSGhIUCgcI6A8QBhgBEgcI6A8QBhgCGAEyAhAAKgcKBToDQ09Q&qs=CAE4BlpNCAEySaoBRhABKgsiB2hvdGVsZXMoDjIfEAEiG99NmFcjHNa15ftEIBoqJmqWCRFuKKXxwoQHYTIUEAIiEGhvdGVsZXMgbW9udGVyaWE&ap=KigKEglt4srRyHghQBH9NHnv6_hSwBISCfXIQ3CiiyFAEf00ebML91LASABoAQ&ictx=111&ved=0CAAQ5JsGahcKEwjo54Op6LqGAxUAAAAAHQAAAAAQCw'

const URL_TOURIST_SITES = 'https://perlasinuana.app/'

export const Suggestions = () => {
  const handleHotels = () => {
    window.open(URL_HOTELS, '_blank')
  }
  const handleTouristSites = () => {
    window.open(URL_TOURIST_SITES, '_blank')
  }
  return (
    <SectionLayout>
      <ImgFlour className='absolute right-0 z-0 py-10 overflow-hidden lg:hidden'/>
      <MainLayout>
        <TitleSection title='Sugerencias' />
        <div className='flex justify-around w-full gap-2'>
          <div className='grid items-center w-1/2 grid-rows-4 justify-items-center'>
            <h1 className='p-2 text-2xl md:text-4xl bg-darkBackground rounded-xl text-primary'>Hoteles</h1>
            <img src={hotelLocationImage} alt='Ubicación' className='h-[6rem] row-span-2'/>
            <Button className='uppercase' onClick={handleHotels}>Ver más</Button>
          </div>
          <div className='grid items-center w-1/2 grid-rows-4 justify-items-center'>
            <h1 className='p-2 text-2xl text-center bg-darkBackground rounded-xl text-primary md:text-4xl'>Sitios Turísticos</h1>
            <img src={drinkImage} alt='Bebida' className='h-[6rem] -translate-x-2 row-span-2'/>
            <Button className='uppercase' onClick={handleTouristSites}>Ver más</Button>
          </div>
        </div>
      </MainLayout>
    </SectionLayout>
  )
}
