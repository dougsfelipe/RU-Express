import {Component,OnInit} from '@angular/core';
import {NgModule} from '@angular/core';
import {FilaData} from "./fila.data";
import {FilaCommunicator} from "./fila.communicator";
import {Observable, interval, Subject} from "rxjs";
import {map, takeUntil} from "rxjs/operators";
import {FilaCalculator} from "./fila.time.calculator";

@Component({
  selector:"fila",
  templateUrl:'./fila.component.html',
  styleUrls: ['./fila.component.css']
})

export class FilaComponent implements OnInit{

  private filaAtual : FilaData;
  private calculadora : FilaCalculator;

  estaNaFila: boolean;
  tempoDeEspera : string;
  pessoasNaFila : string;
  melhorHora : string;

  constructor(private comunicador : FilaCommunicator) {}

  async atualizar() {
    this.filaAtual = await this.comunicador.getQueueData();
    //this.filaAtual.setFeatures(10,-1,null);
    if (!this.estaNaFila){
      this.tempoDeEspera = this.calculadora.secondsToFullTime(this.filaAtual.getWaitingTime());
      this.melhorHora = this.filaAtual.getTimeToGo();
    }
    this.pessoasNaFila = this.filaAtual.getPersonsOnLine() + " pessoas";
  }

  //INITIALIZING MODULE
  ngOnInit():void{
    this.atualizar();
    this.estaNaFila = false;
    this.calculadora = new FilaCalculator;
  }

}
