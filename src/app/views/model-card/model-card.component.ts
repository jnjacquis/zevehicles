import { Component, Inject } from '@angular/core';
import {
  MatDialogModule,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { Model } from 'src/app/domain/model';
import { Energy, getEnergyMatIconName } from 'src/app/domain/vehicle-energy.enum';
import { VehicleType, getVehicleTypeMatIconName } from 'src/app/domain/vehicle-type.enum';

@Component({
  selector: 'app-model-card',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './model-card.component.html',
  styleUrls: ['./model-card.component.scss']
})
export class ModelCardComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public model: Model) { }

  getEnergyIconName() {
    //console.log('Vehicle energy: ' + this.model.energy);
    const vehicleEnergy = (<any>Energy)[this.model.energy];
    //console.log('Energy: ' + vehicleEnergy);
    return getEnergyMatIconName(vehicleEnergy);
  }

  getVehicleTypeIconName() {
    const vehicleType = (<any>VehicleType)[this.model.type];
    //console.log('Type: ' + vehicleType);
    return getVehicleTypeMatIconName(vehicleType);
  }
}
