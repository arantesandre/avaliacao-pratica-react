//referencia -> https://github.com/lbiazus/acervo-cultural-frontend/blob/master/src/services/filme.js

import axios from "axios";

export const buscarAnuncios = () => {
    return axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.data)
}

export const buscarComentarioPorId = (postId) => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => response.data)
}