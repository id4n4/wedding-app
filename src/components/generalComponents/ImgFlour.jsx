import flourImage from '../../assets/img/flores.png'

export const ImgFlour = ({ isLeft }) => {
  return (
    <div className={`absolute ${isLeft ? '-left-7' : '-right-7'} z-0`}>
      <img
        src={flourImage}
        alt='flor'
        decoding='async'
        className={`${isLeft ? '-scale-x-100 rotate-12' : '-rotate-12'} w-[60vw] md:w-[40vw] opacity-10  `}
      />
    </div>
  )
}
