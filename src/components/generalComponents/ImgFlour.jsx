import flourImage from '../../assets/img/flores.png'

export const ImgFlour = ({ isLeft }) => {
  return (
    <div className={`absolute ${isLeft ? 'left-0' : 'right-0'} z-0  overflow-hidden`}>
      <img
        src={flourImage}
        alt='flor'
        decoding='async'
        className={`${isLeft ? '-scale-x-100 rotate-12 -translate-x-7' : '-rotate-12 translate-x-7'} w-[60vw] md:w-[40vw] opacity-20 `}
      />
    </div>
  )
}
