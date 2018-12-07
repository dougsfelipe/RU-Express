import {Component,OnInit} from '@angular/core';
import {NgModule} from '@angular/core';
import {FilaData} from "./fila.data";
import {FilaCommunicator} from "./fila.communicator";
import {Observable,interval} from "rxjs";
import {map} from "rxjs/operators";

@Component({
    selector:"fila",
    templateUrl:'./fila.component.html',
    styleUrls: ['./fila.component.css']
})

export class FilaComponent implements OnInit{

  private filaAtual : FilaData;
  estaNaFila: boolean;
  tempoDeEspera : string;
  pessoasNaFila : string;
  melhorHora : string;

  constructor(private comunicador : FilaCommunicator) {}

  ngOnInit():void{
    this.atualizar();
    this.estaNaFila = false;
  }

  async atualizar() {
    this.filaAtual = await this.comunicador.getQueueData();
    if (!this.estaNaFila){
      this.tempoDeEspera = this.secondsToFullTime(this.filaAtual.getWaitingTime());
      this.melhorHora = this.filaAtual.getTimeToGo();
    }
    this.pessoasNaFila = this.filaAtual.getPersonsOnLine() + " pessoas";
  }

  /*atQueue() : void {
    this.estaNaFila = true;
    this.melhorHora = "Já está na fila.";
  }

  countDown(currentTime : number) {
    let time = currentTime;
    interval(1000).pipe(map((x) => {

    }));
  }

  decrescentCount(currentTime : number) : number {
    this.tempoDeEspera = this.secondsToFullTime(currentTime - 1);
    return currentTime -1;
  }*/

  secondsToFullTime(seconds : number) : string {
    let second = seconds % 60;
    let minute = ((seconds - second) / 60 ) % 60;
    let hour = ((((seconds - second) / 60 ) - minute) / 60) % 24;
    let day = (((((seconds - second) / 60 ) - minute) / 60) - hour) / 24;
    let returner = "";
    if (day > 0) {
      if (day == 1) {
        returner += "1 dia,"
      } else {
        returner += day + " dias,"
      }
    }
    if (hour > 0) {
      if (hour == 1) {
        returner += " 1 hora,"
      } else {
        returner +=" " + hour + " horas,"
      }
    }
    if (minute > 0) {
      if (minute == 1) {
        returner += " 1 minuto,"
      } else {
        returner +=" " + minute + " minutos,"
      }
    }
    if (second == 1) {
      returner += " 1 segundo"
    } else {
      returner +=" " + second + " segundos"
    }
    return returner;
  }

}
