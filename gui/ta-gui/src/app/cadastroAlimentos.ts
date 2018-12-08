import { Alimento } from './alimento';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class CadastroAlimentos{
    private alimentos: Alimento[] = [];
    private headers = new Headers({'Content-Type': 'application/json'});
    private taURL = 'http://localhost:3000';
    constructor(private http: Http){}

    cadastrar(alimento: Alimento): boolean{
        if(this.alimentoNCadasrado(alimento.nome)){
            this.alimentos.push(alimento);
            return true;//foi efetivado o cadastro
        }
        return false;//não foi efetivado o cadastro
    }
    alimentoNCadasrado(nome: string): boolean{
        let retorno = this.alimentos.findIndex(a => a.nome == nome);
        
        return 
    }
}