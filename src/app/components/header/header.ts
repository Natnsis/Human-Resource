import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatButtonModule, RouterLink],
  templateUrl: './header.html',
})
export class Header {}
