import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';

import { ModelsTableComponent } from "../models-table/models-table.component";
import { ModelsGridComponent } from "../models-grid/models-grid.component";

@Component({
  selector: 'app-models-container',
  standalone: true,
  imports: [RouterModule, NgIf, MatButtonModule, MatButtonToggleModule, MatIconModule, ModelsTableComponent, ModelsGridComponent],
  templateUrl: './models-container.component.html',
  styleUrl: './models-container.component.css'
})
export class ModelsContainerComponent {
  viewMode = 'list';

  onViewModeChange(viewMode: string) {
    if (this.viewMode != viewMode) {
      this.viewMode = viewMode;
    }    
  }
}
