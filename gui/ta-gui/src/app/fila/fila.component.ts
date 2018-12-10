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
    this.filaAtual.setFeatures(2,-1,null);
    if (!this.isAtLine){
      this.waitingTime = this.calculadora.secondsToFullTime(this.filaAtual.getWaitingTime());
      this.bestTime = this.filaAtual.getTimeToGo();
    }
    this.queuePeople = this.filaAtual.getPersonsOnLine() + " pessoas";
  }

  atQueue() : void {
    this.isAtLine = true;
    this.bestTime = "Já está na fila.";
    this.initialize(this.filaAtual.getWaitingTime());
  }

  notAtQueue() : void {
    this.isAtLine = false;
    this.destroyIt();
    this.atualizar();
  }

  //COUNTDOWN MANAGER
  private destroyable : Subject<boolean>;
  private initialTime : number;
  private countdown : Observable<void>;
  private subscribed;

  initialize(initialTime : number): void {
    this.destroyable = new Subject();
    this.initialTime = initialTime;
    this.countdown = interval(1000).pipe(takeUntil(this.destroyable),map((x)=>{
      this.initialTime--;
      if (this.initialTime < 0) {
        this.openDialog();
        this.destroyIt();
      }
    }));
    this.subscribed = this.countdown.subscribe(val => this.waitingTime = this.calculadora.secondsToFullTime(this.initialTime));
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

  notAtQueueFromDialog() {
    this.notAtQueue();
    this.closeDialog();
  }

  stillInLineFromDialog() : void {
    this.waitingTime = "Tempo limite estourado e ainda na fila!"
    this.closeDialog();
  }

  //INITIALIZING MODULE
  ngOnInit():void{
    this.atualizar();
    this.isAtLine = false;
    this.calculadora = new FilaCalculator;
    this.modalShow = false;
  }

}
