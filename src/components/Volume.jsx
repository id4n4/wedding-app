import { Button, Icon } from '@tremor/react'
import { LuVolume2, LuVolumeX } from 'react-icons/lu'

export const Volume = ({ hasVolume, onChangeVolume }) => {
  return (
    <div className='fixed z-50 bottom-2 right-2'>
      <Button variant='light' onClick={onChangeVolume}>
        {
          hasVolume
            ? <Icon icon={LuVolume2} size='xl' color='slate'/>
            : <Icon icon={LuVolumeX} size='xl' color='red'/>
        }
      </Button>

    </div>
  )
}
