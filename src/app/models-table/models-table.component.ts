import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

import { ModelService } from "../model.service";
import { Model } from "../model";

@Component({
  selector: 'app-models-table',
  templateUrl: './models-table.component.html',
  styleUrls: ['./models-table.component.css']
})
export class ModelsTableComponent {
  displayedColumns: string[] = ['name', 'brand', 'type', 'energy'];
  dsModels: MatTableDataSource<Model> = new MatTableDataSource();
  dsModels$: Observable<MatTableDataSource<Model>> = this.modelService.models$.pipe(
    map(models => {
      this.dsModels.data = models;
      return this.dsModels;
    })

  );

  constructor(private modelService: ModelService) {}

}
