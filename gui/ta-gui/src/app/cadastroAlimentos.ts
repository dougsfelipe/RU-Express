import { Alimento } from './alimento';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs';

@Injectable()
export class CadastroAlimentos{
    alimentos: Alimento[] = [];
    private headers = new Headers({'Content-Type': 'application/json'});
    private taURL = 'http://localhost:3000';
    constructor(private http: Http){}
    cadastrar(alimento: Alimento): Promise<Alimento>{
        return this.http.post(this.taURL + "/alimentos",JSON.stringify(alimento), {headers: this.headers})
           .toPromise()
           .then(res => {
              if (res.json().success) {return alimento as Alimento;} else {return null;}
           })
           .catch(this.tratarErro); 
    }
    alimentosGetAll():Promise<Alimento[]>{
        return this.http.get(this.taURL + "/alimentos")
                 .toPromise()
                 .then(res => res.json() as Alimento[])
                 .catch(this.tratarErro);
    }

    private tratarErro(erro: any): Promise<any>{//trata erro de acesso ao servidor
        console.error('Acesso mal sucedido ao servidor',erro);
        return Promise.reject(erro.message || erro);
    }
}