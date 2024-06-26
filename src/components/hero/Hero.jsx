import { motion } from 'framer-motion'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
import { WaveUp } from '../generalComponents/WaveUp'
import { Title } from './components/Title'
import { Week } from './components/Week'
import './heroStyle.css'

export const Hero = () => {
  return (
    <motion.section className='font-sans min-h-[700px] w-full bg-black h-full flex flex-col hero relative '>
      <div className='z-10 flex items-center justify-center flex-grow'>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3
          }}
          className='max-w-[1000px] text-main flex flex-col justify-center items-center gap-10 pt-20 px-16 '
        >
          <Week />
          <Title />
          <div className='max-w-[700px] mx-auto flex flex-col items-center'>
            <ImQuotesLeft className='mb-2 text-xl text-secondary' />
            <p className='font-sans text-xl text-center '>
                Uno solo puede ser vencido, pero dos pueden resistir.
            </p>
            <p className='font-sans text-xl text-center sm:inline'>
                ! La cuerda de tres hilos no se rompe fácilmente !
            </p>
            <ImQuotesRight className='mt-2 text-xl text-secondary' />
          </div>
        </motion.div>
      </div>
      <div>
        <WaveUp />
      </div>
    </motion.section>
  )
}
