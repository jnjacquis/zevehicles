import { Injectable, inject } from '@angular/core';
import { Observable, from, throwError } from 'rxjs';
import { Firestore, collection, collectionData, addDoc, CollectionReference, DocumentReference } from '@angular/fire/firestore';

import { Model } from "../domain/model";

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

  getModels(): Observable<Model[]> {
    // Remove pipe and delay for production environment 
    return this.models$;
  }

  createNewModel(model: Model): Observable<any> {
    if (!model) {
      throwError(() => {
        return new Error("A new vehicle model is required");
      });
    }
    console.log('Continue with the real model');

    return from(addDoc(this.modelsRef, model));
    /*  .then((documentReference: DocumentReference) => {
        console.log("New document created on Firestore: ", documentReference);
      })
      .catch((error) => {
        console.error("Error when adding document: ", error);
      });
      */
  }
}
