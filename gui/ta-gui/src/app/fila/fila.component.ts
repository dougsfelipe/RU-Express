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
  private countdown : Observable<void>;

  estaNaFila: boolean;
  tempoDeEspera : string;
  pessoasNaFila : string;
  melhorHora : string;

  constructor(private comunicador : FilaCommunicator) {}

  async atualizar() {
    this.filaAtual = await this.comunicador.getQueueData();
    this.filaAtual.setFeatures(10,-1,null);
    if (!this.estaNaFila){
      this.tempoDeEspera = this.calculadora.secondsToFullTime(this.filaAtual.getWaitingTime());
      this.melhorHora = this.filaAtual.getTimeToGo();
    }
    this.pessoasNaFila = this.filaAtual.getPersonsOnLine() + " pessoas";
  }

  atQueue() : void {
    this.estaNaFila = true;
    this.melhorHora = "Já está na fila.";
    this.initialize(this.filaAtual.getWaitingTime());
  }

  notAtQueue() : void {
    this.estaNaFila = false;
    this.destroyIt();
    this.atualizar();
  }

  getOutOfQueue() : void {
    this.notAtQueue();
  }

  enteredRestaurant() : void {
    this.notAtQueue();
  }

  //COUNTDOWN MANAGER
  private destroyable : Subject<boolean>;
  private initialTime : number;
  private subscribed;

  initialize(initialTime : number): void {
    this.destroyable = new Subject();
    this.initialTime = initialTime;
    this.countdown = interval(1000).pipe(takeUntil(this.destroyable),map((x)=>{
      this.initialTime--;
      if (this.initialTime < 0) {
        this.openDialog();
        this.destroyable.next(true);
      }
    }));
    this.subscribed = this.countdown.subscribe(val => this.tempoDeEspera = this.calculadora.secondsToFullTime(this.initialTime));
  }

  destroyIt(): void {
    this.destroyable.next(true);
    this.subscribed.unsubscribe();
  }

  //DIALOG FINALIZED COUNTDOWN MANAGER
  modalShow : boolean;

  openDialog() : void {
    this.modalShow = true;
  }

  closeDialog() : void {
    this.modalShow = false;
  }

  getOutOfQueueFromDialog() : void {
    this.getOutOfQueue();
    this.closeDialog();
  }

  enteredRestaurantFromDialog() : void {
    this.enteredRestaurant();
    this.closeDialog();
  }

  stillInLineFromDialog() : void {
    this.tempoDeEspera = "Tempo limite estourado e ainda na fila!"
    this.closeDialog();
  }

  //INITIALIZING MODULE
  ngOnInit():void{
    this.atualizar();
    this.estaNaFila = false;
    this.calculadora = new FilaCalculator;
    this.modalShow = false;
  }

}
