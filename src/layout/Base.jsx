import { Cabecera } from "../componentes/Cabecera"
import { Pie } from "../componentes/Pie"

export const Base = ({children}) =>{
    return <>
        <Cabecera/>
            {children}
        <Pie/>
    </>
}