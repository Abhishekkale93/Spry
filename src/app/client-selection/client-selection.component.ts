import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-client-selection',
  templateUrl: './client-selection.component.html',
  styleUrls: ['./client-selection.component.scss']
})
export class ClientSelectionComponent {
  constructor(private themeService: ThemeService) {}

  onClientChange(client: string): void {
    this.themeService.setTheme(client);
  }
}
