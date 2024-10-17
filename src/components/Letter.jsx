import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import leaf1 from '../assets/SVGs/leaf1.svg'
import leaf2 from '../assets/SVGs/leaf2.svg'
import leaf3 from '../assets/SVGs/leaf3.svg'
import leaf4 from '../assets/SVGs/leaf4.svg'
import welcome from '../assets/SVGs/welcome.svg'
import { content } from '../config/content'
import '../styles/letter_style.css'

export const Letter = ({ isVisible, setIsVisible }) => {
  const [showMessage, setShowMessage] = useState(false)
  const changeState = async () => {
    setShowMessage(true)
    setTimeout(() => {
      setIsVisible(false)
    }, 2000)
  }
  return (
    <>
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
              className='fixed -inset-10 -top-20 -bottom-20 z-[9999] bg-[#c6ac95] flex justify-center items-center'
            >
              <img src={leaf4} alt='leaf_tl' className='absolute reverse_leaf  top-10 left-10 max-w-[350px] w-[30%] h-[30%]' />
              <img src={leaf4} alt='leaf_tr' className='absolute top-10 right-10 max-w-[350px] w-[30%] h-[30%]' />
              <img src={leaf1} alt='leaf_bl' className='absolute ml-24 w-[18rem] pointer-events-none' />
              <img src={leaf2} alt='leaf_br' className='absolute mr-24 w-[18rem] pointer-events-none' />
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
                  <div className='px-1 transition border-4 border-yellow-800 rounded-full bg-secondary heart'>
                    <img src={content.monograma} alt='logo' className='w-[80px]' />
                  </div>
                </div>
              </motion.div>
              <img src={leaf3} alt='leaf_bl' className='absolute bottom-10 left-10 max-w-[350px] w-[30%] h-[30%]' />
              <img src={leaf3} alt='leaf_br' className='absolute bottom-10 right-10 max-w-[350px] w-[30%] h-[30%] reverse_leaf ' />
            </motion.section>
          )
        }
      </AnimatePresence>
      <AnimatePresence>
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
    </>
  )
}
