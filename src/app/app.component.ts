import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AuthenticationService } from "./services/authentication.service";
import { LoginComponent } from "./views/login/login.component";
import { RegisterComponent } from "./views/register/register.component";
import { User } from "./domain/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ZEVehicles';

  constructor() {}

}
