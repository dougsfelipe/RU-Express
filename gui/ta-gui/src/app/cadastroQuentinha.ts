import{Solicitacao} from './solicitacao';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs';

@Injectable()
export class cadastroQuentinha{
    solicitacoes: Solicitacao[]=[];
    private headers = new Headers({'Content-Type': 'application/json'});
    private taURL = 'http://localhost:3000';
    constructor(private http: Http){}
    solicitar(solicitacao:Solicitacao):Promise<Solicitacao>{
        return this.http.post(this.taURL + "/solicitacao",JSON.stringify(solicitacao), {headers: this.headers})
           .toPromise()
           .then(res => {
              if (res.json().success) {return solicitacao as Solicitacao;} else {return null;}
           })
           .catch(this.tratarErro);  
    }

    getSolicitacaos(): Promise<Solicitacao[]> {
        return this.http.get(this.taURL + "/solicitacao")
                 .toPromise()
                 .then(res => res.json() as Solicitacao[])
                 .catch(this.tratarErro);
    }

    private fillEntregadorArray(): Promise<Solicitacao[]>{
      return this.getSolicitacaos()
        .then(response => this.solicitacoes = response)
        .catch();
    }

   

   

    private tratarErro(erro: any): Promise<any>{//trata erro de acesso ao servidor
        console.error('Acesso mal sucedido ao servidor',erro);
        return Promise.reject(erro.message || erro);
    }

}
