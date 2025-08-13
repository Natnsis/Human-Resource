import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CandidateTable } from './components/candidate-table/candidate-table';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CandidateTable],
  template: `
    <main>
      <app-candidate-table />
    </main>
  `,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('hr');
}
