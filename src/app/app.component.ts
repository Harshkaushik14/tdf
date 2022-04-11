import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  topics = [
    'Web Development',
    'Mobile App Development',
    'Competitive Progrmaing',
    'Data Structure & Algo',
    'Machine Learning',
    'Artificial Intelligence',
  ];
}
