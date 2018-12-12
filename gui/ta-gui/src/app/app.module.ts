import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {CardapioComponent} from './cardapio/cardapio.component';
import {FilaComponent} from "./fila/fila.component";
import {CarteiraComponent} from './carteira.component';
import {SuporteComponent} from './suporte.component';
import {SolicitacaoComponent} from './solicitacao.component';
import { HttpModule } from '@angular/http';
import { CadastroPessoa } from './cadastroPessoa';
import {CadastroEntregador} from './cadastroEntregador';
import {FilaCommunicator} from "./fila/fila.communicator";


@NgModule({
  declarations: [
    AppComponent,
    FilaComponent,
    CardapioComponent,
    CarteiraComponent,
    SolicitacaoComponent,
    SuporteComponent,
    SolicitacaoComponent,

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    RouterModule.forRoot([
      {
      path:'fila',
      component:FilaComponent
    },
    {
      path:'cardapio',
      component:CardapioComponent
    },
    {
      path:'carteira',
      component:CarteiraComponent
    },
    {
      path:'solicitacao',
      component:SolicitacaoComponent
    }, {
      path:'suporte',
      component:SuporteComponent
    }
    ])  ],

  providers: [CadastroPessoa,
              FilaCommunicator,CadastroEntregador],

  bootstrap: [AppComponent]
  
})


export class AppModule { }
