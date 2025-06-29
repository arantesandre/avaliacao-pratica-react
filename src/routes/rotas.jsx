// referencias
// https://reactrouter.com/start/declarative/routing
// https://github.com/lbiazus/acervo-cultural-frontend/blob/master/src/rotas/rotas-modo-declarativo.jsx

import Comentarios from "../pages/Comentarios";
import Home from "../pages/Home";


const rotas = [

    {
        path: "/",
        element: <Home />
    },

    {
        path: "/comentarios/:id",
        element: <Comentarios />
    },

]

export default rotas;
