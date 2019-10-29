#  🚀 Bootcamp GoStack - Desafio 05
[Desafio 05](https://github.com/Rocketseat/bootcamp-gostack-desafio-05/blob/master/README.md) do Bootcamp GoStack 2019 da Rocketseat

![](https://github.com/catherinekorres/gostack-desafio05/blob/master/public/sneakpeek.gif)

## Descrição
A aplicação salva os seus repositórios favoritos a partir do seu input de forma local (localStorage), e os lista para que se possa ter acesso aos seus detalhes. 

Nos detalhes de cada repositório é apresentada a foto do autor, nome e descrição do repositório, bem como suas issues. 
Na listagem das issues é possível filtrar por três estados: All, Open, Closed. Também existe uma paginação para navegar nas issues.

A aplicação foi construída em ReactJS, e para os dados consome a API aberta do Github, obtendo acesso às informações dos repositórios.

## Objetivos
Esse desafio do bootcamp consiste em adicionar funcionalidades extras ao projeto já desenvolvido durante o [módulo 05](https://github.com/catherinekorres/gostack-modulo05/) do bootcamp. 

Seguem abaixo as funcionalidades extras:

  - [x] `Captar erro de input`: Adicionar um `try/catch` na função `handleSubmit` dentro do componente `Main`. O intuito é que caso um repositório não seja encontrado na API do Github, uma borda vermelha apareça por volta do input do form.

  - [x] `Repositório duplicado`: Antes de fazer a chamada à API do Github na função `handleSubmit` dentro do componente `Main`, verificar se o repositório já existe no estado de `repositories`. Caso exista, deve ocorrer um erro direcionado ao `catch` do `try/catch` criado na funcionalidade anterior.

  - [x] `Filtro de estado de Issues`:  Adicione um filtro de estado na listagem de Issues de um repositório. O estado representa se a issue está em aberto, fechada ou uma opção para exibir todas.

  - [x] `Paginação de Issues`:  Adicione paginação nas issues listadas em um repositório. A API do Github lista no máximo 30 issues por página e o controle do número da página atual deve ser feito por um parâmetro no endereço da requisição. Adicionar apenas um botão de próxima página e um página anterior. O botão de página anterior deve ficar desativado na primeira página.
