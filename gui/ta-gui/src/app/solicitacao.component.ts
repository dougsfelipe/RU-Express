import {Component,OnInit} from '@angular/core';
import { NgModule } from '@angular/core';
import {Solicitacao} from './solicitacao';
import { SolicitacaoService} from './solicitacao.service';



@Component({
    selector:"solicitacao",
    templateUrl:'./solicitacao.component.html',
    styleUrls: ['./solicitacao.component.css']
})


export class SolicitacaoComponent implements OnInit{    
   

    solicitacao:Solicitacao= new Solicitacao();
    loged:boolean=true;
    solicitacaoes: Solicitacao[];

    
    ngOnInit():void{
        
    }
}