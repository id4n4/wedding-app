import axios from 'axios'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { content } from '../../../config/content'

const API = content.sheetApi

export const useFormAssistance = () => {
  const [isSaving, setIsSaving] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      numberOfGuests: '',
      allergies: ''
    }
  })

  const onSubmit = async (values) => {
    try {
      setIsSaving(true)
      await axios.post(API, {
        Names: values.name,
        NumberOfGuests: values.numberOfGuests,
        Allergies: values.allergies
      })
      toast.success('¡Asistencia confirmada!')
      localStorage.setItem('isSavedAssistance', true)
    } catch (error) {
      console.error(error)
      toast.error('Ocurrió un error al guardar la información')
    } finally {
      setIsSaving(false)
    }
  }

  useEffect(() => {
    setIsSaved(localStorage.getItem('isSavedAssistance') === 'true')
  }, [localStorage.getItem('isSavedAssistance')])
  return {
    formStates: {
      control,
      handleSubmit,
      errors
    },
    onSubmit,
    isSaving,
    isSaved
  }
}
