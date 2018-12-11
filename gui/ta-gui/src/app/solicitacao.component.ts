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
  loged: boolean = false;// boleado se fala se o usuaria ta log
  tela: boolean = false;//boleano para mudar entre a tela de login(true) e de cadastro(false)
  erroCadastro: boolean = false;
  cadastroEfetivado: boolean = false;

  loginInvalido: boolean = false;

  Entregador: Entregador = new Entregador();
  entregadores: Entregador[];
  solicitacao: Solicitacao = new Solicitacao();

  solicitacaoes: Solicitacao[];
  constructor(private cadastroEntregador: CadastroEntregador) { }

  async cadastrar(e: Entregador) {

    if (e.cpf != null || e.email != null || e.nome != null || e.telefone != null) {

      let b = await this.cadastroEntregador.cadastrar(e);

      this.Entregador.clean();
      this.cadastroEfetivado = true;

      this.erroCadastro = true;


    }
  }

  

  onMove() {
    this.erroCadastro = false;
    this.cadastroEfetivado = false;
    this.loginInvalido = false;
  }


  ngOnInit(): void {

  }
}