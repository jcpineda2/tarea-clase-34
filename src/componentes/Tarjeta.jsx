import { useState } from "react"
import { useStoreCustom } from "../contexto/carrito"

const formatearGuaranies = (valor) => {
    return new Intl.NumberFormat('es-PY', {
        style: 'currency',
        currency: 'PYG',
        maximumFractionDigits: 0,
    }).format(Number(valor) || 0)
}

export const Tarjeta = ({ imagen, titulo, precio }) => {

    const [precioProducto, setPrecioProducto] = useState(0)

    const { inc } = useStoreCustom()

    const handleClick = () => {
        setPrecioProducto(precio)
        inc(precioProducto)
    }

    return <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200">
        <picture className="relative flex aspect-square items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-violet-50 p-6">
            <img
                src={imagen}
                alt={titulo}
                className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                loading="lazy"
            />
            <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-violet-700 shadow-sm ring-1 ring-violet-100">
                Disponible
            </span>
        </picture>

        <div className="flex flex-1 flex-col p-5">
            <h3 className="min-h-14 text-base font-black leading-7 text-slate-950">
                {titulo}
            </h3>

            <div className="mt-4 flex items-center justify-between gap-3">
                <span className="rounded-2xl bg-slate-100 px-4 py-2 text-lg font-black text-slate-950">
                    {formatearGuaranies(precio)}
                </span>
            </div>

            <button
                type="button"
                onClick={handleClick}
                className="mt-5 rounded-2xl bg-violet-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-600/20 transition hover:-translate-y-0.5 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
            >
                Agregar al carrito
            </button>
        </div>
    </article>
}
