import { Stock } from './interfaces/stock';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'avanan';
  data: Stock[] = [];

  onNewStock(event: Stock): void {
    this.data = this.data.concat(event);
  }
}
