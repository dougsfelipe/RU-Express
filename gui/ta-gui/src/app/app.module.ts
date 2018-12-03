import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {CardapioComponent} from './cardapio.component';

@NgModule({
  declarations: [
    AppComponent,
    CardapioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
      path:'cardapio',
      component:CardapioComponent
    }
    ])  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
