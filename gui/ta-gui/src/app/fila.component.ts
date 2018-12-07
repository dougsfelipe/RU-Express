import {Component,OnInit} from '@angular/core';
import {NgModule} from '@angular/core';
import {FilaData} from "./filaData";

@Component({
    selector:"fila",
    templateUrl:'./fila.component.html',
    styleUrls: ['./fila.component.css']
})

export class FilaComponent implements OnInit{

  filaAtual : FilaData;
  estaNaFila: boolean;

  ngOnInit():void{
    this.filaAtual =  new FilaData(null,0,null);
    this.estaNaFila = false;
  }

}
