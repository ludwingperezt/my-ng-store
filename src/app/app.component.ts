import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store';
  items = ['ludwing', 'juan', 'homero'];

  addItem(): void {
    this.items.push('nuevo item');
  }

  deleteItem(index: number): void {
    this.items.splice(index, 1);
  }
}
