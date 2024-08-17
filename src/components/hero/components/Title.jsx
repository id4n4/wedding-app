import { content } from '../../../config/content'

export const Title = () => {
  return (
    <div className='flex items-center justify-center w-full gap-3'>
      <div className='flex-grow h-0.5 bg-main mt-5 min-w-10' />
      <div className='text-center text-[5rem] joseph text-main leading-none'>
        <p className='joseph'>{content.novio.name}</p>
        <p className='joseph'>&</p>
        <p className='joseph'>{content.novia.name}</p>
      </div>
      <div className='flex-grow h-0.5 bg-main mt-5 min-w-10' />
    </div>
  )
}
