import{Pessoa} from '../../gui/ta-gui/src/app/pessoa';
export class CadastroPessoa{
    pessoas: Pessoa[]=[];
    cadastrar(pessoa:Pessoa):Pessoa{
        var result =null;
        if(this.cpfNaoCadastrado(pessoa.cpf)){
            this.pessoas.push(pessoa);
            result=pessoa;
        }
          
        return result;
    }
    getPessoas():Pessoa[]{
        return this.pessoas;
    }
    getPessoa(cpf:string):Pessoa{
        var a:number=this.pessoas.findIndex(x => x.cpf==cpf);
        if(a<0)return null;
        else return this.pessoas[a];
    }
    cpfNaoCadastrado(cpf: string): boolean {
        return !this.pessoas.find(a => a.cpf == cpf);
     }
    
}
