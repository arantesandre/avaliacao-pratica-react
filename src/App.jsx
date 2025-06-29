
// https://github.com/lbiazus/acervo-cultural-frontend/blob/master/src/main.jsx

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import rotas from './routes/rotas'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        {rotas.map((rota) => (

          <Route key={rota.path} path={rota.path} element={rota.element} />

        ))}


      </Routes>
    </BrowserRouter>

  )
}

export default App
