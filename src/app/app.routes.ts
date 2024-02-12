import { Routes } from '@angular/router';

import { Error404Component } from "./views/error-404/error-404.component";
import { ModelDetailComponent } from "./views/model-detail/model-detail.component";
import { BrandsTableComponent } from "./views/brands-table/brands-table.component";
import { ModelsContainerComponent } from './views/models-container/models-container.component';

export const routes: Routes = [
  {path: 'models', component: ModelsContainerComponent},
  {path: 'model', component: ModelDetailComponent},
  {path: 'brands', component: BrandsTableComponent},
  {path: '', redirectTo: '/models', pathMatch: 'full'},
  {path: '**', component: Error404Component}
];

