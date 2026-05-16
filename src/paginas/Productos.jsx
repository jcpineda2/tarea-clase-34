import { useEffect, useState } from "react"
import { Base } from "../layout/Base"
import { obtenerProductos } from "../ganchos/useProductos"
import { Tarjeta } from "../componentes/Tarjeta"

export const Productos = () => {

    const [listado, setListado] = useState([])

    useEffect(
        () => {
            obtenerProductos().then(
                r => {
                    setListado(r)
                }
            )
        } //Callback --> funcion a ejecutar
        ,[] //Listado de dependencias --> si algo de lo que esta ahi cambia
        //Se vuelve a ejecutar el callback
    )
    
    return <>
        <Base>
            <section className="mb-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.28em] text-violet-600">Catálogo</p>
                        <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                            Productos destacados
                        </h1>
                        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                            Explora el listado de productos disponibles y agrega los artículos que desees al carrito.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-600">
                        {listado.length} productos cargados
                    </div>
                </div>
            </section>

            <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {
                    listado.map(
                        (producto) => {
                            const {
                                id:clave,
                                name: titulo,
                                prices:{
                                    price:precio
                                },

                            } = producto
                            const imagen = producto.images[0]?.src
                            return <Tarjeta 
                                key={clave}
                                titulo={titulo}
                                precio={precio}
                                imagen={imagen}/>
                        }
                    )
                }
            </section>
        </Base>
    </>
}
