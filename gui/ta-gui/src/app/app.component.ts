
import { Component } from '@angular/core';
import {NgModule} from '@angular/core';

import {Pessoa} from './pessoa';
import {CadastroPessoa} from './cadastroPessoa';
import { CardapioComponent } from './cardapio.component';
import { Alimento } from './alimento';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ta-gui';
  pessoa:Pessoa= new Pessoa();
  loged:boolean=false;// boleado se fala se o usuaria ta log
  tela:boolean=false;//boleano para mudar entre a tela de login(true) e de cadastro(false)
  erroCadastro:boolean=false;
  cadastroEfetivado:boolean=false;
  pessoaLogada:Pessoa=new Pessoa;
  loginInvalido:boolean=false;
  cardapio:CardapioComponent = new CardapioComponent();
  
  

  
  constructor(private cadastroPessoa: CadastroPessoa){
  }

  async login(){
    var a:boolean= await this.cadastroPessoa.login(this.pessoa.cpf,this.pessoa.senha);
    if (a){
      let agora = this;
      this.cadastroPessoa.getPessoa(this.pessoa.cpf).then(res =>{agora.pessoaLogada=res}).catch();
      this.loged=true;
    }
    else{
      this.loginInvalido=true;
      this.pessoa.cpf="";
      this.pessoa.senha="";
    }
  }
  changeWindow():void{
    this.tela=!this.tela;
  }
  async cadastrar(p:Pessoa){
    let a = this.verificarNVazio(p)
    if(a){
      let b = await this.cadastroPessoa.cadastrar(p);
      if(!b){
        this.erroCadastro=true;//erro de cadastro
      }else{
        this.pessoa.clean();
        this.cadastroEfetivado=true;
      }
    }else{
      this.erroCadastro=true;
    }
  }
  onMove(){
    this.erroCadastro=false;
    this.cadastroEfetivado=false;
    this.loginInvalido=false;
  }
  logout(){
    this.loged=false;
  }
  verificarNVazio(pessoa:Pessoa): boolean{//verifica se as informações necessárias das pessoa não estão vazias
    if(!pessoa.nome || !pessoa.cpf || !pessoa.email || !pessoa.senha || !pessoa.telefone){
        return false;
        
    }
    return true;
}


}
