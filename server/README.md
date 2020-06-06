<h1 align="center" > 
<img src="https://raw.githubusercontent.com/vitorpedeo/Ecoleta/7331a3b21f3b32e0dd6a098406ba73ca5f59e823/web/src/assets/logo.svg"/> 
</h1>

<p align="center" > 
<img src="https://img.shields.io/github/languages/count/vitorpedeo/Ecoleta" /> 
<img src="https://img.shields.io/github/repo-size/vitorpedeo/Ecoleta" /> 
<img src="https://img.shields.io/github/stars/vitorpedeo/Ecoleta?style=social" /> 
</p>

<p align="center" >
Back-end da aplicação Ecoleta, feito com base no padrão REST.
</p>

<p align="center" >
<img src="https://i.imgur.com/4Vryy4y.png" />
</p>

---

<h2>:zap:Bibliotecas utilizadas</h2>

- [Express](https://www.npmjs.com/package/express) - Framework minimalista que lida com a web.

- [Knex](https://www.npmjs.com/package/knex) - Query Builder que facilita as interações com o banco de dados.

- [Multer](https://www.npmjs.com/package/multer) - Tratamento do upload de imagens.

- [Celebrate](https://www.npmjs.com/package/celebrate) - Validação dos campos dos formulários da aplicação.

- [Cors](https://www.npmjs.com/package/cors) - Lib que configura o CORS na aplicação.

- [SQLite3](https://www.npmjs.com/package/sqlite3) - Integração do NodeJS com SQLite3.

---

<h2>:arrow_right:Rotas da aplicação</h2>

- _/items_ - Retorna os itens de coleta cadastrados no banco.

- _/points_ - Retorna os pontos de coleta cadastrados, utilizando os filtros dos querys params:

  - uf : UF a ser pesquisada;
  - city : cidade a ser pesquisada;
  - items : itens de coleta desejados.

- _/points/:id_ -> Retorna um ponto de coleta específico, de acordo com o id informado.

---

<h2>:hammer:Instalação</h2>

Primeiramente, é necessário ter instalado o [yarn](https://yarnpkg.com/) na sua máquina.

Clone o repositório e vá para a pasta _server_

```shell
git clone https://github.com/vitorpedeo/Ecoleta.git
```

```shell
cd server
```

Instale todas as dependências

```shell
yarn add
```

Rode as _migrations_ e as _seeds_

```shell
yarn knex:migrate
```

```shell
yarn knex:seed
```

Inicie o servidor

```shell
yarn dev
```
