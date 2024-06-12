import { Button, Icon, TextInput } from '@tremor/react'
import { useModalContent } from '../hooks/useModalContent'
import { LuPlusCircle, LuSearch } from 'react-icons/lu'

export const ModalContent = () => {
  const { isLoading, playlistInfo, search, handleSearch, searchResults, compareItemsSaved, addTrackToPlaylist } = useModalContent()
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
            <div className='h-[300px] overflow-auto border border-primary rounded-xl my-4 p-4'>
              <p className='font-sans font-bold'>Canciones Registradas</p>
              <ul className='divide-y divide-primary'>
                {playlistInfo.tracks?.items?.map((item, index) => (
                  <li key={index}>
                    <div className='flex items-center gap-2'>
                      <img src={item.track?.album?.images?.[0]?.url} alt='trackImage' width={40} />
                      <div >
                        <p className='font-sans'>{item.track?.name}</p>
                        <p className='font-sans'>{item.track?.artists?.map((artist) => artist.name).join(', ')}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <TextInput placeholder='Buscar canción' icon={LuSearch} value={search} onValueChange={handleSearch}/>
            </div>
            <div className='max-h-[200px] overflow-auto border border-primary rounded-xl my-4 p-4'>
              <ul className='divide-y divide-primary'>
                {searchResults.map((item, index) => (
                  <li key={index}>
                    <div className='flex items-center gap-2'>
                      <img src={item.album?.images?.[0]?.url} alt='trackImage' width={40} />
                      <div className='flex-grow'>
                        <p className='font-sans'>{item.name}</p>
                        <p className='font-sans'>{item.artists?.map((artist) => artist.name).join(', ')}</p>
                      </div>
                      {
                        !compareItemsSaved(item.id) && (
                          <Button variant='light' className='rounded hover:bg-primary/5' onClick={() =>
                            addTrackToPlaylist(item.uri)
                          }>
                            <Icon icon={LuPlusCircle} />
                          </Button>
                        )
                      }
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
