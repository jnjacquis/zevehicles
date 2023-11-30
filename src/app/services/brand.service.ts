import { Injectable, inject, Signal } from '@angular/core';
import { Observable, from, of, combineLatest, lastValueFrom } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { Firestore, CollectionReference, collectionData, collection } from '@angular/fire/firestore';
import { Storage, StorageReference, ListResult, ref, listAll, getDownloadURL } from '@angular/fire/storage';

import { Brand } from "../domain/brand";

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private firestore: Firestore = inject(Firestore);
  private storage: Storage = inject(Storage);

  brands$: Observable<Brand[]>;

  constructor() {
    const brandsRef = collection(this.firestore, 'brands');
    this.brands$ = collectionData(brandsRef) as Observable<Brand[]>;
  }

}
