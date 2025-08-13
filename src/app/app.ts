import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CandidateTable } from './components/candidate-table/candidate-table';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CandidateTable, Header],
  template: `
    <main class="root-container">
      <app-header />
      <router-outlet />
    </main>
  `,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('hr');
}
