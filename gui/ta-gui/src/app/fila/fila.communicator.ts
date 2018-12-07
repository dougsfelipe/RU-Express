import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs';
import {FilaData} from "./fila.data";

@Injectable()
export class FilaCommunicator{
    private headers = new Headers({'Content-Type': 'application/json'});
    private serverURL = 'http://localhost:3000';
    constructor(private http: Http){}

    getQueueData() : Promise<FilaData> {
      return this.http.get(this.serverURL + "/monitoramentoFila")
        .toPromise()
        .then(res => {
          let auxiliary : FilaData = res.json() as FilaData;
          let returner : FilaData = new FilaData(auxiliary.estimatedWaitingTime,auxiliary.estimatedPersonsOnLine,auxiliary.estimatedTimeToGo);
          return returner;
        })
        .catch(this.tratarErro);
    }

    private tratarErro(erro: any): Promise<any>{//trata erro de acesso ao servidor
        console.error('Acesso mal sucedido ao servidor',erro);
        return Promise.reject(erro.message || erro);
    }

}
