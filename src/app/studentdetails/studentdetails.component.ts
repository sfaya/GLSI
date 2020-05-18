import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {


  selectedId: number;
  constructor(private activeRoute: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    //this.selectedId = parseInt(this.activeRoute.snapshot.paramMap.get('id'));
    this.activeRoute.paramMap.subscribe((params: ParamMap) => this.selectedId = parseInt(params.get('id')));
  }
  goPrevious() {

    let id = this.selectedId - 1;
    if (id > 0) {
      this.route.navigate(['studentdetails/', id]);
    }
  }

  goNext() {
    let id = this.selectedId + 1;
    //if(id < sudentsList.lengh){
    this.route.navigate(['studentdetails/', id]);
  }

}
