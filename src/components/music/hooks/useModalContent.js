import axios from 'axios'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const PLAYLIST_ID = import.meta.env.VITE_API_SPOTIFY_PLAYLIST
const API_PLAYLIST = 'https://api.spotify.com/v1/playlists/' + PLAYLIST_ID
const SPOTIFY_CLIENT_ID = import.meta.env.VITE_API_SPOTIFY_CLIENT_ID
const SPOTIFY_CLIENT_SECRET = import.meta.env.VITE_API_SPOTIFY_CLIENT_SECRET

export const useModalContent = () => {
  const [playlistInfo, setPlaylistInfo] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [token, setToken] = useState('')

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
    isLoading
  }
}
