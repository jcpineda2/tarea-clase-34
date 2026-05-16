import { Link as Enlace } from "react-router-dom"

export const Menu = () => {
    return <nav className="flex items-center gap-2 text-sm font-medium text-slate-600">
        <Enlace
            to="/inicio"
            className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-950"
        >
            Inicio
        </Enlace>
        <Enlace
            to="/productos"
            className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-950"
        >
            Productos
        </Enlace>
    </nav>
}
