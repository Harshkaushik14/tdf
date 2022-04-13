import { Component } from '@angular/core';
import { Users } from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title= "tdf";
  topics = [
    'Web Development',
    'Mobile App Development',
    'Competitive Progrmaing',
    'Data Structure & Algo',
    'Machine Learning',
    'Artificial Intelligence',
  ];

  topicHasError = true;
  userModel = new Users('' ,'kaushikharsh86@gmail.com', 3232324525 , 'default', 'morning' , true);

  validateTopic(value: any){
    if(value === 'default'){
this.topicHasError = true;
    }else{
      this.topicHasError = false;
    }

  }
}
