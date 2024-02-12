import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { UserSessionComponent } from './views/user-session/user-session.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,MatButtonModule,MatListModule,MatSidenavModule,MatToolbarModule,UserSessionComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ZEVehicles';

  constructor() {}

}
