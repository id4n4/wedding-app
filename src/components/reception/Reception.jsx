import { TitleSection } from '../TitleSection'
import ChampanImage from '../../assets/img/copa-de-champan.png'
import { Button } from '@tremor/react'
import { MdLocationOn } from 'react-icons/md'

export const Reception = () => {
  return (
    <section className='py-5'>
      <main className='flex flex-col items-center justify-center gap-3' >
        <TitleSection title='Recepción' />
        <img src={ChampanImage} alt='champan' />
        <div className='text-xl text-center uppercase text-primary'>
          <p>Iglesia la medalla milagrosa</p>
          <p>Cereté - Córdoba</p>
          <p>5:00 P.M.</p>
        </div>
        <Button icon={MdLocationOn}>CÓMO LLEGAR</Button>
      </main>
    </section>
  )
}
