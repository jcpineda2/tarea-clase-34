export const Boton = ({
  children,
  tipo = 'button',
  variante = 'primario',
  className = '',
  ...props
}) => {
  const variantes = {
    primario:
      'bg-slate-950 text-white hover:bg-slate-800 focus-visible:outline-slate-950',
    secundario:
      'bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50 focus-visible:outline-slate-700',
    peligro:
      'bg-rose-600 text-white hover:bg-rose-700 focus-visible:outline-rose-600',
    suave:
      'bg-slate-100 text-slate-700 hover:bg-slate-200 focus-visible:outline-slate-400',
  }

  return (
    <button
      type={tipo}
      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60 ${variantes[variante]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
