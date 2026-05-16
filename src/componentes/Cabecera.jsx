import Swal from "sweetalert2";
import { useStoreCustom } from "../contexto/carrito";
import { Boton } from "./Boton";
import { Menu } from "./Menu";

const formatearGuaranies = (monto) => {
  return new Intl.NumberFormat("es-PY", {
    style: "currency",
    currency: "PYG",
    maximumFractionDigits: 0,
  }).format(monto);
};

export const Cabecera = () => {
  const { total, cantidad, venderTodo } = useStoreCustom();

  const handlePagar = () => {
    if (cantidad === 0) {
      Swal.fire({
        title: "Carrito vacío",
        text: "Agrega productos antes de realizar el pago.",
        icon: "info",
        confirmButtonText: "Entendido",
      });

      return;
    }

    Swal.fire({
      title: "Gracias por su compra",
      html: `Se ha llevado ${cantidad} artículo(s) por ${formatearGuaranies(total)}.`,
      icon: "success",
      confirmButtonText: "Aceptar",
    }).then(() => {
      venderTodo();
    });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
              Tienda online
            </p>
            <h1 className="text-xl font-black tracking-tight text-slate-950">
              Proyecto Tienda Online
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:gap-6">
          <Menu />

          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-2">
            <div className="px-2">
              <p className="text-xs text-slate-500">Carrito</p>
              <p className="text-sm font-bold text-slate-900">
                {cantidad} producto(s) · {formatearGuaranies(total)}
              </p>
            </div>

            <Boton variante="acento" tamanio="sm" onClick={handlePagar}>
              Pagar
            </Boton>
          </div>
        </div>
      </div>
    </header>
  );
};