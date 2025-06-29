// https://github.com/lbiazus/acervo-cultural-frontend/blob/master/src/filme/PaginaCadastro.jsx
// https://reactrouter.com/api/hooks/useParams

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { buscarComentarioPorId } from "../services/anuncios";
import { Box, Button, Card, Divider, Typography } from "@mui/material";

const Comentarios = () => {
    const [comentarios, setComentarios] = useState([])
    const { id } = useParams()

    const carregarComentarios = async () => {
        const comentario = await buscarComentarioPorId(id)
        setComentarios(comentario);
    };

    useEffect(() => {
        carregarComentarios()
    }, [id]);

    // return (
    //     <div>
    //         <h1>Código do anúncio: {id}</h1>

    //         <Link to="/"> <button>home</button> </Link>

    //         {comentarios.map(comentario => (
    //             <div key={comentario.id} >
    //                 <h3>{comentario.name}</h3>
    //                 <p><strong>{comentario.email}</strong></p>
    //                 <p>{comentario.body}</p>
    //             </div>
    //         ))}
    //     </div>
    // );

    // TESTE COM MATERIAL UI ========================================================================================================

    return (
        <Box bgcolor="#eee" height="100vh">
            <Typography variant="h3">Anúncio REF: {id}</Typography>
            <Typography variant="h6">Comentários:</Typography>
            {comentarios.map(comentario => (
                <Card key={comentario.id} bgcolor="#fff" elevation={4} sx={{ padding: "1rem", margin: "0.5rem 0 1rem 0" }}>
                    <Typography variant="h6" fontWeight="bold">{comentario.name}</Typography>
                    <Typography color="primary">{comentario.email}</Typography>
                    <Typography>{comentario.body}</Typography>
                    {/* <Divider /> */}
                </Card>
            ))}

            <Link to="/"> <Button variant="contained">Voltar</Button> </Link>

        </Box>
    );
};

export default Comentarios;
