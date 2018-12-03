
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
  cpf:string="";
  senha:string="";
  loged:boolean=false;
  cadastro= new CadastroPessoa();
  login():void{
    var a:boolean= this.cadastro.login(this.cpf,this.senha);
    if (a)this.loged=true;
    else{
      this.cpf="";
      this.senha="";
    }
  }
}
