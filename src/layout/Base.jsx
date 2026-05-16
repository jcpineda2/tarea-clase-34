import { Cabecera } from "../componentes/Cabecera";
import { Pie } from "../componentes/Pie";

export const Base = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Cabecera />

      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>

      <Pie />
    </div>
  );
};