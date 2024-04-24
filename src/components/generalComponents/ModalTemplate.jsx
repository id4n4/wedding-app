import { Button, Dialog, DialogPanel } from '@tremor/react'
import flourImage from '../../assets/img/flores.png'
import heart from '../../assets/SVGs/heart2.svg'
import { IoMdCloseCircle } from 'react-icons/io'

export const ModalTemplate = ({
  isOpen,
  hideModal,
  title,
  subtitle,
  children
}) => {
  return (
    <Dialog open={isOpen} onClose={hideModal} static={true}>
      <DialogPanel className='relative border-none bg-darkBackground max-w-max rounded-3xl'>
        <div className='absolute inset-0 z-0 flex justify-between overflow-hidden -top-10'>
          <img
            src={flourImage}
            alt='Flour'
            className='z-0 w-[10rem] opacity-20 -scale-x-100 rotate-90'
          />
          <img
            src={flourImage}
            alt='Flour'
            className='w-[10rem] opacity-20  -rotate-90'
          />
        </div>
        <div className='absolute top-2 right-2'>
          <Button
            variant='light'
            className='text-primary hover:text-tertiary hover:scale-105'
            onClick={hideModal}
          >
            <IoMdCloseCircle className='text-3xl' />
          </Button>
        </div>
        <div className='relative z-10'>
          <div className='text-center text-primary'>
            <h1 className='text-3xl'>{title}</h1>
            <div className='flex items-center justify-center'>
              <h2 className='text-5xl text-primary'>{subtitle}</h2>
              <img src={heart} alt='heart' className='w-10' />
            </div>
          </div>
          <p className='mt-2 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content'>
            Your account has been created successfully. You can now login to
            your account. For more information, please contact us.
          </p>
          <Button className='w-full mt-8' onClick={hideModal}>
            Got it!
          </Button>
        </div>
      </DialogPanel>
    </Dialog>
  )
}