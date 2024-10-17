import { MainLayout } from '../../layouts/MainLayout'
import { SectionLayout } from '../../layouts/SectionLayout'
import ampersand from '../../assets/SVGs/ampersand.svg'
import { content } from '../../config/content'

export const Parents = () => {
  return (
    <SectionLayout>
      {/* Add your code here */}
      <MainLayout id='parents'>
        <div className='flex flex-col items-center gap-5 text-lg text-center sm:flex-row text-primary'>
          <div>
            <p>{content.novio.parents.father}</p>
            <p>{content.novio.parents.mother}</p>
          </div>
          <img src={ampersand} alt='ampersand' className='w-10 h-10 pl-2' />
          <div>
            <p>{content.novia.parents.father}</p>
            <p>{content.novia.parents.mother}</p>
          </div>
        </div>
        <p className='text-center text-md sm:text-xl text-primary'>
          Con la bendición de dios y de nuestros padres Tenemos el gusto de
          invitarlo(s) a nuestra boda
        </p>
      </MainLayout>
    </SectionLayout>
  )
}
