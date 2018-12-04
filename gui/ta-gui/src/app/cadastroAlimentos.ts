import { Alimento } from './alimento';

export class CadastroAlimentos{
    alimentos: Alimento[] = [];

    cadastrar(alimento: Alimento): boolean{
        if(this.alimentoNCadasrado(alimento.nome)){

        }
    }
    alimentoNCadasrado(nome: string): boolean{
        return !this.alimentos.find(a => a.nome == nome);
    }
}