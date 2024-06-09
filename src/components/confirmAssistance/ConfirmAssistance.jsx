import { Button } from '@tremor/react'
import { MainLayout } from '../../layouts/MainLayout'
import { SectionLayout } from '../../layouts/SectionLayout'
import { TitleSection } from '../TitleSection'
import { FaUserCheck } from 'react-icons/fa'
import pencilImage from '../../assets/SVGs/pencil.svg'
import { ImgTemplate } from '../generalComponents/ImgTemplate'
import { ImgFlour } from '../generalComponents/ImgFlour'
import { useState } from 'react'
import { MainModal } from './components/MainModal'
import { ModalTemplate } from '../generalComponents/ModalTemplate'

export const ConfirmAssistance = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <SectionLayout>
      <ImgFlour isLeft />
      <MainLayout id='confirmAssistance'>
        <TitleSection title='Confirmar Asistencia' />
        <ImgTemplate src={pencilImage} alt='Lápiz' />
        <div className='mx-auto text-xl text-center text-primary md:w-1/2'>
          <p>Para nosotros es muy importante que confirmes tu asistencia a nuestra boda antes del 15 de Julio de 2024</p>
        </div>
        <Button icon={FaUserCheck} className='uppercase' onClick={() => setShowModal(true)}>
          Confirmar Asistencia
        </Button>
      </MainLayout>
      <ModalTemplate
        isOpen={showModal}
        hideModal={() => setShowModal(false)}
        title='Confirmación de asistencia'
      >
        <MainModal />
      </ModalTemplate>
    </SectionLayout>
  )
}
