// https://github.com/lbiazus/acervo-cultural-frontend/blob/master/src/filme/PaginaListagem.jsx
// https://mui.com/material-ui/all-components/

import { useEffect, useState } from "react";
import { buscarAnuncios } from "../services/anuncios";
import { Link } from "react-router-dom";
import { Box, Button, Card, CardActions, CardContent, Divider, Typography } from "@mui/material";


const Home = () => {
    const [anuncios, setAnuncios] = useState([])

    const carregarAnuncios = async () => {
        const anuncio = await buscarAnuncios()
        setAnuncios(anuncio)
    }

    useEffect(() => {
        carregarAnuncios()
    }, [])

    // return (
    //     <>
    //         <h1>Listagem de anúncios</h1>
    //         {anuncios.map(anuncio => (
    //             <div key={anuncio.id}>

    //                 <h2>{anuncio.title} {anuncio.id}</h2>
    //                 <p>{anuncio.body}</p>
    //                 <Link to={`/comentarios/${anuncio.id}`} style={{ color: 'blue' }}>
    //                     Ver Comentários
    //                 </Link>
    //             </div>
    //         ))}

    //     </>
    // );

    // TESTE COM MATERIAL UI ========================================================================================================
    return (

        <Box bgcolor="#eee" sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Box>
                <Typography variant="h3">Anúncios</Typography>
            </Box>
            <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center">
                {anuncios.map(anuncio => (
                    <Card sx={{ maxWidth: 315 }} key={anuncio.id} elevation={4}>

                        <CardContent >
                            <Typography>REF:{anuncio.id}</Typography>
                            <Typography variant="h5" component="div">{anuncio.title}</Typography>
                            <Divider />
                            <Typography variant="body2">{anuncio.body}</Typography>

                            <CardActions>
                                <Link to={`/comentarios/${anuncio.id}`}><Button variant="outlined">Comentários</Button></Link>
                            </CardActions>
                        </CardContent>

                    </Card>

                ))}
            </Box>

        </Box>

    );
}

export default Home;