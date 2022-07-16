import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'activeStatus',
  templateUrl: './activeStatus.component.html',
  styleUrls: ['./activeStatus.component.scss']
})
export class ActiveStatusComponent implements OnInit {

  @Input() status: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
