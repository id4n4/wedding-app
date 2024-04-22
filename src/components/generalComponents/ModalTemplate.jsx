import { Button, Dialog, DialogPanel } from '@tremor/react'

export const ModalTemplate = ({ isOpen, hideModal }) => {
  return (
    <Dialog open={isOpen} onClose={hideModal} static={true}>
      <DialogPanel className='border-none bg-darkBackground'>

        <h3 className='text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong'>Account Created Successfully</h3>
        <p className='mt-2 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content'>
          Your account has been created successfully. You can now login to your
          account. For more information, please contact us.
        </p>
        <Button className='w-full mt-8' onClick={hideModal}>
          Got it!
        </Button>
      </DialogPanel>
    </Dialog>
  )
}
