import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs';

import { Solicitacao } from './solicitacao';
import { SolicitacaoComponent } from './solicitacao.component';

@Injectable()
export class SolicitacaoService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private serverURL  = 'http://localhost:3000';

  constructor(private http: Http) { }

  criar(solicitacao: Solicitacao): Promise<Solicitacao> {
    return this.http.post(this.serverURL  + "/Solicitacao",JSON.stringify(solicitacao), {headers: this.headers})
           .toPromise()
           .then(res => {
              if (res.json().success) {return solicitacao;} else {return null;}
           })
           .catch(this.tratarErro);
  }

  private tratarErro(erro: any): Promise<any>{
    console.error('Acesso mal sucedido ao serviço de alunos',erro);
    return Promise.reject(erro.message || erro);
  }

}