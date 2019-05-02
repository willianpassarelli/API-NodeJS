# API NojeJS

> API construido com Mongoose + Cors + Express

## Exemplo de uso

API simples feita em MVC, no controller foi criado um CRUD de criação de Produtos, para testes utilizei o Insomnia.

> Para listar os produtos utilizei paginação da biblioteca mongoose-paginate
```
GET:
{{ baseUrl }}/products?page=1
```

> Para exibir um produto pelo ID
```
GET:
{{ baseUrl }}/products/idDoProduto
```

> Para deletar um produto
```
DELETE:
{{ baseUrl }}/products/idDoProduto

```
> Para efetuar update
```
PUT:
{{ baseUrl }}/products/idDoProduto
```
```
{
	"title" : "ReactJsJs"
}
```

> Criar um novo produto:
```
POST:
{{ baseUrl }}/products
```
```
{
	"title" : "ReactJs",
	"description": "Biblioteca para criar",
	"url": "http://github.com/facebook/react"
}
```
## Configuração de desenvolvimento
O caminho configurado de acordo com o arquivo server.js é o  http://localhost:3001/api

No meu caso utilizei o caminho da rota como "api" porem poderá ser alterado no arquivo "server.js" no primeiro parâmentro, conforme abaixo.
```
// Rotas
app.use("/api", require("./src/routes"));
```

Alteração da porta se encontra no arquivo "server.js"
```
// Navegador irá iniciar o localhost na porta 3001
app.listen(3001);
```

## Dependencies

```sh
$ npm install cors
$ npm install express
$ npm install mongoose
$ npm install mongoose-paginate
```

## Configuração MongoDB

Para criação do banco de dados utilizei o site mLab que oferece gratuitamente (com algumas limitações) o MongoDB.
https://mlab.com/

Path: server.js

```
mongoose.connect("mongodb://admin:user@password.mlab.com:21636/namedb", {
  useNewUrlParser: true
});
```

## Rodando a Aplicação

```sh
$ npm start
```
