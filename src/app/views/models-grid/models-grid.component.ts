import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, map } from 'rxjs';
import { ModelService } from 'src/app/services/model.service';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

import { Model } from 'src/app/domain/model';
import { Energy, getEnergyMatIconName } from 'src/app/domain/vehicle-energy.enum';
import { VehicleType, getVehicleTypeMatIconName } from 'src/app/domain/vehicle-type.enum';

@Component({
  selector: 'app-models-grid',
  standalone: true,
  imports: [CommonModule,MatGridListModule,MatCardModule,MatIconModule],
  providers: [ModelService],
  templateUrl: './models-grid.component.html',
  styleUrl: './models-grid.component.css'
})
export class ModelsGridComponent {

  service = inject(ModelService);
  models$ = this.service.models$;
  
  constructor() { }

  getEnergyIconName(model: Model) {
    //console.log('Vehicle energy: ' + this.model.energy);
    const vehicleEnergy = (<any>Energy)[model.energy];
    //console.log('Energy: ' + vehicleEnergy);
    return getEnergyMatIconName(vehicleEnergy);
  }

  getVehicleTypeIconName(model: Model) {
    const vehicleType = (<any>VehicleType)[model.type];
    //console.log('Type: ' + vehicleType);
    return getVehicleTypeMatIconName(vehicleType);
  }
}
