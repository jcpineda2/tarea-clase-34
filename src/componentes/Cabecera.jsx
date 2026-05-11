import { useStoreCustom } from "../contexto/carrito"
import Swal from 'sweetalert2';

export const Cabecera = () => {
    
    const {total, cantidad} = useStoreCustom()
    
    const handlePagar = () => {
        Swal.fire({
            title:"Gracias por su compra",
            text: `Se ha llevado unos ${cantidad} articulos por Gs. ${total}`,
            icon: "success"
        }).then(
            (resultado) => {
                 
            }
        )
    }
    
    return <header>
        Soy la cabecera | monto a pagar: {total} | cantidad de productos:{cantidad}
        <hr />
        <button onClick={handlePagar}>Pagar</button>
        <hr />
    </header>
}