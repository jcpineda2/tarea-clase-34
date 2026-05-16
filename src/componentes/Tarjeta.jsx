import Swal from "sweetalert2";
import { useStoreCustom } from "../contexto/carrito";
import { Boton } from "./Boton";

const formatearGuaranies = (monto) => {
  return new Intl.NumberFormat("es-PY", {
    style: "currency",
    currency: "PYG",
    maximumFractionDigits: 0,
  }).format(Number(monto) || 0);
};

const limpiarTexto = (texto = "") => {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = texto;

  return textarea.value.replace(/<[^>]*>/g, "").trim();
};

export const Tarjeta = ({
  imagen,
  titulo,
  precio,
  categoria,
  descripcion,
}) => {
  const { inc } = useStoreCustom();

  const tituloLimpio = limpiarTexto(titulo);
  const descripcionLimpia = limpiarTexto(descripcion);

  const handleAgregar = () => {
    inc(precio);

    Swal.fire({
      title: "Producto agregado",
      text: `${tituloLimpio} fue agregado al carrito.`,
      icon: "success",
      timer: 1200,
      showConfirmButton: false,
    });
  };

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative bg-slate-100 p-5">
        {categoria && (
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-700 shadow-sm">
            {categoria}
          </span>
        )}

        <picture className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-white">
          <img
            src={imagen}
            alt={tituloLimpio}
            className="h-full w-full object-contain p-4 transition duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </picture>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-2 min-h-[3.5rem] text-base font-bold leading-7 text-slate-950">
          {tituloLimpio}
        </h3>

        {descripcionLimpia && (
          <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-500">
            {descripcionLimpia}
          </p>
        )}

        <div className="mt-auto pt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Precio
          </p>

          <div className="mt-1 flex items-end justify-between gap-4">
            <span className="text-2xl font-black text-slate-950">
              {formatearGuaranies(precio)}
            </span>
          </div>

          <Boton
            variante="primario"
            className="mt-4 w-full"
            onClick={handleAgregar}
          >
            Agregar al carrito
          </Boton>
        </div>
      </div>
    </article>
  );
};