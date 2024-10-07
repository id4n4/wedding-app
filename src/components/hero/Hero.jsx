import { motion } from 'framer-motion'
import { content } from '../../config/content'
import { WaveUp } from '../generalComponents/WaveUp'
import { Title } from './components/Title'
import { Week } from './components/Week'
import { ImgFlour } from '../generalComponents/ImgFlour'

export const Hero = () => {
  return (
    <motion.section className='font-sans min-h-[700px] w-full bg-background  flex flex-col hero relative border-0 '>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3
        }}
        className='text-primary '
      >
        <ImgFlour isLeft className='absolute right-0 -top-[10rem] z-10 rotate-[200deg]' />
        <div className='flex flex-col items-center justify-center w-full gap-5 px-16 py-10 bg-background'>
          <h1 className='text-3xl'>¡Nos Casamos!</h1>
          <Title />
        </div>
        <div className='relative w-full h-full max-h-[500px] mx-auto overflow-hidden' >
          <div className='absolute top-0 left-0 right-0 w-full h-10 bg-gradient-to-b from-background to-transparent' />
          <img src={content.imgHero} alt={'imgHero'} loading='lazy' decoding='async' className='object-cover object-bottom w-full h-full'/>
          <div className='absolute bottom-0 left-0 right-0 w-full h-10 bg-gradient-to-t from-background to-transparent' />
        </div>
        <div className='relative'>
          <ImgFlour isLeft className='absolute left-0 -top-[15rem] rotate-[20deg] ' />
          <div className='container flex flex-col gap-20 mx-auto mt-10'>
            <div className='z-10 flex items-center justify-center flex-grow '>
              <div className='max-w-[700px] mx-auto flex flex-col items-center gap-10'>
                {/* <ImQuotesLeft className='mb-2 text-xl text-secondary' /> */}
                {
                  content.phraseHero.map((phrase, index) => (
                    <p key={index} className='font-sans text-xl text-center md:text-3xl'>
                      {phrase}
                    </p>
                  ))
                }
                {/* <ImQuotesRight className='mt-2 text-xl text-secondary' /> */}
              </div>
            </div>
            <Week />
          </div>
        </div>
      </motion.div>
      <div className='z-10 bg-gradient-to-t from-darkBackground to-background to-10%'>
        <WaveUp />
      </div>
    </motion.section>
  )
}
