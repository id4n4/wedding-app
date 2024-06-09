import { Callout } from '@tremor/react'
import { useMainModal } from '../hooks/useMainModal'
import { LuXCircle } from 'react-icons/lu'
import { motion } from 'framer-motion'
import { FormAssistance } from './FormAssistance'

export const MainModal = () => {
  const { onChangeCode, code, number } = useMainModal()
  return (
    <section>
      <div className='flex flex-col items-center justify-center mb-4 space-y-4'>
        <p className='font-sans text-lg text-primary'>
          Ingresa el código que se encuentra en tu invitación
        </p>
        <input
          type='text'
          placeholder='Código'
          className='w-1/2 p-2 text-center rounded shadow border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-lightBackground text-primary'
          onChange={onChangeCode}
        />
        {code.showMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            <Callout title='Código incorrecto' color='red' icon={LuXCircle}>
              <p className='font-sans'>
              El código ingresado es incorrecto. Por favor, verifica que has
              ingresado el código correctamente y vuelve a intentarlo.
              </p>
              <p className='font-sans'>
              Si el problema persiste, contacta a nuestra wedding planner para
              confirmar tu asistencia.
              </p>
            </Callout>
          </motion.div>
        )}

      </div>
      {
        code.isValid && (
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.4
            }}
          >
            <FormAssistance spaceAvailable={number}/>
          </motion.div>
        )

      }
    </section>
  )
}
