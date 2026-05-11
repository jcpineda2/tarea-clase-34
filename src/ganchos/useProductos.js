export const useProductos = async ()=>{
    const peticion = await fetch("http://localhost:5173/src/datos/productos.json")
    const productos = await peticion.json()
    
    return productos
}