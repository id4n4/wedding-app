import { motion } from 'framer-motion'

export const MainLayout = ({ children, ...props }) => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className='relative z-10 flex flex-col items-center justify-center gap-5 px-10' {...props}>
      {children}
    </motion.main>
  )
}
