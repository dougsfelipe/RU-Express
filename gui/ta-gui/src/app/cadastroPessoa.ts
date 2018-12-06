import{Pessoa} from './pessoa';
import { and } from '@angular/router/src/utils/collection';
export class CadastroPessoa{
    pessoas: Pessoa[]=[];
    cadastrar(pessoa:Pessoa):Pessoa{
        var result =null;
        if(this.verificarNVazio(pessoa)){
            if(this.cpfNaoCadastrado(pessoa.cpf)){
                this.pessoas.push(pessoa);
                result=pessoa;
            }
        }  
        return result;
    }
    getPessoa(cpf:string):Pessoa{
        var a:number=this.pessoas.findIndex(x => x.cpf==cpf);
        if(a<0)return null;
        else return this.pessoas[a];
    }
    login(cpf:string,senha:string):boolean{
        var pessoa:Pessoa=this.getPessoa(cpf);
        if(pessoa==null||pessoa.senha!=senha)return false;
        else return true;
    }

    cpfNaoCadastrado(cpf: string): boolean {
        return !this.pessoas.find(a => a.cpf == cpf);
     }
    verificarNVazio(pessoa:Pessoa): boolean{//verifica se as informações necessárias das pessoa não estão vazias
        if(!pessoa.nome || !pessoa.cpf || !pessoa.email || !pessoa.senha || !pessoa.telefone){
            return false;
            
        }
        return true;
    }
}
