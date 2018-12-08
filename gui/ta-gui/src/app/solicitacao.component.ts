import {Component,OnInit} from '@angular/core';
import {Solicitacao} from './solicitacao';
import {Pessoa} from './pessoa';



@Component({
    selector:"solicitacao",
    templateUrl:'./solicitacao.component.html',
    styleUrls: ['./solicitacao.component.css']
})
export class SolicitacaoComponent implements OnInit{

    solicitacao:Solicitacao= new Solicitacao();
    pessoa:Pessoa= new Pessoa();
    loged:boolean=false;

    
      

    ngOnInit():void{
        
    }
}