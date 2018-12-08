import { CadastroAlimentos } from "./cadastroAlimentos";

export class CardapioDia{
    dia: String;
    alimentos: CadastroAlimentos;
    constructor(nome:string){
        this.dia = nome;
    }
    alimentosAtt(){
    }
}