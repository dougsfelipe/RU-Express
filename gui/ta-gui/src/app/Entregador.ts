export class Entregador{
    nome: string;
    cpf: string;
    telefone:string;
    email:string;

    constructor(){
        this.clean;
    }
    clean(): void {
        this.nome = "";
        this.cpf = "";
        this.telefone = "";
        this.email = "";
    }
    copyFrom(from: Entregador): void {
        this.nome = from.nome;
        this.cpf = from.cpf;
        this.email = from.email;
        this.telefone = from.telefone;
      }
}