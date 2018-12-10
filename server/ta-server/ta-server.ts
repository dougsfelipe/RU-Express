import express = require('express');
import bodyParser = require("body-parser");

import {Pessoa} from '../../gui/ta-gui/src/app/pessoa';
import {CadastroPessoa} from './cadastroPessoa';
import { CadastroAlimentos } from './cadastroAlimentos';
import { Alimento } from '../../gui/ta-gui/src/app/alimento';

var app = express();

var pessoas: CadastroPessoa = new CadastroPessoa();
var alimentos: CadastroAlimentos = new CadastroAlimentos();
var allowCrossDomain = function(req: any, res: any, next: any) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}
app.use(allowCrossDomain);
app.use(bodyParser.json());

app.get('/pessoas', function (req, res) {
  res.send(JSON.stringify(pessoas.getPessoas()));
})

app.post('/pessoas', function (req: express.Request, res: express.Response) {
  var pessoa: Pessoa = <Pessoa> req.body; //verificar se é mesmo Pessoa!
  pessoa = pessoas.cadastrar(pessoa);
  if (pessoa) {
    res.send({"success": "Cadastro bem sucedido"});
  } else {
    res.send({"failure": "O cadastro não pode ser efetivado"});
  }
})

//os alimentos
app.get('/alimentos', function (req, res) {
  res.send(JSON.stringify(alimentos.getAlimentos()));
})
//faz o cadastro dos alimentos
app.post('/alimentos', function (req: express.Request, res: express.Response) {
  var alimento: Alimento = <Alimento> req.body; //verificar se é mesmo alimento!
  alimento = alimentos.cadastrar(alimento);
  if (alimento) {
    res.send({"success": "Cadastro bem sucedido"});
  } else {
    res.send({"failure": "O cadastro não pode ser efetivado"});
  }
})

app.listen(3000, function () {
  console.log('Servidor na porta 3000!')
})

export { app }