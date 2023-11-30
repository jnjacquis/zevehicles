import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { MatRow, MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { ModelService } from "../../services/model.service";
import { Model } from "../../domain/model";
import { MatDialog } from '@angular/material/dialog';
import { ModelCardComponent } from '../model-card/model-card.component';

@Component({
  selector: 'app-models-table',
  templateUrl: './models-table.component.html',
  styleUrls: ['./models-table.component.css']
})
export class ModelsTableComponent {
  displayedColumns: string[] = ['name', 'brand', 'type', 'energy', 'actions'];
  dsModels: MatTableDataSource<Model> = new MatTableDataSource();
  dsModels$: Observable<MatTableDataSource<Model>> = this.modelService.models$.pipe(
    map(models => {
      this.dsModels.data = models;
      return this.dsModels;
    })
  );

  newModel: Model | undefined;
  selection = new SelectionModel<Model>(false, []);

  constructor(private modelService: ModelService, public dialog: MatDialog) { }

  createModel(newModel: Model) {
    console.log("New vehicle model: " + newModel);
    this.modelService.addModel(newModel);
  }

  onSelect(model: Model) {
    this.selection.select(model);
    console.log('Selected row data: ' + this.selection.selected[0].name);
    this.openDialog(model);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dsModels.data.length;
    return numSelected == numRows;
  }
  
  toggleAllRows() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dsModels.data.forEach(row => this.selection.select(row));
  }

  openDialog(model: Model): void {
    const dialogRef = this.dialog.open(ModelCardComponent, {
      //height: '400px',
      data: model,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
