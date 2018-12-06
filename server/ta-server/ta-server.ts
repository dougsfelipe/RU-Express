import express = require('express');
import bodyParser = require("body-parser");

import {Pessoa} from '../../gui/ta-gui/src/app/pessoa';
import {CadastroPessoa} from './cadastroPessoa';

var app = express();

var pessoas: CadastroPessoa = new CadastroPessoa();

app.use(bodyParser.json());

app.get('/pessoas', function (req, res) {
  var pessoa: string = JSON.stringify(pessoas.getPessoas());
  res.send(pessoa);
})

app.post('/pessoas', function (req: express.Request, res: express.Response) {
  var pessoa: Pessoa = <Pessoa> req.body; //verificar se é mesmo Pessoa!
  pessoa = pessoas.cadastrar(pessoa);
  if (pessoa) {
    res.send({"successo": "Cadastro bem sucedido"});
  } else {
    res.send({"falha": "O cadastro não pode ser efetivado"});
  }
})

app.listen(3000, function () {
  console.log('Servidor na porta 3000!')
})

export { app }