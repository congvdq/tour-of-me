import { Component, OnInit } from '@angular/core';
import { Mees } from '../ClassMees';

@Component({
  selector: 'app-mees',
  templateUrl: './mees.component.html',
  styleUrls: ['./mees.component.css']
})
export class MeesComponent implements OnInit {

  me : Mees = {
    id: 1,
    name: 'QuangCong'
  };

  constructor() { }

  ngOnInit() {
  }

}
