import express = require('express');
import bodyParser = require("body-parser");

import {Pessoa} from '../../gui/ta-gui/src/app/pessoa';
import {Entregador} from '../../gui/ta-gui/src/app/Entregador';
import {CadastroPessoa} from './cadastroPessoa';
import {CadastroEntregador} from './cadastroEntregador';
import {Solicitacao} from '../../gui/ta-gui/src/app/solicitacao';
import { CadastroSolicitacao } from './CadastroSolicitacao';
import {FilaServerMonitor} from "./fila.server.monitor";


var app = express();

var filaMonitor : FilaServerMonitor = new FilaServerMonitor();

var pessoas: CadastroPessoa = new CadastroPessoa();
var entregadores: CadastroEntregador = new CadastroEntregador();
var solicitacaos: CadastroSolicitacao = new CadastroSolicitacao();


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
});



app.post('/pessoas', function (req: express.Request, res: express.Response) {
  var pessoa: Pessoa = <Pessoa> req.body; //verificar se é mesmo Pessoa!
  pessoa = pessoas.cadastrar(pessoa);
  if (pessoa) {
    res.send({"success": "Cadastro bem sucedido"});
  } else {
    res.send({"failure": "O cadastro não pode ser efetivado"});
  }
});

//Cadastro de entregador

app.post('/entregador', function (req: express.Request, res: express.Response) {
  var entregador: Entregador = <Entregador> req.body; //verificar se é mesmo Pessoa!
  entregador = entregadores.cadastrar(entregador);
  if (entregador) {
    res.send({"success": "Cadastro bem sucedido"});
  } else {
    res.send({"failure": "O cadastro não pode ser efetivado"});
  }
})

app.post('/solicitacoes', function (req: express.Request, res: express.Response) {
  var solicitacao: Solicitacao = <Solicitacao> req.body; //verificar se é mesmo Pessoa!
  solicitacao = solicitacaos.solicitar(solicitacao);
  if (solicitacao) {
    res.send({"success": "Cadastro bem sucedido"});
  } else {
    res.send({"failure": "O cadastro não pode ser efetivado"});
  }
})

app.get('/entregador', function (req, res) {
  res.send(JSON.stringify(entregadores.getEntregadores()));
})

app.get('/solicitacoes', function (req, res) {
  res.send(JSON.stringify(solicitacaos.getSolicitacoes()));
})

app.listen(3000, function () {
  console.log('Servidor na porta 3000!')
});

//PARTE DESTINADA AO MONITORAMENTO DE FILA
app.get('/monitoramentoFila', function (req, res) {
    res.send(JSON.stringify(filaMonitor.getDataQueue()));
});


export { app }