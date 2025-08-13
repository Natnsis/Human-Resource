import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-roles',
  imports: [MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './roles.html',
})
export class Roles {}
