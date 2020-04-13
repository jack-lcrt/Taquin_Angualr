import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaquinComponent } from './taquin/taquin.component';
import { Taquin4Component } from './taquin4/taquin4.component';

const routes: Routes = [
  { path: '', component: TaquinComponent },
  {path: 'taquin4', component: Taquin4Component},
  {path: '**', component: TaquinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
