import { Injectable, inject, Signal } from '@angular/core';
import { Observable, from, of, combineLatest } from 'rxjs';
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

  //private brandsRef: CollectionReference = collection(this.firestore, 'brands');
  brands$!: Observable<Brand[]>;
  //brands: Signal<Brand[]>;

  //private brandLogoUrls$ = from(this.getBrandsLogoUrl());



  constructor() {
    const brandsRef = collection(this.firestore, 'brands');
    const brands$ = collectionData(brandsRef) as Observable<Brand[]>;
    //this.brands = toSignal(this.brands$, {initialValue: [] as Brand[]});

    const manufsRef = ref(this.storage, 'manufs');
    const brandLogoUrls$ = from(listAll(manufsRef));

    const combs$ = combineLatest([
      brands$,
      brandLogoUrls$
    ]);
    //const combs = await this.combine(brands$, brandLogoUrls$);

    let data: Brand[] = [];

    combs$.subscribe(async results => {
      data = await this.mapBrandUrl(results[0], results[1].items);
      
    });

    this.brands$ = of(data);
  }

  async combine(brands: Observable<Brand[]>, brandLogoUrls: Observable<ListResult>) {
    return combineLatest([
      brands,
      brandLogoUrls
    ]);
  }

  async mapBrandUrl(brands: Brand[], storageRefs: StorageReference[]) {
    // Get download Url for all storage refs
    let logoUrls$ = this.getLogoUrls(storageRefs);
    let logoUrls: string[] = await logoUrls$;

    // Loop on brands to map the corresponding storage ref containing the logo url
    brands.forEach(brand => {
      const brandNameLower = brand.name.toLowerCase() + '.png';

      let match = logoUrls.find(logoUrl => logoUrl.indexOf(brandNameLower) != -1);
      if (match) {
        brand.url = match as string;
      }
    });
    brands.forEach(brand => console.log('Url: ' + brand.url));
    return brands;
  }

  getLogoUrls(storageRefs: StorageReference[]) {
    let urls$: Promise<string>[] = [];
    storageRefs.forEach(ref => {
      urls$.push(getDownloadURL(ref));
    })
    return Promise.all(urls$);
  }
}
