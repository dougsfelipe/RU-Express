
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
  login():void{
    var a:boolean= this.cadastroPessoa.login(this.pessoa.cpf,this.pessoa.senha);
    if (a)this.loged=true;
    else{
      this.pessoa.cpf="";
      this.pessoa.senha="";
    }
  }
  changeWindow():void{
    this.tela=!this.tela;
  }
  cadastrar(p:Pessoa):void{
    if(!this.cadastroPessoa.cadastrar(p)){
      this.usuarioJaCadastrado=true;
    }

  }
  onMove(){
    this.usuarioJaCadastrado=false;
  }
  logout(){
    this.loged=false;
  }
}
