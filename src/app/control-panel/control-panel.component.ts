import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  myColor: string;
  mydirColor = 'grey';
  textSize: number;
  selectedStyle: string;
  selectedTheme: string;
  imgUrl: string;

  darkTh = false;
  pinkTh = false;
  whiteTh = true;

  constructor() { }

  ngOnInit() {
  }

  changeTheme(choix: string) {
    if (choix === 'dark') {
      this.darkTh = true;
      this.whiteTh = false;
      this.pinkTh = false;
    } else if (choix === 'pink') {
      this.darkTh = false;
      this.whiteTh = false;
      this.pinkTh = true;
    } else {
      this.darkTh = false;
      this.whiteTh = true;
      this.pinkTh = false;
    }
  }

}

