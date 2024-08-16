import axios from 'axios'
import debounce from 'just-debounce-it'
import { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { content } from '../../../config/content'

const API_PLAYLIST = content.sheetPlaylistApi
const SPOTIFY_CLIENT_ID = import.meta.env.VITE_API_SPOTIFY_CLIENT_ID
const SPOTIFY_CLIENT_SECRET = import.meta.env.VITE_API_SPOTIFY_CLIENT_SECRET
const API_SEARCH = 'https://api.spotify.com/v1/search'

export const useModalContent = () => {
  const [playlistInfo, setPlaylistInfo] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [spotifyToken, setSpotifyToken] = useState('')
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])

  // #region compareItems
  const compareItemsSaved = (trackId) => {
    return playlistInfo?.some((item) => item.id === trackId)
  }

  // #region getPlaylistInfo
  const getPlaylistInfo = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.get(API_PLAYLIST, {
        headers: {
          Accept: 'application/json'
        }
      })
      setPlaylistInfo(data.map(item => ({
        id: item.Id,
        nombre: item.Nombre,
        autor: item.Autor,
        url_img: item.imgUrl,
        link: item.Link
      })))
    } catch (error) {
      console.error(error)
      toast.error('Error al cargar la playlist')
    } finally {
      setIsLoading(false)
    }
  }

  // #region getToken
  const getToken = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials&client_id=' + SPOTIFY_CLIENT_ID + '&client_secret=' + SPOTIFY_CLIENT_SECRET, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      setSpotifyToken(data.access_token)
    } catch (error) {
      console.error(error)
      toast.error('Error al obtener el token')
    } finally {
      setIsLoading(false)
    }
  }

  // #region handleSearch
  const handleSearch = (value) => {
    setSearch(value)
    debounceSearch(value.trim(), spotifyToken)
  }

  // #region debounceSearch
  const debounceSearch = useCallback(
    debounce((value, token) => {
      if (value === '') {
        setSearchResults([])
        return
      }
      if (token) searchTrack(value, token)
      else toast.error('Error al buscar la canción, token jodido')
    }
    , 500),
    []
  )

  // #region searchTrack
  const searchTrack = async (valueToSearch, token) => {
    try {
      const { data } = await axios.get(API_SEARCH, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          q: valueToSearch,
          type: 'track',
          offset: 0,
          limit: 10
        }
      })
      setSearchResults(data?.tracks?.items || [])
    } catch (error) {
      console.error(error)
      toast.error('Error al buscar la canción')
    }
  }

  const addTrackToPlaylist = async (trackId, name, autor, urlImage, link) => {
    const body = {
      Id: trackId,
      Nombre: name,
      Autor: autor,
      imgUrl: urlImage,
      Link: link
    }
    toast.promise(
      axios.post(API_PLAYLIST, body),
      {
        loading: 'Agregando canción a la playlist...',
        success: () => {
          setPlaylistInfo(prev => [...prev, {
            id: trackId,
            nombre: name,
            autor,
            url_img: urlImage,
            link
          }])
          return 'Canción agregada a la playlist'
        },
        error: 'Error al agregar la canción a la playlist'
      }
    )
  }

  useEffect(() => {
    getToken()
  }, [])

  useEffect(() => {
    if (spotifyToken) {
      getPlaylistInfo()
    }
  }, [spotifyToken])
  return {
    playlistInfo,
    isLoading,
    handleSearch,
    search,
    searchResults,
    compareItemsSaved,
    addTrackToPlaylist
  }
}
