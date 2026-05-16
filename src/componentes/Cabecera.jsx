import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from './Menu'
import { useStoreCustom } from '../contexto/carrito'
import { formatearGuaranies } from '../utilidades/formato'

export const Cabecera = () => {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const cantidad = useStoreCustom((state) => state.cantidad)
  const total = useStoreCustom((state) => state.total)

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-950 text-lg font-black text-white shadow-sm">
            PI
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-black tracking-tight text-slate-950 sm:text-base">
              Proyecto Integrador
            </span>
            <span className="hidden text-xs text-slate-500 sm:block">
              Tienda simple con React
            </span>
          </span>
        </Link>

        <Menu />

        <div className="flex items-center gap-2">
          <Link
            to="/carrito"
            className="hidden rounded-2xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200 sm:inline-flex"
          >
            🛒 {cantidad} · {formatearGuaranies(total)}
          </Link>

          <button
            type="button"
            onClick={() => setMenuAbierto((actual) => !actual)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 transition hover:bg-slate-200 md:hidden"
            aria-label="Abrir menú"
            aria-expanded={menuAbierto}
          >
            {menuAbierto ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {menuAbierto && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-sm md:hidden">
          <Menu modoMovil onNavigate={() => setMenuAbierto(false)} />
          <Link
            to="/carrito"
            onClick={() => setMenuAbierto(false)}
            className="mt-3 flex items-center justify-between rounded-2xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700"
          >
            <span>Carrito</span>
            <span>{cantidad} · {formatearGuaranies(total)}</span>
          </Link>
        </div>
      )}
    </header>
  )
}
