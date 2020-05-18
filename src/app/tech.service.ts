import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TechService {

  techs = ['T1', 'T2'];

  constructor() { }

  getTechs() {
    return this.techs;
  }
}
