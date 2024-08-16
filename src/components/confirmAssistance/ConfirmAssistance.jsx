import { Button } from '@tremor/react'
import { FaUserCheck } from 'react-icons/fa'
import pencilImage from '../../assets/SVGs/pencil.svg'
import { content } from '../../config/content'
import { MainLayout } from '../../layouts/MainLayout'
import { SectionLayout } from '../../layouts/SectionLayout'
import { ImgFlour } from '../generalComponents/ImgFlour'
import { ImgTemplate } from '../generalComponents/ImgTemplate'
import { TitleSection } from '../TitleSection'

const day = content.fechaConfirm.getDate() + 1
const month = content.fechaConfirm.toLocaleDateString('es-ES', { month: 'long' })
const year = content.fechaConfirm.getFullYear()

export const ConfirmAssistance = () => {
  console.log(content.fechaConfirm.getDay())
  const confirmAssistance = () => {
    window.open(content.urlWhatsapp, '_blank')
  }
  return (
    <SectionLayout>
      <ImgFlour isLeft />
      <MainLayout id='confirmAssistance'>
        <TitleSection title='Confirmar Asistencia' />
        <ImgTemplate src={pencilImage} alt='Lápiz' />
        <div className='mx-auto text-xl text-center text-primary md:w-1/2'>
          <p>Para nosotros es muy importante que confirmes tu asistencia a nuestra boda antes del {day}  de {month} de {year}</p>
        </div>
        <Button icon={FaUserCheck} className='uppercase' onClick={confirmAssistance}>
          Confirmar Asistencia
        </Button>
      </MainLayout>
    </SectionLayout>
  )
}
