import {Component,OnInit} from '@angular/core';
import {NgModule} from '@angular/core';
import { Alimento } from './alimento';
import {CadastroAlimentos} from './cadastroAlimentos';
import { Http, Headers } from '@angular/http';
@Component({
    selector:"cardapio",
    templateUrl:'./cardapio.component.html'
})
export class CardapioComponent implements OnInit{
    alimentosShow:Alimento[] = [];
    alimentoCaR:Alimento = new Alimento();
    erroCadastroAlimento:boolean = false;
    erroSelectAlimento:boolean = false;
    erroAtualizarAlimento:boolean=false;
    cadastrobsAlimento:boolean = false;
    diaCard:string = 'seg';
    
    private cardapios:CadastroAlimentos[] = []

    constructor(private http: Http){
        this.cardapios['seg'] = new CadastroAlimentos(http);
        this.cardapios['ter'] = new CadastroAlimentos(http);
        this.cardapios['qua'] = new CadastroAlimentos(http);
        this.cardapios['qui'] = new CadastroAlimentos(http);
        this.cardapios['sex'] = new CadastroAlimentos(http);
        this.cardapios['sab'] = new CadastroAlimentos(http);
        this.cardapios['dom'] = new CadastroAlimentos(http);

    }
    ngOnInit(){
        this.getAllAlimentos();
    }
    onMoveCardapio(){
        this.erroCadastroAlimento=false;
        this.erroSelectAlimento = false;
        this.erroAtualizarAlimento = false;
        this.cadastrobsAlimento=false;
    }
    
    async cadastrarAlimento(alimento:Alimento){//cadastro de alimentos
        if(this.verificarNVazioAlimento(alimento)){
            let b = await this.cardapios[this.diaCard].cadastrar(alimento);
            if(!b)
                this.erroCadastroAlimento = true;
            else
                this.cadastrobsAlimento = true;
                this.alimentosShow.push(alimento);
        }
        else{
            this.erroCadastroAlimento = true;
        }
    }
    selectAlimento(alimento:Alimento){//função que lida com o select dos alimentos
        if(this.verificarNVazioAlimento(alimento)){
            this.erroSelectAlimento = false;
        }else{
            this.erroSelectAlimento = true;
        }
    }
    verificarNVazioAlimento(alimento:Alimento):boolean{
        if(!alimento.nome || !alimento.tipo || !this.diaCard)
            return false;
        return true;
    }
    async getAllAlimentos(){
        console.log(this.cardapios);
        this.cardapios[this.diaCard].alimentosGetAll().then(res => {
            this.alimentosShow = res;
        }).catch();
    }
    paaa(){
        console.log(this.diaCard);
    }
}