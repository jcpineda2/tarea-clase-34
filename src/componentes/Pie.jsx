export const Pie = () => {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-slate-500 sm:px-6 lg:px-8">
        <p className="font-semibold text-slate-700">
          Proyecto Tienda Online
        </p>

        <p>
          © {anioActual} — Catálogo de productos
        </p>
      </div>
    </footer>
  );
};