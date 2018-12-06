export class Pessoa{
    nome: string;
    cpf: string;
    senha: string;
    telefone:string;
    adm: boolean;
    funcionario:boolean;
    email:string;

    constructor(){
        this.clean;
    }
    clean(): void {
        this.nome = "";
        this.cpf = "";
        this.senha = "";
        this.telefone = "";
        this.adm = false;
        this.funcionario = false;
        this.email = "";
    }
    copyFrom(from: Pessoa): void {
        this.nome = from.nome;
        this.cpf = from.cpf;
        this.senha = from.senha;
        this.telefone = from.senha;
        this.adm = from.adm;
        this.funcionario = from.funcionario;
        this.email = from.email;
      }
}