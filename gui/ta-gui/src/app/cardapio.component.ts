import {Component,OnInit} from '@angular/core';
import {NgModule} from '@angular/core';
import { CardapioDia } from './cardapioDia';
@Component({
    selector:"cardapio",
    templateUrl:'./cardapio.component.html'
})
export class CardapioComponent implements OnInit{
    cardapios:CardapioDia[] = [];
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
}