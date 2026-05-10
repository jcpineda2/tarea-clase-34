import { useState } from 'react'
import './App.css'
import { Inicio } from './paginas/Inicio'
import { Productos } from './paginas/Productos'
import { BrowserRouter as Enrutador, Switch, Route as Ruta, Link as Enlace } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Enrutador>
      <Switch>
        <Ruta exact path={["/", "/inicio", "/home",]}>
          <Inicio />
        </Ruta>
        <Ruta exact path={"/productos"}>
          <Productos />
        </Ruta>
        <Ruta exact path={"*"}>
          <h1>Ruta no existente</h1>
        </Ruta> 
      </Switch>
    </Enrutador>
  )
}

export default App
