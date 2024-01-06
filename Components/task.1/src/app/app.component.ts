import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  users = [
    { name: 'Mitko', age: true },
    { name: 'Pesho', age: true },
    { name: 'Mariika', age: false },
    { name: 'Katya', age: true },
  ];

  title = 'Article Site';
}
