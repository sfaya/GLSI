export class Student {

  id: number;
  fname: string;
  lname: string;
  phone: number;
  email: string;
  avatar: string;
  pswd: string;
  dob: Date;
  technologis: string[];

  constructor(id: number, f: string, l: string, p: number, e: string, a: string, pass: string, date: Date, techs: string[]) {
    this.id = id;
    this.fname = f;
    this.lname = l;
    this.phone = p;
    this.email = e;
    this.avatar = a;
    this.pswd = pass;
    this.dob = date;
    this.technologis = techs;


  }


}
