import { NavLink as Enlace } from "react-router-dom";

const enlaces = [
  {
    ruta: "/",
    texto: "Inicio",
    exacto: true,
  },
  {
    ruta: "/productos",
    texto: "Productos",
    exacto: true,
  },
];

export const Menu = () => {
  return (
    <nav className="flex items-center gap-1">
      {enlaces.map((enlace) => (
        <Enlace
          key={enlace.ruta}
          exact={enlace.exacto}
          to={enlace.ruta}
          className="rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
          activeClassName="bg-slate-900 text-white hover:bg-slate-900 hover:text-white"
        >
          {enlace.texto}
        </Enlace>
      ))}
    </nav>
  );
};