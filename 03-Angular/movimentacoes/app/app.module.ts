import { NgModule }                     from '@angular/core';
import { BrowserModule }                from '@angular/platform-browser';
import { HttpModule, JsonpModule  }     from '@angular/http';

import { AppComponent }                 from './app.component';
import { MovimentacaoListComponent }    from './movimentacao/movimentacao-list/movimentacao-list.component';

import { MovimentacaoService }          from './movimentacao/shared/movimentacao.service';

import './shared/rxjs-extensions';

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    JsonpModule 
  ],
  declarations: [ 
    AppComponent,
    MovimentacaoListComponent 
  ],
  providers: [MovimentacaoService],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
