import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  setTheme(client: string): void {
    document.body.classList.remove('client-a-theme', 'client-b-theme', 'client-c-theme');
    switch (client) {
      case 'Client A':
        document.body.classList.add('client-a-theme');
        break;
      case 'Client B':
        document.body.classList.add('client-b-theme');
        break;
      case 'Client C':
        document.body.classList.add('client-c-theme');
        break;
    }
  }
}
