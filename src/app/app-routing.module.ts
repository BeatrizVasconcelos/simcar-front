import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRequerimentoComponent } from './components/requerimento/create-requerimento/create-requerimento.component';
import { ListRequerimentosComponent } from './components/requerimento/list-requerimentos/list-requerimentos.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'requerimentos' },
  { path: 'requerimentos', component: ListRequerimentosComponent },
  { path: 'requerimentos/:requerimentoId', component: CreateRequerimentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
