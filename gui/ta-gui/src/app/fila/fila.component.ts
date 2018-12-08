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

  isAtLine: boolean;
  waitingTime : string;
  queuePeople : string;
  bestTime : string;

  constructor(private comunicador : FilaCommunicator) {}

  async atualizar() {
    this.filaAtual = await this.comunicador.getQueueData();
    //this.filaAtual.setFeatures(10,-1,null);
    if (!this.isAtLine){
      this.waitingTime = this.calculadora.secondsToFullTime(this.filaAtual.getWaitingTime());
      this.bestTime = this.filaAtual.getTimeToGo();
    }
    this.queuePeople = this.filaAtual.getPersonsOnLine() + " pessoas";
  }

  //INITIALIZING MODULE
  ngOnInit():void{
    this.atualizar();
    this.isAtLine = false;
    this.calculadora = new FilaCalculator;
  }

}
