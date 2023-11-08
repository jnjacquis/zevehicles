import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData, addDoc, CollectionReference, DocumentReference } from '@angular/fire/firestore';

import { Model } from "./model";

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  private firestore: Firestore = inject(Firestore);
  models$: Observable<Model[]>;
  modelsRef: CollectionReference;

  constructor() {
    this.modelsRef = collection(this.firestore, 'models')
    this.models$ = collectionData(this.modelsRef) as Observable<Model[]>;
  }

  addModel(model: Model) {
    console.log('Add new model');
    if (!model) return;
    console.log('Continue with the real model');

    addDoc(this.modelsRef, model).then((documentReference: DocumentReference) => {
        // the documentReference provides access to the newly created document
    });
}
}
