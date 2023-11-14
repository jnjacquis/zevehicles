import { Injectable, inject } from '@angular/core';
import { Observable, config } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Firestore, collection, collectionData, addDoc, CollectionReference, DocumentReference } from '@angular/fire/firestore';
import { Storage, ref, getDownloadURL, listAll, ListResult, StorageReference } from '@angular/fire/storage';

import { Brand } from "../domain/brand";

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private firestore: Firestore = inject(Firestore);
  private storage: Storage = inject(Storage);
  brands$: Observable<Brand[]>;
  brandsRef: CollectionReference;

  constructor(private http: HttpClient) {
    this.brandsRef = collection(this.firestore, 'brands')
    this.brands$ = collectionData(this.brandsRef) as Observable<Brand[]>;

    this.brands$.subscribe(brands => this.getBrandsLogo(brands));
  }

  getBrands(): Observable<Brand[]> {
    return this.brands$;
  }

  getBrandsLogo(brands: Brand[]) {
    brands.forEach(brand => {
      console.log('Brand name: ' + brand.name + ' - Logo url: ' + brand.logoUrl);
    });

    const storageResult = this.getAllStorageFilesInManufacturers();

    let urls: Promise<string>[] = [];
    let storageItems: StorageReference[] = [];
    storageResult.then((res) => {
      storageItems = res.items
      console.log(storageItems);

      // Loop on brands name to get the correspon
      brands.forEach(brand => {
        storageItems.filter((item) => {
          //console.log('Compare ' + brand.logoUrl + ' and ' + item.fullPath);
          //item.fullPath == brand.logoUrl;
          if (brand.logoUrl == item.fullPath) {
            // Replace the logo Url with the real one in Firebase storage
            getDownloadURL(item).then((url) => {
              //console.log('Real Url: ' + url);
              brand.logoUrl = url;
              console.log('Brand url has been reassigned with ' + brand.logoUrl);
            });
          }
        })
      });
    });




    /*storageItems.filterforEach(storageItem => {
      storageItem.
      urls.getDownloadURL(storageItem);
    });*/
  }

  downloadImage(url: string) {
    this.http.get(url);
  }

  matchBrandName(name: string, url$: Promise<string>) {
    ///url$.
  }

  getAllStorageFilesInManufacturers(): Promise<ListResult> {
    console.log('Get all storage files in /manufs')
    const manufacturersLogoRef = ref(this.storage, 'manufs');
    //const manufLogos: Promise<ListResult> = 
    return listAll(manufacturersLogoRef);
    /*let storerefs: StorageReference[] = [];
    manufLogos
      .then((res) => {
        storerefs = res.items;
        storerefs.forEach(storeref => {
          getDownloadURL(storeref).then(downloadUrl => {
            console.log(downloadUrl);

          });
        });
      });
    */
  }

  downloadAll() {
    console.log('Start downloading files in storage')
    const storageRef = ref(this.storage);
    console.log('Storage ref: ' + storageRef);
    const manufacturersLogoRef = ref(storageRef, 'manufs');
    listAll(manufacturersLogoRef)
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
          console.log('Folder ref: ' + folderRef);
        });
        res.items.forEach((itemRef) => {
          console.log('Item ref: ' + itemRef);
          // Get the download URL
          getDownloadURL(itemRef)
            .then((url) => {
              //console.log(url);
              this.http.get(url)
                .subscribe((res) => {
                  console.log(res);
                })
            })
            .catch((error) => {
              switch (error.code) {
                case 'storage/object-not-found':
                  console.log("Error: file not found");
                  break;
                case 'storage/unauthorized':
                  console.log("Error: unauthorized");
                  break;
                case 'storage/canceled':
                  console.log("Error: download canceled");
                  break;
                case 'storage/unknown':
                  console.log("Error: storage unknown");
                  break;
              }
            });
        })
      });
  }



}
