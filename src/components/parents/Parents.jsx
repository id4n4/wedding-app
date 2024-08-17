import { MainLayout } from '../../layouts/MainLayout'
import { SectionLayout } from '../../layouts/SectionLayout'
import ampersand from '../../assets/SVGs/ampersand.svg'
import { content } from '../../config/content'

export const Parents = () => {
  return (
    <SectionLayout>
      {/* Add your code here */}
      <MainLayout id='parents'>
        <p className='text-xl text-primary'>Con la bendición de dios y de nuestros padres</p>
        <div className='flex items-center gap-10 text-xl text-primary'>
          <div>
            <p>{content.novio.parents.father}</p>
            <p>{content.novio.parents.mother}</p>
          </div>
          <img
            src={ampersand}
            alt='ampersand'
            className='w-10 h-10'
          />
          <div>
            <p>{content.novia.parents.father}</p>
            <p>{content.novia.parents.mother}</p>
          </div>
        </div>
      </MainLayout>
    </SectionLayout>
  )
}
