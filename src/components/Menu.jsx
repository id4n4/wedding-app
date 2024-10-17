import { content } from '../config/content'
import { MainLayout } from '../layouts/MainLayout'
import { SectionLayout } from '../layouts/SectionLayout'
import '../styles/menu.css'

export const Menu = () => {
  const handleClick = (e, idElement) => {
    e.preventDefault()
    const element = document.getElementById(idElement)
    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
  return (
    <SectionLayout>
      <MainLayout>
        <div className='grid items-center gap-5 sm:grid-cols-2 '
        >
          <img
            src={content.monograma}
            alt='Iván y Aleja'
            decoding='async'
            className='w-full '
          />
          <div className='flex flex-col gap-5 text-primary md:gap-2 text-end'>
            <a
              href='#counter'
              onClick={(e) => handleClick(e, 'counter')}
              className='transition hover:scale-105'
            >
              Ir al conteo regresivo
            </a>
            <a
              href='#ceremony'
              onClick={(e) => handleClick(e, 'ceremony')}
              className='transition hover:scale-105'
            >
              Ir al lugar de la ceremonia
            </a>
            <a
              href='#reception'
              onClick={(e) => handleClick(e, 'reception')}
              className='transition hover:scale-105'
            >
              Ir al lugar de la fiesta
            </a>
            <a
              href='#music'
              onClick={(e) => handleClick(e, 'music')}
              className='transition hover:scale-105'
            >
              Sugerir canción
            </a>
            <a
              href='#timeLine'
              // onClick={(e) => handleClick(e, 'timeLine')}
              className='transition hover:scale-105'
            >
              Ver la línea de tiempo
            </a>
            <a
              href='#confirmAssistance'
              onClick={(e) => handleClick(e, 'confirmAssistance')}
              className='transition hover:scale-105'
            >
              Confirmar mi asistencia
            </a>
          </div>
        </div>
      </MainLayout>
    </SectionLayout>
  )
}
