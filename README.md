#  🚀 Bootcamp GoStack - Desafio 05
[Desafio 05](https://github.com/Rocketseat/bootcamp-gostack-desafio-05/blob/master/README.md) do Bootcamp GoStack 2019 da Rocketseat

## Descrição
Adicionar funcionalidades extras ao projeto desenvolvido durante o [módulo 05](https://github.com/catherinekorres/gostack-modulo05/) do bootcamp.

## Objetivos
Funcionalidades que devem ser criadas para a conclusão do desafio.

  - [x] `Captar erro de input`: Adicionar um `try/catch` na função `handleSubmit` dentro do componente `Main`. O intuito é que caso um repositório não seja encontrado na API do Github, uma borda vermelha apareça por volta do input do form.

  - [ ] `Repositório duplicado`: Antes de fazer a chamada à API do Github na função `handleSubmit` dentro do componente `Main`, verificar se o repositório já existe no estado de `repositories`. Caso exista, deve ocorrer um erro direcionado ao `catch` do `try/catch` criado na funcionalidade anterior.

  - [ ] `Filtro de estado de Issues`:  Adicione um filtro de estado na listagem de Issues de um repositório. O estado representa se a issue está em aberto, fechada ou uma opção para exibir todas.


  - [ ] `Paginação de Issues`:  Adicione paginação nas issues listadas em um repositório. A API do Github lista no máximo 30 issues por página e o controle do número da página atual deve ser feito por um parâmetro no endereço da requisição. Adicionar também um botão de próxima página e página anterior. O botão de página anterior deve ficar desativado na primeira página.
