import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData, addDoc, CollectionReference, DocumentReference } from '@angular/fire/firestore';
import { Storage, ref, getDownloadURL } from '@angular/fire/storage';

import { Brand } from "../domain/brand";

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private firestore: Firestore = inject(Firestore);
  private storage: Storage = inject(Storage);
  brands$: Observable<Brand[]>;
  brandsRef: CollectionReference;

  constructor() {
    this.brandsRef = collection(this.firestore, 'brands')
    this.brands$ = collectionData(this.brandsRef) as Observable<Brand[]>;
    const storageRef = ref(this.storage);
  }
}
