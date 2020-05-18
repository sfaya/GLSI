import { Component } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  pereVar = 'Je suis le père';
  color = 'blue';
  mark = 'yellow';
  cond = true;
  collection = [1, 3, 34, 56, 54, 100];
  myX: number;



  pereWork(vare: string) {
    alert('fonction lanceée via fils ' + vare);
    this.cond = false;

  }
}
