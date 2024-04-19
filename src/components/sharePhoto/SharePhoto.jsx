import waveDOWN from '../../assets/waveDown.svg'
import waveUP from '../../assets/waveUp.svg'

export const SharePhoto = () => {
  return (
    <section className='font-sans min-h-[700px] w-full bg-primary h-full flex flex-col '>
      <div className='relative'>
        <div className='bg-background'>
          <img src={waveUP} alt='waveUP' className='w-full' loading='lazy' decoding='async'/>
        </div>
        <div className='relative h-5 bg-darkBackground'>
          <h2 className='text-2xl md:text-[4rem] text-center text-primary absolute bottom-full inset-0'>Comparte las fotos de la Boda</h2>
        </div>
        <img src={waveDOWN} alt='waveUP' className='w-full' loading='lazy' decoding='async'/>
      </div>
      <div className='flex items-center justify-center flex-grow'>
        <div className='max-w-[1000px] text-main flex flex-col justify-center items-center gap-5 '>
          <div className='max-w-[800px] mx-auto'>
            <p className='text-xl text-center uppercase text-balance'>
          Uno solo puede ser vencido, pero dos pueden resistir; !la cuerda de tres hilos no se rompe fácilmente!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
