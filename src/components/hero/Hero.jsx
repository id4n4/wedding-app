import { motion } from 'framer-motion'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
import { WaveUp } from '../generalComponents/WaveUp'
import { Title } from './components/Title'
import { Week } from './components/Week'
import { content } from '../../config/content'

export const Hero = () => {
  return (
    <motion.section className='font-sans min-h-[700px] w-full bg-black  flex flex-col hero relative border-0'>
      <div className='absolute top-0 left-0 w-full h-full' >
        <img src={content.imgHero} alt={'imgHero'} loading='lazy' decoding='async' className='object-cover w-full h-full bg-primary'/>
      </div>
      <div className='z-10 flex items-center justify-center flex-grow bg-black/40'>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3
          }}
          className='container flex flex-col items-center justify-center gap-10 px-16 pt-20 text-main '
        >
          <Week />
          <Title />
          <div className='max-w-[700px] mx-auto flex flex-col items-center'>
            <ImQuotesLeft className='mb-2 text-xl text-secondary' />
            {
              content.phraseHero.map((phrase, index) => (
                <p key={index} className='font-sans text-xl text-center md:text-3xl'>
                  {phrase}
                </p>
              ))
            }
            <ImQuotesRight className='mt-2 text-xl text-secondary' />
          </div>
        </motion.div>
      </div>
      <div className='z-10 bg-gradient-to-t from-secondary  to-black/40 to-20%'>
        <WaveUp />
      </div>
    </motion.section>
  )
}
