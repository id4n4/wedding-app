export const ImgTemplate = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} loading='lazy' decoding='async' className='w-1/3 min-w-[100px] max-w-[250px]'/>
  )
}
