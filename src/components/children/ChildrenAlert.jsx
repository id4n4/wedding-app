import childrenSvg from '../../assets/SVGs/children.svg'
import { MainLayout } from '../../layouts/MainLayout'
import { SectionLayout } from '../../layouts/SectionLayout'
import { ImgTemplate } from '../generalComponents/ImgTemplate'

export const ChildrenAlert = () => {
  return (
    <SectionLayout>
      <MainLayout>
        <ImgTemplate src={childrenSvg} alt='Tarjeta' />
        <div className='text-sm text-center md:text-lg text-primary'>
          <p>Nos encantan sus hijos, pero creemos que necesitan un noche libre.</p>
          <p>Celebración exclusiva para adultos</p>
        </div>
      </MainLayout>
    </SectionLayout>
  )
}
