import { useState } from 'react'
import '../styles/letter_style.css'
import { AnimatePresence, motion } from 'framer-motion'
import { HiHeart } from 'react-icons/hi'
import { ImgFlour } from './generalComponents/ImgFlour'

export const Letter = () => {
  const [isVisible, setIsVisible] = useState(true)
  return (
    <AnimatePresence>
      {
        isVisible && (
          <motion.section
            initial={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            transition={{ duration: 0.3 }}
            className='fixed -inset-10 -top-20 -bottom-20 z-[9999] bg-primary flex justify-center items-center'
          >
            <ImgFlour isLeft />
            <ImgFlour />
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              className='relative cursor-pointer envelope'
              onClick={() => {
                setIsVisible(false)
              }}
            >
              <div className='back' />
              <div className='front' />
              <div className='top' />
              <div className='shadow' />
              <div className='absolute inset-0 flex items-center justify-center'>
                <HiHeart className='text-5xl text-red-500 duration-500 heart' />
              </div>
            </motion.div>
          </motion.section>
        )
      }
    </AnimatePresence>
  )
}