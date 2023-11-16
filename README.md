# Sobre o projeto

Esse, projeto foi desenvolvido durante o curso de Angular da <a href="https://www.alura.com.br/" target="_blank">Alura</a>.

## Descrição:

A empresa <strong>`Jornada Milhas`</strong>, é uma plataforma de venda de passagens aéreas, onde o desafio é desenvolver o layout fornecido pela a equipe de design da empresa, junto com a `API` que foi fornecida pelo time de Back-end.<br />

<strong>`1º Etapa:`</strong> Foi conhecer a componentização do `Angular`, criando componentes reutilizáveis e organizando a aplicação, e utilizamos o `Angular Material` para criar interfaces modernas, com sua ampla variedade de componentes disponíveis.<br /> <strong>`2º Etapa:`</strong> Foi focar em controlar e validar formulários no Angular utilizando `serviços`, `APIs` e utilizar técnicas avançadas do Angular, como o `providedIn` e o `cache` com `shareReplay`.<br />
<strong>`3º Etapa:`</strong> Implementamos as telas de login e cadastro de usuarios, para esse processo utilizamos a biblioteca `JWT` (Json Web Token) para a autenticação de usuários e como proteger as rotas com a `Guarda de Rotas Funcional`.
<br />
<strong>`4º Etapa:`</strong> Em seguida foi implementado métodos para trabalhar com dados de uma `API externa` para buscar passagens aéreas, de forma eficiente, permitindo que aplicação sejam confiável, interativa e repletas de informações relevantes. Trabalhando com programação reativa utilizando `RxJS`.
<br />
<strong>`5º Etapa:`</strong> Nessa última parte da formação, foi focada em como aplicar `modularização` e boas práticas no angular. Onde aprendendo a criar módulos para organizar aplicação de forma lógica e reutilizável, usamos conceito de `Lazy Loading`, uma técnica que melhora o desempenho da aplicação ao carregar módulos sob demanda e como usar `interceptor` para manipular globalmente as requisições HTTP, adicionando funcionalidades como tratamento de erros.

## Tecnologias usadas no projeto:

- <strong>`Html`</strong>, <strong>`Css`</strong>, <strong>`TypeScript`</strong>, <strong>`Angular`</strong>

<img src="./src/assets/imagens/jornada-milhas.png" alt="imagens">

## `Instruções para rodar o projeto na sua maquina:`

Abra seu terminal do Desktop e execute os passos abaixo:

- Clone o repositório com a chave SSH.
  - `git clone git@github.com:andrelucca99/jornada-milhas.git`
- Entre na pasta do repositório que você acabou de clonar:
  - `cd jornada-milhas`
- Instale as dependências do projeto:

  - `npm install`

- Abrar em um editor de texto de sua preferência e execute os comandos a seguir, um em cada terminal:

  - <strong>Para rodar o Front-end da aplicação: <br /></strong> `ng serve -open`

  - <strong>Para subir à API da aplicação :</strong>
    <br />
    - Em outro terminal acesse a pasta:
    <br />
    <strong>`cd api-jornada-milhas`</strong> <br />
    - Rode esse comando para installar às dependências:
    <br />
    <strong>`npm install`</strong>
    <br />
    - Execute o comando para subir a API:
    <br />
    <strong>`npm start`</strong>
