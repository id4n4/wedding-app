import heart from '../assets/SVGs/heart2.svg'

// eslint-disable-next-line react/prop-types
export const TitleSection = ({ title }) => {
  return (
    <div className='flex items-center justify-between w-full max-w-[800px] mx-auto gap-2'>
      <div className='h-0.5 flex-grow bg-primary' />
      <h3 className='text-5xl md:text-8xl joseph text-primary'>{title}</h3>
      <img src={heart} alt='heart' className='w-16'/>
      <div className='h-0.5 flex-grow bg-primary' />
    </div>
  )
}
