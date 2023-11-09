import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

import { Model } from '../../domain/model';
import { ModelService } from "../../services/model.service";
import { ProductionState } from "../../domain/production-state.enum";
import { Energy } from "../../domain/vehicle-energy.enum";
import { VehicleType } from "../../domain/vehicle-type.enum";

@Component({
  selector: 'app-model-detail',
  templateUrl: './model-detail.component.html',
  styleUrls: ['./model-detail.component.css']
})
export class ModelDetailComponent {

  readonly parentUrl = '/models';

  defaultModel: Model = {
    name: "iX5",
    brand: "BMW",
    type: "car",
    energy: "H2"
  };

  energies = [ Energy[Energy.Electric], Energy[Energy.Hydrogen]];
  productionStates = [ ProductionState.Stopped, ProductionState.In_Progress, ProductionState.Future];
  vehicleTypes = [ VehicleType[VehicleType.Car], VehicleType[VehicleType.Truck]];

  model: Model | undefined;

  modelNameControl: FormControl = new FormControl(this.defaultModel.name);
  modelBrandControl: FormControl = new FormControl(this.defaultModel.brand);
  modelTypeControl: FormControl = new FormControl(this.defaultModel.type);
  modelEnergyControl: FormControl = new FormControl(this.defaultModel.energy);

  constructor(private router: Router, private route: ActivatedRoute, private service: ModelService) { }

  cancel() {
    this.router.navigateByUrl(this.parentUrl);
  }

  submit() {
    
    let newModel: Model = {
      name: this.modelNameControl.value,
      brand: this.modelBrandControl.value,
      type: this.modelTypeControl.value,
      energy: this.modelEnergyControl.value
    };
    this.service.addModel(newModel);

    this.router.navigateByUrl(this.parentUrl);
  }
}
