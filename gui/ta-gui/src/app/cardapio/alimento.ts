export class Alimento{
    nome: string;
    tipo: string;
    constructor(){
        this.nome = "";
        this.tipo="";
    }
    clean(){
        this.nome = '';
        this.tipo = '';
    }
}
