import{Entregador} from './Entregador';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs';

@Injectable()
export class CadastroEntregador{
     entregadores: Entregador[]=[];
    private headers = new Headers({'Content-Type': 'application/json'});
    private taURL = 'http://localhost:3000';
    constructor(private http: Http){}
    cadastrar(entregador:Entregador):Promise<Entregador>{
        return this.http.post(this.taURL + "/entregador",JSON.stringify(entregador), {headers: this.headers})
           .toPromise()
           .then(res => {
              if (res.json().success) {return entregador as Entregador;} else {return null;}
           })
           .catch(this.tratarErro);  
    }

    getEntregadores(): Promise<Entregador[]> {
        return this.http.get(this.taURL + "/entregador")
                 .toPromise()
                 .then(res => res.json() as Entregador[])
                 .catch(this.tratarErro);
    }

    private fillEntregadorArray(): Promise<Entregador[]>{
      return this.getEntregadores()
        .then(response => this.entregadores = response)
        .catch();
    }

    getEntregador(cpf:string):Promise<Entregador>{
        return this.fillEntregadorArray().then(
            res => {let a = res.findIndex(x => x.cpf == cpf);
            if(a<-1){
                return null;
            }else{
                return this.entregadores[a];
            }
        }).catch();
    }

   

    private tratarErro(erro: any): Promise<any>{//trata erro de acesso ao servidor
        console.error('Acesso mal sucedido ao servidor',erro);
        return Promise.reject(erro.message || erro);
    }

}
