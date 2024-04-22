import { SectionLayout } from '../../layouts/SectionLayout'
import { TitleSection } from '../TitleSection'
import CardImage from '../../assets/SVGs/card.svg'
import { ImgTemplate } from '../generalComponents/ImgTemplate'
import { MainLayout } from '../../layouts/MainLayout'

export const EnvelopeRain = () => {
  return (
    <SectionLayout>
      <MainLayout>
        <TitleSection title='Lluvia de Sobres' />
        <ImgTemplate src={CardImage} alt='Tarjeta' />
        <div className='text-xl text-center text-primary'>
          <p>Queremos que sepas que nuestro principal regalo </p>
          <p>es tu presencia en este día tan especial.</p>
        </div>
      </MainLayout>
    </SectionLayout>
  )
}
