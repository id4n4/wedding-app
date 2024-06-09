import debounce from 'just-debounce-it'
import { useCallback, useState } from 'react'
import { spaceAvailable } from '../constants/codes'

const defaultState = {
  value: '',
  isValid: false,
  showMessage: false
}

export const useMainModal = () => {
  const [code, setCode] = useState(defaultState)
  const [number, setNumber] = useState(0)
  const onChangeCode = (e) => {
    const value = e.target.value
    setCode(prev => ({ ...prev, value }))
    codeDebounce(value)
  }

  const codeDebounce = useCallback(
    debounce((value) => {
      const code = spaceAvailable.find(item => item.code.toLowerCase() === value.toLowerCase())
      console.log(code)
      if (code?.number) {
        setNumber(code.number)
        setCode(prev => ({ ...prev, isValid: true, showMessage: false }))
      } else {
        setCode(prev => ({ ...prev, isValid: false, showMessage: true }))
      }
    }, 300),
    []
  )
  return {
    onChangeCode,
    code,
    number
  }
}
