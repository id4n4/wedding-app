import { MainLayout } from '../layouts/MainLayout'
import { SectionLayout } from '../layouts/SectionLayout'
import ivanAlejaImage from '../assets/SVGs/ivan_aleja.svg'

export const Menu = () => {
  const handleClick = (e, idElement) => {
    e.preventDefault()
    const element = document.getElementById(idElement)
    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
  return (
    <SectionLayout>
      <MainLayout>
        <div className='flex items-center justify-between gap-10'>
          <img
            src={ivanAlejaImage}
            alt='Iván y Aleja'
            decoding='async'
            className='w-1/2 '
          />
          <div className='flex flex-col gap-5 md:gap-2 text-end text-primary'>
            <a
              href='#counter'
              onClick={(e) => handleClick(e, 'counter')}
              className='hover:text-tertiary'
            >
              Ir al conteo regresivo
            </a>
            <a
              href='#ceremony'
              onClick={(e) => handleClick(e, 'ceremony')}
              className='hover:text-tertiary'
            >
              Ir al lugar de la ceremonia
            </a>
            <a
              href='#reception'
              onClick={(e) => handleClick(e, 'reception')}
              className='hover:text-tertiary'
            >
              Ir al lugar de la fiesta
            </a>
            <a
              href='#music'
              onClick={(e) => handleClick(e, 'music')}
              className='hover:text-tertiary'
            >
              Sugerir canción
            </a>
            <a
              href='#timeLine'
              // onClick={(e) => handleClick(e, 'timeLine')}
              className='hover:text-tertiary'
            >
              Ver la línea de tiempo
            </a>
            <a
              href='#confirmAssistance'
              onClick={(e) => handleClick(e, 'confirmAssistance')}
              className='hover:text-tertiary'
            >
              Confirmar mi asistencia
            </a>
          </div>
        </div>
      </MainLayout>
    </SectionLayout>
  )
}
