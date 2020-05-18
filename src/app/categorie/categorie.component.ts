import { Component, OnInit } from '@angular/core';
import { Student } from '../studentModel';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']

})
export class CategorieComponent implements OnInit {
  e: number;
  constructor() {
  }

  ngOnInit() {
  }

}
