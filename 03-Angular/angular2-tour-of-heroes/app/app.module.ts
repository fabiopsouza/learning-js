import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './shared/in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroListComponent }    from './heroes/hero-list/hero-list.component';
import { HeroSearchComponent }  from './heroes/hero-search/hero-search.component';
import { HeroDetailComponent }  from './heroes/hero-detail/hero-detail.component';
import { HeroService }          from './heroes/shared/hero.service';
import { routing }              from './app.routing';

import './shared/rxjs-extensions';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroListComponent,
    HeroSearchComponent
  ],
  providers: [
    HeroService,
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
}
