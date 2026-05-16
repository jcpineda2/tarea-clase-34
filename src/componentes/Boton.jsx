export const Boton = ({
  children,
  type = "button",
  variante = "primario",
  tamanio = "md",
  className = "",
  ...props
}) => {
  const estilosBase =
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition duration-200 focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:opacity-60";

  const variantes = {
    primario:
      "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-300",
    secundario:
      "bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 focus:ring-slate-200",
    acento:
      "bg-amber-500 text-slate-950 hover:bg-amber-400 focus:ring-amber-200",
    peligro:
      "bg-red-600 text-white hover:bg-red-500 focus:ring-red-200",
    fantasma:
      "bg-transparent text-slate-700 hover:bg-slate-100 focus:ring-slate-200",
  };

  const tamanios = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2.5 text-sm",
    lg: "px-5 py-3 text-base",
  };

  return (
    <button
      type={type}
      className={`${estilosBase} ${variantes[variante]} ${tamanios[tamanio]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};