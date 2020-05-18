import { Component, OnInit } from '@angular/core';
import { Student } from '../studentModel';
import { StudentService } from '../student.service';
import { NgForm, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  addedprofiles;
  profils: Student[];
  profile: Student = (new Student(1, 'test', 'test', 45555, 'test', 'test', 'aaaa', new Date(), []));
  Students: Student[] = [
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
  ];

  myReactiveForm = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    Adress: new FormGroup({
      state: new FormControl(''),
      postalCode: new FormControl('')
    })

  });

  constructor(private studentService: StudentService) { }

  ngOnInit() {

  }

  saveProfile(s: Student) {
    this.studentService.saveProfileToServer(s);
  }

  saveProfiles() {
    this.studentService.saveProfilesToServer(this.Students);
  }

  getProfiles() {
    this.studentService.getProfilesFromServer();
    this.addedprofiles = this.studentService.profiles;
    console.log(this.addedprofiles);
    this.profils = Object.values(this.addedprofiles);

  }

  onSubmit(F: NgForm) {
    console.log(F);
    let name = F.value.fname;
    console.log(name);
  }
}
