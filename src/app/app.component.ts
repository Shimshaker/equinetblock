import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'equinetblock';

  constructor(private _router: Router) {}

  isOnPage(path: string): boolean {
    return this._router.url.startsWith(path);
  }
}
