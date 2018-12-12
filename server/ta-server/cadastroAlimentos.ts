import{Alimento} from '../../gui/ta-gui/src/app/cardapio/alimento';
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
     alimentoCadastrado(alimento:Alimento){
        for(let i=0; i<this.alimentos.length;i++){
            if(this.alimentos[i].nome==alimento.nome && this.alimentos[i].tipo==alimento.tipo)
                return i;
        }
        return -1;
     }
     remover(alimento:Alimento):boolean{
        var result =false;
        let cad = this.alimentoCadastrado(alimento);
        console.log(cad);
        if(cad != -1){
            this.alimentos = this.alimentos.splice(cad,1);
            result=true;
        }
        return result;
     }
    
}
