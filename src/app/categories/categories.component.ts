import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../studentModel';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  myVar: number;
  list = [];
  @Input() filsVar = 'Je suis le fils';

  @Output() filsEvent = new EventEmitter();

  filsVar2 = 'Salut Papa';
  constructor() {



  }

  ngOnInit() {

  }

  EnvoieAuPere() {
    this.filsEvent.emit(this.filsVar2);
  }

}
