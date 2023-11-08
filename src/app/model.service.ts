import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

import { Model } from "./model";

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  firestore: Firestore = inject(Firestore);

  models$: Observable<any[]>;

  constructor() {
    const modelsRef = collection(this.firestore, 'models')
    this.models$ = collectionData(modelsRef);
  }

}
