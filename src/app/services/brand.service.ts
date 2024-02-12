import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

import { Brand } from "../domain/brand";

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private firestore: Firestore = inject(Firestore);

  brands$: Observable<Brand[]>;

  constructor() {
    const brandsRef = collection(this.firestore, 'brands');
    this.brands$ = collectionData(brandsRef) as Observable<Brand[]>;
  }

  getBrands(): Observable<Brand[]> {
    // Remove pipe and delay for production environment 
    return this.brands$;
  }
}
