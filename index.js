const express = require('express');
const app = express();

var cookie = require('cookie-parser'); app.use(cookie());

//Objeto JSON para adicionar no cookie 
let user1 = {
  nome: "Maria",
  apelido: "Bia",
  idade: "29",
  cidade: "Petrópolis -Rio de Janeiro"
}
let user2 = {
  nome: "Marta",
  apelido: "Martinha",
  idade: "35",
  cidade: "Piranguinho- Minas Gerais"
}
let user3 = {
  nome: "Madalena",
  apelido: "Lena",
  idade: "23",
  cidade: "Campina Grande - São Paulo"
}



//ROTA ADICIONANDO O COOKIE 
/*app.get('/adicionarUsuario', (req, res) => {
  //res.cookie("usuarioDados", usuario); 
  cookie("usuarioDados", usuario, { expire: 400000 + Date.now() }); 
  res.send('Dados do usuário adicionado com sucesso!');
});
*/

app.get('/adicionarUsuario', (req, res) => {
  //res.cookie("usuarioDados", usuario); 
  cookie("usuarioDados1", user1, { expire: 400000 + Date.now() });
  res.send('Dados do usuário adicionado com sucesso!');
});

app.get('/adicionarUsuario', (req, res) => {
  //res.cookie("usuarioDados", usuario); 
  cookie("usuarioDados2", user2, { expire: 400000 + Date.now() });
  res.send('Dados do usuário adicionado com sucesso!');
});

app.get('/adicionarUsuario', (req, res) => {
  //res.cookie("usuarioDados", usuario); 
  cookie("usuarioDados3", user3, { expire: 400000 + Date.now() });
  res.send('Dados do usuário adicionado com sucesso!');
});

//VISUALIZAR DADOS DO COOKIE 
app.get('/usuarios', (req, res) => {
  //Mostra os dados dos cookies 
  //  res.send(req.cookies.usuarioDados);
  res.send(req.cookies);
});

//Excluir/destruir os cookies 
app.get('/logout', (req, res) => {
  res.clearCookie('usuariosDados');
  res.send('Usuário desconectado com sucesso!');
});




//res.cookie(name_of_cookie, value_of_cookie);

app.get('/', (req, res) => {
  res.send('Seja bem Vindo ao teste de cookies.');
});
app.listen(3000);



