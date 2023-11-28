import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';

import { Model } from 'src/app/domain/model';
import { Energy, getEnergyMatIconName } from 'src/app/domain/vehicle-energy.enum';
import { VehicleType, getVehicleTypeMatIconName } from 'src/app/domain/vehicle-type.enum';

@Component({
  selector: 'app-model-card',
  templateUrl: './model-card.component.html',
  styleUrls: ['./model-card.component.css']
})
export class ModelCardComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public model: Model) { }

  getEnergyIconName() {
    //console.log('Vehicle energy: ' + this.model.energy);
    const vehicleEnergy = (<any>Energy)[this.model.energy];
    console.log('Energy: ' + vehicleEnergy);
    return getEnergyMatIconName(vehicleEnergy);
  }

  getVehicleTypeIconName() {
    const vehicleType = (<any>VehicleType)[this.model.type];
    //console.log('Type: ' + vehicleType);
    return getVehicleTypeMatIconName(vehicleType);
  }
}