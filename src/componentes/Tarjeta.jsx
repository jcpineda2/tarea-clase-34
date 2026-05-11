import { useState } from "react"
import { useStore } from "zustand"
import { useStoreCustom } from "../contexto/carrito"

export const Tarjeta = ({ imagen, titulo, precio }) => {

    const [precioProducto, setPrecioProducto] = useState(0)

    const { inc } = useStoreCustom()

    const handleClick = () => {
        setPrecioProducto(precio)
        inc(precioProducto)
    }

    return <article>
        <picture>
            <img src={imagen} alt={titulo} />
        </picture>
        <h3>{titulo}</h3>
        <div>
            <span>{precio}</span>
        </div>
        <button onClick={handleClick}>Agregar al carrito</button>
    </article>
}