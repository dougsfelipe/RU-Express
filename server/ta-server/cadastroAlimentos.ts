import{Alimento} from '../../gui/ta-gui/src/app/alimento';
export class CadastroAlimentos{
    alimentos: Alimento[]=[];
    cadastrar(alimento:Alimento):Alimento{
        var result =null;
        if(this.alimentoNCadastrado(alimento)){
            this.alimentos.push(alimento);
            result=alimento;
        }
        return result;
    }
    getAlimentos():Alimento[]{
        return this.alimentos;
    }
    alimentoNCadastrado(alimento:Alimento): boolean {
        for(let i=0; i<this.alimentos.length;i++){
            if(this.alimentos[i].nome==alimento.nome && this.alimentos[i].tipo==alimento.tipo)
                return false;
        }
        return true;
     }
    
}
