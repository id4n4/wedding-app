import { Button, Icon, TextInput } from '@tremor/react'
import { useModalContent } from '../hooks/useModalContent'
import { LuPlusCircle, LuSearch } from 'react-icons/lu'

export const ModalContent = () => {
  const {
    isLoading,
    playlistInfo,
    search,
    handleSearch,
    searchResults,
    compareItemsSaved,
    addTrackToPlaylist
  } = useModalContent()
  return (
    <section className='sm:w-[70vw] md:w-[50vw]'>
      {isLoading
        ? (
          <div className='text-center'>
            <p>Cargando playlist...</p>
          </div>)
        : (
          <div className='sm:w-[70vw] md:w-[50vw]'>
            <div className='px-4 my-4 border border-primary rounded-xl'>
              <div className='overflow-auto h-[300px] my-2'>
                <p className='font-sans font-bold'>Canciones Registradas</p>
                <ul className='divide-y divide-primary'>
                  {playlistInfo.map(({ url_img: urlImage, nombre, autor }, index) => (
                    <li key={index}>
                      <div className='flex items-center gap-2'>
                        <img
                          src={urlImage}
                          alt='trackImage'
                          width={40}
                          className='rounded-lg'
                        />
                        <div>
                          <p className='font-sans'>{nombre}</p>
                          <p className='font-sans text-sm'>
                            {autor}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <TextInput
                placeholder='Buscar canción'
                icon={LuSearch}
                value={search}
                onValueChange={handleSearch}
              />
            </div>
            <div className='max-h-[200px] overflow-auto border border-primary rounded-xl my-4 p-4'>
              <ul className='divide-y divide-primary'>
                {searchResults.map((item, index) => (
                  <li key={index}>
                    <div className='flex items-center gap-2'>
                      <img
                        src={item.album?.images?.[0]?.url}
                        alt='trackImage'
                        width={40}
                        className='rounded-lg'
                      />
                      <div className='flex-grow'>
                        <p className='font-sans'>{item.name}</p>
                        <p className='font-sans'>
                          {item.artists?.map((artist) => artist.name).join(', ')}
                        </p>
                      </div>
                      {!compareItemsSaved(item.id) && (
                        <Button
                          variant='light'
                          className='rounded hover:bg-primary/5'
                          onClick={() =>
                            addTrackToPlaylist(
                              item.id,
                              item.name,
                              item.artists
                                ?.map((artist) => artist.name)
                                .join(', '),
                              item.album?.images?.[0]?.url,
                              item.external_urls?.spotify
                            )
                          }
                        >
                          <Icon icon={LuPlusCircle} />
                        </Button>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>)}
    </section>
  )
}
