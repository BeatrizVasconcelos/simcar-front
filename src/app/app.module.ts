import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListRequerimentosComponent } from './components/requerimento/list-requerimentos/list-requerimentos.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SortDirective } from './directive/sort.directive';
import { SplitPipe } from './pipes/split.pipe';
import { CreateRequerimentoComponent } from './components/requerimento/create-requerimento/create-requerimento.component';

@NgModule({
  declarations: [
    AppComponent,
    ListRequerimentosComponent,
    SortDirective,
    SplitPipe,
    CreateRequerimentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
