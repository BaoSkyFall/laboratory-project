import { Component, Input, OnInit } from '@angular/core';
import { CriteriaSetItem } from 'src/app/pages/master-data/pages/criteria-set/criteria-set.model';

@Component({
  selector: 'app-select-set-criteria',
  templateUrl: './select-set-criteria.component.html',
  styleUrls: ['./select-set-criteria.component.scss']
})
export class SelectSetCriteriaComponent implements OnInit {
  @Input() listCriteriaSet: CriteriaSetItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
