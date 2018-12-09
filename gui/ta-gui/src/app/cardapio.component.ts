import {Component,OnInit} from '@angular/core';
import {NgModule} from '@angular/core';
import { CardapioDia } from './cardapioDia';
import { Alimento } from './alimento';
@Component({
    selector:"cardapio",
    templateUrl:'./cardapio.component.html'
})
export class CardapioComponent implements OnInit{
    cardapios:CardapioDia[] = [];
    alimentoCaR:Alimento = new Alimento();
    erroCadastroAlimento:boolean = false;
    erroSelectAlimento:boolean = false;
    diaCard:string = '';
    constructor(){
        this.cardapios[0] = new CardapioDia("seg");
        this.cardapios[1] = new CardapioDia("ter");
        this.cardapios[2] = new CardapioDia("qua");
        this.cardapios[3] = new CardapioDia("qui");
        this.cardapios[4] = new CardapioDia("sex");
        this.cardapios[5] = new CardapioDia("sab");
        this.cardapios[6] = new CardapioDia("dom");
    }
    ngOnInit(){
        
    }
    alimentosATT(){
        for(var value of this.cardapios){
            value.alimentosAtt();
        }
    }
    onMoveCardapio(){
        this.erroCadastroAlimento=false;
        this.erroSelectAlimento = false;
    }
    
  public cadastrarAlimento(alimento:Alimento){//cadastro de alimentos
    if(this.verificarNVazioAlimento(alimento)){
      this.erroCadastroAlimento = false;
    }
    else{
      this.erroCadastroAlimento = true;
    }
  }
  public selectAlimento(alimento:Alimento){//função que lida com o select dos alimentos
    if(this.verificarNVazioAlimento(alimento)){
      this.erroSelectAlimento = false;
    }else{
      this.erroSelectAlimento = true;
    }
  }
  public verificarNVazioAlimento(alimento:Alimento):boolean{
    if(!alimento.nome || !alimento.tipo || !this.diaCard)
      return false;
    return true;
  }
}