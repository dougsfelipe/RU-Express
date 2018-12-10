export class Solicitacao{
    Tipo: string;
    Refeicao: string;
    Local: String;
    Tempo: string;
    Nome: string;
    Telefone:string;
    Entregador:string;
    NumeroEntregador:string;
    

constructor(){
    this.Tipo = "";
    this.Refeicao = "";
    this.Tempo = "";
    this.Nome = "";
    this.Telefone = "";
    this.Entregador = "";
    this.NumeroEntregador ="";
    this.Local = "";
}

copyFrom(from: Solicitacao): void {
    this.Tipo = from.Tipo;
    this.Refeicao = from.Refeicao;
    this.Tempo = from.Tempo;
    this.Nome = from.Nome;
    this.Telefone = from.Telefone;
    this.Entregador = from.Entregador;
    this.NumeroEntregador = from.NumeroEntregador;
    this.Local = from.Local;
  }

}