const diasSemana = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']
export function obtenerSemanaCompleta (date) {
  // Obtener el día de la semana (0 = Domingo, 1 = Lunes, ..., 6 = Sábado)
  const diaSemana = date.getDay()

  // Array para almacenar los resultados
  const semanaCompleta = []

  // Construir los días de la semana anteriores al día dado
  for (let i = diaSemana; i >= 0; i--) {
    const diaAnterior = new Date(date)
    diaAnterior.setDate(date.getDate() - (diaSemana - i))
    semanaCompleta.push({ label: diasSemana[i], day: diaAnterior.getDate() })
  }

  // Construir los días de la semana posteriores al día dado
  for (let i = diaSemana + 1; i < 7; i++) {
    const diaPosterior = new Date(date)
    diaPosterior.setDate(date.getDate() + (i - diaSemana))
    semanaCompleta.push({ label: diasSemana[i], day: diaPosterior.getDate() })
  }

  // ordenar los días de la semana
  semanaCompleta.sort((a, b) => {
    if (diasSemana.indexOf(a.label) > diasSemana.indexOf(b.label)) {
      return 1
    }
    if (diasSemana.indexOf(a.label) < diasSemana.indexOf(b.label)) {
      return -1
    }
    return 0
  }
  )

  return semanaCompleta
}
