import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModelsTableComponent } from "./views/models-table/models-table.component";
import { ModelDetailComponent } from "./views/model-detail/model-detail.component";
import { Error404Component } from "./views/error-404/error-404.component";
import { BrandsTableComponent } from "./views/brands-table/brands-table.component";

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
