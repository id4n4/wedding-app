import { content } from '../../../config/content'

export const Title = () => {
  return (
    <div className='flex items-center justify-between w-full gap-3'>
      <div className='flex-grow h-0.5 bg-main mt-5 min-w-10' />
      <h1 className='text-center text-[5rem] md:text-[8rem] joseph text-main '>{content.novio} & {content.novia}</h1>
      <div className='flex-grow h-0.5 bg-main mt-5 min-w-10' />
    </div>
  )
}
