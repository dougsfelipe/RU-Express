import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {CardapioComponent} from './cardapio.component';
import {CarteiraComponent} from './carteira.component';
import {SuporteComponent} from './suporte.component';
import {SolicitacaoComponent} from './solicitacao.component';
import { HttpModule } from '@angular/http';
import { CadastroPessoa } from './cadastroPessoa';

@NgModule({
  declarations: [
    AppComponent,
    CardapioComponent,
    CarteiraComponent,
    SolicitacaoComponent,
    SuporteComponent

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    RouterModule.forRoot([
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
  providers: [CadastroPessoa],
  bootstrap: [AppComponent]
})


export class AppModule { }
