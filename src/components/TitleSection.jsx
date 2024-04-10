import { LuHeart } from 'react-icons/lu'

// eslint-disable-next-line react/prop-types
export const TitleSection = ({ title }) => {
  return (
    <div className='flex items-center justify-between gap-2'>
      <div className='h-0.5 w-32 bg-primary' />
      <h1 className='text-5xl lobster text-primary'>{title}</h1>
      <LuHeart className='text-5xl text-primary' />
      <div className='h-0.5 w-20 bg-primary' />
    </div>
  )
}
