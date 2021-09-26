# **Desafio Frontend PicPay**

## Descrição

Aplicação de teste para vaga de front-end development no PicPay.

## Resources

- Referência de layout no figma: https://www.figma.com/file/ZHfGiT7o35Rb9uHhp2NYd5/Desafio-Teste-T%C3%A9cnico---Frontend?node-id=0%3A1

## Versions

- Angular CLI: 12.1.4
- Node: 12.20.2
- Angular: 12.1.4

## Rodar o app

- Instale as dependências usando o comando `npm install`
- Na raiz do repositório, rode este comando `npm run start-dev` para iniciar o servidor de desenvolvimento e a API mock (JSON Server) de forma concorrente no mesmo terminal.
- A Aplicação estará disponível em `http://localhost:4200/` e a API em `http://localhost:3000/`.

## Desafios

**1 -** O desafio consiste de uma aplicação (CRUD), que traz uma tabela de itens e que deverá ter paginação. No layout proposto há um botão de filtragem dos itens, isso é um plus que pode contar mais pontos. Esta aplicação consiste de uma tela de login (consultar usuário no fim deste arquivo), para que você tenha acesso à tela de listagem (home). Você poderá utilizar a lib de components que quiser, mas desde que siga o mínimo do layout proposto. Você pode implementar novas features, melhorar o design, tudo que você fizer contará pontos!

**2 -** Há uma API mock (JSON Server) na qual você utilizará para implementar os seus serviços de CRUD. Os dados estão armazenados no arquivo `db.json` na raiz do projeto.

**3 -** Certifique-se de revisar seu código, a modo que fique o mais organizado possível para a avaliação e entendimento dos avaliadores.

**4 -** Utilize a estrutura de pastas que achar mais adequada, bem como padrões, patterns, práticas de segurança, performance etc.

**5 -** O diferencial para este desafio, é o aprimoramento do mesmo, bem como implementação de práticas de segurança, performance e/ou estrutura.

## **API**

Para o seu desafio ser mais interativo, estamos utilizando um mock de API, chamado JSON Server.

Link para mais detalhes: https://github.com/typicode/json-server

**Rotas:** <br />
`GET: /tasks`<br />
`POST: /tasks`<br />
`PUT: /tasks`<br />
`PATCH: /tasks`<br />
`DELETE: /tasks`<br />

`GET: /account` <br />
`POST: /account` <br />
`PUT: /account` <br />
`PATCH: /account` <br />
`DELETE: /account` <br />
<br/>

### **Models**:<br />

**Tasks** - Esta é sua lista com agenda de pagamentos. Aqui você pode cadastrar, editar e excluir um pagamento.<br />
```json
{
  "id": 5,
  "name": "Anthea Pundy",
  "username": "apundy4",
  "title": "Software Engineer III",
  "value": 177.19,
  "date": "2021-01-01T14:09:51Z",
  "image": "https://robohash.org/quiaautomnis.png?size=150x150&set=set1",
  "isPayed": true
}
```

**Account** - você usará este usuário para Login da plataforma<br />
```json
{
  "id": 0,
  "name": "usuario",
  "email": "usuario@gmail.com",
  "password": "usuario"
}
```

<br/>

### **Parametros da API (JSON Server):**

Pagination:<br />
`GET: /tasks?_page=7` <br />
`GET: /tasks?_page=7&_limit=20`
<br />
<br />

**Usuário para utilizar no login:**<br />
```json
{
  "email": "usuario@gmail.com",
  "password": "usuario"
}
```
<br />

### **Links úteis**:

https://www.figma.com/file/ZHfGiT7o35Rb9uHhp2NYd5/Desafio-Teste-T%C3%A9cnico---Frontend?node-id=0%3A1<br />
https://github.com/typicode/json-server<br />
https://github.com/BeeTech-global/bee-stylish/tree/master/commits<br />
https://www.conventionalcommits.org/en/v1.0.0/<br />
