import{Solicitacao} from '../../gui/ta-gui/src/app/solicitacao';

export class CadastroSolicitacao{
    solicitacoes: Solicitacao[]=[];
    solicitar(solicitacao:Solicitacao):Solicitacao{
        var result =null;
        
            this.solicitacoes.push(solicitacao);
            result=solicitacao;
        
          
        return result;
    }
    getSolicitacoes():Solicitacao[]{
        return this.solicitacoes;
    }
    
    
    
}
