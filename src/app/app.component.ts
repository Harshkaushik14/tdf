import { Component } from '@angular/core';
import { Users } from './users';

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
  userModel = new Users('Harsh' ,'kaushikharsh86@gmail.com', 3232324525 , '', 'morning' , true);
}
