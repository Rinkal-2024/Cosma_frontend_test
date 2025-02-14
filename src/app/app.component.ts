import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cosma-frontend';

  constructor() {
    if (!environment.production) {
      console.log('environment', environment.local ? 'local' : 'staging');
    }
  }
}
