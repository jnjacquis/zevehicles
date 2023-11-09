import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModelsTableComponent } from "./models-table/models-table.component";
import { ModelDetailComponent } from "./model-detail/model-detail.component";
import { Error404Component } from "./error-404/error-404.component";
import { BrandsTableComponent } from "./brands-table/brands-table.component";

const routes: Routes = [
  {path: 'models', component: ModelsTableComponent},
  {path: 'model', component: ModelDetailComponent},
  {path: 'brands', component: BrandsTableComponent},
  {path: '', redirectTo: '/models', pathMatch: 'full'},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
