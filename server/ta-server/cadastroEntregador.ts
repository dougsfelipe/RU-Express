import{Entregador} from '../../gui/ta-gui/src/app/Entregador';

export class CadastroEntregador{
    entregadores: Entregador[]=[];
    cadastrar(entregador:Entregador):Entregador{
        var result =null;
        
            this.entregadores.push(entregador);
            result=entregador;
        
          
        return result;
    }
    getEntregadores():Entregador[]{
        return this.entregadores;
    }
    getEntregador(cpf:string):Entregador{
        var a:number=this.entregadores.findIndex(x => x.cpf==cpf);
        if(a<0)return null;
        else return this.entregadores[a];
    }
    cpfNaoCadastrado(cpf: string): boolean {
        return !this.entregadores.find(a => a.cpf == cpf);
     }
    
}
