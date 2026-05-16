export const formatearGuaranies = (valor = 0) => {
  const numero = Number.parseInt(valor, 10) || 0

  return new Intl.NumberFormat('es-PY', {
    style: 'currency',
    currency: 'PYG',
    maximumFractionDigits: 0,
  }).format(numero)
}

export const limpiarTexto = (texto = '') => {
  if (!texto) return ''

  return String(texto)
    .replaceAll('&#8211;', '–')
    .replaceAll('&ndash;', '–')
    .replaceAll('&ldquo;', '“')
    .replaceAll('&rdquo;', '”')
    .replaceAll('&amp;', '&')
    .replace(/<[^>]+>/g, '')
    .trim()
}

export const obtenerDescripcionCorta = (producto) => {
  const descripcion = limpiarTexto(producto?.short_description || producto?.description || '')

  if (descripcion.length <= 120) return descripcion

  return `${descripcion.slice(0, 120).trim()}...`
}
