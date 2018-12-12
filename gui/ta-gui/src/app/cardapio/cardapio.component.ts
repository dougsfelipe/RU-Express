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
    alimentoSelect:Alimento = new Alimento();//alimento selecionado
    erroCadastroAlimento:boolean;//erro no cadastro
    erroSelectAlimento:boolean;//erro ao selecionar alimento
    erroAtualizarAlimento:boolean;//erro ao atualizar o alimento
    cadastrobsAlimento:boolean;//cadastro efetivado do alimento
    attAlimento:boolean;//se o alimento consegiu ser atualizado
    selAlimento:boolean;//se o alimento conseguiu ser selecionado
    remAlimento:boolean;//se o alimento foi removido
    erroRemAlimento:boolean;//se o alimento não foi removido
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
    atualizarAlimento(){

    }
    private setEFC(){//set as mensagens de efeito para falso
        this.erroCadastroAlimento=false;
        this.erroSelectAlimento = false;
        this.erroAtualizarAlimento = false;
        this.cadastrobsAlimento=false;
        this.selAlimento = false;
        this.attAlimento = false;
        this.erroRemAlimento = false;
        this.remAlimento = false;
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
    async removerAlimento(){
        if(this.verificarNVazioAlimento(this.alimentoSelect)){
            let removeu = await this.cardapios[this.diaCard].removerAL(this.alimentoSelect, this.diaCard);
            if(removeu){
                this.getAllAlimentos();
                this.remAlimento = true;
            }else{
                this.erroRemAlimento = true;
            }
            this.alimentoSelect.clean();
        }else{
            this.erroRemAlimento = true;
        }
    }

    async getAlimento(alimento:Alimento):Promise<boolean>{
        await this.getAllAlimentos().catch();
        for (let alimentor of this.alimentosShow){
            if(alimento.nome==alimentor.nome && alimento.tipo == alimentor.tipo)
                return true;
        }
        return false;
    }
    async selectAlimento(alimento:Alimento){//função que lida com o select dos alimentos
        //falta concluir
        if(this.verificarNVazioAlimento(alimento)){
            this.erroSelectAlimento = false;
            this.alimentoSelect= alimento;
            let selecionado = await this.getAlimento(this.alimentoSelect);
            if(selecionado){
                this.selAlimento = true;
            }else{
                this.erroSelectAlimento = true;
                this.alimentoSelect['alimento'].clean();
            }
        }else{
            this.erroSelectAlimento = true;
            this.alimentoSelect['alimento'].clean();
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