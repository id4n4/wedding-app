import axios from 'axios'
import debounce from 'just-debounce-it'
import { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const PLAYLIST_ID = import.meta.env.VITE_API_SPOTIFY_PLAYLIST
const API_PLAYLIST = 'https://api.spotify.com/v1/playlists/' + PLAYLIST_ID
const SPOTIFY_CLIENT_ID = import.meta.env.VITE_API_SPOTIFY_CLIENT_ID
const SPOTIFY_CLIENT_SECRET = import.meta.env.VITE_API_SPOTIFY_CLIENT_SECRET
const API_SEARCH = 'https://api.spotify.com/v1/search'

export const useModalContent = () => {
  const [playlistInfo, setPlaylistInfo] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [token, setToken] = useState('')
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])

  // #region compareItems
  const compareItemsSaved = (trackId) => {
    return playlistInfo?.tracks?.items?.some((item) => item.track.id === trackId)
  }

  // #region getPlaylistInfo
  const getPlaylistInfo = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.get(API_PLAYLIST, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setPlaylistInfo(data)
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
      setToken(data.access_token)
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
    debounceSearch(value.trim())
  }

  // #region debounceSearch
  const debounceSearch = useCallback(
    debounce((value) => {
      if (value === '') {
        setSearchResults([])
        return
      }
      searchTrack(value)
    }
    , 500),
    []
  )

  // #region searchTrack
  const searchTrack = async (valueToSearch) => {
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

  const addTrackToPlaylist = async (trackUri) => {
    toast.promise(
      axios.post(API_PLAYLIST + '/tracks', {
        uris: [trackUri],
        position: 0
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }),
      {
        loading: 'Agregando canción a la playlist...',
        success: () => {
          getPlaylistInfo()
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
    if (token) {
      getPlaylistInfo()
    }
  }, [token])
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
