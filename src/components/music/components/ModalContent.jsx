import { useModalContent } from '../hooks/useModalContent'

export const ModalContent = () => {
  const { isLoading, playlistInfo } = useModalContent()
  return (
    <section className='sm:w-[70vw] md:w-[50vw]'>
      {isLoading
        ? (
          <div className='text-center'>
            <p>Cargando playlist...</p>
          </div>)
        : (
          <div className='sm:w-[70vw] md:w-[50vw]'>
            <div className='flex flex-wrap items-center justify-center gap-2'>
              <div className='w-[100px] h-[100px] overflow-hidden rounded-2xl shadow-xl'>
                <img src={playlistInfo?.images?.[0]?.url} alt='playlistImage' style={{ objectFit: 'cover' }} />
              </div>
              <div className='max-w-[200px]'>
                <p className='font-sans'>{playlistInfo.description}</p>
              </div>
            </div>
            <div className='max-h-[500px] overflow-auto'>
              <ul className='mt-4 divide-y divide-primary'>
                {playlistInfo.tracks?.items?.map((item, index) => (
                  <li key={index}>
                    <div className='flex items-center gap-2'>
                      <img src={item.track?.album?.images?.[0]?.url} alt='trackImage' width={30} />
                      <div >
                        <p className='font-sans'>{item.track?.name}</p>
                        <p className='font-sans'>{item.track?.artists?.map((artist) => artist.name).join(', ')}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>)
      }
    </section>
  )
}
