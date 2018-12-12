import express = require('express');
import bodyParser = require("body-parser");

import {Pessoa} from '../../gui/ta-gui/src/app/pessoa';
import {CadastroPessoa} from './cadastroPessoa';
import { CadastroAlimentos } from './cadastroAlimentos';
import { Alimento } from '../../gui/ta-gui/src/app/cardapio/alimento';
import {FilaServerMonitor} from "./fila.server.monitor";

var app = express();

var filaMonitor : FilaServerMonitor = new FilaServerMonitor();

var pessoas: CadastroPessoa = new CadastroPessoa();
let alimentos:CadastroAlimentos[] = [];
let dia = 'seg';
alimentos['seg'] = new CadastroAlimentos();
alimentos['ter'] = new CadastroAlimentos();
alimentos['qua'] = new CadastroAlimentos();
alimentos['qui'] = new CadastroAlimentos();
alimentos['sex'] = new CadastroAlimentos();
alimentos['sab'] = new CadastroAlimentos();
alimentos['dom'] = new CadastroAlimentos();

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

//os alimentos
app.get('/alimentos', function (req, res) {
  let aux:Alimento[][] = [];
  for(let x in alimentos){
    aux[x] = alimentos[x].getAlimentos();
  }
  let enviar = {'seg': aux['seg'], 'ter': aux['ter'], 'qua': aux['qua'], 'qui': aux['qui'], 'sex': aux['sex'], 'sab': aux['sab'], 'dom': aux['dom']};
  res.send(JSON.stringify(enviar));
})

//faz o cadastro dos alimentos
app.post('/alimentos', function (req: express.Request, res: express.Response) {
  dia=req.body['dia'];//necessario receber como parametro
  var alimento: Alimento = <Alimento> req.body['alimento']; //verificar se é mesmo alimento!
  alimento = alimentos[dia].cadastrar(alimento);
  if (alimento) {
    res.send({"success": "Cadastro bem sucedido"});
  } else {
    res.send({"failure": "O cadastro não pode ser efetivado"});
  }
})

app.delete('/alimentos',function(req: express.Request, res: express.Response) {
  /*
  let dia=req.body['dia'];//necessario receber como parametro
  let alimento: Alimento = <Alimento> req.body['alimento']; //verificar se é mesmo alimento!
  console.log(dia,alimento);
  let removeu = alimentos[dia].remover(alimento);
  */
  if (true) {
    res.send({"success": "remoção bem sucedida"});
  } else {
    res.send({"failure": "A remoção não pode ser efetivado"});
  }
})
app.listen(3000, function () {
  console.log('Servidor na porta 3000!')
});

//PARTE DESTINADA AO MONITORAMENTO DE FILA
app.get('/monitoramentoFila', function (req, res) {
    res.send(JSON.stringify(filaMonitor.getDataQueue()));
});


export { app }