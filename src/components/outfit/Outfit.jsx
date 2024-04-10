import { TitleSection } from '../TitleSection'
import OutfitImage from '../../assets/img/baile.png'

export const Outfit = () => {
  return (
    <section className='py-5'>
      <main className='flex flex-col items-center justify-center gap-3' >
        <TitleSection title='Vestuario' />
        <img src={OutfitImage} alt='champan' loading='lazy' decoding='async'/>
        <div className='mt-2 space-y-2 text-center text-primary'>
          <h1 className='text-5xl lobster '>Damas:</h1>
          <h2 className='text-2xl font-semibold uppercase'>Vestido Largo</h2>
          <div className='flex items-center gap-2'>
            <p className='text-lg uppercase'>Se reserva el color blanco</p>
            <div className='w-4 h-4 bg-white border border-gray-700 rounded-full'/>
          </div>
        </div>
        <div className='mt-2 space-y-2 text-center text-primary'>
          <h1 className='text-5xl lobster '>Caballeros:</h1>
          <h2 className='text-2xl font-semibold uppercase'>Por definir</h2>
        </div>
      </main>
    </section>
  )
}
