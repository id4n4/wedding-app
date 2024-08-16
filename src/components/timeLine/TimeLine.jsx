import { content } from '../../config/content'
import { MainLayout } from '../../layouts/MainLayout'
import { SectionLayout } from '../../layouts/SectionLayout'
import { TitleSection } from '../TitleSection'
import { WaveLines } from '../ceremony/components/WaveLines'
import { ImgFlour } from '../generalComponents/ImgFlour'

export const TimeLine = () => {
  return (
    <SectionLayout>
      <WaveLines />
      <MainLayout id='timeLine'>
        <TitleSection title='Línea de tiempo' />
        <ImgFlour />
        <img
          src={content.timeLine}
          alt='Línea de tiempo'
          decoding='async'
          className='w-full max-w-[1000px]'
        />
      </MainLayout>
    </SectionLayout>
  )
}
