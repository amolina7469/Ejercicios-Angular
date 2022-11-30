import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './comoponents/form/form.component';
import { MovieListComponent } from './comoponents/movie-list/movie-list.component';
import { SearchComponent } from './comoponents/search/search.component';
import { FilterComponent } from './comoponents/filter/filter.component';
import { MovieCardComponent } from './comoponents/movie-card/movie-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MovieListComponent,
    SearchComponent,
    FilterComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
