import { outfitColors } from '../../../constants/outfitColors'

export const ColorPalette = () => {
  return (
    <div className='w-[80vw] grid gap-2'
      style={{
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))'
      }}
    >
      {
        outfitColors.map(({ color, name }, index) => (
          <div
            key={index}
            className='relative w-full h-20 rounded-md'
            style={{
              backgroundColor: color
            }}
          >
            <div className='absolute inset-0 flex items-end justify-center p-1 transition-all opacity-0 bg-gradient-to-t from-secondary from-30% to-transparent hover:opacity-100'>
              <p className='font-sans text-xl font-bold text-primary'>{name}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}
