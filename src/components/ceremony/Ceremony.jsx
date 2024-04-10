import { TitleSection } from '../TitleSection'
import { WaveLines } from './components/WaveLines'
import { Button } from '@tremor/react'
import { MdLocationOn } from 'react-icons/md'
import ChurchImage from '../../assets/img/iglesia.png'

export const Ceremony = () => {
  return (
    <section className='py-5'>
      <WaveLines />
      <main className='flex flex-col items-center justify-center gap-3' >
        <TitleSection title='Ceremonia' />
        <img src={ChurchImage} alt='Iglesia' loading='lazy' decoding='async'/>
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
