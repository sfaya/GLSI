import { Component, OnInit } from '@angular/core';
import { Student } from '../studentModel';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  control1 = false;
  control2 = true;
  couleur = 'blue';
  Students: any = [];
  /* Students: Student[] = [
     {
       id: 1,
       fname: 'Wajdi',
       lname: 'Makhlouf',
       phone: 123456,
       email: 'wajdi@tek-up.tn',
       avatar: '../assets/avatar.png',
       pswd: 'testetss',
       dob: new Date('12/03/1995'),
       technologis: ['tech1', 'tech2']
     },
     {
       id: 2,
       fname: 'Abdou Rahim',
       lname: 'Daouda',
       phone: 123456,
       email: 'rahim@tek-up.tn',
       avatar: '../assets/avatar.png',
       pswd: 'testetss',
       dob: new Date('12/03/1995'),
       technologis: ['tech1', 'tech2']
     },
     {
       id: 3,
       fname: 'Ali',
       lname: 'Chebi',
       phone: 123456,
       email: 'ali@tek-up.tn',
       avatar: '../assets/avatar.png',
       pswd: 'testetss',
       dob: new Date('12/03/1995'),
       technologis: ['tech1', 'tech2']
     }
   ];*/
  constructor(private route: Router, private studentService: StudentService) { }

  ngOnInit() {
    //  this.getProfiles();
  }

  addStudent() {
    this.route.navigate(['addStudent']);
  }

  showDetails(student) {
    let id = student.id;
    this.route.navigate(['studentdetails/', id]);
  }

  /*getProfiles() {
    this.studentService.getStudents().subscribe(
      (data) => {
        this.Students = data.body;
        console.log(data);
        console.log(typeof this.Students);
      },
      (error) => { alert('aucun profil!!'); }
    );
  }
*/
}
