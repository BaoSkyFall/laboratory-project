import { Component, Input, OnInit } from '@angular/core';
import { CriteriaItem } from 'src/app/pages/master-data/pages/criteria/criteria.model';

@Component({
  selector: 'app-select-criteria',
  templateUrl: './select-criteria.component.html',
  styleUrls: ['./select-criteria.component.scss']
})
export class SelectCriteriaComponent implements OnInit {
  @Input() listCriteria: CriteriaItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
