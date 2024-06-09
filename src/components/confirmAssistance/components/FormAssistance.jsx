import { Badge, Button, Callout, NumberInput, Text, TextInput, Textarea } from '@tremor/react'
import { useFormAssistance } from '../hooks/useFormAssistance'
import { Controller } from 'react-hook-form'

export const FormAssistance = ({ spaceAvailable }) => {
  const { formStates, isSaving, onSubmit, isSaved } = useFormAssistance()
  const { control, errors, handleSubmit } = formStates
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
      <div className='flex justify-center'>
        <Badge>Número de cupos disponibles {spaceAvailable}</Badge>
      </div>
      <div className='space-y-3'>
        <div>
          <Text>Nombre completo</Text>
          <Controller
            control={control}
            name='name'
            rules={{
              required: 'Este campo es requerido'
            }}
            render={({ field: { value, onChange } }) => (
              <TextInput
                value={value}
                onValueChange={onChange}
                placeholder='Nombre completo'
                error={!!errors.name}
                errorMessage={errors.name?.message}
              />
            )}
          />
        </div>
        <div>
          <Text>¿Cuantas personas irán?</Text>
          <Controller
            control={control}
            name='numberOfGuests'
            rules={{
              required: 'Este campo es requerido',
              max: {
                value: spaceAvailable,
                message: `El número de cupos no puede ser mayor a ${spaceAvailable}`
              }
            }}
            render={({ field: { value, onChange } }) => (
              <NumberInput
                value={value}
                onValueChange={onChange}
                placeholder='Número de cupos'
                min={0}
                max={spaceAvailable}
                error={!!errors.numberOfGuests}
                errorMessage={errors.numberOfGuests?.message}
              />
            )}
          />
        </div>
        <div>
          <Text>¿Tienes alergias? (opcional)</Text>
          <Controller
            control={control}
            name='allergies'
            render={({ field: { value, onChange } }) => (
              <Textarea
                value={value}
                onValueChange={onChange}
                placeholder='Alergias'
                rows={3}
              />
            )}
          />
        </div>
      </div>
      <div className='flex justify-center'>
        <Button type='submit' disabled={isSaved} loading={isSaving}>
          Confirmar asistencia
        </Button>
      </div>
      {
        isSaved && (
          <Callout title='¡Gracias por confirmar tu asistencia!'>
            <p className='font-sans'>
              Tu asistencia ha sido confirmada con éxito. ¡Nos vemos en la boda!
            </p>
          </Callout>
        )
      }
    </form>
  )
}
