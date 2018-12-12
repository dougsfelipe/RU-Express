import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Solicitacao } from './solicitacao';
import { Entregador } from './Entregador';
import { CadastroEntregador } from './cadastroEntregador';




@Component({
  selector: "solicitacao",
  templateUrl: './solicitacao.component.html',
  styleUrls: ['./solicitacao.component.css']
})


export class SolicitacaoComponent implements OnInit {


  title = 'RU Express';
  loged: boolean = false;
  telaSolicitacao: boolean = true;
  telaCadastro: boolean = true;
  erroCadastro: boolean = false;
  cadastroEfetivado: boolean = false;

  loginInvalido: boolean = false;

  Entregador: Entregador = new Entregador();
  entregadores: Entregador[];
  solicitacao: Solicitacao = new Solicitacao();

  solicitacaoes: Solicitacao[];
  constructor(private cadastroEntregador: CadastroEntregador) { }

  async cadastrar(e: Entregador) {

    if (this.ConferirVazio(e)) {

      let b = await this.cadastroEntregador.cadastrar(e);
      this.entregadores.push(e);
      this.Entregador.clean();
      this.cadastroEfetivado = true;

      this.erroCadastro = true;
      

    }
  }

  ConferirVazio(e: Entregador):boolean{
    if(e.cpf != null && e.email != null && e.nome != null && e.telefone != null){
      return true;
  }else{
    return false;
  }
  }

  TelaSolicitacao():void{
    this.telaSolicitacao=!this.telaSolicitacao;
    
  }
  TelaCadastro():void{
    this.telaCadastro = !this.telaCadastro;
  }


  onMove() {
    this.erroCadastro = false;
    this.cadastroEfetivado = false;
    this.loginInvalido = false;
  }


 async ngOnInit(){
    this.cadastroEntregador.getEntregadores().then(as=>this.entregadores=as).catch();
  }
}