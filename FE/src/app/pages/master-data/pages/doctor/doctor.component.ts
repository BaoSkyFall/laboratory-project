import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  data = {
    total: 0,
    list: []
  }
  constructor() { }

  ngOnInit(): void {
  }

}
