import{Pessoa} from './pessoa';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs';

@Injectable()
export class CadastroPessoa{
    private pessoas: Pessoa[]=[];
    private headers = new Headers({'Content-Type': 'application/json'});
    private taURL = 'http://localhost:3000';
    constructor(private http: Http){}
    cadastrar(pessoa:Pessoa):Promise<Pessoa>{
        return this.http.post(this.taURL + "/pessoas",JSON.stringify(pessoa), {headers: this.headers})
           .toPromise()
           .then(res => {
              if (res.json().success) {return pessoa as Pessoa;} else {return null;}
           })
           .catch(this.tratarErro);  
    }

    getPessoas(): Promise<Pessoa[]> {
        return this.http.get(this.taURL + "/pessoas")
                 .toPromise()
                 .then(res => res.json() as Pessoa[])
                 .catch(this.tratarErro);
    }

    private fillPessoasArray(): Promise<Pessoa[]>{
      return this.getPessoas()
        .then(response => this.pessoas = response)
        .catch();
    }

    getPessoa(cpf:string):Promise<Pessoa>{
        return this.fillPessoasArray().then(
            res => {let a = res.findIndex(x => x.cpf == cpf);
            if(a<-1){
                return null;
            }else{
                return this.pessoas[a];
            }
        }).catch();
    }

    login(cpf:string,senha:string):Promise<boolean>{
        return this.getPessoa(cpf).then(pessoa => {
            if(pessoa==null || pessoa.senha!=senha) {return false;}
            else {return true;}
        }).catch();
        
    }

    private tratarErro(erro: any): Promise<any>{//trata erro de acesso ao servidor
        console.error('Acesso mal sucedido ao servidor',erro);
        return Promise.reject(erro.message || erro);
    }

}
