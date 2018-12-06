
import { Component } from '@angular/core';
import {NgModule} from '@angular/core';

import {Pessoa} from './pessoa';
import {CadastroPessoa} from './cadastroPessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ta-gui';
  pessoa:Pessoa={nome:"",cpf:"",senha:"",telefone:"",adm:false,funcionario:false,email:""};
  loged:boolean=false;// boleado se fala se o usuaria ta log
  cadastroPessoa= new CadastroPessoa();
  tela:boolean=false;//boleano para mudar entre a tela de login(true) e de cadastro(false)
  usuarioJaCadastrado:boolean=false;
  cadastroEfetivado:boolean=false;
  pessoaLogada:Pessoa=new Pessoa;
  loginInvalido:boolean=false;
  login():void{
    var a:boolean= this.cadastroPessoa.login(this.pessoa.cpf,this.pessoa.senha);
    if (a){
      this.pessoaLogada = this.cadastroPessoa.getPessoa(this.pessoa.cpf);
      console.log(this.pessoaLogada);
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
  cadastrar(p:Pessoa):void{
    if(!this.cadastroPessoa.cadastrar(p)){
      this.usuarioJaCadastrado=true;//ou qualquer outro erro de login
    }else{
      this.pessoa.cpf="";
      this.pessoa.senha="";
      this.pessoa.nome="";
      this.pessoa.telefone="";
      this.pessoa.email="";
      this.cadastroEfetivado=true;
    }
      
  }
  onMove(){
    this.usuarioJaCadastrado=false;
    this.cadastroEfetivado=false;
    this.loginInvalido=false;
  }
  logout(){
    this.loged=false;
  }
}
