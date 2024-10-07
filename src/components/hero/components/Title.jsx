import { content } from '../../../config/content'

export const Title = () => {
  return (
    <div className='flex items-center justify-center w-full gap-3'>
      <div className='flex-grow h-0.5 bg-primary mt-5 min-w-10' />
      <div className='text-center text-[5rem] text-primary leading-none md:flex gap-10'>
        <p className='greatVibes'>{content.novio.name}</p>
        <p className='greatVibes'>&</p>
        <p className='greatVibes'>{content.novia.name}</p>
      </div>
      <div className='flex-grow h-0.5 bg-primary mt-5 min-w-10' />
    </div>
  )
}
