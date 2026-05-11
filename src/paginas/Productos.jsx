import { useEffect, useState } from "react"
import { Base } from "../layout/Base"
import { useProductos } from "../ganchos/useProductos"
import { Tarjeta } from "../componentes/Tarjeta"

export const Productos = () => {

    const [listado, setListado] = useState([])

    useEffect(
        () => {
            useProductos().then(
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
            <h1>Productos</h1>
            <section className="grid md:grid-cols-2 lg:grid-cols-4">
                {
                    listado.map(
                        (producto, indice) => {
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