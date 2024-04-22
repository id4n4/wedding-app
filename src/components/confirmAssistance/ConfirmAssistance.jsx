import { Button } from '@tremor/react'
import { MainLayout } from '../../layouts/MainLayout'
import { SectionLayout } from '../../layouts/SectionLayout'
import { TitleSection } from '../TitleSection'
import { FaUserCheck } from 'react-icons/fa'
import pencilImage from '../../assets/SVGs/pencil.svg'
import { ImgTemplate } from '../generalComponents/ImgTemplate'

export const ConfirmAssistance = () => {
  return (
    <SectionLayout>
      <MainLayout id='confirmAssistance'>
        <TitleSection title='Confirmar Asistencia' />
        <ImgTemplate src={pencilImage} alt='Lápiz' />
        <div className='text-xl text-center text-primary'>
          <p>Para nosotros es muy importante</p>
          <p>que confirmes tu asistencia a</p>
          <p>nuestra boda antes del XX de</p>
          <p>XXXXX de 2024</p>
        </div>
        <Button icon={FaUserCheck} className='uppercase'>
          Confirmar Asistencia
        </Button>
      </MainLayout>
    </SectionLayout>
  )
}
