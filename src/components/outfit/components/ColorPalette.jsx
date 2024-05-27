import { outfitColors } from '../../../constants/outfitColors'

export const ColorPalette = () => {
  return (
    <div className='md:w-[70vw]  grid gap-2 justify-items-center max-w-[500px]'
      style={{
        gridTemplateColumns: 'repeat(auto-fill, minmax(50px, 1fr))'
      }}
    >
      {
        outfitColors.map(({ color, name }, index) => (
          <div
            key={index}
            className='relative rounded-full w-14 h-14'
            style={{
              backgroundColor: color
            }}
          />
        ))
      }
    </div>
  )
}
