import { AnimatePresence, motion } from 'framer-motion'
import imgLogo from '../assets/SVGs/logo.svg'
import '../styles/letter_style.css'
import { ImgFlour } from './generalComponents/ImgFlour'
import { useState } from 'react'
import welcome from '../assets/SVGs/welcome.svg'

export const Letter = ({ isVisible, setIsVisible }) => {
  const [showMessage, setShowMessage] = useState(false)
  const changeState = async () => {
    setShowMessage(true)
    setTimeout(() => {
      setIsVisible(false)
    }, 2000)
  }
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
                changeState(false)
              }}
            >
              <div className='back' />
              <div className='front' />
              <div className='top' />
              <div className='shadow' />
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='p-5 transition border-4 border-yellow-800 rounded-full bg-primary heart'>
                  <img src={imgLogo} alt='logo' className='w-[30px]' />
                </div>
              </div>
            </motion.div>
          </motion.section>
        )
      }
      {
        showMessage && isVisible && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='fixed inset-0 z-[9999] bg-secondary flex justify-center items-center'
          >
            <img src={welcome} alt='welcome' className='w-[80%] h-[80%]' />
          </motion.section>
        )
      }
    </AnimatePresence>
  )
}
