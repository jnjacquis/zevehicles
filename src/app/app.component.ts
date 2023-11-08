import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firestore: Firestore = inject(Firestore);

  title = 'ZEVehicles';

  models$: Observable<any[]>;

  constructor() {
    const aCollection = collection(this.firestore, 'models')
    this.models$ = collectionData(aCollection);
  }
}
