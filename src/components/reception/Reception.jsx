import { TitleSection } from '../TitleSection'
import ChampanImage from '../../assets/SVGs/champan.svg'
import { Button } from '@tremor/react'
import { MdLocationOn } from 'react-icons/md'
import { SectionLayout } from '../../layouts/SectionLayout'
import { MainLayout } from '../../layouts/MainLayout'
import { ImgTemplate } from '../generalComponents/ImgTemplate'
import { ImgFlour } from '../generalComponents/ImgFlour'

export const Reception = () => {
  return (
    <SectionLayout>
      <ImgFlour isLeft={false} />
      <MainLayout id='reception'>
        <TitleSection title='Recepción' />
        <ImgTemplate src={ChampanImage} alt='champan' />
        <div className='text-lg text-center uppercase md:text-xl text-primary'>
          <p>Hacienda el paraíso</p>
          <p>San Carlos Córdoba</p>
          <p>7:00 P.M.</p>
        </div>
        <Button icon={MdLocationOn}>CÓMO LLEGAR</Button>
      </MainLayout>
    </SectionLayout>
  )
}
