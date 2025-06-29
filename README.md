
# Avaliação Prática de React

Uma empresa de anúncios precisa de uma aplicação para listar os anúncios e que
permita a visualização dos comentários inseridos nos anúncios. Você foi contratado
para implementar o Frontend dessa aplicação.

Os requisitos para a aplicação são os seguintes:
1. Uma listagem de Anúncios que apresente para o usuário os principais campos:

    - 1. **Título** (title)
    - 2. **Descrição** (body)

2. A listagem deve permitir que o usuário visualize os comentários de cada anúncio.

    - 1. Os campos do anúncio são os seguintes:

        - 1. **Nome** (name)
        - 2. **E-mail** (e-mail)
        - 3. **Comentário** (body)

## Regras da aplicação

- O Backend da aplicação já foi desenvolvido e possui os seguintes endpoints:

    - Anúncios: https://jsonplaceholder.typicode.com/posts

    - Comentários: https://jsonplaceholder.typicode.com/posts/{postId}/comments

- O layout da aplicação precisa ser dividido em duas telas:

    - uma tela para a listagem dos anúncios, que permita ao usuário acessar os comentários

    - uma tela para apresentar os comentários de um anúncio selecionado na listagem

- Para a navegação entre as duas telas aplique o conceito de rotas.
