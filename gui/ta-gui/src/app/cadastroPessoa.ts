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
              if (res.json().success) {return pessoa as Pessoa;} else {return null as void;}
           })
           .catch(this.tratarErro);  
    }

    getPessoas(): Promise<Pessoa[]> {
        return this.http.get(this.taURL + "/pessoas")
                 .toPromise()
                 .then(res => res.json() as Pessoa[])
                 .catch(this.tratarErro);
    }

    private fillPessoasArray() : void {
      this.getPessoas()
        .then(response => this.pessoas = response)
        .catch();
    }

    getPessoa(cpf:string):Pessoa{
        this.fillPessoasArray();
        var a:number=this.pessoas.findIndex(x => x.cpf==cpf);
        if(a<0)return null;
        else return this.pessoas[a];
    }

    login(cpf:string,senha:string):boolean{
        var pessoa:Pessoa=this.getPessoa(cpf);
        if(pessoa==null || pessoa.senha!=senha) {return false;}
        else {return true;}
    }

    private tratarErro(erro: any): Promise<any>{//trata erro de acesso ao servidor
        console.error('Acesso mal sucedido ao servidor',erro);
        return Promise.reject(erro.message || erro);
    }

}
