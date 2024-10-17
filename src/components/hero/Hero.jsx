import { motion } from 'framer-motion'
import { content } from '../../config/content'
import { WaveUp } from '../generalComponents/WaveUp'
import { Title } from './components/Title'
import { Week } from './components/Week'
import { ImgFlour } from '../generalComponents/ImgFlour'

export const Hero = () => {
  return (
    <section className='font-sans min-h-[700px] w-full bg-background  flex flex-col hero relative border-0 '>
      <div className='text-primary '>
        <ImgFlour
          isLeft
          className='absolute right-0 -top-[10rem] z-10 rotate-[200deg]'
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut'
          }}
          className='flex flex-col items-center justify-center w-full gap-5 px-16 py-10 bg-background'
        >
          <h1 className='text-3xl'>¡Nos Casamos!</h1>
          <Title />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut'
          }}
          className='relative w-full h-full max-w-xl mx-auto overflow-hidden'
        >
          <div
            className='w-full bg-bottom bg-cover h-[600px] bg-no-repeat backdrop:blur-sm relative'
            style={{ backgroundImage: `url(${content.imgHero})` }}
          >
            <div className='absolute bg-gradient-to-b from-background  to-transparent top-0 left-0 right-0 h-[50px] ' />
            <div className='absolute bg-gradient-to-r from-background  to-transparent top-0 left-0 bottom-0 w-[50px]' />
            <div className='absolute bg-gradient-to-l from-background  to-transparent top-0 right-0 bottom-0 w-[50px]' />
            <div className='absolute bg-gradient-to-t from-background  to-transparent bottom-0 left-0 right-0 h-[50px]' />
          </div>
        </motion.div>
        <div className='relative p-5'>
          <ImgFlour
            isLeft
            className='absolute left-0 -top-[15rem] rotate-[20deg] '
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut'
            }}
            className='container flex flex-col gap-20 mx-auto mt-10'
          >
            <div className='z-10 flex items-center justify-center flex-grow '>
              <div className='max-w-[700px] mx-auto flex flex-col items-center gap-10'>
                {/* <ImQuotesLeft className='mb-2 text-xl text-secondary' /> */}
                {content.phraseHero.map((phrase, index) => (
                  <p key={index} className='text-center text-md sm:text-lg md:text-xl'>
                    {phrase}
                  </p>
                ))}
                {/* <ImQuotesRight className='mt-2 text-xl text-secondary' /> */}
              </div>
            </div>
            <Week />
          </motion.div>
        </div>
      </div>
      <div className='z-10 bg-gradient-to-t from-darkBackground to-background to-10%'>
        <WaveUp />
      </div>
    </section>
  )
}
