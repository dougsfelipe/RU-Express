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
    alimentosShow:Alimento[] = [];//alimentos para aparecer no html, escolhidos pelo dia
    alimentoCaR:Alimento = new Alimento();//alimento para cadastro do form
    erroCadastroAlimento:boolean;//erro no cadastro
    erroSelectAlimento:boolean;//erro ao selecionar alimento
    erroAtualizarAlimento:boolean;//erro ao atualizar o alimento
    cadastrobsAlimento:boolean;//cadastro efetivado do alimento
    diaCard:string = 'seg';//dia atual
    oldDia:string = 'seg';//dia antes da mudança
    dias:string[] = ['seg','ter', 'qua', 'qui', 'sex', 'sab', 'dom'];//array dos dias
    private cardapios:CadastroAlimentos[] = [];//o cardapio de cada dia

    constructor(private http: Http){
        this.iniciarCard();
        this.setEFC();
    }
    private iniciarCard(){//inicia o cardapio de cada dia
        for(let x of this.dias){
            this.cardapios[x] = new CadastroAlimentos(this.http);
        }
    }
    ngOnInit(){
        this.getAllAlimentos();
    }
    onMoveCardapio(){//ao mover o mouse
        this.setEFC();
    }
    
    private setEFC(){//set as mensagens de efeito para falso
        this.erroCadastroAlimento=false;
        this.erroSelectAlimento = false;
        this.erroAtualizarAlimento = false;
        this.cadastrobsAlimento=false;
    }

    async cadastrarAlimento(alimento:Alimento){//cadastro de alimentos
        if(this.verificarNVazioAlimento(alimento)){
            let b = await this.cardapios[this.diaCard].cadastrar(alimento, this.diaCard);
            if(!b)
                this.erroCadastroAlimento = true;
            else
                this.cadastrobsAlimento = true;
                this.alimentoCaR.clean();
                this.getAllAlimentos();
        }
        else{
            this.erroCadastroAlimento = true;
        }
    }
    selectAlimento(alimento:Alimento){//função que lida com o select dos alimentos
        //falta concluir
        if(this.verificarNVazioAlimento(alimento)){
            this.erroSelectAlimento = false;
        }else{
            this.erroSelectAlimento = true;
        }
    }
    verificarNVazioAlimento(alimento:Alimento):boolean{//verifica se o alimento para cadastro n é vazio
        if(!alimento.nome || !alimento.tipo || !this.diaCard)
            return false;
        return true;
    }

    async getAllAlimentos(){
        this.cardapios[this.diaCard].alimentosGetAll().then(res => {
            for(let x in this.cardapios){
                this.cardapios[x].alimentos = res[x];
            }
            this.alimentosShow = this.cardapios[this.diaCard].alimentos;
        }).catch();
    }
    mudarDia(){
        if(this.oldDia!=this.diaCard){
            this.diaCard = this.oldDia;
            this.getAllAlimentos();
        }
    }
}